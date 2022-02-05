<template>
  <div class="md:pt-4 pt-2 pb-20">
    <div
      class="energy-bar relative mx-auto rounded-full overflow-hidden border-2"
      :class="`text-${activeTab.color} border-${activeTab.darkColor}`"
    >
      <progress
        class="absolute top-0 right-0 left-0 w-full h-full"
        :max="$store.state.energyMax"
        :value="$store.state.energy"
      />
      <span
        class="relative block pt-1 pb-2 text-center text-lg font-semibold"
        :class="`text-${activeTab.darkColor}`"
      >
        <span class="mr-1"
          >{{ $store.state.energy }} / {{ $store.state.energyMax }}</span
        >
        <span class="text-base pt-1 ml-2 fas fa-bolt" />
      </span>
    </div>

    <p class="text-lg text-center py-2 border-b-2 border-current">
      <b><span class="fas fa-bolt text-base" /> Energy</b>
      is generated over time
    </p>

    <h2 class="text-xl font-semibold text-center pt-8">Upgrades</h2>

    <responsive-grid class="pt-2 md:pt-4">
      <max-energy-upgrade-button />
    </responsive-grid>

    <h2 class="text-xl font-semibold text-center pt-8">Time Travel</h2>

    <responsive-grid class="pt-2 md:pt-4">
      <progress-button
        v-for="process in $store.state.processes"
        :key="process.instrument"
        :label="getLabel(process)"
        :max="process.travelCost"
        :value="$store.state.energy"
        unit="energy"
        :disabled="$store.state.gameStopped || !isEnabled(process)"
        @click="travelToEra(process)"
      />
    </responsive-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tabs', ['activeTab']),
  },
  methods: {
    getLabel(process) {
      if (process.unlockEra === this.$store.state.gameEra) {
        return process.unlockEra + ' (You Are Here)'
      } else if (this.isEnabled(process)) {
        return process.unlockEra
      } else {
        return '???'
      }
    },
    isEnabled(process) {
      const isCurrentEra = process.unlockEra === this.$store.state.gameEra

      if (isCurrentEra) {
        return false
      } else if (process.visited) {
        return true
      } else {
        const processes = this.$store.state.processes
        const processIndex = processes.findIndex(
          (p) => p.unlockEra === process.unlockEra
        )

        const earliestEraIndex = processes.findIndex((p) => p.visited)
        const nextEarliestEraIndex = earliestEraIndex - 1

        const latestEraIndex = processes.map((p) => p.visited).lastIndexOf(true)
        const nextLatestEraIndex = latestEraIndex + 1

        const middleAges = this.$store.state.processes.find(
          (p) => p.unlockEra === 'Middle Ages'
        )

        return (
          processIndex === nextEarliestEraIndex ||
          (middleAges.visited && processIndex === nextLatestEraIndex)
        )
      }
    },
    doAction(action) {
      this.$store.commit('spendEnergy', action.cost)
      if (action.name === 'Activate!') {
        // do action-specific things
      }
    },
    travelToEra(process) {
      const hadBeenVisited = process.visited // save this before we time travel

      this.$store.commit('spendEnergy', process.travelCost)
      this.$store.commit('timeTravel', {
        era: process.unlockEra,
        month: process.minDateUnlocked,
      })

      if (process.unlockEra === 'Middle Ages' && !hadBeenVisited) {
        this.$nextTick(() => {
          const message =
            'Congratulations! ' +
            "You've successfully traveled through time and landed in the year 1100" +
            '... though it was rather hard on your body.'

          this.$store.commit('openModal', message)
        })
      }
    },
  },
}
</script>

<style scoped>
.energy-bar {
  width: 75%;
}
/* progress bars for all browsers */
progress::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
}
progress {
  color: currentColor;
  background-color: rgba(255, 255, 255, 0.1);
}
progress::-webkit-progress-value {
  background-color: currentColor;
}
progress::-moz-progress-bar {
  background-color: currentColor;
}
</style>
