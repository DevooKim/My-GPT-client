/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mygpt: {
                    DEFAULT: "#31313E",
                    primary: "#31313E",
                    second: "#363645",
                    
                },
                sidebar: {
                    DEFAULT: "#22232D",
                    primary: "#22232D",
                    second: "#323442",
                }
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: false,
    },
};
