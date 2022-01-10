<template>
  <nuxt-link
    class="tab flex-grow text-center text-2xl font-semibold py-1 cursor-pointer"
    :class="[colorClasses, index < 5 && 'mr-px']"
    :to="tabData.route"
  >
    <template v-if="!tabData.locked">
      <span :class="tabData.label" />
    </template>
    <template v-if="tabData.locked">
      <span class="fas fa-lock" />
    </template>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    tabData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    active() {
      return this.$route.path === this.tabData.route
    },
    colorClasses() {
      const { lightColor, darkColor } = this.tabData

      return this.active
        ? `bg-${lightColor} text-${darkColor}`
        : `bg-${darkColor} text-${lightColor}`
    },
  },
}
</script>
