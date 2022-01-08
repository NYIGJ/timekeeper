import Decimal from 'break_infinity.js'
import Vue from 'vue'

export const state = () => ({
  activeTabIndex: 0,
  tabs: [
    {
      id: 'instruments',
      label: '1',
      title: 'Instruments',
      darkColor: 'yellow-600',
      lightColor: 'yellow-200',
      locked: false,
    },
    {
      id: 'upgrades',
      label: '2',
      title: 'Upgrades',
      darkColor: 'blue-600',
      lightColor: 'blue-200',
      locked: false,
    },
    {
      id: 'missions',
      label: '3',
      title: 'Missions',
      darkColor: 'violet-600',
      lightColor: 'violet-200',
      locked: true,
    },
    {
      id: 'timemachine',
      label: '4',
      title: 'Time Machine',
      darkColor: 'lime-600',
      lightColor: 'lime-200',
      locked: true,
    },
    {
      id: 'achievements',
      label: '5',
      title: 'Time Magic',
      darkColor: 'orange-600',
      lightColor: 'orange-200',
      locked: true,
    },
    {
      id: 'prestige',
      label: '6',
      title: 'Etc.',
      darkColor: 'teal-600',
      lightColor: 'teal-200',
      locked: true,
    },
  ],
  currency: new Decimal(0),
  currencyTotal: new Decimal(0),
  processes: [
    {
      instrument: 'Star Chart',
      worker: 'Shaman',
      deviceCount: new Decimal(0),
      workerCount: 0,
      completion: 0,
      unlockThreshold: { tech: null, currency: 0 },
    },
    {
      instrument: 'Stone Calendar',
      worker: 'Stonecarver',
      deviceCount: new Decimal(0),
      workerCount: 0,
      completion: 0,
      unlockThreshold: { tech: null, currency: 10000 },
    },
    {
      instrument: 'Astrolabes',
      worker: 'Mathematician',
      deviceCount: new Decimal(0),
      workerCount: 0,
      completion: 0,
      unlockThreshold: { tech: 0, currency: new Decimal(10e5) },
    },
  ],

  upgrades: [
    {
      name: 'Mathematics',
      price: 100,
      purchased: false,
    },
  ],

  missions: [
    {
      name: 'Create the Time Machine',
      description: 'Soon you will be able to control time itself.',
      completionCriteria: {
        cost: 1000,
      },
      available: true,
      viewed: false,
      complete: false,
    },
    {
      name: 'Time To Cheat Death',
      description:
        'Your body seems to be failing you. ' +
        'Write a book to pass your knowedge to your younger self through the time machine. ' +
        "Now where's your pen...",
      appearanceCriteria: {
        age: 100,
      },
      completionCriteria: null,
      available: true,
      viewed: false,
      complete: false,
    },
  ],
})

export const getters = {
  activeTab: (state) => {
    return state.tabs[state.activeTabIndex]
  },
  activeColorClasses: (state) => (index) => {
    const { darkColor, lightColor } = state.tabs[index]
    return `bg-${lightColor} text-${darkColor}`
  },
  inactiveColorClasses: (state) => (index) => {
    const { darkColor, lightColor } = state.tabs[index]
    return `bg-${darkColor} text-${lightColor}`
  },
  activeTabColorClasses: (state, getters) => {
    return getters.activeColorClasses(state.activeTabIndex)
  },
}

export const mutations = {
  setActiveTab: (state, index) => {
    if (state.tabs[index].locked) return
    state.activeTabIndex = index
  },
  addCurrency: (state, value) => {
    state.currency = Decimal.add(state.currency, value)
    state.currencyTotal = Decimal.add(state.currencyTotal, value)
  },
  spendCurrency: (state, value) => {
    value = Decimal.mul(value, -1)
    state.currency = Decimal.add(state.currency, value)
  },
  setProcessCompletion: (state, { processIndex, value }) => {
    Vue.set(state.processes[processIndex], 'completion', value)
  },
  setMissionAvailable: (state, missionIndex) => {
    Vue.set(state.missions[missionIndex], 'available', true)
  },
  setMissionViewed: (state, missionIndex) => {
    Vue.set(state.missions[missionIndex], 'viewed', true)
  },
  completeMission: (state, missionIndex) => {
    state.missions[missionIndex].complete = true
  },
}
