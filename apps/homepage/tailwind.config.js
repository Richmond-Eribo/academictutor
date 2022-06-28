module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-dark': '#2F3542',
        'text-light': '#778CA3',
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
      boxShadow: {
        card: '0px 2px 20px 2px rgba(0, 0, 0, 0.15);',
      },
      backgroundImage: {
        SignUpRectangle: "url('/SignUpRectangle.png')",
      },
      fontSize: {
        '15px': '0.9rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}
