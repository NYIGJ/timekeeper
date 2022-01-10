<template>
  <div>
    <responsive-grid class="mb-4">
      <progress-button
        v-for="(process, index) in uncreated"
        :key="index"
        :label="process.instrument"
        :max="process.cost"
        :value="$store.state.currency"
        @click="create(process.instrument)"
      />
    </responsive-grid>

    <responsive-grid min="2" mid="4" max="6">
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
    created() {
      return this.$store.state.processes.filter((p) => p.created)
    },
    uncreated() {
      return this.$store.state.processes.filter((p) => !p.created)
    },
  },
  methods: {
    create(instrument) {
      this.$store.commit('createInstrument', instrument)
    },
  },
}
</script>
