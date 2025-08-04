/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.html",
        "./index.html",
    ],
    theme: {
        extend: {
            animation: {
                'slide-fade': 'slideFade 0.4s ease-out',
            },

            fontFamily: {
                destaque: ['"Dancing Script"', 'cursive'],
                texto: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                'cheap-pine': ['Cheap Pine W00 Sans', 'sans-serif'],
                'nitti': ['Nitti Normal', 'monospace'],
            },
            keyframes: {
                slideFade: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],

}