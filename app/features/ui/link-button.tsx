"use client";

import React from "react";

import { type LinkVariants, linkStyles } from "./link";

export const LinkButton = React.forwardRef(
  (
    { underline, className, children, ...rest }: LinkVariants & React.ComponentPropsWithRef<"button">,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} className={linkStyles({ underline, className })} {...rest}>
        {children}
      </button>
    );
  }
);

LinkButton.displayName = "LinkButton";
