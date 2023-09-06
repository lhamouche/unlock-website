/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-dark": "#272727",
                "color-primary": "#F9B233",
                "window-outside": "#1C262B",
                "window-inside": "#3D3F41",
            },
        },
        fontFamily: {
            "jetbrains": ["JetBrains Mono", "monospace"],
            "header": ["sans-serif"],
        }
    },
    plugins: [],
}
