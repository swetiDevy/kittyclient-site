module.exports = {
    content: ["./src/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins","Open Sans",'sans-serif'],
                // OR create a custom class name
            },
            colors: {
                'dark-gray': "#1e1e1e",
                'light-gray': "#5d5d5d",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}