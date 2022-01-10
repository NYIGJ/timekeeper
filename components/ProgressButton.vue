<template>
  <button
    class="relative flex flex-col pt-2 pb-3 px-3 border rounded-lg overflow-hidden"
    :class="[colorClasses, clickable ? 'cursor-pointer' : 'cursor-default']"
    :disable="!clickable"
  >
    <progress
      v-if="!clickable"
      class="absolute top-0 left-0 right-0 h-1 w-full"
      :max="max"
      :value="value"
    />

    <span class="absolute top-3 right-3 font-semibold text-sm">
      {{ value }} / {{ max }}
      <span class="fas fa-hourglass-half" />
    </span>

    <span
      class="w-full text-left lg:text-center text-lg md:text-xl font-semibold"
      v-text="label"
    />

    <p class="w-full text-left" v-text="description" />
  </button>
</template>

<script>
import Decimal from 'break_infinity.js'

export default {
  props: {
    label: { type: String, required: true },
    description: { type: String, default: null },
    max: { type: Number, required: true },
    value: { type: [Number, Decimal], required: true },
    unit: { type: String, default: null },
  },
  computed: {
    clickable() {
      return this.value >= this.max
    },
    colorClasses() {
      const { lightColor, darkColor } = this.$store.getters.activeTab

      return this.clickable
        ? `bg-${darkColor} text-${lightColor}`
        : `bg-${lightColor} text-${darkColor}`
    },
  },
}
</script>

<style scoped>
button {
  border-color: currentColor;
}
/* progress background for all browsers */
progress::-webkit-progress-bar {
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
}
progress {
  background-color: rgba(0, 0, 0, 0.1);
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
