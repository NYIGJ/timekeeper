<template>
  <div class="gridcontainer container mx-auto bg-red-500">
    <header>I'm a header. Check this box</header>
    <TabNav />
    <footer>This is a game jam game.</footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.gridcontainer {
  display: grid;
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
