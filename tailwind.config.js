// const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        elzaLight: ['light-elza', 'Arial', 'sans-serif'],
        elzaNormal: ['normal-elza', 'Arial', 'sans-serif'],
        elzaMedium: ['medium-elza', 'Arial', 'sans-serif'],
        elzaSemibold: ['semibold-elza', 'Arial', 'sans-serif'],
        elzaBold: ['bold-elza', 'Arial', 'sans-serif'],
      },
      colors: {
        orange: 'rgba(239, 108, 0, 1)',
        yellow: 'rgba(231, 167, 5, 1)',
        circleYellow: 'rgba(255, 215, 112, 1)',
        textBlackColor: 'rgba(72, 68, 70, 1)',
        textWhiteColor: 'rgba(255, 247, 239, 1)',
        black: 'rgba(0, 0, 0, 1)',
        BoldBlack: 'rgba(34, 24, 28, 1)',
        white: 'rgb(255, 255, 255)',
        tooltipBg: 'rgba(255, 247, 239, 0.8)',
        statsCardBg: 'rgba(255, 255, 255, 0.9)',
        linearGradient1: 'rgba(255, 234, 217, 0.7) ',
        linearGradient2: 'rgba(255, 234, 217, 0.4)',
        CardGradient1: 'rgba(238, 176, 125, 0.7)',
        CardGradient2: 'rgba(238, 176, 125, 0.4)',
        ReviewerGradient1: 'rgba(255, 255, 255, 0.7) ',
        ReviewerGradient2: 'rgba(255, 255, 255, 0.4) ',
        Footerbg: 'rgba(34, 24, 28, 1)',
        FooterTextColor: 'rgba(156, 131, 141, 1)',
      },
      boxShadow: {
        'tooltipS': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'tooltip1': '0px 20px 40px 0px rgba(0, 0, 0, 0.1)',
        'Reviewbox-shadow': '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      lineHeight: {
        'stats': '60px',
      },
      backgroundImage: {
        'ellipse': "url('/Images/bg-ellipse.png')",
        'ellipse2': "url('/Images/bg-ellipse-2.png')",
        'ellipse3': "url('/Images/bg-ellipse-3.png')",
        
      },
      screens: {
        'mobile': '426px',
        'laptop': '1440px',
        'halfxl': '1327px',
      }

    },

  },
  plugins: [],
}

