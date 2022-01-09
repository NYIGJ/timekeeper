<template>
  <div
    class="page grid container max-h-full h-full w-full mx-auto bg-gray-300 px-4"
  >
    <header
      class="text-3xl flex items-center justify-center font-bold bg-gray-600 text-gray-400"
    >
      Timekeeper
    </header>

    <main class="bg-gray-400 grid w-full h-full overflow-auto relative">
      <div
        class="flex flex-row bg-gray-300 border border-gray-600 font-semibold h-10"
      >
        <div class="text-center pt-2 pb-1 flex-grow border-r border-gray-600">
          Dec. 1990
        </div>
        <div
          class="text-center pt-2 pb-1 flex-grow border-r border-gray-600 relative"
        >
          <progress
            class="absolute top-0 left-0 right-0 h-1 w-full"
            max="100"
            value="50"
          />
          34y4m
        </div>
        <div class="text-center pt-2 pb-1 flex-grow">80y max</div>
      </div>

      <div class="units p-8 relative bg-gray-300">
        <div class="units-background absolute top-8 left-0 right-0"></div>
        <div
          class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
          @click="$store.commit('addCurrency', 1)"
        >
          <span
            class="spare-time flex flex-row items-center font-bold rounded-2xl"
          >
            <span class="text-3xl md:text-5xl"
              >{{ $store.state.currency }}
            </span>
            <span
              class="fas fa-hourglass-half text-xl pt-1 pl-2 md:text-3xl md:pt-2"
            ></span>
          </span>
        </div>
      </div>

      <div class="tabs flex flex-row w-full bg-gray-400 text-gray-400 h-10">
        <game-tab
          v-for="(tab, index) in $store.state.tabs"
          :key="index"
          :index="index"
          :tab-data="tab"
        />
      </div>

      <div
        class="w-full text-2xl text-center pt-1 pb-2"
        :class="$store.getters.activeTabColorClasses"
      >
        {{ $store.getters.activeTab.title }}
      </div>

      <div
        class="tab-content px-4 w-full overflow-y-scroll"
        :class="$store.getters.activeTabColorClasses"
      >
        <first-tab-content v-if="$store.state.activeTabIndex === 0" />
        <second-tab-content v-else-if="$store.state.activeTabIndex === 1" />
        <third-tab-content v-else-if="$store.state.activeTabIndex === 2" />

        <template v-else-if="$store.state.activeTabIndex === 3">
          Tab 4 content
        </template>

        <template v-else-if="$store.state.activeTabIndex === 4">
          Tab 5 content
        </template>

        <template v-else-if="$store.state.activeTabIndex === 5">
          Tab 6 content
        </template>
      </div>
    </main>

    <footer class="text-lg flex items-center pt-4 pb-2 px-4 hidden md:block">
      Created by GrapefruitChili, PK, TNNPe, Vice for New Years Incremental Game
      Jam 2022.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    window.setInterval(() => {
      this.gametick()
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
  grid-template-rows: 0rem 1fr auto;
}

main {
  grid-template-rows: auto minmax(0, 2fr) auto auto minmax(0, 3fr);
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
}
</style>
