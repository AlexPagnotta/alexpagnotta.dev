import { cx } from "class-variance-authority";

import WildLogoSVG from "~/assets/svg/wild-logo.svg";
import { BaseContentCard } from "~/features/content/card/base";
import { ShowcaseContentCard } from "~/features/content/card/showcase";
import {
  CONTENT_CATEGORIES,
  categoryContentTypeMap,
  type ContentCategory,
  contentTypeCategoryMap,
} from "~/features/content/categories";
import { ContentType } from "~/features/content/types";
import { getAllContentFrontMatters } from "~/features/content/utils.server";
import { Text } from "~/features/ui/text";

type Props = {
  params: {
    category?: ContentCategory[];
  };
};

export const generateStaticParams = async () => {
  // Undefined item is for the homepage "/" slug
  return [...CONTENT_CATEGORIES.map((category) => ({ category: [category] })), { category: undefined }];
};

export const dynamicParams = false;

const contentItemGridStyles = [
  "w-full grid grid-cols-[minmax(0,35rem)] md:grid-cols-[27.2rem_27.2rem]",
  "justify-center lg:justify-end gap-24",
];

const Home = async ({ params }: Props) => {
  const category = params.category?.[0];

  const contentItems = await getAllContentFrontMatters(category ? categoryContentTypeMap[category] : undefined);

  return (
    <div className="flex flex-col items-end gap-72 lg:gap-96">
      <Text size="title-2" asChild className="relative whitespace-pre-wrap text-right text-theme-color-text-secondary">
        <h1>
          Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer
          from Italy.{"\n"}Currently building things at <span className="text-theme-color-text-primary">Wild</span>.
        </h1>
      </Text>
      <div className={cx(contentItemGridStyles)}>
        {contentItems.map((contentItem) => {
          const href = `/${contentTypeCategoryMap[contentItem.type]}/${contentItem.slug}`;
          return (
            <div key={contentItem.id} className="min-h-[27.2rem] md:aspect-square md:min-h-0">
              {contentItem.showcase ? (
                <ShowcaseContentCard
                  name={contentItem.showcase}
                  href={contentItem.type === ContentType.PROJECT ? contentItem.url : href} // TODO: Replace with href in all cases when page detail is ready
                />
              ) : (
                <BaseContentCard title={contentItem.title} type={contentItem.type} date={contentItem.date} href={href}>
                  {contentItem.excerpt}
                </BaseContentCard>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
