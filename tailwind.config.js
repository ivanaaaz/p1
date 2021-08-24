module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FEE2E2',
        secondary: {
          50: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
