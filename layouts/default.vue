<template>
  <div class="container max-h-full h-full w-full mx-auto bg-gray-400 px-4">
    <main
      class="grid w-full h-full overflow-auto relative"
      :class="`bg-${activeTab.color}`"
    >
      <time-header />

      <key-art-stage />

      <div class="grid grid-cols-6 gap-1 w-full h-10 relative">
        <game-tab
          v-for="tab in $store.state.tabs"
          :key="tab.route"
          :tab-data="tab"
        />
      </div>

      <div
        class="tab-content px-4 w-full relative overflow-y-scroll"
        :class="activeTabColorClasses"
      >
        <div
          class="w-full text-2xl text-center pt-1 pb-2"
          v-text="activeTab.title"
        />

        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['activeTab']),
    activeTabColorClasses() {
      return `bg-${this.activeTab.lightColor} text-${this.activeTab.darkColor}`
    },
  },
  mounted() {
    window.setInterval(() => {
      if (this.$store.state.playerAge < this.$store.state.playerAgeMax)
        this.gametick()
    }, 100)
    window.setInterval(() => {
      if (this.$store.state.playerAge < this.$store.state.playerAgeMax)
        this.$store.commit('tickGameDate')
    }, 1000)
  },
  methods: {
    gametick() {
      this.$store.state.processes
        .filter((p) => p.created)
        .forEach((process, index) => {
          if (process.completion >= process.completionRequired) {
            const reward = process.baseReward * (1 + process.workerLevel)

            this.$store.commit('addCurrency', reward)
            this.$store.commit('setProcessCompletion', {
              index,
              value: 0,
            })
          }

          this.$store.commit('setProcessCompletion', {
            index,
            value: process.completion + 1,
          })
        })
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
main {
  grid-template-rows: auto minmax(0, 2fr) auto minmax(0, 3fr);
  transition: background-color 2000ms;
}
</style>
