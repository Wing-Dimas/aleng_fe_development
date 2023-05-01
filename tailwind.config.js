/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        exs: "480px",
      },
      boxShadow: {
        custom: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        "title": "3.75rem",
        "heading1": "3rem",
        "heading2": "2rem",
        "heading3": "1.25rem",
        "body1": "1rem",
        "body2": "1rem",
        "caption1": "0.875rem",
        "caption2": "0.75rem",
        "button": "1rem",
        "button-mobile": "0.75rem",
        "body1-mobile": "0.875rem",
        "body2-mobile": "0.75rem",
        "caption-mobile": "0.75rem",
        "heading3-mobile": "1rem",
        "heading2-mobile": "1.5rem",
      },
      fontWeight: {
        "title": 700,
        "heading1": 700,
        "heading2": 600,
        "heading3": 600,
        "body1": 600,
        "body2": 400,
        "caption1": 400,
        "caption2": 400,
        "button": 500,
        "button-mobile": 600,
        "body1-mobile": 600,
        "body2-mobile": 500,
        "caption-mobile": 400,
        "heading3-mobile": 600,
        "heading2-mobile": 600,
      },
      colors: {
        custom: {
          "discover-gray": '#F3F3F4',
          "primary-red": "#D2001A",
          "secondary-yellow": "#FDD05C",
          "black": "#252525",
          "dark-grey": "#615A56",
          "light-grey": "#ABACAC",
          "white": "#FAFAFA",
          // bg: "#F6F5F2",
          "bg": "#FFFFFF",
          "gradient1": "#FDD05C",
          "gradient2": "#D2001A",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jua: ["Jua", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
