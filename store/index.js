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
      unlocked: true,
    },
    {
      route: '/apprentices',
      label: 'fas fa-user-friends',
      title: 'Apprentices',
      darkColor: 'rose-900',
      color: 'rose-400',
      lightColor: 'rose-200',
      unlocked: false,
    },
    {
      route: '/missions',
      label: 'fas fa-th-list',
      title: 'Missions',
      darkColor: 'sky-900',
      color: 'sky-400',
      lightColor: 'sky-200',
      unlocked: false,
    },
    {
      route: '/timemachine',
      label: 'fas fa-fast-forward',
      title: 'Time Machine',
      darkColor: 'lime-900',
      color: 'lime-400',
      lightColor: 'lime-200',
      unlocked: false,
    },
    {
      route: '/timemagic',
      label: 'fas fa-eye',
      title: 'Time Magic',
      darkColor: 'violet-900',
      color: 'violet-400',
      lightColor: 'violet-200',
      unlocked: false,
    },
    {
      route: '/wisdom',
      label: 'fas fa-book-open',
      title: 'Wisdom',
      darkColor: 'teal-900',
      color: 'teal-400',
      lightColor: 'teal-100',
      unlocked: false,
    },
  ],
  modalText: '',
  modalIsOpen: false,

  gameStopped: false,

  currency: new Decimal(0),
  currencyTotal: new Decimal(0),

  gameDate: 1400 * 12,
  gameEra: 'Early Modern',
  gameTimeTotal: 0,
  gameDateRecord: 0,

  playerAge: 30 * 12,
  playerAgeMax: 60 * 12,
  playerAgeRecord: 0,
  playerLivedTotal: 0,

  wisdomGained: 0, // wisdom gained so far on this run, not applied until player sends the book.
  wisdomApplied: 0, // wisdom from previous runs
  lifetimes: 0, // comleted lifetimes
  timeJumpsBackwards: 0,

  processes: [
    {
      instrument: 'Atlantean Clock',
      worker: 'Chronomancer',
      created: false,
      cost: 1000000000000,

      unlockEra: 'Prehistoric',
      minDateUnlocked: -12000 * 12,
      travelCost: 2400,
      visited: false,

      completion: 0,
      completionRequired: 320,
      baseReward: 500000000000,

      workerLevel: 0,
      nextWorkerCost: 5000000000000,
      baseWorkerCost: 5000000000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Sundial',
      worker: 'Shaman',
      created: false,
      cost: 10000000000,

      unlockEra: 'Antiquity',
      minDateUnlocked: -1500 * 12,
      travelCost: 2200,
      visited: false,

      completion: 0,
      completionRequired: 160,
      baseReward: 50000000000,

      workerLevel: 0,
      nextWorkerCost: 50000000000,
      baseWorkerCost: 50000000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Star Chart',
      worker: 'Astrologer',
      cost: 100000000,
      created: false,

      unlockEra: 'Early Classical',
      minDateUnlocked: -500 * 12,
      travelCost: 1800,
      visited: false,

      completion: 0,
      completionRequired: 80,
      baseReward: 50000000,

      workerLevel: 0,
      nextWorkerCost: 500000000,
      baseWorkerCost: 500000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Incense Clock',
      worker: 'Oracle',
      cost: 1000000,
      created: false,

      unlockEra: 'Classical',
      minDateUnlocked: 400 * 12,
      travelCost: 1400,
      visited: false,

      completion: 0,
      completionRequired: 40,
      baseReward: 500000,

      workerLevel: 0,
      nextWorkerCost: 5000000,
      baseWorkerCost: 5000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Astrolabe',
      worker: 'Mathematician',
      cost: 10000,
      created: false,

      unlockEra: 'Late Classical',
      minDateUnlocked: 700 * 12,
      travelCost: 1000,
      visited: false,

      completion: 0,
      completionRequired: 20,
      baseReward: 5000,

      workerLevel: 0,
      nextWorkerCost: 50000,
      baseWorkerCost: 50000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Hourglass',
      worker: 'Glassblower',
      cost: 100,
      created: false,

      unlockEra: 'Middle Ages',
      minDateUnlocked: 1100 * 12,
      travelCost: 600,
      visited: false,

      completion: 0,
      completionRequired: 10,
      baseReward: 50,

      workerLevel: 0,
      nextWorkerCost: 500,
      baseWorkerCost: 500,
      nextWorkerFactor: 1.6,

      unlockThreshold: { tech: null, currency: 10000 },
    },
    {
      instrument: 'Mechanical Clock',
      worker: 'Machinist',
      cost: 10,
      created: false,

      minDateUnlocked: 1400 * 12,
      unlockEra: 'Early Modern',
      travelCost: 400,
      visited: true,

      completion: 0, // how close it is to giving currency. 10 gained per second.
      completionRequired: 10, // should be divisible by 10
      baseReward: 5, // currency added when the bar is completed

      workerLevel: 0, // 0 = not hired; 1+ = hired
      nextWorkerCost: 50, // currency cost of next worker
      baseWorkerCost: 50, // currency cost of first worker (for prestige reset)
      nextWorkerFactor: 1.5, // worker cost *= this factor after each purchase

      unlockThreshold: { tech: null, currency: 0 },
    },
    {
      instrument: 'Pocket Watch',
      worker: 'Engineer',
      cost: 1000,
      created: false,

      unlockEra: 'Modern',
      minDateUnlocked: 1600 * 12,
      travelCost: 800,
      visited: false,

      completion: 0,
      completionRequired: 8,
      baseReward: 500,

      workerLevel: 0,
      nextWorkerCost: 5000,
      baseWorkerCost: 5000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: 0, currency: new Decimal(10e5) },
    },
    {
      instrument: 'Electric Clock',
      worker: 'Electrician',
      cost: 100000,
      created: false,

      unlockEra: 'Late Modern',
      minDateUnlocked: 1840 * 12,
      travelCost: 1200,
      visited: false,

      completion: 0,
      completionRequired: 6,
      baseReward: 50000,

      workerLevel: 0,
      nextWorkerCost: 500000,
      baseWorkerCost: 500000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Atomic Clock',
      worker: 'Scientist',
      cost: 10000000,
      created: false,

      unlockEra: 'Post-Modern',
      minDateUnlocked: 1950 * 12,
      travelCost: 1600,
      visited: false,

      completion: 0,
      completionRequired: 4,
      baseReward: 5000000,

      workerLevel: 0,
      nextWorkerCost: 50000000,
      baseWorkerCost: 50000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Quantum Clock',
      worker: 'Artificial Intelligence',
      cost: 1000000000,
      created: false,

      unlockEra: 'Near Future',
      minDateUnlocked: 2200 * 12,
      travelCost: 2000,
      visited: false,

      completion: 0,
      completionRequired: 3,
      baseReward: 500000000,

      workerLevel: 0,
      nextWorkerCost: 5000000000,
      baseWorkerCost: 5000000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Non-Euclidian Clock',
      worker: 'Befuddled Scientist',
      cost: 100000000000,
      created: false,

      unlockEra: 'Future',
      minDateUnlocked: 3333 * 12,
      travelCost: 2400,
      visited: false,

      completion: 0,
      completionRequired: 2,
      baseReward: 50000000000,

      workerLevel: 0,
      nextWorkerCost: 500000000000,
      baseWorkerCost: 500000000000,
      nextWorkerFactor: 1.8,

      unlockThreshold: { tech: null, currency: new Decimal(1e1) },
    },
    {
      instrument: 'Pulsar Clock',
      worker: 'Deep-Space Satellite',
      created: false,
      cost: 10000000000000,

      unlockEra: 'Deep Future',
      minDateUnlocked: 9000 * 12,
      travelCost: 2800,
      visited: false,

      completion: 0,
      completionRequired: 1,
      baseReward: 5000000000000,

      workerLevel: 0,
      nextWorkerCost: 50000000000000,
      baseWorkerCost: 50000000000000,
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

  // Missions
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
        value: 3,
      },
      unlocked: true,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    {
      name: 'Create the Time Machine',
      description:
        'Your magnum opus. Soon you will be able to control time itself.',
      unlockCriteria: {
        unit: 'missionsCompleted',
        value: ['Train an Apprentice'],
      },
      completionCriteria: {
        unit: 'spareTime',
        value: 300,
      },
      unlocked: false,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    {
      name: 'Study Time Magic',
      description:
        "As time ticks away you begin to ponder the mysteries of time's origins and possibilities.",
      unlockCriteria: {
        unit: 'eraVisited',
        value: 'Middle Ages',
      },
      completionCriteria: {
        unit: 'spareTime',
        value: 250,
      },
      unlocked: true,
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
        unit: 'missionsCompleted',
        value: ['Create the Time Machine'],
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
        'When you pass your wisdom to your younger self, you will restart at age 8 instead of age 30.',
      unlockCriteria: {
        unit: 'missionsCompleted',
        value: ['Time to Cheat Death', 'Create the Time Machine'],
      },
      completionCriteria: {
        unit: 'spareTime',
        value: 1e15,
      },
      unlocked: false,
      viewed: false,
      complete: false,
      resetOnPrestige: false,
    },
    // {
    //   name: 'Live Forever',
    //   description:
    //     "Seek out the philosopher's stone so that you can extend your lifespan.",
    //   unlockCriteria: {
    //     unit: 'eraVisited',
    //     value: 'Middle Ages',
    //   },
    //   completionCriteria: {
    //     unit: 'spareTime',
    //     value: 2000,
    //   },
    //   unlocked: false,
    //   viewed: false,
    //   complete: false,
    //   resetOnPrestige: false,
    // },
    {
      name: 'Cheat Death... Again',
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

  // Time Machine
  energy: 0,
  energyMax: 600, // 60 seconds
  fluxCapacitorLevel: 1,
  nextFluxCapacitorCost: 500,

  timeMachineActions: [
    {
      name: 'Activate!',
      description: 'Will it work?? Only one way to find out!',
      cost: 600,
      unlocked: true,
    },
    {
      name: 'Jump Forwards a Lot',
      description: 'This time is boring. You yearn for more interesting times.',
      cost: 1000,
      unlocked: true,
    },
    {
      name: 'Loop Back Around',
      description: '...',
      cost: 2000,
      unlocked: true,
    },
    {
      name: 'Jump Forwards a Little',
      description:
        'Visit your apprentices a few years into the future to benefit from the fruits of their labor.',
      cost: 300,
      unlocked: true,
    },
  ],

  // Time Magic
  mana: 0,
  manaMax: 100,
  philosophersStoneUnlocked: false,

  spells: [
    {
      name: 'Chrono Deluge',
      description:
        'For 30 seconds, your taps gain additional spare time equal to the total level of your Apprentices. (x{{apprenticeLevels}})',
      cost: 100,
      duration: 300,
      elapsed: 0,
      unlocked: true,
    },
    {
      name: 'Electric Touch',
      description: 'For 15 seconds, your taps gain 5 energy as well.',
      cost: 100,
      duration: 150,
      elapsed: 0,
      unlocked: false,
    },
    {
      name: 'Thermodynamic Loophole',
      description: 'For 60 seconds, your taps gain triple mana.',
      cost: 100,
      duration: 600,
      elapsed: 0,
      unlocked: false,
    },
  ],

  philosophersStoneActions: [
    {
      name: 'Empower the Stone',
      description:
        'Increase the number of months the stone adds or subtracts to your lifespan.',
    },
    {
      name: 'Forever Young',
      description: 'Decrease curreny age.',
    },
    {
      name: 'Necromancy',
      description: 'Increase maximum lifespan.',
    },
  ],
  philosophersStoneIncrement: 6,
})

export const getters = {
  activeTab(state) {
    return state.tabs.find(
      // eslint-disable-next-line no-undef
      (tab) => tab.route === $nuxt.$route.path
    )
  },
  isTabUnlocked: (state) => (title) => {
    return state.tabs.find((t) => t.title === title).unlocked
  },
  canTimeTravel: (state) => {
    if (state.playerAge.year < state.playerAgeMax.year) return true
    if (state.playerAge.year > state.playerAgeMax.year) return false
    return state.playerAge.month < state.playerAgeMax.month
  },
  gameMonth: (state) => {
    const gd = state.gameDate < 0 ? state.gameDate + 1440000 : state.gameDate
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
    }[(gd % 12) + 1]
  },
  gameYear: (state) => {
    return Math.floor(state.gameDate / 12)
  },
  gameDateRecordText: (state) => {
    return (
      (state.gameDateRecord % 12) +
      1 +
      '/' +
      Math.floor(state.gameDateRecord / 12)
    )
  },
  gameTimeTotalText: (state) => {
    return `${Math.floor(state.gameTimeTotal / 12)}y${
      state.gameTimeTotal % 12
    }m`
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
  ageRecordText: (state) => {
    const year = Math.floor(state.playerAgeRecord / 12)
    const month = state.playerAgeRecord % 12

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
  suffixedDecimalText: (state) => (n) => {
    const DIGITS_AFTER_DP = 2
    const suffixValues = { Z: 0, k: 1e3, M: 1e6, B: 1e9, T: 1e12, X: 1e15 }
    n = new Decimal(n)

    // iterate over object above to find text suffix and divsior value
    let largestSuffix = ''
    let largestValue = 0
    for (const suffix in suffixValues) {
      if (
        n.greaterThanOrEqualTo(suffixValues[suffix]) &&
        suffixValues[suffix] > largestValue
      ) {
        largestSuffix = suffix
        largestValue = suffixValues[suffix]
      }
    }

    // Special case: Small numbers are just displayed
    if (largestValue === 0) return Math.floor(n)

    // Special case: wicked large numbers are shown in scientific notation
    if (largestSuffix === 'X') {
      largestSuffix = 'e' + n.exponent
      largestValue = new Decimal.fromMantissaExponent(1, n.exponent) // eslint-disable-line new-cap
    }

    // display value is always in [1, 1000)
    let displayValue = n.divide(largestValue).toString()
    // whole exact millions, billions, etc. have no decimal part, and need one built from text
    if (!displayValue.includes('.')) displayValue += '.'

    // All suffixes should always show exactly DIGITS_AFTER_DP digits; add zeros or truncate
    const valuesBeforeDP = displayValue.substr(
      0,
      displayValue.indexOf('.')
    ).length
    let valuesAfterDP = displayValue.substr(displayValue.indexOf('.')).length
    if (valuesAfterDP > DIGITS_AFTER_DP - 1) {
      displayValue = displayValue.substr(
        0,
        valuesBeforeDP + DIGITS_AFTER_DP + 1
      )
    }
    while (valuesAfterDP < DIGITS_AFTER_DP + 1) {
      valuesAfterDP += 1
      displayValue += '0'
    }

    return displayValue + largestSuffix
  },
}

export const mutations = {
  // UI
  unlockTab: (state, title) => {
    const index = state.tabs.findIndex((t) => t.title === title)
    Vue.set(state.tabs[index], 'unlocked', true)
  },
  openModal: (state, text) => {
    state.modalText = text
    state.modalIsOpen = true
  },
  closeModal: (state) => {
    state.modalIsOpen = false
    state.modalText = ''
  },
  stopGame: (state) => {
    state.gameStopped = true
  },
  startGame: (state) => {
    state.gameStopped = false
  },

  // Currency
  addCurrency: (state, value) => {
    state.currency = Decimal.add(state.currency, value)
    state.currencyTotal = Decimal.add(state.currencyTotal, value)
  },
  spendCurrency: (state, value) => {
    value = Decimal.mul(value, -1)
    state.currency = Decimal.add(state.currency, value)
  },

  // Dates
  tickGameDate: (state) => {
    state.gameDate += 1
    state.playerAge += 1
    if (!(state.playerAge % 12)) state.wisdomGained++
    state.gameTimeTotal += 1
    if (state.playerAge > state.playerAgeRecord)
      state.playerAgeRecord = state.playerAge
    if (state.gameDate > state.gameDateRecord)
      state.gameDateRecord = state.gameDate
  },
  setPlayerAge: (state, { year, month = 0 }) => {
    state.playerAge = year * 12 + month
  },
  tickLifetime: (state) => {
    state.lifetimes += 1
  },

  // Instruments
  createInstrument: (state, instrument) => {
    const index = state.processes.findIndex((p) => p.instrument === instrument)
    Vue.set(state.processes[index], 'created', true)
  },
  tickProcess: (state, { process }) => {
    const index = state.processes.findIndex(
      (p) => p.instrument === process.instrument
    )
    Vue.set(state.processes[index], 'completion', process.completion + 1)
  },
  resetProcess: (state, { process }) => {
    const index = state.processes.findIndex(
      (p) => p.instrument === process.instrument
    )
    Vue.set(state.processes[index], 'completion', 0)
  },

  // Apprentices
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

  // Missions
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

  // Time Machine
  tickEnergy: (state) => {
    state.energy += 1 + Math.floor(state.wisdomApplied / 100)
    if (state.energy > state.energyMax) state.energy = state.energyMax
  },
  spendEnergy: (state, amount) => {
    if (amount <= state.energy) {
      state.energy -= amount
    }
  },
  upgradeMaxEnergy: (state) => {
    state.energyMax += 200
    state.fluxCapacitorLevel += 1
    state.nextFluxCapacitorCost *= 10
  },
  unlockTimeMachineAction: (state, name) => {
    const index = state.timeMachineActions.findIndex((t) => t.name === name)
    Vue.set(state.tabs[index], 'unlocked', true)
  },
  travelGameDate: (state, month) => {
    state.gameDate = month
  },
  doPrestige: (state) => {
    // sum up statistics for Wisdom tab
    state.currency = new Decimal(0)
    state.wisdomApplied += state.wisdomGained
    state.wisdomGained = 0
    state.lifetimes += 1
    state.timeJumpsBackwards += 1
    state.playerLivedTotal += state.playerAge

    // If the "Time Travel Precision" mission is done, send players back as a child for +20ish more years of life
    // TODO: refactor next 3 lines if getters can be used in mutators: missionIsCompleted('Time Travel Precision')
    const precisionMissionIndex = state.missions.findIndex(
      (m) => m.name === 'Time Travel Precision'
    )
    const precisionMission = state.missions[precisionMissionIndex]
    if (precisionMission.complete) {
      state.playerAge = 8 * 12
      state.gameDate = 1378 * 12
      state.gameEra = 'Early Modern'
    } else {
      state.playerAge = 30 * 12
      state.gameDate = 1400 * 12
      state.gameEra = 'Early Modern'
    }

    // restart missions as appropriate
    state.missions.forEach((e) => {
      if (e.resetOnPrestige) e.complete = false
    })

    // delete all apprentices
    state.processes.forEach((e) => {
      // e.visited = false // require re-travel to time period to hire
      e.workerLevel = 0
      e.nextWorkerCost = e.baseWorkerCost
    })
  },
  timeTravel: (state, { era, year = 0, month = 0 }) => {
    const newYear = year * 12 + month

    if (newYear < state.gameDate) {
      state.timeJumpsBackwards += 1
    }

    state.gameDate = newYear
    state.gameEra = era

    const processIndex = state.processes.findIndex((p) => p.unlockEra === era)
    Vue.set(state.processes[processIndex], 'visited', true)
  },

  // Time Magic
  unlockSpell: (state, name) => {
    const index = state.spells.findIndex((s) => s.name === name)
    Vue.set(state.spells[index], 'unlocked', true)
  },
  tickMana: (state) => {
    state.mana += 1 + Math.floor(state.wisdomApplied / 100)
    // apply a n% chance of extra mana for wisdom not part of a full hundred
    if (Math.random() * 100 < state.wisdomApplied % 100) state.mana += 1
    if (state.mana > state.manaMax) state.mana = state.manaMax
  },
  spendMana: (state, amount) => {
    if (amount <= state.mana) {
      state.mana -= amount
    }
  },

  // Philosper's Stone
  unlockPhilosophersStone: (state) => {
    state.philosophersStoneUnlocked = true
  },
  increasePhilosophersStoneIncrement: (state, months) => {
    state.philosophersStoneIncrement += months
  },
  extendLifespan: (state, months) => {
    state.playerAgeMax += months
    state.gameStopped = false
  },
  decreaseAge: (state, months) => {
    state.playerAge -= months
    state.gameStopped = false
  },
}
