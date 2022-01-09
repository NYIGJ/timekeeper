import Decimal from 'break_infinity.js'
import Vue from 'vue'

export const state = () => ({
  activeTabIndex: 0,
  tabs: [
    {
      route: '/',
      label: 'fas fa-clock',
      title: 'Timekeeping Instruments',
      darkColor: 'yellow-600',
      lightColor: 'yellow-200',
      locked: false,
    },
    {
      route: '/apprentices',
      label: 'fas fa-user-friends',
      title: 'Apprentices',
      darkColor: 'blue-600',
      lightColor: 'blue-200',
      locked: false,
    },
    {
      route: '/missions',
      label: 'fas fa-th-list',
      title: 'Missions',
      darkColor: 'violet-600',
      lightColor: 'violet-200',
      locked: false,
    },
    {
      route: '/timemachine',
      label: 'fas fa-fast-forward',
      title: 'Time Machine',
      darkColor: 'lime-600',
      lightColor: 'lime-200',
      locked: false,
    },
    {
      route: '/timemagic',
      label: 'fas fa-eye',
      title: 'Time Magic',
      darkColor: 'orange-600',
      lightColor: 'orange-200',
      locked: false,
    },
    {
      route: '/wisdom',
      label: 'fas fa-book-open',
      title: 'Wisdom',
      darkColor: 'teal-600',
      lightColor: 'teal-200',
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
      workerRate: 6.0, // amount added to "completion" (100=full bar) per worker
      reward: 8, // currency added when the bar is completed
      nextWorkerCost: 15, // currency cost of next worker
      nextWorkerFactor: 1.4, // worker cost *= this factor after each purchase
      unlockThreshold: { tech: null, currency: 0 },
    },
    {
      instrument: 'Stone Calendar',
      worker: 'Stonecarver',
      deviceCount: new Decimal(0),
      workerCount: 0,
      completion: 0,
      workerRate: 4.0,
      reward: 35,
      nextWorkerCost: 60,
      nextWorkerFactor: 1.6,
      unlockThreshold: { tech: null, currency: 10000 },
    },
    {
      instrument: 'Astrolabes',
      worker: 'Mathematician',
      deviceCount: new Decimal(0),
      workerCount: 0,
      completion: 0,
      workerRate: 1.5,
      reward: 80,
      nextWorkerCost: 90,
      nextWorkerFactor: 1.8,
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
  purchaseWorker: (state, processIndex) => {
    const p = state.processes[processIndex]
    if (p.nextWorkerCost > state.currency) return
    state.currency = Decimal.subtract(state.currency, p.nextWorkerCost)
    Vue.set(state.processes[processIndex], 'workerCount', p.workerCount + 1)
    Vue.set(
      state.processes[processIndex],
      'nextWorkerCost',
      Math.floor(p.nextWorkerCost * p.nextWorkerFactor)
    )
  },
}
