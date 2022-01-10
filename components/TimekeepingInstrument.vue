<template>
  <div
    class="relative rounded-lg overflow-hidden border"
    :class="`border-${$store.getters.activeTab.darkColor}`"
  >
    <div
      class="progress-wrapper absolute top-0 left-0 right-0 w-full h-5"
      :class="`text-${$store.getters.activeTab.color}`"
    >
      <progress
        class="w-full h-5 border-b"
        :class="`border-${$store.getters.activeTab.darkColor}`"
        :max="process.completionRequired"
        :value="process.completion"
      />
      <span
        class="absolute top-0 left-0 right-0 w-full text-center text-sm h-5"
        :class="`text-${$store.getters.activeTab.darkColor}`"
      >
        {{ reward }} <span class="fas fa-hourglass-half" /> every
        {{ interval }} seconds
      </span>
    </div>
    <img
      src="https://freesvg.org/img/johnny_automatic_hourglass.png"
      class="pt-8 pb-3"
    />
    <p
      class="text-center text-sm font-semibold h-5 border-t"
      :class="`border-${$store.getters.activeTab.darkColor}`"
    >
      {{ process.instrument }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    process: { type: Object, required: true },
  },
  computed: {
    reward() {
      return this.process.baseReward * (1 + this.process.workerLevel)
    },
    interval() {
      return this.process.completionRequired / 10 /* in seconds */
    },
  },
}
</script>

<style scoped>
img {
  aspect-ratio: 1/1;
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
