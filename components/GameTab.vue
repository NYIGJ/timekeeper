<template>
  <div
    class="tab flex-grow text-center text-2xl font-semibold py-1 cursor-pointer"
    :class="[colorClasses, index < 5 && 'mr-px']"
    @click="$store.commit('setActiveTab', index)"
  >
    {{ tabData.label }}
  </div>
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
      return this.$store.state.activeTabIndex === this.index
    },
    colorClasses() {
      return this.active
        ? this.$store.getters.activeColorClasses(this.index)
        : this.$store.getters.inactiveColorClasses(this.index)
    },
  },
}
</script>
