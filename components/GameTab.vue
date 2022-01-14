<template>
  <nuxt-link
    class="text-center text-2xl py-1 cursor-pointer rounded-t-lg"
    :class="[colorClasses, { active }]"
    :to="tabData.route"
    :event="!tabData.unlocked ? '' : 'click'"
  >
    <span v-if="tabData.unlocked" :class="tabData.label" />
    <span v-else class="fas fa-lock" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    tabData: { type: Object, required: true },
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

<style scoped>
.active {
  box-shadow: 3px 28px 9px -5px #000, 3px -1px 9px -4px #000;
}
</style>
