/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Elza : ['"elza"', "sans-serif"]
      }
    },
    colors: {
      orange: 'rgba(239, 108, 0, 1)',
      yellow: 'rgba(231, 167, 5, 1)',
      textBlackColor: 'rgba(72, 68, 70, 1)',
      textWhiteColor: 'rgba(255, 247, 239, 1)',
      black: 'rgba(0, 0, 0, 1)',
      white: 'rgb(255, 255, 255)',

    }
  },
  plugins: [],
}

