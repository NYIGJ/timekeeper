<template>
  <progress-button
    :label="label"
    :description="description"
    :max="$store.state.nextFluxCapacitorCost"
    :value="$store.state.currency"
    :current="$store.state.energyMax"
    :next="$store.state.energyMax + 200"
    @click="upgrade"
  />
</template>

<script>
export default {
  computed: {
    label() {
      return `L${this.$store.state.fluxCapacitorLevel} Flux Capacitor`
    },
    description() {
      return `Increase maximum energy.`
    },
    current() {
      return this.$store.state.energyMax
    },
    next() {
      return this.$store.state.energyMax + 200
    },
  },
  methods: {
    upgrade() {
      this.$store.commit(
        'spendCurrency',
        this.$store.state.nextFluxCapacitorCost
      )
      this.$store.commit('upgradeMaxEnergy')
    },
  },
}
</script>
