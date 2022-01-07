<template>
  <div class="tab-content grid flex-col">
    <template v-for="(process, index) in $store.state.processes">
      <button :key="index" class="text-right font-semibold">
        {{ process.instrument }}
      </button>
      <div :key="index" class="progress-bar relative">
        <progress
          max="100"
          :value="process.completion"
          class="w-full h-full"
        ></progress>
        <span
          class="absolute top-0 bottom-0 left-0 right-0 text-center text-white"
        >
          1.3 <span class="fas fa-hourglass-half text-sm" /> / sec
          <!-- {{ $store.state.incremental.currency[process.produces] }} {{ process.produces }} -->
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tab-content {
  grid-template-columns: auto 1fr;
  grid-gap: 1rem 1rem;
}
</style>
