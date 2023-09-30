"use client";

import { useState } from "react";
import { Masonry } from "react-plock";

import { useMediaQuery } from "../dom/hooks/use-media-query";
import { up } from "../dom/utils/screens";

import { BaseContentCard } from "./card/base";
import { ShowcaseContentCard } from "./card/showcase";
import { contentTypeCategoryMap, contentTypeToCategoryDisplayMap } from "./categories";
import { type ContentFrontmatter, ContentType } from "./types";

type Props = {
  items: ContentFrontmatter[];
  className?: string;
};

export const ContentGrid = ({ items, className }: Props) => {
  const isMdUp = useMediaQuery(up("md"));

  // The react plock grid recreates the items on breakpoint changes, we keep track of the animation to avoid retriggering it
  const [isCardInitialAnimationOver, setIsCardInitialAnimationOver] = useState<boolean>(false);

  return (
    <Masonry
      items={items}
      className={className}
      config={{
        columns: [1, 2],
        gap: [24, 24],
        media: [768, 1024],
      }}
      render={(item) => {
        const href = `/${contentTypeCategoryMap[item.type]}/${item.slug}`;
        const index = items.findIndex((i) => i.id === item.id);

        return (
          <div className="max-w-[36rem] md:w-[27.2rem] md:max-w-none" key={item.id}>
            {item.showcase ? (
              <ShowcaseContentCard
                index={index}
                name={item.showcase}
                title={item.title}
                category={contentTypeToCategoryDisplayMap[item.type]}
                agency={item.type === ContentType.PROJECT ? item.agency : undefined}
                href={item.type === ContentType.PROJECT ? item.url : href} // TODO: Replace with href in all cases when page detail is ready
                isMdUp={isMdUp}
                enableInitialAnimation={!isCardInitialAnimationOver}
                onInitialAnimationComplete={() => setIsCardInitialAnimationOver(true)}
              />
            ) : (
              <BaseContentCard
                index={index}
                title={item.title}
                category={contentTypeToCategoryDisplayMap[item.type]}
                date={item.date}
                href={href}
                disabled={true} // TODO: Remove when blog posts are ready
                isMdUp={isMdUp}
                enableInitialAnimation={!isCardInitialAnimationOver}
                onInitialAnimationComplete={() => setIsCardInitialAnimationOver(true)}
              >
                {item.excerpt}
              </BaseContentCard>
            )}
          </div>
        );
      }}
    />
  );
};
