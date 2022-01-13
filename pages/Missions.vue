<template>
  <div class="missions grid">
    <responsive-grid v-if="incomplete.length">
      <mission-button
        v-for="(mission, index) in incomplete"
        :key="index"
        :mission="mission"
        @click="complete(mission)"
      />
    </responsive-grid>

    <div v-else>
      <h3 class="text-center">No Missions Currently Available</h3>
    </div>

    <template v-if="completed.length">
      <h2 class="pt-4 pb-2 md:pt-8 md:pb-4 font-semibold text-center text-xl">
        Completed Missions
      </h2>
      <responsive-grid min="1" mid="3" max="6">
        <completed-mission
          v-for="(mission, index) in completed"
          :key="index"
          :mission="mission"
        />
      </responsive-grid>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    unlocked() {
      return this.$store.state.missions.filter(({ unlockCriteria }) => {
        if (unlockCriteria.unit === 'instruments') {
          return unlockCriteria.value <= this.$store.getters.instruments
        } else if (unlockCriteria.unit === 'apprenticeLevels') {
          return unlockCriteria.value <= this.$store.getters.apprenticeLevels
        } else if (unlockCriteria.unit === 'missionsCompleted') {
          return unlockCriteria.value.every((name) =>
            this.$store.getters.missionIsCompleted(name)
          )
        } else if (unlockCriteria.unit === 'timeJumpsBackwards') {
          return unlockCriteria.value <= this.$store.state.timeJumpsBackwards
        } else {
          return false
        }
      })
    },
    incomplete() {
      return this.unlocked.filter((m) => !m.complete)
    },
    completed() {
      return this.unlocked.filter((m) => m.complete)
    },
  },
  methods: {
    complete(mission) {
      this.$store.commit('completeMission', mission.name)

      if (mission.completionCriteria.unit === 'spareTime') {
        this.$store.commit('spendCurrency', mission.completionCriteria.value)
      }

      if (mission.name === 'Study Time Magic') {
        this.$store.commit('unlockTab', 'Time Magic')
      }

      if (mission.name === 'Create the Time Machine') {
        this.$store.commit('unlockTab', 'Time Machine')
      }

      if (mission.name === 'Time to Cheat Death') {
        this.$store.commit('unlockTab', 'Wisdom')
        this.$store.commit('setPlayerAge', { year: 30 })
        this.$store.commit('timeTravel', { year: 1400, era: 'Early Modern' })
        this.$store.commit('tickLifetime')
      }
    },
  },
}
</script>

<style scoped>
.missions {
  grid-template-rows: minmax(0, 1fr) auto auto;
}
</style>
