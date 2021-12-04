module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
          'inter': ['Inter', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
