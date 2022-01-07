<template>
  <div class="page grid container h-full w-full mx-auto bg-gray-300 px-4">
    <header
      class="text-3xl flex items-center justify-center font-bold bg-gray-600 text-gray-400"
    >
      Timekeeper
    </header>

    <main class="bg-gray-400 grid w-full">
      <div class="units p-8 relative bg-gray-300">
        <div class="units-background absolute top-8 left-0 right-0"></div>
      </div>

      <div class="tabs flex flex-row w-full bg-gray-400 text-gray-400">
        <game-tab
          v-for="(tab, index) in $store.state.tabs"
          :key="index"
          :index="index"
          :tab-data="tab"
        />
      </div>

      <div
        class="w-full text-2xl text-center py-1"
        :class="$store.getters.activeTabColorClasses"
      >
        {{ $store.getters.activeTab.title }}
      </div>

      <div
        class="tab-content p-8"
        :class="$store.getters.activeTabColorClasses"
      >
        <template v-if="$store.state.activeTabIndex === 0">
          Tab 1 content
        </template>

        <template v-else-if="$store.state.activeTabIndex === 1">
          Tab 2 content
        </template>

        <template v-else-if="$store.state.activeTabIndex === 2">
          Tab 3 content
        </template>

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
import GameTab from '~/components/GameTab.vue'
export default {
  components: { GameTab },
  name: 'IndexPage',
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
}
</style>

<style scoped>
.page {
  grid-template-rows: 4rem 1fr auto;
}

main {
  grid-template-rows: 1fr auto auto 2fr;
}

.units-background {
  background: url('https://freesvg.org/img/johnny_automatic_hourglass.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.4;
  height: calc(100% - 4rem); /* 4rem = top padding + bottom padding */
}

.tabs {
}
</style>
