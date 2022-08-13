/** @type {import('tailwindcss').Config} */

const localColors = {
    greyScorpion: "#5e5e5e",
    orangeAnzac: "#e4aa48",
    greyAlto: "#dadada",
    blueTuna: "#2e2e35",
    lightBlueTuna: "#34343b",
};

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    variants: {
        extend: {
            opacity: ["responsive", "hover", "focus", "group-hover"],
        },
    },
    theme: {
        extend: {
            fontFamily: {
                "architects-daughter": ["Architects Daughter", "cursive"],
            },
            fontSize: {
                "1.5xl": "1.375rem",
            },
            textColor: {
                "orange-anzac": localColors.orangeAnzac,
                "grey-alto": localColors.greyAlto,
            },
            backgroundColor: {
                "grey-scorpion": localColors.greyScorpion,
                "blue-tuna": localColors.blueTuna,
            },
            colors: {
                "grey-scorpion": localColors.greyScorpion,
                "light-blue-tuna": localColors.lightBlueTuna,
                "orange-anzac": localColors.orangeAnzac,
            },
        },
    },
    plugins: [],
};
