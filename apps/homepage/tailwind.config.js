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
      },
      backgroundImage: {
        SignUpRectangle: "url('/SignUpRectangle.png')",
      },
      fontSize: {
        '15px': '0.9rem',
      },
    },
  },
  plugins: [],
}
