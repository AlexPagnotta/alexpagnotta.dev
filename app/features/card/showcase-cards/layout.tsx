import { cx } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";

import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

import { CardInitialAnimationProps } from "../initial-animation";
import { type ShowcaseContentCardProps } from "../showcase";

type Props = ShowcaseContentCardProps & {
  fullCardLink?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const ShowcaseContentCardLayout = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      index,
      title,
      category,
      href,
      agency,
      animationInitialDelay = 0,
      fullCardLink = true,
      className,
      style,
      children,
      isMdUp,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full" ref={ref}>
        <Link href={fullCardLink ? href : undefined} className="w-full">
          <motion.article
            className={cx("w-full rounded-md overflow-hidden", className)}
            style={{
              ...style,
            }}
            {...CardInitialAnimationProps({ index, initialDelay: animationInitialDelay, isMdUp })}
            {...rest}
          >
            <motion.div
              className="relative isolate w-full h-full"
              initial="initial"
              whileHover={isMdUp ? "hover" : undefined}
              whileInView={!isMdUp ? "inView" : undefined}
              viewport={{
                margin: "-30% 0px -30% 0px",
                amount: 0.5,
              }}
            >
              <div className="px-[--card-spacing] pt-[--card-spacing] z-10 pointer-events-none">
                <Link href={!fullCardLink ? href : undefined}>
                  <div className="flex flex-col gap-2 pointer-events-auto">
                    <Text size="title-3" asChild>
                      <h2>{title}</h2>
                    </Text>
                    <Text size="body-1">{[category, agency].filter(Boolean).join(" • ")}</Text>
                  </div>
                </Link>
              </div>
              {children}
            </motion.div>
          </motion.article>
        </Link>
      </div>
    );
  }
);

ShowcaseContentCardLayout.displayName = "ShowcaseContentCardLayout";
