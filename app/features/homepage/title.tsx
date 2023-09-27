"use client";

import { cx } from "class-variance-authority";
import { motion, type Variants } from "framer-motion";

import { Text } from "~/features/ui/text";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const animationVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: ({ isMdUp }: { isMdUp: boolean }) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0,
      mass: 1,
      stiffness: 180,
      damping: 20,
      delay: isMdUp ? 0.3 : 0.2,
    },
  }),
};

export const HomepageTitle = ({ children, className }: Props) => {
  const wrapperProps = {
    initial: "initial",
    animate: "animate",
    variants: animationVariants,
  };

  return (
    <>
      <motion.div {...wrapperProps} custom={{ isMdUp: false }} className={cx("md:hidden", className)}>
        <TitleContent>{children}</TitleContent>
      </motion.div>
      <motion.div {...wrapperProps} custom={{ isMdUp: true }} className={cx("hidden md:block", className)}>
        <TitleContent>{children}</TitleContent>
      </motion.div>
    </>
  );
};

const TitleContent = ({ children }: Pick<Props, "children">) => {
  return (
    <Text size="title-2" asChild className="whitespace-pre-wrap text-right">
      <h1>{children}</h1>
    </Text>
  );
};
