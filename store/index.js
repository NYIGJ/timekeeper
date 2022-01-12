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

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'prehistoric',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 80,
      baseReward: 3600,

      workerLevel: 0,
      nextWorkerCost: 3600,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Sundial',
      worker: 'Stone Carver',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'classical',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 160,
      baseReward: 13600,

      workerLevel: 0,
      nextWorkerCost: 13600,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Astrolabe',
      worker: 'Mathematician',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'middle ages',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 20,
      baseReward: 300,

      workerLevel: 0,
      nextWorkerCost: 300,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Hourglass',
      worker: 'Glassblower',

      unlocked: true,
      minDateUnlocked: 1100 * 12,
      unlockEra: 'early modern',
      cost: 100,
      created: false,

      completion: 0,
      completionRequired: 10,
      baseReward: 10,

      workerLevel: 0,
      nextWorkerCost: 250,
      nextWorkerFactor: 1.6,

      unlockThreshold: { tech: null, currency: 10000 },
    },
    {
      instrument: 'Pocket Watch',
      worker: 'Miniaturist',

      unlocked: true,
      minDateUnlocked: 1600 * 12,
      unlockEra: 'early modern',
      cost: 1000,
      created: false,

      completion: 0,
      completionRequired: 20,
      baseReward: 200,

      workerLevel: 0,
      nextWorkerCost: 500,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: 0, currency: new Decimal(10e5) },
    },
    {
      instrument: 'Atomic Clock',
      worker: 'Scientist',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'modern',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 80,
      baseReward: 3200,

      workerLevel: 0,
      nextWorkerCost: 3200,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Quantum Clock',
      worker: 'Artificial Intelligence',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'future',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 160,
      baseReward: 12800,

      workerLevel: 0,
      nextWorkerCost: 12800,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Mechanical Clock',
      worker: 'Engineer',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'middle ages',
      cost: 10,
      created: false,

      completion: 0, // how close it is to giving currency. 10 gained per second.
      completionRequired: 10, // should be divisible by 10
      baseReward: 5, // currency added when the bar is completed

      workerLevel: 0, // 0 = not hired; 1+ = hired
      nextWorkerCost: 50, // currency cost of next worker
      nextWorkerFactor: 1.5, // worker cost *= this factor after each purchase

      unlockThreshold: { tech: null, currency: 0 },
    },
    {
      instrument: 'Atlantean Clock',
      worker: 'Fish Tamer',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'prehistoric',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 320,
      baseReward: 52800,

      workerLevel: 0,
      nextWorkerCost: 500,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Digital Clock',
      worker: 'Technician',

      unlocked: true,
      minDateUnlocked: -1,
      unlockEra: 'modern',
      cost: 0,
      created: false,

      completion: 0,
      completionRequired: 40,
      baseReward: 800,

      workerLevel: 0,
      nextWorkerCost: 800,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
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
      name: 'Train an Apprentice',
      description:
        'One man can only spend so much time staring at clocks each day. Hiring a second may make this easier.',
      unlockCriteria: {
        unit: 'instruments',
        value: 1,
      },
      completionCriteria: {
        unit: 'apprenticeLevels',
        value: 5,
      },
      unlocked: true,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    {
      name: 'Study Time Magic',
      description:
        "As time ticks away you begin to ponder the mysteries of time's origins and possibilities.",
      unlockCriteria: {
        unit: 'apprenticeLevels',
        value: 1,
      },
      completionCriteria: {
        unit: 'spareTime',
        value: 250,
      },
      unlocked: true,
      viewed: false,
      complete: false,
      resetOnPrestige: true,
    },
    {
      name: 'Create the Time Machine',
      description:
        'Your magnum opus. Soon you will be able to control time itself.',
      unlockCriteria: {
        unit: 'missionsCompleted',
        value: ['Train an Apprentice', 'Study Time Magic'],
      },
      completionCriteria: {
        unit: 'spareTime',
        value: 1000,
      },
      unlocked: false,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    {
      name: 'Time to Cheat Death',
      description:
        'Your body seems to be failing you. ' +
        'Write a book to pass your knowedge to your younger self through the time machine. ' +
        "Now where's your pen...",
      unlockCriteria: {
        unit: 'timeJumpsBackwards',
        value: 1,
      },
      completionCriteria: {
        unit: 'maxAge',
      },
      unlocked: false,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    {
      // update doPrestige (mutation) if this is renamed
      name: 'Time Travel Precision',
      description:
        'The time machine could target a certain month instead of a decade, ' +
        'with the proper calibration.',
      unlockCriteria: {
        unit: 'missionsCompleted',
        value: ['Time to Cheat Death', 'Create the Time Machine'],
      },
      completionCriteria: {
        unit: 'spareTime',
        value: 10000,
      },
      unlocked: false,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    {
      name: 'Time to Cheat Death... Again',
      description:
        'Another life well lived. ' +
        'Add a few chapters to the tome you received and send it back again.',
      unlockCriteria: {
        unit: 'missionsCompleted',
        value: ['Time to Cheat Death', 'Create the Time Machine'],
      },
      completionCriteria: {
        unit: 'maxAge',
      },
      unlocked: false,
      viewed: false,
      complete: false,
      resetOnPrestige: true,
    },
  ],

  gameDate: 1400 * 12,
  playerAge: 30 * 12,
  playerAgeMax: 60 * 12,
  playerLivedTotal: 0,
  wisdomGained: 0, // wisdom gained so far on this run, not applied until player sends the book.
  wisdomApplied: 0, // wisdom from previous runs
  totalLifetimes: 1,
  timeJumpsBackwards: 0,
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
  ageText: (state) => {
    const year = Math.floor(state.playerAge / 12)
    const month = state.playerAge % 12

    return `${year}y${month}m`
  },
  ageMaxText: (state) => {
    const year = Math.floor(state.playerAgeMax / 12)
    const month = state.playerAgeMax % 12

    return `${year}y${month}m`
  },
  missionIsCompleted: (state) => (missionName) => {
    const mission = state.missions.find((m) => m.name === missionName)

    return mission && mission.complete
  },
  apprenticeLevels: (state) =>
    state.processes.reduce(
      (totalLevels, process) => (totalLevels += process.workerLevel),
      0
    ),
  instruments: (state) =>
    state.processes.reduce(
      (totalInstruments, process) =>
        process.created ? totalInstruments + 1 : totalInstruments,
      0
    ),
  currentEra: (state) => {
    if (state.gameDate < 100 * 12) {
      return 'prehistoric'
    } else if (state.gameDate < 999 * 12) {
      return 'classical'
    } else if (state.gameDate < 1400 * 12) {
      return 'middle ages'
    } else if (state.gameDate < 1750 * 12) {
      return 'early modern'
    } else if (state.gameDate < 2100 * 12) {
      return 'modern'
    } else if (state.gameDate < 2500 * 12) {
      return 'future'
    } else {
      return 'distant future'
    }
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
  completeMission: (state, missionName) => {
    const index = state.missions.findIndex((m) => m.name === missionName)
    Vue.set(state.missions[index], 'complete', true)
  },
  unlockMission: (state, missionName) => {
    const index = state.missions.findIndex((m) => m.name === missionName)
    Vue.set(state.missions[index], 'unlocked', true)
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
  doPrestige: (state) => {
    state.currency = new Decimal(0)
    state.wisdomApplied += state.wisdomGained
    state.wisdomGained = 0
    state.totalLifetimes += 1
    state.timeJumpsBackwards += 1
    state.playerLivedTotal += state.playerAge
    // TODO: refactor next 3 lines if getters can be used in mutators: missionIsCompleted('Time Travel Precision')
    const precisionMissionIndex = state.missions.findIndex(
      (m) => m.name === 'Time Travel Precision'
    )
    const precisionMission = state.missions[precisionMissionIndex]
    if (precisionMission.completed) {
      state.playerAge = 30 * 12
      state.gameDate = 1400 * 12
    } else {
      state.playerAge = 8 * 12
      state.gameDate = 1378 * 12
    }
  },
  doTimeTravel: (state, monthNumber) => {},
}
