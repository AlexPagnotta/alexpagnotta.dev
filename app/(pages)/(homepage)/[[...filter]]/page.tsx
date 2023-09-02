import { cx } from "class-variance-authority";

import WildLogoSVG from "~/assets/svg/wild-logo.svg";
import { BaseCard } from "~/features/card/base";
import { ContentType } from "~/features/content/types";
import { getAllContentFrontMatters } from "~/features/content/utils.server";
import { Text } from "~/features/ui/text";

type Props = {
  params: {
    filter?: FilterSlug[];
  };
};

type FilterSlug = (typeof FILTER_SLUGS)[number];

const FILTER_SLUGS = ["blog", "projects"] as const;

const filterSlugContentTypeMap = {
  blog: ContentType.POST,
  projects: ContentType.PROJECT,
};

export const generateStaticParams = async () => {
  // Undefined item is for the homepage "/" slug
  return [...FILTER_SLUGS.map((filterSlug) => ({ filter: [filterSlug] })), { filter: undefined }];
};

export const dynamicParams = false;

export const Home = async ({ params }: Props) => {
  const filter = params.filter?.[0];

  const contentItems = await getAllContentFrontMatters(filter ? filterSlugContentTypeMap[filter] : undefined);

  return (
    <div className="flex flex-col items-end gap-72 lg:gap-96">
      <Text size="title-1" asChild className="relative whitespace-pre-wrap text-right text-theme-color-text-secondary">
        <h1>
          Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer
          from Italy.{"\n"}
          <span className="hidden lg:inline">Currently building </span>
          <span className="lg:hidden">Building </span>
          <span className="whitespace-nowrap">
            things at <span className="inline-block w-56" />
            <WildLogoSVG className={cx("h-[0.8em] text-theme-color-text-primary", "absolute right-8 bottom-10")} />.
          </span>
        </h1>
      </Text>
      <div className="w-full flex justify-center lg:justify-end flex-wrap gap-24">
        {contentItems.map((contentItem) => (
          <div key={contentItem.id} className="shrink-0 w-full max-w-[35rem] sm:w-272 h-272">
            <BaseCard
              title={contentItem.title}
              infoText="Blog • May 2023"
              className="w-full h-full"
              href={contentItem.slug}
            >
              {contentItem.type === ContentType.POST ? contentItem.excerpt : ""}
            </BaseCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
