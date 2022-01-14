/* eslint-disable vue/no-v-html */
<template>
  <div
    class="backdrop absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
    @click.self="$store.commit('closeModal')"
  >
    <div
      class="modal rounded-lg px-8 pt-8 pb-4 flex flex-col items-center bg-teal-100 text-teal-900"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="" v-html="$store.state.modalText" />
      <button
        class="border bg-teal-900 text-teal-100 rounded-lg mt-4 px-8 py-2 font-bold"
        @click="$store.commit('closeModal')"
      >
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.backdrop {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
}
.modal {
  width: 22rem;
}
</style>
