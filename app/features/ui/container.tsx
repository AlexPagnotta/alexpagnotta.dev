import { Slot } from "@radix-ui/react-slot";
import React, { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
  children?: React.ReactNode;
};

const containerStyles =
  "mx-auto px-[--container-padding] max-w-[calc(var(--container-max-width)+var(--container-padding)*2)]";

export const Container = React.forwardRef<HTMLDivElement, Props>(({ asChild, children, ...rest }, ref) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component ref={ref} className={containerStyles} {...rest}>
      {children}
    </Component>
  );
});

Container.displayName = "Container";
