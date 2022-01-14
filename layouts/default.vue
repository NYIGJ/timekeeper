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
          class="tab-title w-full text-2xl text-center pt-1 pb-2"
          v-text="activeTab.title"
        />

        <nuxt />
      </div>
    </main>
    <narrative-modal v-if="$store.state.modalIsOpen" />
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
      if (this.$store.state.modalIsOpen || this.$store.state.gameStopped) return

      if (this.$store.state.playerAge < this.$store.state.playerAgeMax) {
        this.gametick()
      } else {
        this.checkLossCondition()
      }
    }, 100)
    window.setInterval(() => {
      if (this.$store.state.modalIsOpen || this.$store.state.gameStopped) return

      if (this.$store.state.playerAge < this.$store.state.playerAgeMax)
        this.$store.commit('tickGameDate')
    }, 1000)
  },
  methods: {
    gametick() {
      // Instruments tick
      this.$store.state.processes
        .filter((p) => p.created)
        .forEach((process) => {
          if (process.completion >= process.completionRequired) {
            const reward = process.baseReward * (1 + process.workerLevel)

            this.$store.commit('addCurrency', reward)
            this.$store.commit('resetProcess', { process })
          }

          this.$store.commit('tickProcess', { process })
        })

      // Energy ticks
      if (
        this.$store.getters.isTabUnlocked('Time Machine') &&
        this.$store.state.energy < this.$store.state.energyMax
      ) {
        this.$store.commit('tickEnergy')
      }
    },
    checkLossCondition() {
      this.$store.commit('stopGame')

      // End state
      const lostTheGame =
        this.$store.state.playerAge === this.$store.state.playerAgeMax &&
        !this.$store.getters.isTabUnlocked('Time Machine')

      if (lostTheGame) {
        const message =
          'You wasted your precious time your whole life with nothing to show for it.' +
          '<br><br>' +
          'You have lost the game. Reload the page and try again.'

        this.$store.commit('openModal', message)
      } else {
        const message =
          "You are too frail to continue. It's time to gather your knowledge into a book and " +
          'send it, along with the time machine and your timekeeping instruments, to your younger self. ' +
          'Hopefully they will know what to do with this valuable wisdom.' +
          '<br><br>' +
          'Go to the <b>Missions</b> tab to continue.'

        this.$store.commit('openModal', message)
      }
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&family=Roboto+Slab:wght@600&display=swap');

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
  font-family: 'Manrope', sans-serif;
}
</style>

<style scoped>
main {
  grid-template-rows: auto minmax(0, 2fr) auto minmax(0, 3fr);
  transition: background-color 2000ms;
}

.tab-title {
  font-family: 'Roboto Slab', serif;
}
</style>
