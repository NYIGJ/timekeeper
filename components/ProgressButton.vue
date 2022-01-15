<template>
  <button
    class="relative flex flex-col pt-2 pb-3 px-3 border rounded-lg overflow-hidden border-current"
    :class="[
      colorClasses,
      {
        disabled,
        [`text-${$store.getters.activeTab.darkColor}`]: disabled,
        'cursor-pointer': clickable,
        'cursor-default': !clickable,
      },
    ]"
    :disable="!clickable"
    @click="clickable && $emit('click')"
  >
    <progress
      v-if="!clickable"
      class="absolute top-0 left-0 right-0 h-1 w-full"
      :class="{ hidden: disabled }"
      :max="max"
      :value="cappedValue"
    />

    <span
      class="absolute top-3 right-3 font-semibold text-sm"
      :class="{ hidden: disabled }"
    >
      <span v-if="unit === 'apprenticeLevels'">L</span>{{ cappedValueText }}
      /
      <span v-if="unit === 'apprenticeLevels'">L</span>{{ maxText }}
      <span v-if="unit === 'spareTime'" class="fas fa-hourglass-half" />
      <span v-if="unit === 'energy'" class="fas fa-bolt" />
    </span>

    <span
      class="w-full text-left text-lg lg:text-xl font-semibold"
      v-text="label"
    />

    <p class="w-full text-left" v-text="description" />

    <div v-if="current && next" class="text-sm m-auto">
      <span>Current: {{ current }}</span>
      <span class="fas fa-arrow-right mx-2" />
      <span>Next: {{ next }}</span>
    </div>
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
    unit: { type: String, default: 'spareTime' },
    current: { type: [Number, String], default: null },
    next: { type: [Number, String], default: null },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    cappedValue() {
      return this.value > this.max ? this.max : this.value
    },
    cappedValueText() {
      return this.unit === 'maxAge'
        ? this.$store.getters.ageText
        : this.$store.getters.suffixedDecimalText(this.cappedValue)
    },
    maxText() {
      return this.unit === 'maxAge'
        ? this.$store.getters.ageMaxText
        : this.$store.getters.suffixedDecimalText(this.max)
    },
    clickable() {
      return !this.disabled && this.value >= this.max
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
.disabled {
  background-color: rgba(0, 0, 0, 0.1);
}
.clickable {
  box-shadow: 0px 4px 8px -3px var(--dark-color);
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
