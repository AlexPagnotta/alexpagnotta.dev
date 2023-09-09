/* eslint-disable @typescript-eslint/no-var-requires */
const typographyPlugin = require("@tailwindcss/typography");

module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => {
        const [textBody3FontSize, body3Options] = theme("fontSize.body-3");
        const [textBody3FontSizeDesktop, body3OptionsDesktop] = theme("fontSize.body-3-desktop");

        return {
          // Update base font settings with values from config
          DEFAULT: {
            css: {
              fontSize: textBody3FontSize,
              ...body3Options,
              "h1, h2, h3, h4, h5": {
                fontWeight: theme("fontWeight.regular"),
              },
              a: {
                fontWeight: theme("fontWeight.regular"),
              },
              blockquote: {
                fontWeight: theme("fontWeight.regular"),
              },
              strong: {
                fontWeight: theme("fontWeight.regular"),
              },
              // TODO: Style code blocks or replace with Shiki etc.
            },
          },
          lg: { css: { fontSize: textBody3FontSizeDesktop, ...body3OptionsDesktop } },
        };
      },
    },
  },
  plugins: [typographyPlugin],
};
