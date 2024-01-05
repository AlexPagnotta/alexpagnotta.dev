"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { textStyles } from "./text";

type Props = React.ComponentPropsWithRef<"button"> &
  Omit<VariantProps<typeof buttonStyles>, "type"> & {
    iconButton?: boolean;
    asChild?: boolean;
  };

export const buttonStyles = cva(
  [
    "inline-flex justify-center items-center gap-8 rounded-md leading-none",
    "tap-highlight-none disabled:opacity-60 disabled:pointer-events-none",
    "transition-colors duration-200 ease-out",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-theme-color-button-primary-bg text-theme-color-button-primary-text hover:bg-theme-color-button-primary-hover-bg",
        secondary:
          "bg-theme-color-button-secondary-bg text-theme-color-button-secondary-text hover:bg-theme-color-button-secondary-hover-bg",
      },
      size: {
        sm: ["h-32", textStyles({ size: "body-3" })],
        md: ["h-40", textStyles({ size: "body-3" })],
      },
      type: {
        icon: "",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        type: "icon",
        className: "px-8-px [&_svg]:w-16",
      },
      {
        size: "sm",
        type: undefined,
        className: "px-14-px [&_svg]:w-[1em]",
      },
      { size: "md", type: "icon", className: "px-11-px [&_svg]:w-18" },
      {
        size: "md",
        type: undefined,
        className: "px-20-px [&_svg]:w-[1em]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const Button = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { variant, size, iconButton, asChild, className, children, ...rest } = props;

  const Component = asChild ? Slot : "button";

  return (
    <Component
      {...rest}
      ref={ref}
      className={buttonStyles({ variant, size, type: iconButton ? "icon" : undefined, className })}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";
