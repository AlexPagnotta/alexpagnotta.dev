"use client";

import { cx } from "class-variance-authority";
import { motion, type Variants } from "framer-motion";

import { useMediaQuery } from "../dom/hooks/use-media-query";
import { up } from "../dom/utils/screens";

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
  const isMdUp = useMediaQuery(up("md"));

  return (
    <motion.div
      initial="initial"
      animate={isMdUp === undefined ? undefined : "animate"} // Wait for media query to resolve before animating
      variants={animationVariants}
      custom={{ isMdUp }}
      className={className}
    >
      <Text size="title-2" asChild className="whitespace-pre-wrap text-right">
        <h1>{children}</h1>
      </Text>
    </motion.div>
  );
};
