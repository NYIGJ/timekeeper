<template>
  <div class="pb-20">
    <responsive-grid class="mb-4">
      <progress-button
        v-for="(process, index) in uncreated"
        :key="index"
        :label="process.instrument"
        :max="process.cost"
        :value="$store.state.currency"
        @click="create(process)"
      />
    </responsive-grid>

    <responsive-grid min="2" mid="3" max="5">
      <timekeeping-instrument
        v-for="(process, index) in created"
        :key="index"
        :process="process"
      />
    </responsive-grid>
  </div>
</template>

<script>
export default {
  computed: {
    unlocked() {
      return this.$store.state.processes.filter((p) => p.visited)
    },
    created() {
      return this.unlocked.filter((p) => p.created)
    },
    uncreated() {
      return this.unlocked.filter((p) => !p.created)
    },
  },
  methods: {
    create(process) {
      this.$store.commit('createInstrument', process.instrument)
      this.$store.commit('spendCurrency', process.cost)
      if (process.instrument === 'Mechanical Clock') {
        this.$store.commit('unlockTab', 'Apprentices')
        this.$store.commit('unlockTab', 'Missions')
      }
    },
  },
}
</script>
