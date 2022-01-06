<template>
  <div>
    <button @click="add"> add {{addIncrement}} </button>
    <button @click="stepup"> {{mulIncrement}}x addition per step </button>
    <button @click="jumpup"> 10x more multiplication per step</button>
    <button @click="toggletimer">Tick automatically</button>
  </div>
</template>

<script>

import Decimal from "break_infinity.js";

export default {
  name: 'InfinityTester',
  data() {
    return {
      addIncrement: new Decimal(100),
      mulIncrement: new Decimal(10),
      bigValue: new Decimal(0),
      timerRunning: false
    }
  },
  beforeMount () {
        window.setInterval(() => {
                this.gametick();
            },250);
  },
  methods: {
        add () {
            // this.bigValue = Decimal.add(this.bigValue, this.addIncrement);
            this.$store.commit("incremental/add", 
                {key: "energy", value: this.addIncrement}
            )
        },

        stepup () {
            this.addIncrement = Decimal.mul(this.addIncrement, this.mulIncrement);
        },

        jumpup() {
            this.mulIncrement = Decimal.mul(this.mulIncrement, 10.0);
        },

        gametick() {
            if (this.timerRunning) {
                this.$store.commit("incremental/add", 
                    {key: "energy", value: this.addIncrement}
                )
            }
        },

        toggletimer() {
            this.timerRunning = !(this.timerRunning)
        }
  }
}
</script>

<style scoped>
button {
  background-color: #42b983;
}
</style>
