<template>
  <div class="page container max-h-full h-full w-full mx-auto bg-gray-400 px-4">
    <main
      class="grid w-full h-full overflow-auto relative"
      :class="`bg-${$store.getters.activeTab.color}`"
    >
      <time-header />

      <key-art-stage />

      <div class="tabs grid w-full text-gray-400 h-10 relative">
        <game-tab
          v-for="(tab, index) in $store.state.tabs"
          :key="index"
          :index="index"
          :tab-data="tab"
        />
      </div>

      <div
        class="tab-content px-4 w-full relative overflow-y-scroll"
        :class="activeTabColorClasses"
      >
        <div
          class="w-full text-2xl text-center pt-1 pb-2"
          v-text="$store.getters.activeTab.title"
        />

        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    activeTabColorClasses() {
      const { lightColor, darkColor } = this.$store.getters.activeTab

      return `bg-${lightColor} text-${darkColor}`
    },
  },
  mounted() {
    window.setInterval(() => {
      this.gametick()
    }, 1000)
    window.setInterval(() => {
      this.$store.commit('tickGameDate')
    }, 1000)
  },
  methods: {
    gametick() {
      for (let i = 0; i < this.$store.state.processes.length; i++) {
        const p = this.$store.state.processes[i]
        // const step = 100.0 / (6.0 * (i + 1)) // go at different rates
        const step = p.workerRate * p.workerCount
        let newValue = p.completion + step
        while (newValue >= 100) {
          newValue = newValue - 100
          this.$store.commit('addCurrency', p.reward)
        }
        this.$store.commit('setProcessCompletion', {
          processIndex: i,
          value: newValue,
        })
      }
    },
  },
}
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%; /* 100vh is broken on mobile. this is the fix. */
  width: 100vw;
}

html {
  background: #e5e7eb;
  overflow-y: hidden;
}
</style>

<style scoped>
.page {
  grid-template-rows: 1fr;
}

main {
  grid-template-rows: auto minmax(0, 2fr) auto minmax(0, 3fr);
  transition: background-color 2000ms;
}

.tabs {
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.25rem;
}
</style>
