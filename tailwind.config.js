/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          
          '25%': { transform: 'rotate(90deg)' },
          
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 3s linear infinite',
      },

      fontFamily: {
        'Josefin': ['josefin Sans', 'sans-serif'] ,
        'Edu': ['Edu VIC WA NT Beginner', 'cursive']
      },
      backgroundColor:{
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        button: 'var(--color-bg-button)',
      },

      textColor:{
        accent: 'var(--color-text-accent)',
        primary:'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        btnText:'var(--color-bg-secondary)'
      },

      borderColor:{
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        accent: 'var(--color-bg-accent)'
      }
    },
  },
  plugins: [],
}
