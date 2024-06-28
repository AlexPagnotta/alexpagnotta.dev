import { cx } from "class-variance-authority";

import { contentTypeCategoryMap, type ContentCategory, categoryContentTypeMap } from "~/features/content/categories";
import { ContentType } from "~/features/content/types";
import { getAllContentSlugs, getContentBySlug } from "~/features/content/utils.server";
import { PostBody } from "~/features/post/body";
import { PostHero } from "~/features/post/hero/hero";

type Props = {
  params: {
    category: ContentCategory;
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const contentItems = await getAllContentSlugs([ContentType.BLOG_POST, ContentType.PROJECT]);

  return contentItems.map(({ slug, type }) => ({ category: contentTypeCategoryMap[type], slug }));
};

export const dynamicParams = false;

const contentHeroStyles = [
  "mb-56 lg:mb-64",
  "pl-[calc((var(--container-width)-48rem)/2-var(--container-side-spacing))] lg:pl-0", // Align left margin with content body on tablet bp
];

const Page = async ({ params: { category, slug } }: Props) => {
  const contentType = categoryContentTypeMap[category];

  const { frontmatter, markdown } = await getContentBySlug(contentType, slug);

  const isProject = frontmatter.type === ContentType.PROJECT;

  return (
    <article>
      <PostHero
        title={frontmatter.title}
        date={isProject ? undefined : frontmatter.date}
        href={isProject ? frontmatter.url : undefined}
        awards={isProject ? frontmatter.awards : undefined}
        className={cx(contentHeroStyles)}
      />
      <PostBody frontmatter={frontmatter} markdown={markdown} className="max-w-[48rem] mx-auto lg:ml-auto lg:mr-0" />
    </article>
  );
};

export default Page;
