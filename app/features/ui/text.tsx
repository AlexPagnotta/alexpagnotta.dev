import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React, { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof textStyles> & {
    asChild?: boolean;
  };

export const textStyles = cva(["font-sans"], {
  variants: {
    size: {
      "title-1": "text-title-1 lg:text-title-1-desktop",
      "title-2": "text-title-2",
      "title-3": "text-title-3",
      "body-4": "text-body-4",
      "body-3": "text-body-3",
      "body-2": "text-body-2",
      "body-1": "text-body-1",
    },
    weight: {
      light: "font-light",
      regular: "font-regular",
    },
  },
  defaultVariants: {
    size: "body-3",
  },
});

export const Text = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { size, weight, asChild, className, children, ...rest } = props;

  const Component = asChild ? Slot : "span";

  return (
    <Component ref={ref} className={textStyles({ size, weight, className })} {...rest}>
      {children}
    </Component>
  );
});

Text.displayName = "Text";
