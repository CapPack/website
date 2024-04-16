/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        "thermic-orange": "#eb3318",
        greenish: "#add456",
      },
      textDecorationColor: {
        black: "#000000",
      },
    },
  },
  plugins: [],
};
