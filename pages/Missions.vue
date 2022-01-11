<template>
  <responsive-grid>
    <mission-button
      v-for="(mission, index) in $store.state.missions"
      :key="index"
      :mission="mission"
    />
  </responsive-grid>
</template>
