/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkRomantic: "#ff6b81",
        lightPink: "#ffe6f0",
        softPurple: "#d8b4fe",
        goldAccent: "#FFD700",
      },
      fontFamily: {
        romantic: ["'Dancing Script', cursive"],
        normal: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
}