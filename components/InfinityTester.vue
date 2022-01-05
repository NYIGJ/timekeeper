<template>
  <div>
    <button @click="add">add {{ addIncrement }}</button>
    <button @click="stepup">add to the adding</button>
    <div>big value = {{ bigvalue }}</div>
  </div>
</template>

<script>
// import Decimal from "break_infinity.js";

export default {
  name: 'InfinityTester',
  data() {
    return {
      addIncrement: 0,
      bigvalue: 0,
    }
  },
  methods: {
    add() {
      // eslint-disable-next-line no-console
      console.log('!')
      this.bigvalue = 0
    },

    stepup() {
      this.addIncrement += 100
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>-->
