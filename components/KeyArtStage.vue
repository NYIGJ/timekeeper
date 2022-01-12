<template>
  <div class="p-8 relative">
    <div class="key-art absolute top-8 left-0 right-0" />
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      @click="$store.commit('addCurrency', 1)"
    >
      <span
        class="spare-time flex flex-row items-center font-bold rounded-2xl select-none"
        :class="`text-${$store.getters.activeTab.darkColor}`"
      >
        <span class="text-3xl md:text-5xl" v-text="currencyText" />
        <span
          class="fas fa-hourglass-half text-xl pt-1 pl-2 md:text-3xl md:pt-2"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        currencyText() {
            if (this.$store.state.currency.greaterThan(1e7)) {
                return this.$store.state.currency.toString()
            }
            return Math.floor(this.$store.state.currency)
        }
    }
}
</script>

<style scoped>
.key-art {
  background: url('https://freesvg.org/img/johnny_automatic_hourglass.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.4;
  height: calc(100% - 4rem); /* 4rem = top padding + bottom padding */
}
.spare-time {
  --color: rgba(2555, 255, 255, 0.5);
  background: var(--color);
  box-shadow: 0px 0px 20px 20px var(--color);
  transition: color 2000ms;
}
</style>
