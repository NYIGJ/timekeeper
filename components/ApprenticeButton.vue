<template>
  <progress-button
    :label="label"
    :description="description"
    :max="process.nextWorkerCost"
    :value="$store.state.currency"
    :current="current"
    :next="next"
    :disabled="$store.state.gameStopped"
    @click="levelUp"
  />
</template>

<script>
export default {
  props: {
    process: { type: Object, required: true },
  },
  computed: {
    label() {
      return this.process.workerLevel > 0
        ? `L${this.process.workerLevel} ${this.process.worker}`
        : `Hire ${this.process.worker}`
    },
    description() {
      return this.process.workerLevel > 0
        ? `Multiplies spare time gained from ${this.process.instrument}s.`
        : `Use your spare time to hire an apprentice ${this.process.worker} who can help you with ${this.process.instrument}s.`
    },
    current() {
      return this.process.workerLevel > 0
        ? `${1 + this.process.workerLevel}x`
        : null
    },
    next() {
      return this.process.workerLevel > 0
        ? `${2 + this.process.workerLevel}x`
        : null
    },
  },
  methods: {
    levelUp() {
      this.$store.commit('levelUpApprentice', this.process)
    },
  },
}
</script>
