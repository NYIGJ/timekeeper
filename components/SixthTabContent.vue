<template>
  <div class="tab-content grid md:overflow-hidden">
    <div>
      <span align="left"><b>Total spare time generated</b></span
      ><span align="right">{{ $store.state.currencyTotal }}</span>
    </div>
    <div>
      <span align="left"><b>Total spare time spent</b></span
      ><span align="right">{{ $store.getters.currencySpent }}</span>
    </div>
    <div>
      <span align="left"><b>Total in-game time elapsed</b></span
      ><span align="right"></span>
    </div>
    <div>
      <span align="left"><b>Total lifetimes</b></span
      ><span align="right">{{ $store.state.totalLifetimes }}</span>
    </div>
    <div>
      <span align="left"><b>Longest lifetime</b></span
      ><span align="right"></span>
    </div>
    <div>
      <span align="left"><b>Oldest age reached</b></span
      ><span align="right"></span>
    </div>
    <div>
      <span align="left"><b>Latest time reached</b></span
      ><span align="right"></span>
    </div>
    <div>
      <span align="left"><b>Wisdom for next prestige</b></span
      ><span align="right">{{ $store.state.wisdomGained }}</span>
    </div>
    <div>
      <span align="left"><b>Wisdom from other timelines</b></span
      ><span align="right">{{ $store.state.wisdomApplied }}</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
