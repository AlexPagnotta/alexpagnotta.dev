import { cva } from "class-variance-authority";

export const headerItemLinkStyle = cva(
  ["transition-colors duration-200 ease-out [&:hover:not(:disabled)]:text-theme-color-text-primary"],
  {
    variants: {
      active: {
        true: "text-theme-color-text-primary",
        false: "text-theme-color-text-secondary",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
