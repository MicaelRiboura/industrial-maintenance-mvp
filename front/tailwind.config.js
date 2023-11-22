/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          400: '#282C35',
          800: '#1B1C21',
        },
        primary: {
          500: '#41E170',
        },
      }
    },
  },
  plugins: [],
}

