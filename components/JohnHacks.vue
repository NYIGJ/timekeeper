<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="button_clicky()">Click Me</button>
    <div>clicks = {{ clicks }}</div>
    <ul>
      <li v-for="value in testvalues.slice(0, clicks)" :key="value">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JohnHacks',
  data() {
    return {
      msg: 'John copies files and makes a mess',
      testvalues: [1, 1, 2, 3, 5, 8, 13, 21],
      clicks: 0,
    }
  },
  methods: {
    button_clicky() {
      // eslint-disable-next-line no-console
      console.log('!')
      this.clicks += 1
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
