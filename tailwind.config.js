/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost Variable", "Raleway Variable", "sans-serif"],
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
