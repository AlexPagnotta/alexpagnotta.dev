import { Slot } from "@radix-ui/react-slot";
import { cx } from "class-variance-authority";
import React, { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
  children?: React.ReactNode;
};

const containerStyles = "mx-auto px-[--container-side-spacing] max-w-[--container-max-width]";

export const Container = React.forwardRef<HTMLDivElement, Props>(({ asChild, children, className, ...rest }, ref) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component ref={ref} className={cx(containerStyles, className)} {...rest}>
      {children}
    </Component>
  );
});

Container.displayName = "Container";
