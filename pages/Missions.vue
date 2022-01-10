<template>
  <div class="tab-content grid md:overflow-hidden">
    <template v-for="(mission, index) in $store.state.missions">
      <progress-button
        :key="index"
        :label="mission.name"
        :description="mission.description"
        :max="mission.completionCriteria.cost"
        :value="$store.state.currency"
      />
    </template>
  </div>
</template>

<style scoped>
.tab-content {
  --columns: 1;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  grid-gap: 1rem;
}
/* md */
@media (min-width: 768px) {
  .tab-content {
    --columns: 2;
  }
}
/* 2xl */
@media (min-width: 1536px) {
  .tab-content {
    --columns: 3;
  }
}
</style>
