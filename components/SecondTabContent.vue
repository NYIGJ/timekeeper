<template>
  <div class="tab-content grid flex-col">
    <div
      v-for="(process, index) in $store.state.processes"
      :key="index"
      class="flex flex-col mb-4 p-4 rounded border"
      :class="`border-${$store.getters.activeTab.darkColor}`"
    >
      <span class="text-center font-bold pb-2 text-xl">
        {{ process.workerCount }} {{ process.worker }}s
      </span>
      <span class="text-left font-semibold">
        Each <b>{{ process.worker }}</b> makes your
        <b>{{ process.device }}s</b> produce <b>{{ process.produces }}</b> at an
        increased rate.
      </span>
      <span class="text-center text-md pt-2"
        >Cost for next {{ process.worker }}: 4
        {{ process.buyWorkersWith }}</span
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.tab-content {
  grid-template-columns: 1fr;
}
</style>
