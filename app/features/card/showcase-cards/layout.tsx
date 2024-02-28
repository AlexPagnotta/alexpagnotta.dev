import { cx } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";

import { CardInitialAnimationProps } from "../initial-animation";
import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

type Props = ShowcaseContentCardProps & {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const ShowcaseContentCardLayout = ({
  index,
  title,
  category,
  href,
  agency,
  animationInitialDelay = 0,
  className,
  style,
  children,
  isMdUp,
  ...rest
}: Props) => {
  // TODO: Account for hover supported, using useMediaQuery, so that we also have the "inView" behavior on tablet (?)

  return (
    <Link href={href} className="w-full">
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
          <div className="flex flex-col gap-2 px-[--card-spacing] pt-[--card-spacing] z-10">
            <Text size="title-3" asChild>
              <h2>{title}</h2>
            </Text>
            <Text size="body-1">{[category, agency].filter(Boolean).join(" • ")}</Text>
          </div>
          {children}
        </motion.div>
      </motion.article>
    </Link>
  );
};
