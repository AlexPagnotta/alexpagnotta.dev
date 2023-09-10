import { cx } from "class-variance-authority";

import { ContentBody } from "~/features/content/body";
import { contentTypeCategoryMap, type ContentCategory, categoryContentTypeMap } from "~/features/content/categories";
import { ContentHero } from "~/features/content/hero";
import { ContentType } from "~/features/content/types";
import { getAllContentSlugs, getContentBySlug } from "~/features/content/utils.server";

type Props = {
  params: {
    category: ContentCategory;
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const contentItems = await getAllContentSlugs();

  return contentItems.map(({ slug, type }) => ({ category: contentTypeCategoryMap[type], slug }));
};

export const dynamicParams = false;

const contentHeroStyles = [
  "mb-80 lg:mb-96",
  "pl-[calc((var(--container-width)-48rem)/2-var(--container-side-spacing))] lg:pl-0", // Align left margin with content body on tablet bp
];

export const Content = async ({ params: { category, slug } }: Props) => {
  const contentType = categoryContentTypeMap[category];

  const { frontmatter, markdown } = await getContentBySlug(contentType, slug);

  const isProject = frontmatter.type === ContentType.PROJECT;

  return (
    <article>
      <ContentHero
        title={frontmatter.title}
        date={isProject ? undefined : frontmatter.date}
        href={isProject ? frontmatter.url : undefined}
        className={cx(contentHeroStyles)}
      />
      <ContentBody frontmatter={frontmatter} markdown={markdown} className="max-w-[48rem] mx-auto lg:ml-auto lg:mr-0" />
    </article>
  );
};

export default Content;
