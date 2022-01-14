<template>
  <div class="md:pt-4 pt-2 pb-16">
    <div
      class="energy-bar relative mx-auto rounded-full overflow-hidden border-2"
      :class="`text-${$store.getters.activeTab.color} border-${$store.getters.activeTab.darkColor}`"
    >
      <progress
        class="absolute top-0 right-0 left-0 w-full h-full"
        :max="$store.state.energyMax"
        :value="$store.state.energy"
      />
      <span
        class="relative block pt-1 pb-2 text-center text-lg font-semibold"
        :class="`text-${$store.getters.activeTab.darkColor}`"
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
        :disabled="!isEnabled(process)"
        @click="travelToEra(process)"
      />
    </responsive-grid>
  </div>
</template>

<script>
export default {
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

        return (
          processIndex === nextEarliestEraIndex ||
          processIndex === nextLatestEraIndex
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
      this.$store.commit('spendEnergy', process.travelCost)
      this.$store.commit('timeTravel', {
        era: process.unlockEra,
        month: process.minDateUnlocked,
      })
      if (process.unlockEra === 'Middle Ages') {
        // do era-specific things
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
