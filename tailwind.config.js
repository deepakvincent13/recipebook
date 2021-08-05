module.exports = {
  purge: ['public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // We are adding new colors primary and secondary.
        primary: '#FF6363',
        secondary: {
          100: '#EE6363',
          200: '#FFEE63'
        }
      },
      // Here we're adding a new breakpoint class
      screens: {
        xs: "475px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
