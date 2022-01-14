<template>
  <div class="md:pt-4 pt-2 pb-16">
    <div
      class="mana-bar relative mx-auto rounded-full overflow-hidden border-2"
      :class="`text-${$store.getters.activeTab.color} border-${$store.getters.activeTab.darkColor}`"
    >
      <progress
        class="absolute top-0 right-0 left-0 w-full h-full"
        :max="$store.state.manaMax"
        :value="$store.state.mana"
      />
      <span
        class="relative block pt-1 pb-2 text-center text-lg font-semibold"
        :class="`text-${$store.getters.activeTab.darkColor}`"
      >
        <span class="mr-1"
          >{{ $store.state.mana }} / {{ $store.state.manaMax }}</span
        >
        <span class="text-base pt-1 ml-2 fas fa-star" />
      </span>
    </div>

    <p class="text-lg text-center py-2 border-b-2 border-current">
      Tapping to gain
      <b><span class="fas fa-hourglass-half text-base" /> Spare Time</b>
      <br class="md:hidden" />
      now also gains
      <b><span class="fas fa-star text-base" /> Mana</b>
    </p>
  </div>
</template>

<style scoped>
.mana-bar {
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
