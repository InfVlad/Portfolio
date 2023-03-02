/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#141625",
                "primary-purple": "#B59FF9",
                "secondary-purple": "#3E32F0",
                "primary-blue": "#88C8FF",
                "secondary-blue": "#32EEF0",
            },
        },
        screens: {
            ssm: "320px",
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    plugins: [],
}
