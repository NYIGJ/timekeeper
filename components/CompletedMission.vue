<template>
  <div class="rounded-lg border text-center py-1">
    {{ mission.name }}
  </div>
</template>

<script>
export default {
  props: {
    mission: { type: Object, required: true },
  },
}
</script>

<style scoped>
div {
  border-color: currentColor;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
