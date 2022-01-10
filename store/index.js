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
        cost: 50000,
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
  gameDate: {
    month: 12,
    year: 1990,
  },
  playerAge: {
    month: 0,
    year: 34,
  },
  playerAgeMax: {
    month: 0,
    year: 80,
  },
  playerLivedTotal: {
    month: 0,
    year: 0,
  },
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
    }[state.gameDate.month]
  },
  currencySpent: (state) => {
    return Decimal.subtract(state.currencyTotal, state.currency)
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
  tickGameDate: (state) => {
    let gameYear = state.gameDate.year
    let gameMonth = state.gameDate.month + 1
    // Intentional: Months are 1 through 12, ages are 0 through 11.
    if (gameMonth > 12) {
      gameMonth = 1
      gameYear = gameYear + 1
    }
    let ageYear = state.playerAge.year
    let ageMonth = state.playerAge.month + 1
    let wisdomGained = 0
    if (ageMonth >= 12) {
      ageMonth = 0
      ageYear = ageYear + 1
      wisdomGained += 1
    }
    Vue.set(state.gameDate, 'year', gameYear)
    Vue.set(state.gameDate, 'month', gameMonth)
    Vue.set(state.playerAge, 'year', ageYear)
    Vue.set(state.playerAge, 'month', ageMonth)
    state.wisdomGained = state.wisdomGained + wisdomGained
  },
  travelGameDate: (state, { month, year }) => {
    Vue.set(state.gameDate, 'month', month)
    Vue.set(state.gameDate, 'year', year)
  },
}
