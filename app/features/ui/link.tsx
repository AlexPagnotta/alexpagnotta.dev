"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { motion, type Variants } from "framer-motion";
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

const ArrowIconAnimationVariants: Variants = {
  hover: {
    x: [0, 10, 10, -10, 0],
    y: [0, -10, -10, 10, 0],
    opacity: [null, 0, 0, 0, 1],
    transition: { duration: 0.3, times: [0, 0.4, 0.6, 0.6, 1], ease: "linear" },
  },
};

export const linkStyles = cva(
  [
    "inline-flex",
    "tap-highlight-none disabled:cursor-not-allowed disabled:opacity-60", // LinkButton Style
  ],
  {
    variants: {
      underline: {
        true: "underline decoration-2 underline-offset-4 decoration-current",
        false: "no-underline",
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

    const newWindowAttrs = !isInternalLink || newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {};

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
  return arrowIcon ? (
    <motion.span className="inline-flex items-center gap-6" whileHover="hover">
      {children}
      {arrowIcon ? (
        <Icon
          name="arrowTopLeft"
          className="w-10 shrink-0"
          variants={ArrowIconAnimationVariants}
          transition={{
            duration: 0.15,
          }}
        />
      ) : null}
    </motion.span>
  ) : (
    <>{children}</>
  );
};

Link.displayName = "Link";
