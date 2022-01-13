<template>
  <responsive-grid>
    <apprentice-button
      v-for="(process, index) in unlocked"
      :key="`${index}-${process.workerLevel}`"
      :process="process"
    />
  </responsive-grid>
</template>

<script>
export default {
  computed: {
    unlocked() {
      return this.$store.state.processes.filter((p) => p.visited && p.created)
    },
  },
}
</script>
