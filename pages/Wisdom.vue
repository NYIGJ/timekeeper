<template>
  <div class="tab-content md:overflow-hidden pb-20">
    <div class="stats grid mb-4 mx-auto max-w-md">
      <span align="left"><b>Total spare time generated</b></span
      ><span align="right">{{
        $store.getters.suffixedDecimalText($store.state.currencyTotal)
      }}</span>

      <span align="left"><b>Total spare time spent</b></span
      ><span align="right">{{
        $store.getters.suffixedDecimalText($store.getters.currencySpent)
      }}</span>

      <span align="left"><b>Total in-game time elapsed</b></span
      ><span align="right">{{ $store.getters.gameTimeTotalText }}</span>

      <span align="left"><b>Completed lifetimes</b></span
      ><span align="right">{{ $store.state.lifetimes }}</span>

      <span align="left"><b>Oldest age reached</b></span
      ><span align="right">{{ $store.getters.ageRecordText }}</span>

      <span align="left"><b>Latest time reached</b></span
      ><span align="right">{{ $store.getters.gameDateRecordText }}</span>

      <span align="left"><b>Wisdom for next prestige</b></span
      ><span align="right">{{ $store.state.wisdomGained }}</span>

      <span align="left"><b>Wisdom from other timelines</b></span
      ><span align="right">{{ $store.state.wisdomApplied }}</span>
    </div>

    <p class="text-center pb-2">
      Accrued <b>Wisdom</b> makes you gain more <br class="md:hidden" />
      Spare Time, Energy, and Mana.
    </p>

    <p class="text-center pb-4 text-sm font-bold">
      Current bonus: +{{ $store.state.wisdomApplied }}%
    </p>

    <hr class="pb-4" :class="`border-${$store.getters.activeTab.darkColor}`" />

    <p class="text-center">
      Created by GrapefruitChili, PK, TNNPe, Vice <br class="md:hidden" />
      for New Years Incremental Game Jam 2022.
    </p>
  </div>
</template>

<style scoped>
.stats {
  grid-template-columns: minmax(0, 1fr) auto;
}
</style>
