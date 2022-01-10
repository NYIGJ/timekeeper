<template>
  <responsive-grid>
    <progress-button
      v-for="(mission, index) in $store.state.missions"
      :key="index"
      :label="mission.name"
      :description="mission.description"
      :max="mission.completionCriteria.cost"
      :value="$store.state.currency"
    />
  </responsive-grid>
</template>
