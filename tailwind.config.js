const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./*/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.success' : {
          padding: '5px',
          color: 'white',
          margin: '5px 0 15px 0',
          background: 'green',
        },
        '.error' : {
          padding: '5px',
          color: 'white',
          margin: '5px 0 15px 0',
          background: 'red',
        },
      })
    })
  ]
}
