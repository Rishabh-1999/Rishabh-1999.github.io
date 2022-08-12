/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            textColor: {
                "orange-anzac": "#e4aa48",
                "grey-alto": "#dadada",
            },
            backgroundColor: {
                "grey-scorpion": "#5e5e5e",
            },
            colors: {
                "grey-scorpion": "#5e5e5e",
            },
        },
    },
    plugins: [],
};
