/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#424242",
    },
    fontFamily: {
      serif: ["var(--font-lora)"],
      sans: ["var(--font-merriweather-sans)"],
    },
    // fontSize:{}
    // fontWeight: {}
    // borderRadius: {}
    extend: {
      screens: {
        "hover-supported": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
