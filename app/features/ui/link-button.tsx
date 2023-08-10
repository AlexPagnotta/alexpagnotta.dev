"use client";

import React from "react";

import { type LinkBaseProps, linkStyles, LinkContent } from "./link";

export const LinkButton = React.forwardRef(
  (
    { underline, arrowIcon, className, children, ...rest }: LinkBaseProps & React.ComponentPropsWithRef<"button">,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} className={linkStyles({ underline, className })} {...rest}>
        <LinkContent arrowIcon={arrowIcon}>{children}</LinkContent>
      </button>
    );
  }
);

LinkButton.displayName = "LinkButton";
