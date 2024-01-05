"use client";

import { type VariantProps, cva, cx } from "class-variance-authority";
import { motion, type Variants } from "framer-motion";
import NextLink from "next/link";
import React from "react";

import { Icon } from "./icon/icon-component";

type AnchorElementProps = React.ComponentPropsWithoutRef<"a"> & {
  newWindow?: boolean;
  disabled?: boolean;
};
type NextLinkProps = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, "href" | "passHref" | "legacyBehavior">;

type BaseLinkProps = AnchorElementProps & NextLinkProps;

type Props = BaseLinkProps &
  VariantProps<typeof linkStyles> & {
    arrowIcon?: React.ReactNode;
  };

const ArrowIconAnimationVariants: Variants = {
  hover: {
    x: [0, 10, 10, -10, 0],
    y: [0, -10, -10, 10, 0],
    opacity: [null, 0, 0, 0, 1],
    transition: { duration: 0.3, times: [0, 0.4, 0.6, 0.6, 1], ease: "linear" },
  },
};

const linkStyles = cva("inline-flex", {
  variants: {
    underline: {
      true: "underline decoration-2 underline-offset-4 decoration-current",
      false: "no-underline",
    },
  },
  defaultVariants: {
    underline: false,
  },
});

/** Unstyled link component used for polymorphic components */
export const BaseLink = React.forwardRef(
  (
    { href, newWindow, disabled, className, children, ...rest }: BaseLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const isInternalLink = href && href.startsWith("/");

    const newWindowAttrs = !isInternalLink || newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {};

    const style = cx(className, disabled && "opacity-60 pointer-events-none");

    if (isInternalLink) {
      return (
        <NextLink href={href} className={style} {...rest} ref={ref}>
          {children}
        </NextLink>
      );
    }

    return (
      <a href={href} className={style} {...rest} {...newWindowAttrs} ref={ref}>
        {children}
      </a>
    );
  }
);

BaseLink.displayName = "BaseLink";

export const Link = React.forwardRef(
  (
    { href, newWindow, underline, arrowIcon, className, children, ...rest }: Props,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <BaseLink href={href} newWindow={newWindow} {...rest} ref={ref} className={linkStyles({ underline, className })}>
        {arrowIcon ? (
          <motion.span className="inline-flex items-center gap-6" whileHover="hover">
            {children}
            {arrowIcon ? (
              <Icon
                name="arrowTopRight"
                className="w-10 shrink-0"
                variants={ArrowIconAnimationVariants}
                transition={{
                  duration: 0.15,
                  ease: "linear",
                }}
              />
            ) : null}
          </motion.span>
        ) : (
          <>{children}</>
        )}
      </BaseLink>
    );
  }
);

Link.displayName = "Link";
