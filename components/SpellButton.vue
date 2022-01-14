<template>
  <progress-button
    :label="spell.name"
    :description="spell.description"
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
    spell: { type: Object, required: true },
  },
  computed: {
    current() {
      //
      return undefined
    },
    next() {
      //
      return undefined
    },
  },
  methods: {
    cast() {
      //
    },
  },
}
</script>
