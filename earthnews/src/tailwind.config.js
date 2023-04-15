/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: { md: { min: "551px", max: "1050px" }, sm: { min: "200px", max: "550px" } },
      extend: {
        colors: { black_900: "#000000", bluegray_100: "#d9d9d9", white_A700: "#ffffff" },
        fontFamily: { coda: "Coda" },
      },
    },
  };
  