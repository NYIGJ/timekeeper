import Decimal from 'break_infinity.js'
import Vue from 'vue'

export const state = () => ({
  tabs: [
    {
      route: '/',
      label: 'fas fa-clock',
      title: 'Timekeeping Instruments',
      darkColor: 'amber-900',
      color: 'amber-400',
      lightColor: 'amber-200',
      locked: false,
    },
    {
      route: '/apprentices',
      label: 'fas fa-user-friends',
      title: 'Apprentices',
      darkColor: 'rose-900',
      color: 'rose-400',
      lightColor: 'rose-200',
      locked: false,
    },
    {
      route: '/missions',
      label: 'fas fa-th-list',
      title: 'Missions',
      darkColor: 'sky-900',
      color: 'sky-400',
      lightColor: 'sky-200',
      locked: false,
    },
    {
      route: '/timemachine',
      label: 'fas fa-fast-forward',
      title: 'Time Machine',
      darkColor: 'lime-900',
      color: 'lime-400',
      lightColor: 'lime-200',
      locked: false,
    },
    {
      route: '/timemagic',
      label: 'fas fa-eye',
      title: 'Time Magic',
      darkColor: 'violet-900',
      color: 'violet-400',
      lightColor: 'violet-200',
      locked: false,
    },
    {
      route: '/wisdom',
      label: 'fas fa-book-open',
      title: 'Wisdom',
      darkColor: 'teal-900',
      color: 'teal-400',
      lightColor: 'teal-100',
      locked: false,
    },
  ],
  currency: new Decimal(0),
  currencyTotal: new Decimal(0),
  processes: [
    {
      instrument: 'Mechanical Clock',
      worker: 'Engineer',

      cost: 10,
      created: false,

      completion: 0, // how close it is to giving currency. 10 gained per second.
      completionRequired: 10, // should be divisible by 10
      baseReward: 5, // currency added when the bar is completed

      workerLevel: 0, // 0 = not hired; 1+ = hired
      nextWorkerCost: 25, // currency cost of next worker
      nextWorkerFactor: 1.5, // worker cost *= this factor after each purchase

      unlockThreshold: { tech: null, currency: 0 },
    },
    {
      instrument: 'Hourglass',
      worker: 'Glassblower',

      cost: 100,
      created: false,

      completion: 0,
      completionRequired: 20,
      baseReward: 35,

      workerLevel: 0,
      nextWorkerCost: 200,
      nextWorkerFactor: 1.6,

      unlockThreshold: { tech: null, currency: 10000 },
    },
    {
      instrument: 'Pocket Watch',
      worker: 'Miniaturist',

      cost: 1000,
      created: false,

      completion: 0,
      completionRequired: 30,
      baseReward: 80,

      workerLevel: 0,
      nextWorkerCost: 2000,
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
        cost: 6000,
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
      completionCriteria: {
        cost: 150000,
      },
      available: true,
      viewed: false,
      complete: false,
    },
  ],
  gameDate: 1991 * 12,
  playerAge: 34 * 12,
  playerAgeMax: 80 * 12,
  playerLivedTotal: 0,
  wisdomGained: 0, // wisdom gained so far on this run, not applied until player sends the book.
  wisdomApplied: 0, // wisdom from previous runs
  totalLifetimes: 1,
})

export const getters = {
  activeTab(state) {
    return state.tabs.find(
      // eslint-disable-next-line no-undef
      (tab) => tab.route === $nuxt.$route.path
    )
  },
  canTimeTravel: (state) => {
    if (state.playerAge.year < state.playerAgeMax.year) return true
    if (state.playerAge.year > state.playerAgeMax.year) return false
    return state.playerAge.month < state.playerAgeMax.month
  },
  gameMonth: (state) => {
    return {
      1: 'Jan.',
      2: 'Feb.',
      3: 'Mar.',
      4: 'Apr.',
      5: 'May.',
      6: 'Jun.',
      7: 'Jul.',
      8: 'Aug.',
      9: 'Sep.',
      10: 'Oct.',
      11: 'Nov.',
      12: 'Dec.',
    }[(state.gameDate % 12) + 1]
  },
  gameYear: (state) => {
    return Math.floor(state.gameDate / 12)
  },
  currencySpent: (state) => {
    return Decimal.subtract(state.currencyTotal, state.currency)
  },
}

export const mutations = {
  addCurrency: (state, value) => {
    state.currency = Decimal.add(state.currency, value)
    state.currencyTotal = Decimal.add(state.currencyTotal, value)
  },
  spendCurrency: (state, value) => {
    value = Decimal.mul(value, -1)
    state.currency = Decimal.add(state.currency, value)
  },
  createInstrument: (state, instrument) => {
    const index = state.processes.findIndex((p) => p.instrument === instrument)
    Vue.set(state.processes[index], 'created', true)
  },
  setProcessCompletion: (state, { index, value }) => {
    Vue.set(state.processes[index], 'completion', value)
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
  levelUpApprentice: (state, process) => {
    if (process.nextWorkerCost > state.currency) {
      return
    }
    const index = state.processes.findIndex((p) => p.worker === process.worker)
    state.currency = Decimal.subtract(state.currency, process.nextWorkerCost)
    Vue.set(state.processes[index], 'workerLevel', process.workerLevel + 1)
    Vue.set(
      state.processes[index],
      'nextWorkerCost',
      Math.floor(process.nextWorkerCost * process.nextWorkerFactor)
    )
  },
  tickGameDate: (state) => {
    state.gameDate += 1
    state.playerAge += 1
    if (!(state.playerAge % 12)) state.wisdomGained++
  },
  travelGameDate: (state, month) => {
    state.gameDate = month
  },
}
