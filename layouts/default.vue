<template>
  <div class="page container max-h-full h-full w-full mx-auto bg-gray-400 px-4">
    <main
      class="grid w-full h-full overflow-auto relative"
      :class="`bg-${$store.getters.activeTab.color}`"
    >
      <time-header />

      <div class="units p-8 relative">
        <div class="units-background absolute top-8 left-0 right-0"></div>
        <div
          class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
          @click="$store.commit('addCurrency', 1)"
        >
          <span
            class="spare-time flex flex-row items-center font-bold rounded-2xl p-2"
            :class="`text-${$store.getters.activeTab.darkColor}`"
          >
            <span class="text-3xl md:text-5xl" v-text="$store.state.currency" />
            <span
              class="fas fa-hourglass-half text-xl pt-1 pl-2 md:text-3xl md:pt-2"
            />
          </span>
        </div>
      </div>

      <div class="tabs grid w-full text-gray-400 h-10 relative">
        <game-tab
          v-for="(tab, index) in $store.state.tabs"
          :key="index"
          :index="index"
          :tab-data="tab"
        />
      </div>

      <div
        class="w-full text-2xl text-center pt-1 pb-2 relative"
        :class="activeTabColorClasses"
      >
        {{ $store.getters.activeTab.title }}
      </div>

      <div
        class="tab-content px-4 w-full overflow-y-scroll"
        :class="activeTabColorClasses"
      >
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
    }, 100)
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
  grid-template-rows: auto minmax(0, 2fr) auto auto minmax(0, 3fr);
  transition: background-color 2000ms;
}

.tabs {
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.25rem;
}

.units-background {
  background: url('https://freesvg.org/img/johnny_automatic_hourglass.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.4;
  height: calc(100% - 4rem); /* 4rem = top padding + bottom padding */
}
.spare-time {
  background: rgba(2555, 255, 255, 0.6);
  box-shadow: 0px 0px 21px 3px #fff;
  transition: color 2000ms;
}
</style>
