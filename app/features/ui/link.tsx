import { type VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import React from "react";

import { Icon } from "./icon/icon-component";

export type LinkBaseProps = VariantProps<typeof linkStyles> & {
  children?: React.ReactNode;
  arrowIcon?: React.ReactNode;
};

type NextLinkProps = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, "href" | "passHref" | "legacyBehavior">;
type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  newWindow?: boolean;
};

type Props = LinkBaseProps & NextLinkProps & LinkProps;

export const linkStyles = cva(
  [
    "inline-flex items-center gap-6",
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
  (
    { href, newWindow, underline, arrowIcon, className, children, ...rest }: Props,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const isInternalLink = href && href.startsWith("/");

    const newWindowAttrs = !isInternalLink && newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {};

    const style = linkStyles({ underline, className });

    if (isInternalLink) {
      return (
        <NextLink href={href} {...rest} ref={ref} className={style}>
          <LinkContent arrowIcon={arrowIcon}>{children}</LinkContent>
        </NextLink>
      );
    }

    return (
      <a href={href} {...rest} {...newWindowAttrs} ref={ref} className={style}>
        <LinkContent arrowIcon={arrowIcon}>{children}</LinkContent>
      </a>
    );
  }
);

export const LinkContent = ({ children, arrowIcon }: Pick<LinkBaseProps, "arrowIcon" | "children">) => {
  return (
    <>
      {children}
      {arrowIcon ? <Icon name="arrowTopLeft" className="w-10 shrink-0" /> : null}
    </>
  );
};

Link.displayName = "Link";
