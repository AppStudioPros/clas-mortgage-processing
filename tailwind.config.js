/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary teal — muted, professional
        teal2: {
          50:  '#f0faf9',
          100: '#d2f1ed',
          200: '#a9e2db',
          300: '#74ccc3',
          400: '#44b3a9',
          500: '#2a9d8f',
          600: '#207d72',
          700: '#1a635b',
          800: '#164f49',
          900: '#12403c',
        },
        // Accent lavender — dusty, NOT neon
        lavender: {
          50:  '#f6f4fb',
          100: '#ede8f6',
          200: '#dad3ee',
          300: '#c0b3e2',
          400: '#a290d0',
          500: '#8a74c0',
          600: '#7b6fa0',
          700: '#5d4f7d',
          800: '#4b4264',
          900: '#3d3753',
        },
        cream: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e8e8ea',
          300: '#d4d4d8',
          400: '#a1a1aa',
        },
        slate2: {
          900: '#2a3548',
          800: '#3a4660',
          700: '#4d5a75',
          600: '#697389',
          500: '#8a93a6',
        },
        rose: {
          400: '#d4a5a0',
          500: '#c08d87',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      keyframes: {
        scrollLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 90%, 100%': { transform: 'rotate(0deg)' },
          '93%': { transform: 'rotate(-8deg)' },
          '96%': { transform: 'rotate(6deg)' },
        },
        blink: {
          '0%, 96%, 100%': { transform: 'scaleY(1)' },
          '98%': { transform: 'scaleY(0.1)' },
        },
      },
      animation: {
        'scroll-left': 'scrollLeft 38s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'wave': 'wave 4s ease-in-out infinite',
        'blink': 'blink 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
