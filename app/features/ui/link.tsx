import { type VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import React from "react";

type NextLinkProps = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, "href" | "passHref" | "legacyBehavior">;
type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  newWindow?: boolean;
};

export type LinkVariants = VariantProps<typeof linkStyles>;
type Props = NextLinkProps & LinkProps & LinkVariants;

export const linkStyles = cva(
  [
    "inline-flex items-center",
    "transition-colors duration-200 ease-out [&:hover:not(:disabled)]:text-theme-color-text-primary",
    "tap-highlight-none disabled:cursor-not-allowed disabled:opacity-60", // LinkButton Style
  ],
  {
    variants: {
      underline: {
        true: "border-b-2 border-current",
        false: "",
      },
    },
    defaultVariants: {
      underline: false,
    },
  }
);

export const Link = React.forwardRef(
  ({ href, newWindow, underline, className, children, ...rest }: Props, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    const isInternalLink = href && href.startsWith("/");

    const newWindowAttrs = !isInternalLink && newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {};

    const style = linkStyles({ underline, className });

    if (isInternalLink) {
      return (
        <NextLink href={href} {...rest} ref={ref} className={style}>
          {children}
        </NextLink>
      );
    }

    return (
      <a href={href} {...rest} {...newWindowAttrs} ref={ref} className={style}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
