"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Masonry } from "react-plock";

import { BaseContentCard } from "../card/base";
import { ShowcaseContentCard } from "../card/showcase";
import {
  type ContentCategory,
  contentTypeCategoryMap,
  contentTypeToCategoryDisplayMap,
  categoryContentTypeMap,
} from "../content/categories";
import { type ContentFrontmatter, ContentType } from "../content/types";
import { useMediaQuery } from "../dom/hooks/use-media-query";
import { up } from "../dom/utils/screens";

type WrapperProps = {
  items: ContentFrontmatter[];
};

type GridProps = {
  filteredItems: WrapperProps["items"];
  isInitialTransitionAnimation: boolean;
  onAnimationComplete?: () => void;
};

export const HomepageGrid = ({ items }: WrapperProps) => {
  // True when we are doing the first animation, on full reload or coming from different page
  // In this case we add a delay to wait for sidebar and title animations
  const [isInitialTransitionAnimation, setIsInitialTransitionAnimation] = useState<boolean>(true);

  const pathName = usePathname();
  const category = pathName.split("/")[1] as ContentCategory | undefined;

  const filteredItems = category ? items.filter((item) => item.type === categoryContentTypeMap[category]) : items;

  return (
    <AnimatePresence mode="wait">
      <Grid
        key={`grid-${category || "home"}`}
        filteredItems={filteredItems}
        isInitialTransitionAnimation={isInitialTransitionAnimation}
        onAnimationComplete={() => setIsInitialTransitionAnimation(false)}
      />
    </AnimatePresence>
  );
};

const Grid = ({ filteredItems, isInitialTransitionAnimation, onAnimationComplete }: GridProps) => {
  const isMdUp = useMediaQuery(up("md"));

  const [animationEnabled, setIsAnimationEnabled] = useState<boolean>(true);

  const animationInitialDelay = isInitialTransitionAnimation ? (isMdUp ? 0.4 : 0.3) : 0;

  return (
    <motion.div
      // Disable mount animation after the initial one, needed cause the grid items are re-created on breakpoint changes
      // so the animation would be triggered again
      initial={animationEnabled ? "initial" : false}
      animate={isMdUp === undefined ? undefined : "animate"} // Wait for media query to resolve before animating
      exit="exit"
      variants={{ initial: {}, animate: {}, exit: {} }}
      onAnimationComplete={() => {
        setIsAnimationEnabled(false);
        onAnimationComplete?.();
      }}
      className="w-full md:w-auto"
    >
      <Masonry
        items={filteredItems}
        config={{
          columns: [1, 2],
          gap: [24, 24],
          media: [768, 1024],
        }}
        render={(item) => {
          const href = `/${contentTypeCategoryMap[item.type]}/${item.slug}`;
          const index = filteredItems.findIndex((i) => i.id === item.id); // Get real index, ad the grid return the id based on rows

          return (
            <div className="max-w-[36rem] w-full mx-auto md:w-[27.2rem] md:max-w-none" key={item.id}>
              {item.showcase ? (
                <ShowcaseContentCard
                  index={index}
                  name={item.showcase}
                  title={item.title}
                  category={contentTypeToCategoryDisplayMap[item.type]}
                  agency={item.type === ContentType.PROJECT ? item.agency : undefined}
                  href={item.type === ContentType.PROJECT ? item.url : href} // TODO: Replace with href in all cases when page detail is ready
                  animationInitialDelay={animationInitialDelay}
                  isMdUp={isMdUp}
                />
              ) : (
                <BaseContentCard
                  index={index}
                  title={item.title}
                  category={contentTypeToCategoryDisplayMap[item.type]}
                  date={item.date}
                  href={href}
                  animationInitialDelay={animationInitialDelay}
                  isMdUp={isMdUp}
                >
                  {item.excerpt}
                </BaseContentCard>
              )}
            </div>
          );
        }}
      />
    </motion.div>
  );
};
