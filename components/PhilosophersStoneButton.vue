<template>
  <progress-button
    :label="action.name"
    :description="action.description"
    :max="100"
    :value="$store.state.mana"
    :current="current"
    :next="next"
    @click="doAction"
  />
</template>

<script>
export default {
  props: {
    action: { type: Object, required: true },
  },
  computed: {
    current() {
      return this.action.name === 'Empower the Stone'
        ? this.$store.state.philosophersStoneIncrement
        : undefined
    },
    next() {
      return this.action.name === 'Empower the Stone'
        ? this.$store.state.philosophersStoneIncrement + 6
        : undefined
    },
  },
  methods: {
    doAction() {
      this.$store.commit('spendMana', 100)

      if (this.action.name === 'Empower the Stone') {
        this.$store.commit('increasePhilosophersStoneIncrement', 6)
      } else if (this.action.name === 'Forever Young') {
        this.$store.commit(
          'decreaseAge',
          this.$store.state.philosophersStoneIncrement
        )
      } else if (this.action.name === 'Necromancy') {
        this.$store.commit(
          'extendLifespan',
          this.$store.state.philosophersStoneIncrement
        )
      }
    },
  },
}
</script>
