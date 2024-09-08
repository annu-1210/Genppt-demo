/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Elza: ['"elza"', "sans-serif"]
      },
      colors: {
        orange: 'rgba(239, 108, 0, 1)',
        yellow: 'rgba(231, 167, 5, 1)',
        circleYellow: 'rgba(255, 215, 112, 1)',
        textBlackColor: 'rgba(72, 68, 70, 1)',
        textWhiteColor: 'rgba(255, 247, 239, 1)',
        black: 'rgba(0, 0, 0, 1)',
        white: 'rgb(255, 255, 255)',
        tooltipBg: 'rgba(255, 247, 239, 0.8)',
        linearGradient1: 'rgba(255, 234, 217, 0.7) ',
        linearGradient2: 'rgba(255, 234, 217, 0.4)',
        CardGradient1:'rgba(238, 176, 125, 0.7)',
        CardGradient2:'rgba(238, 176, 125, 0.4)',

      },
      boxShadow: {
        'tooltipS': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'tooltip1': '0px 20px 40px 0px rgba(0, 0, 0, 0.1)',

      },
      lineHeight: {
        'stats': '60px',
      }

    },

  },
  plugins: [],
}

