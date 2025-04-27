/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3b3b',
          600: '#ee1111',
          700: '#cc0d0d',
          800: '#a70f0f',
          900: '#891313',
        },
        secondary: {
          50: '#f0f4ff',
          100: '#e2e9ff',
          200: '#c7d4ff',
          300: '#a1b5ff',
          400: '#798eff',
          500: '#4c64ff',
          600: '#1e3aff',
          700: '#0024eb',
          800: '#001db3',
          900: '#001a8f',
        },
      },
    },
  },
  plugins: [],
};
