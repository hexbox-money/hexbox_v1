const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: "#002D5D",
        lightBlueColor: "#002d5d25",
        orangeColor: "#E94E1B",
        yellowColor: "#FFC629",
        redColor: "#CE0E2D",
      },
      fontFamily: {
        customFont_outline_light: ['"customFont_outline_light"', "sans-serif"],
        customFont_extrabold: ['"customFont_extrabold"', "sans-serif"],
        customFont_outline_bold: ['"customFont_outline_bold"', "sans-serif"],
        customFont_outline_regular: [
          '"customFont_outline_regular"',
          "sans-serif",
        ],
        customFont_outline_extrabold: [
          '"customFont_outline_extrabold"',
          "sans-serif",
        ],
        customFont_outline_medium: [
          '"customFont_outline_medium"',
          "sans-serif",
        ],
        customFont_regular: ['"customFont_regular"', "sans-serif"],
        customFont_thin: ['"customFont_thin"', "sans-serif"],
        customFont_outline_thin: ['"customFont_outline_thin"', "sans-serif"],
        customFont_medium: ['"customFont_medium"', "sans-serif"],
        customFont_outline_black: ['"customFont_outline_black"', "sans-serif"],
        customFont_black: ['"customFont_black"', "sans-serif"],
        customFont_light: ['"customFont_light"', "sans-serif"],
        customFont_bold: ['"customFont_bold"', "sans-serif"],
      },
      animation: {
        gradient: "gradient 8s ease infinite",
        "float-1": "float1 3s ease-in-out infinite",
        "float-2": "float2 3.5s ease-in-out infinite",
        "float-3": "float3 4s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-10px, -10px) rotate(180deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(10px, -15px) rotate(-180deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-15px, -20px) rotate(180deg)" },
        },
      },
    },
  },
  plugins: [],
});
