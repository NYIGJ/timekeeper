<template>
  <div class="relative">
    <div
      class="key-art absolute top-0 left-0 right-0"
      :class="{
        instruments: $route.path === '/',
        apprentices: $route.path === '/apprentices',
        missions: $route.path === '/missions',
        timeMachine: $route.path === '/timemachine',
        timeMagic: $route.path === '/timemagic',
        wisdom: $route.path === '/wisdom',
      }"
    />
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
      :class="`text-${activeTab.darkColor}`"
      @click="click"
    >
      <span
        class="spare-time flex flex-row items-center font-bold rounded-2xl select-none"
      >
        <span
          class="spare-time-value text-3xl md:text-5xl"
          v-text="currencyText"
        />
        <span class="fas fa-hourglass-half text-xl pl-2 md:text-3xl md:pt-1" />
      </span>
      <span
        class="spare-time-explanation text-sm md:text-xl select-none mt-2 font-bold"
      >
        Tap to gain
        <b><span class="fas fa-hourglass-half" /> Spare Time</b>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tabs', ['activeTab', 'isTabUnlocked']),
    currencyText() {
      return this.$store.getters.suffixedDecimalText(this.$store.state.currency)
    },
  },
  methods: {
    click() {
      if (this.$store.state.gameStopped) return

      this.$store.commit('addCurrency', 1)
      if (
        this.isTabUnlocked('Time Magic') &&
        this.$store.state.manaMax > this.$store.state.mana
      ) {
        this.$store.commit('tickMana')
      }
    },
  },
}
</script>

<style scoped>
.key-art {
  background-repeat: repeat;
  background-position: center;
  opacity: 0.3;
  margin-top: -3rem;
  height: calc(100% + 3rem);
  transition: background-image 2000ms, background-position 2000ms,
    background-size 2000ms;
}
.key-art.instruments {
  background: url('/Instruments.svg');
  --size: 230px;
  background-size: var(--size) var(--size);
  background-position-x: -30px;
  background-position-y: 24px;
}
.key-art.apprentices {
  background: url('/Apprentices.svg');
  --size: 275px;
  background-size: var(--size) var(--size);
  background-position-x: -15px;
  background-position-y: 7px;
}
.key-art.missions {
  background: url('/Missions.svg');
  --size: 275px;
  background-size: var(--size) var(--size);
  background-position-x: -44px;
  background-position-y: 7px;
}
.key-art.timeMachine {
  background: url('/TimeMachine.svg');
  --size: 380px;
  background-size: var(--size) var(--size);
  background-position-x: 0;
  background-position-y: 7px;
}
.key-art.timeMagic {
  background: url('/TimeMagic.svg');
  --size: 176px;
  background-size: var(--size) var(--size);
  background-position-x: -3px;
  background-position-y: -21px;
}
.key-art.wisdom {
  background: url('/Wisdom.svg');
  --size: 153px;
  background-size: var(--size) var(--size);
  background-position-x: 42px;
  background-position-y: -21px;
}
.spare-time {
  --color: rgba(2555, 255, 255, 0.5);
  box-shadow: 0px 0px 20px 20px var(--color);
  background: var(--color);
  transition: color 2000ms;
}
.spare-time-explanation {
  --color: rgba(2555, 255, 255, 0.5);
  box-shadow: 0px 0px 10px 10px var(--color);
  background: var(--color);
  transition: color 2000ms;
}
</style>
