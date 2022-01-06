import Decimal from "break_infinity.js"

export const state = () => ({
    currency: {
        energy: new Decimal(0),
        // if it hasn't been your
        days: new Decimal(0),
        weeks: new Decimal(0),
        months: new Decimal(0),
        // or even your
        years: new Decimal(0)
    }
})

export const mutations = {
    add(state, { key, value }) {
        state.currency[key] = Decimal.add(state.currency[key], value)
    },

    set(state, { key, value }) {
        state.currency[key] = value
    }
}

