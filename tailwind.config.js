const colors = require('tailwindcss/colors')

const { black, white, ...rainbow } = colors

const COLOR_TYPE = ['bg', 'text', 'border']
const COLOR_NAME = Object.keys(rainbow)
const COLOR_NUMBER = Object.keys(rainbow.rose) // any color will do

const safelist = COLOR_TYPE.flatMap((type) =>
  COLOR_NAME.flatMap((name) =>
    COLOR_NUMBER.map((number) => `${type}-${name}-${number}`)
  )
)

module.exports = {
  purge: {
    safelist,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
