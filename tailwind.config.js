/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        emd: "888px",
      },
      boxShadow: {
        custom: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        title: "60px",
        heading1: "48px",
        heading2: "32px",
        heading3: "20px",
        body1: "16px",
        body2: "16px",
        caption1: "14px",
        caption2: "12px",
        button: "16px",
        button_mobile: "12px",
        body1_mobile: "14px",
        body2_mobile: "12px",
        caption_mobile: "12px",
        heading3_mobile: "16px",
        heading2_mobile: "24px",
      },
      fontWeight: {
        title: 700,
        heading1: 700,
        heading2: 600,
        heading3: 600,
        body1: 600,
        body2: 400,
        caption1: 400,
        caption2: 400,
        button: 500,
        button_mobile: 600,
        body1_mobile: 600,
        body2_mobile: 500,
        caption_mobile: 400,
        heading3_mobile: 600,
        heading2_mobile: 600,
      },
      colors: {
        custom: {
          primary_red: "#D2001A",
          secondary_yellow: "#FDD05C",
          black: "#252525",
          dark_grey: "#615A56",
          light_grey: "#ABACAC",
          white: "#FAFAFA",
          bg: "#F6F5F2",
          gradient1: "#FDD05C",
          gradient2: "#D2001A",
          bg_yellow: "#F6F0E1",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jua: ["Jua", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
