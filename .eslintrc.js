module.exports = {
  root: true,
  extends: ["next", "plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [
    {
      files: [
        "**/*.d.ts",
        "./app/**/{page,layout,not-found,error,global-error,route,template,default}.ts?(x)",
        "./middleware.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "spaced-comment": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],

    "react/no-unescaped-entities": "off",
    "react/self-closing-comp": "error",
    "react/no-unknown-property": "warn",

    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",

    "@next/next/no-img-element": "off",

    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        args: "none",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],

    "import/no-default-export": "warn",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
          {
            pattern: "/**",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
