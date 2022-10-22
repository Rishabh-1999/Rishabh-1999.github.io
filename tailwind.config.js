/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#b8b7b7",
                secondaryColor: "#2e2e35",
                highlightColor: "#e4aa48",
            },
            fontFamily: {
                secondaryFont: ["Nunito"],
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
