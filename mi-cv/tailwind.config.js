/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dongle: ['Dongle', 'sans-serif'],
        bogle: ['BBH Sans Bogle', 'sans-serif'],
        game: ['"Press Start 2P"', 'system-ui'],
      }
    },
  },
  plugins: [],
}

