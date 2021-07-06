const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: {
        enabled: true,
        content: ["./*.html", "pages/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            highlight: "#FFCD05",
        },
        extend: {
            letterSpacing: {
                sowide: "0.3rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
