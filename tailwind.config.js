/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slateBg: '#eef2f6',
        navyText: '#13253f',
        cardBorder: '#dbe3ec',
      },
      boxShadow: {
        card: '0 10px 25px -18px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
}

