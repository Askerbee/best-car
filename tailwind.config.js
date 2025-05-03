/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Dela Gothic One"', 'sans-serif'],
      },
      colors: {
        'navy': {
          50: '#f0f4f9',
          100: '#d9e2f0',
          200: '#b3c6e1',
          300: '#8da9d1',
          400: '#668dc2',
          500: '#4071b3',
          600: '#335b8f',
          700: '#26446d',
          800: '#1a2d48',
          900: '#1a365d',
          950: '#0d1829',
        },
        'red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};