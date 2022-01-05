<template>
  <div class="bg-white grid place-content-center border-2 w-3/4 mx-auto">
    <nav class="flex flex-col sm:flex-row">
      <button
        id="tab1"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
        @click="tabclicked(1)"
      >
        Tab 1</button
      ><button
        id="tab2"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        @click="tabclicked(2)"
      >
        Tab 2</button
      ><button
        id="tab3"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        @click="tabclicked(3)"
      >
        Tab 3</button
      ><button
        id="tab4"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        @click="tabclicked(4)"
      >
        Tab 4
      </button>
    </nav>

    <JohnHacks id="tabcontents1" class="tabshown" />
    <InfinityTester id="tabcontents2" class="tabhidden" />
    <JohnHacks id="tabcontents3" class="tabhidden" />
    <JohnHacks id="tabcontents4" class="tabhidden" />
  </div>
</template>

<script>
export default {
  name: 'TabNav',
  data() {
    return {}
  },
  methods: {
    tabclicked(tabnumber) {
      const tabSelected =
        'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'
      const tabDeselected =
        'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'
      console.log('clicked ' + tabnumber)
      for (let i = 1; i <= 4; i++) {
        const tabE = document.getElementById('tab' + i)
        const viewE = document.getElementById('tabcontents' + i)
        if (i === tabnumber) {
          tabE.className = tabSelected
          viewE.className = 'tabshown'
        } else {
          tabE.className = tabDeselected
          viewE.className = 'tabhidden'
        }
      }
    },
  },
}
</script>

<style scoped>
.tabshown {
  display: show;
}

.tabhidden {
  display: none;
}
</style>
