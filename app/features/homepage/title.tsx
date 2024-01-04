"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

import { type ContentCategory } from "../content/categories";
import { useMediaQuery } from "../dom/hooks/use-media-query";
import { up } from "../dom/utils/screens";

import { Text } from "~/features/ui/text";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const titleAnimationVariants: Variants = {
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

const categoryPhraseAnimationVariant: Variants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

// Change phrases
const phrasesContentCategoryMap: Record<ContentCategory, string> = {
  blog: "Sometimes I write about things.",
  projects: "Some cool things I've worked on.",
  "lab-3d": "TODO: UPDATE.",
};

export const HomepageTitle = ({ children, className }: Props) => {
  const isMdUp = useMediaQuery(up("md"));

  const pathName = usePathname();
  const category = pathName.split("/")[1] as ContentCategory | undefined;

  const categoryPhrase = category && phrasesContentCategoryMap[category];

  return (
    <motion.div
      initial="initial"
      animate={isMdUp === undefined ? undefined : "animate"} // Wait for media query to resolve before animating
      variants={titleAnimationVariants}
      custom={{ isMdUp }}
      className={className}
    >
      <Text size="title-2" asChild className="whitespace-pre-wrap text-right">
        <h1>
          {children}
          {"\n"}
          {/* 
            This seems to have problems when switching fast between the categories
            see: https://github.com/framer/motion/issues/2023
          */}
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              initial="initial"
              animate="animate"
              exit="exit"
              variants={categoryPhraseAnimationVariant}
              key={`${category || "default"}-phrase`}
              className="inline-block"
            >
              {categoryPhrase || (
                <>
                  Currently building things at <span className="text-theme-color-text-primary">Wild</span>.
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </h1>
      </Text>
    </motion.div>
  );
};
