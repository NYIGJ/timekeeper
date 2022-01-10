<template>
  <header
    class="grid flex-row font-semibold h-10 m-auto md:relative rounded-bl-full rounded-br-full px-4"
    :class="colorClasses"
  >
    <div class="text-center pt-2 pb-1 flex-grow border-r border-gray-600">
      {{ $store.getters.gameMonth }} {{ $store.state.gameDate.year }}
    </div>

    <div
      class="text-center pt-2 pb-1 flex-grow border-r border-gray-600 relative"
    >
      <progress
        class="absolute top-0 left-0 right-0 h-1 w-full"
        :max="
          $store.state.playerAgeMax.year * 12 + $store.state.playerAgeMax.month
        "
        :value="$store.state.playerAge.year * 12 + $store.state.playerAge.month"
      />
      {{ $store.state.playerAge.year }}y{{ $store.state.playerAge.month }}m
    </div>

    <div class="text-center pt-2 pb-1 flex-grow">
      {{ $store.state.playerAgeMax.year }}y{{
        $store.state.playerAgeMax.month
      }}m max
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    colorClasses() {
      const { lightColor, darkColor } = this.$store.getters.activeTab

      return `bg-${darkColor} text-${lightColor}`
    },
  },
}
</script>

<style scoped>
header {
  grid-template-columns: 1fr 1fr 1fr;
  min-width: 18rem;
  width: 100%;
}
@media (min-width: 768px) {
  header {
    width: 32rem;
  }
}
/* progress background for all browsers */
progress::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
}
progress {
  background-color: rgba(255, 255, 255, 0.1);
}
/* progress value for all browsers */
progress::-webkit-progress-value {
  background-color: currentColor;
}
progress::-moz-progress-bar {
  background-color: currentColor;
}
progress {
  color: currentColor;
}
</style>
