<template>
  <progress-button
    :label="mission.name"
    :description="mission.description"
    :max="max"
    :value="value"
    @click="complete"
  />
</template>

<script>
export default {
  props: {
    mission: { type: Object, required: true },
  },
  computed: {
    value() {
      return 'cost' in this.mission.completionCriteria
        ? this.$store.state.currency
        : this.$store.state.playerAge
    },
    max() {
      return 'cost' in this.mission.completionCriteria
        ? this.mission.completionCriteria.cost
        : this.$store.state.playerAgeMax
    },
  },
  methods: {
    complete() {
      this.$store.commit('completeMission', this.mission)
    },
  },
}
</script>
