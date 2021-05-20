module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: "#B1BDAD",
        dark: "#778B75",
        light: "#FFFFE9",
        brown: "#8A7566",
        textContrast: "#5F534C",
        lg: "#D9E5CF"
      },
      gridTemplateColumns: {
        'form': '200px 1fr'
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif'
      },
      maxHeight: {
        'garden': '400px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
