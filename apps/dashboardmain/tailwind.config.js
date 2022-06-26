module.exports = {
  // presets: [require('../../packages/ui/tailwind.config.js')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2bc8ed',
          mid: '#22b6e7',
          dark: '#19a4e1',
        },
        secondary: {
          light: '#F58F63',
          mid: '#F2724F',
          dark: '#EF553B',
        },
        tertiary: {
          light: '#eceff1',
          'mid-light': '#d3d9dc',
          mid: '#a1aaae',
          'mid-dark': '#74848b',
          dark: '#414A4E',
        },
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    // base: false,
    // styled: false,
  },
}
