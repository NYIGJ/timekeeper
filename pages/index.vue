<template>
  <div class="gridcontainer container mx-auto bg-red-500">
    <header>
        I'm a header. Check this box
    </header>
    <div class="gridcenter">
        <div> Insert Key Art</div>
        <TabNav/>
    </div>
    <footer>
        This is a game jam game.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return { 
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.gridcontainer {
    display: grid | inline-grid;
}

header {
    grid-row: 1;
}

.gridcenter {
    grid-row: 2;
}

footer {
    grid-row: 3;
}

</style>
