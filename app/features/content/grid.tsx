"use client";

import { Masonry } from "react-plock";

import { BaseContentCard } from "./card/base";
import { ShowcaseContentCard } from "./card/showcase";
import { contentTypeCategoryMap } from "./categories";
import { type ContentFrontmatter, ContentType } from "./types";

type Props = {
  items: ContentFrontmatter[];
  className?: string;
};

export const ContentGrid = ({ items, className }: Props) => {
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
        return (
          <div className="max-w-[36rem] md:w-[27.2rem] md:max-w-none">
            {item.showcase ? (
              <ShowcaseContentCard
                key={item.id}
                name={item.showcase}
                href={item.type === ContentType.PROJECT ? item.url : href} // TODO: Replace with href in all cases when page detail is ready
              />
            ) : (
              <BaseContentCard key={item.id} title={item.title} type={item.type} date={item.date} href={href}>
                {item.excerpt}
              </BaseContentCard>
            )}
          </div>
        );
      }}
    />
  );
};
