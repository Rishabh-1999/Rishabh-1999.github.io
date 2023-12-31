/**
 * @Owner: Rishabh Anand
 * @Desc: Tailwind Configuration
 **/

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#b8b7b7",
        secondaryColor: "#2e2e35",
        highlightColor: "#e4aa48",
        greyScorpion: "#5e5e5e",
        "blue-tuna": "#2e2e35",
        "grey-nobel": "#b8b7b7",
        "grey-alto": "#dadada",
        alabaster: "#fafafa",
        mischka: "#d2d3db",
      },
      fontFamily: {
        secondaryFont: ["Nunito"],
        ConcertOne: ["Concert One", "cursive"],
      },
      maxWidth: {
        "5.5xl": "68rem",
        "7.5xl": "84rem",
        "8.5xl": "92rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  darkMode: "class",
};
