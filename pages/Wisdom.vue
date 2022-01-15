<template>
  <div class="tab-content md:overflow-hidden">
    <div class="grid grid-cols-2">
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
      ><span align="right"
        >{{ $store.state.wisdomApplied }}: +{{ $store.state.wisdomApplied }}% to
        Spare Time, Energy, and Mana gained</span
      >
    </div>
    <hr />

    Created by GrapefruitChili, PK, TNNPe, Vice for New Years Incremental Game
    Jam 2022.
  </div>
</template>
