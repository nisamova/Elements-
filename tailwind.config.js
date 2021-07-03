module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      neutral: "#ee6c4d",
      primary: "#3D5A80",
      secondary: "#98C1D9",
      tertiary: "#E0FBFC",
      black: "293241",
      white: "#ffffff"
    },
    fontFamily: {
      body: ["Roboto"]
    }
    //extend: {}
  },

  variants: {
    extend: {}
  },
  plugins: []
}
