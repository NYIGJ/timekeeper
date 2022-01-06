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
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab flex-grow text-center text-2xl font-semibold py-1 mr-px"
          :class="{
            'text-gray-600 bg-gray-400 border-gray-600':
              activeTabIndex === index,
            'bg-gray-600 border-gray-600': activeTabIndex !== index,
          }"
          @click="activeTabIndex = index"
        >
          {{ tab.label }}
        </div>
      </div>
      <div class="tab-content p-8">
        Colors and art are purely for example, not recommendations. Background
        colors are used to distinguish individual HTML elements.
      </div>
    </main>
    <footer class="text-lg flex items-center pt-4 pb-2 px-4 hidden md:block">
      Created by GrapefruitChili, PK, TNNPe, Vice for New Years Incremental Game
      Jam 2022.
    </footer>
  </div>
</template>

<script>
const TABS = [
  { id: 'instruments', label: '1' },
  { id: 'upgrades', label: '2' },
  { id: 'fathertime', label: '3' },
  { id: 'timemachine', label: '4' },
  { id: 'achievements', label: '5' },
  { id: 'prestige', label: '6' },
]

export default {
  name: 'IndexPage',
  data() {
    return {
      tabs: TABS,
      activeTabIndex: 0,
    }
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
}
</style>

<style scoped>
.page {
  grid-template-rows: 4rem 1fr auto;
}

main {
  grid-template-rows: 1fr auto 2fr;
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
