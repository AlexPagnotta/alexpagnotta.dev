/* eslint-disable @typescript-eslint/no-var-requires */
const gridAreasPlugin = require("@savvywombat/tailwindcss-grid-areas");
const addPlugin = require("tailwindcss/plugin");

const typographyConfig = require("./tailwind.config.typography.js");
const {
  baseFontSizePx,
  baseBrowserFontSizePx,
  unitToPercent,
  unitToPx,
  pxUnitToRem,
  addPxSuffix,
  createScale,
  flatten,
} = require("./tailwind.config.utils");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [typographyConfig],
  theme: {
    colors: {
      white: "rgb(var(--color-white) / <alpha-value>)",
      black: "rgb(var(--color-black) / <alpha-value>)",
      gray: {
        10: "rgb(var(--color-gray-10) / <alpha-value>)",
        20: "rgb(var(--color-gray-20) / <alpha-value>)",
        30: "rgb(var(--color-gray-30) / <alpha-value>)",
        50: "rgb(var(--color-gray-50) / <alpha-value>)",
        70: "rgb(var(--color-gray-70) / <alpha-value>)",
      },
      transparent: "transparent",
      current: "currentColor",

      theme: {
        color: {
          "body-bg": "var(--color-body-bg)",
          "text-primary": "var(--color-text-primary)",
          "text-secondary": "var(--color-text-secondary)",
          "text-tertiary": "var(--color-text-tertiary)",
          "focus-outline": "var(--color-focus-outline)",
          "card-bg": "var(--color-card-bg)",
          "button-primary-bg": "var(--color-button-primary-bg)",
          "button-primary-hover-bg": "var(--color-button-primary-hover-bg)",
          "button-primary-text": "var(--color-button-primary-text)",
          "button-secondary-bg": "var(--color-button-secondary-bg)",
          "button-secondary-hover-bg": "var(--color-button-secondary-hover-bg)",
          "button-secondary-text": "var(--color-button-secondary-text)",
        },
      },
    },
    spacing: {
      // Create spacing scale with rem units
      ...createScale({ max: 32, steps: 1, formatVal: pxUnitToRem }),
      ...createScale({ min: 32, max: 64, steps: 2, formatVal: pxUnitToRem }),
      ...createScale({ min: 68, max: 128, steps: 4, formatVal: pxUnitToRem }),
      ...createScale({ min: 136, max: 256, steps: 8, formatVal: pxUnitToRem }),
      ...createScale({ min: 272, max: 512, steps: 16, formatVal: pxUnitToRem }),
      ...createScale({ min: 544, max: 1024, steps: 32, formatVal: pxUnitToRem }),

      // Recreate same scale but with px units
      ...createScale({ max: 32, steps: 1, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 32, max: 64, steps: 2, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 68, max: 128, steps: 4, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 136, max: 256, steps: 8, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 272, max: 512, steps: 16, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 544, max: 1024, steps: 32, formatKey: addPxSuffix, formatVal: unitToPx }),
    },
    fontFamily: {
      serif: ["var(--font-literata)"],
      sans: ["var(--font-merriweather-sans)"],
    },
    fontSize: {
      ...flatten({
        "title-1": {
          DEFAULT: [pxUnitToRem(32), { lineHeight: 1.5, letterSpacing: "-0.01em" }],
          desktop: [pxUnitToRem(36), { lineHeight: 1.5, letterSpacing: "-0.01em" }],
        },
        "title-2": {
          DEFAULT: [pxUnitToRem(28), { lineHeight: 1.5, letterSpacing: "-0.01em" }],
          desktop: [pxUnitToRem(30), { lineHeight: 1.5, letterSpacing: "-0.01em" }],
        },
        "title-3": {
          DEFAULT: [pxUnitToRem(26), { lineHeight: 1.5 }],
          desktop: [pxUnitToRem(26), { lineHeight: 1.5 }],
        },
        "title-4": {
          DEFAULT: [pxUnitToRem(22), { lineHeight: 1.6 }],
          desktop: [pxUnitToRem(22), { lineHeight: 1.6 }],
        },

        "body-4": {
          DEFAULT: [pxUnitToRem(20), { lineHeight: 1.8 }],
          desktop: [pxUnitToRem(20), { lineHeight: 1.8 }],
        },
        "body-3": {
          DEFAULT: [pxUnitToRem(16), { lineHeight: 1.8 }],
          desktop: [pxUnitToRem(16), { lineHeight: 1.8 }],
        },
        "body-2": {
          DEFAULT: [pxUnitToRem(14), { lineHeight: 1.8 }],
          desktop: [pxUnitToRem(14), { lineHeight: 1.8 }],
        },
        "body-1": {
          DEFAULT: [pxUnitToRem(12), { lineHeight: 1.8 }],
          desktop: [pxUnitToRem(12), { lineHeight: 1.8 }],
        },
      }),
    },
    fontWeight: {
      light: 300,
      regular: 400,
    },
    borderRadius: {
      none: "0px",
      md: "0.8rem",
      full: "9999px",
    },
    backdropBlur: {
      md: "10px",
    },
    extend: {
      zIndex: {
        header: 100,
      },

      gridTemplateAreas: {
        "root-layout-lg": ["header . main", ". . .", "footer footer footer"],
        "root-layout": ["header", ".", "main", ".", "footer"],
      },
      gridTemplateColumns: {
        "root-layout-lg": "10rem 64px minmax(0, 1fr)",
        "root-layout": "minmax(0, 1fr)",
      },
      gridTemplateRows: {
        "root-layout-lg": "auto 6.4rem auto 6.4rem",
        "root-layout": "auto 3.2rem auto 6.4rem auto 6.4rem",
      },

      screens: {
        "hover-supported": { raw: "(hover: hover)" },
      },

      animation: {
        "lab-3d-loading-cube": "lab-3d-loading-cube 2s infinite linear",
      },
      keyframes: {
        "lab-3d-loading-cube": {
          from: { transform: "rotateY(0deg) rotateZ(20deg)" },
          to: { transform: " rotateY(360deg) rotateZ(20deg)" },
        },
      },
    },
  },
  plugins: [
    addPlugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          fontSize: unitToPercent((baseFontSizePx / baseBrowserFontSizePx) * 100),
        },
      });
    }),
    gridAreasPlugin,
  ],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
