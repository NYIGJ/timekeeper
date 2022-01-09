import Decimal from 'break_infinity.js'
import Vue from 'vue'

export const state = () => ({
  activeTabIndex: 0,
  tabs: [
    {
      route: '/',
      label: 'fas fa-clock',
      title: 'Timekeeping Instruments',
      darkColor: 'amber-900',
      lightColor: 'amber-200',
      locked: false,
    },
    {
      route: '/apprentices',
      label: 'fas fa-user-friends',
      title: 'Apprentices',
      darkColor: 'rose-900',
      lightColor: 'rose-200',
      locked: false,
    },
    {
      route: '/missions',
      label: 'fas fa-th-list',
      title: 'Missions',
      darkColor: 'sky-900',
      lightColor: 'sky-200',
      locked: false,
    },
    {
      route: '/timemachine',
      label: 'fas fa-fast-forward',
      title: 'Time Machine',
      darkColor: 'lime-900',
      lightColor: 'lime-200',
      locked: false,
    },
    {
      route: '/timemagic',
      label: 'fas fa-eye',
      title: 'Time Magic',
      darkColor: 'violet-900',
      lightColor: 'violet-200',
      locked: false,
    },
    {
      route: '/wisdom',
      label: 'fas fa-book-open',
      title: 'Wisdom',
      darkColor: 'teal-900',
      lightColor: 'teal-100',
      locked: false,
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
