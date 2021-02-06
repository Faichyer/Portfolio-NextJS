module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        noir: '#111111'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      fontFamily: {
        'title': '"Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"',
        'barcode': '"Libre Barcode 39", "cursive"',
        'playfair': '"Playfair Display","-apple-system","BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
