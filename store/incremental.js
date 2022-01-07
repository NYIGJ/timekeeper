import Decimal from 'break_infinity.js'
import { currencies } from './const.js'

export const state = () => ({
  // use currencies from const as keys; initialize all values to zero
  currency: Object.keys(currencies).reduce(function (obj, x) {
    obj[x] = new Decimal(0)
    return obj
  }, {}),

  processes: [
    {
      device: 'Star Chart',
      worker: 'Shaman',
      boughtWith: null,
      produces: currencies.seasons,
      buyWorkersWith: currencies.months,
      deviceCount: new Decimal(0),
      workerCount: new Decimal(0),
      unlockThreshold: { [currencies.seasons]: 0, tech: null },
    },
    {
      device: 'Stone Calendar',
      worker: 'Stonecarver',
      boughtWith: currencies.seasons,
      produces: currencies.months,
      buyWorkersWith: currencies.days,
      deviceCount: new Decimal(0),
      workerCount: new Decimal(0),
      unlockThreshold: { [currencies.seasons]: 1, tech: null },
    },
    {
      device: 'Astrolabes',
      worker: 'Mathematician',
      boughtWith: currencies.months,
      buyWorkersWith: currencies.hours,
      produces: currencies.days,
      deviceCount: new Decimal(0),
      workerCount: new Decimal(0),
      unlockThreshold: { [currencies.days]: 10, tech: 0 },
    },
  ],

  upgrades: [
    {
      name: 'Mathematics',
      boughtWith: currencies.seasons,
      price: 100,
      purchased: false,
    },
  ],
})

export const mutations = {
  add(state, { key, value }) {
    console.log(state.currency.keys())
    state.currency[key] = Decimal.add(state.currency[key], value)
  },

  set(state, { key, value }) {
    state.currency[key] = value
  },
}
