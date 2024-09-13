/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        light: 'var(--light-color)',
        linearb: 'var(--linear-bg)'
      }
    },
  },
  plugins: [
  ],
}
