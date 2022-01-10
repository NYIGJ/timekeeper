<template>
  <div
    class="grid gap-4"
    :class="`grid-cols-${min} md:grid-cols-${mid} 2xl:grid-cols-${max}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    min: { type: [Number, String], default: 1 },
    mid: { type: [Number, String], default: 2 },
    max: { type: [Number, String], default: 3 },
  },
}
</script>
