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
    <div
      class="frame pt-5 m-4"
      :class="`text-${$store.getters.activeTab.darkColor}`"
    >
      <atlantean-clock-image v-if="process.instrument === 'Atlantean Clock'" />
      <sundail-image v-if="process.instrument === 'Sundial'" />
      <star-chart-image v-if="process.instrument === 'Star Chart'" />
      <incense-clock-image v-if="process.instrument === 'Incense Clock'" />
      <astrolabe-image v-if="process.instrument === 'Astrolabe'" />
      <hourglass-image v-if="process.instrument === 'Hourglass'" />

      <mechanical-clock-image
        v-if="process.instrument === 'Mechanical Clock'"
      />

      <pocket-watch-image v-if="process.instrument === 'Pocket Watch'" />
      <digital-clock-image v-if="process.instrument === 'Electric Clock'" />
      <atomic-clock-image v-if="process.instrument === 'Atomic Clock'" />
      <quantum-clock-image v-if="process.instrument === 'Quantum Clock'" />
      <pulsar-clock-image v-if="process.instrument === 'Pulsar Clock'" />
      <non-euclidian-clock-image
        v-if="process.instrument === 'Non-Euclidian Clock'"
      />
    </div>
    <p
      class="text-center text-sm font-semibold h-5 border-t"
      :class="`border-${$store.getters.activeTab.darkColor}`"
    >
      {{ process.instrument }}
    </p>
  </div>
</template>

<script>
import AstrolabeImage from './svg/AstrolabeImage.vue'
import AtlanteanClockImage from './svg/AtlanteanClockImage.vue'
import AtomicClockImage from './svg/AtomicClockImage.vue'
import DigitalClockImage from './svg/DigitalClockImage.vue'
import HourglassImage from './svg/HourglassImage.vue'
import IncenseClockImage from './svg/IncenseClockImage.vue'
import MechanicalClockImage from './svg/MechanicalClockImage.vue'
import NonEuclidianClockImage from './svg/NonEuclidianClockImage.vue'
import PocketWatchImage from './svg/PocketWatchImage.vue'
import PulsarClockImage from './svg/PulsarClockImage.vue'
import QuantumClockImage from './svg/QuantumClockImage.vue'
import StarChartImage from './svg/StarChartImage.vue'
import SundailImage from './svg/SundailImage.vue'

export default {
  components: {
    HourglassImage,
    MechanicalClockImage,
    PocketWatchImage,
    IncenseClockImage,
    PulsarClockImage,
    AstrolabeImage,
    AtomicClockImage,
    StarChartImage,
    SundailImage,
    DigitalClockImage,
    QuantumClockImage,
    AtlanteanClockImage,
    NonEuclidianClockImage,
  },
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
.frame >>> svg {
  fill: currentColor;
  stroke: currentColor;
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
