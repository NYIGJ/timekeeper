<template>
  <progress-button
    :label="mission.name"
    :description="mission.description"
    :max="max"
    :value="value"
    :unit="mission.completionCriteria.unit"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  props: {
    mission: { type: Object, required: true },
  },
  computed: {
    value() {
      const { unit } = this.mission.completionCriteria

      if (unit === 'maxAge') {
        return this.$store.state.playerAge
      } else if (unit === 'spareTime') {
        return this.$store.state.currency
      } else {
        //  (unit === 'apprenticeLevels')
        return this.$store.getters.apprenticeLevels
      }
    },
    max() {
      return this.mission.completionCriteria.unit === 'maxAge'
        ? this.$store.state.playerAgeMax
        : this.mission.completionCriteria.value
    },
  },
}
</script>
