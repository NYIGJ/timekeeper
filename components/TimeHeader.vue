<template>
  <header
    class="grid grid-cols-3 w-full font-semibold h-10 m-auto relative rounded-bl-full rounded-br-full px-4 z-10"
    :class="colorClasses"
  >
    <div class="text-center pt-2 pb-1 border-r border-gray-600 select-none">
      {{ $store.getters.gameMonth }}
      {{ Math.floor($store.state.gameDate / 12) }}
    </div>

    <div
      class="text-center pt-2 pb-1 border-r border-gray-600 relative select-none"
    >
      <progress
        class="absolute top-0 left-0 right-0 h-1 w-full"
        :max="$store.state.playerAgeMax"
        :value="$store.state.playerAge"
      />
      {{ $store.getters.ageText }}
    </div>

    <div
      class="text-center pt-2 pb-1 select-none"
      v-text="$store.getters.ageMaxText"
    />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tabs', ['activeTab']),
    colorClasses() {
      const { lightColor, darkColor } = this.activeTab

      return `bg-${darkColor} text-${lightColor}`
    },
  },
}
</script>

<style scoped>
header {
  min-width: 18rem;
  transition: background-color 2000ms, color 2000ms;
  font-family: 'Roboto Slab', serif;
}
@media (min-width: 768px) {
  header {
    width: 32rem;
  }
}
/* progress for all browsers */
progress::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
}
progress {
  background-color: rgba(255, 255, 255, 0.1);
  color: currentColor;
}
progress::-webkit-progress-value {
  background-color: currentColor;
}
progress::-moz-progress-bar {
  background-color: currentColor;
}
</style>
