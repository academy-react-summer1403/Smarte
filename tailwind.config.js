/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('./public/imgLand/kadr-1.png')",
      }
    },
  },
  plugins: [],
}

