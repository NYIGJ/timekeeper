<template>
  <responsive-grid>
    <apprentice-button
      v-for="(process, index) in $store.state.processes"
      :key="`${index}-${process.workerLevel}`"
      :process="process"
    />
  </responsive-grid>
</template>
