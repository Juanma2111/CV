/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                spacemono: ["Space Mono", "monospace"],
                dosis: ["Dosis", "sans-serif"],
                bogle: ["BBH Sans Bogle", "sans-serif"],
                game: ['"Press Start 2P"', "system-ui"],
            },
        },
    },
    plugins: [],
};
