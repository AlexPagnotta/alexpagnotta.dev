import { contentTypeCategoryMap } from "~/features/content/categories";
import { ContentType, type LabContent, type LabFrontmatter } from "~/features/content/types";
import { getAllContentFrontMatters, getAllContentSlugs, getContentBySlug } from "~/features/content/utils.server";
import { LabIFrame } from "~/features/lab/iframe";
import { LabOverlay } from "~/features/lab/overlay";

type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const contentItems = await getAllContentSlugs([ContentType.LAB]);
  return contentItems.map(({ slug }) => ({ slug }));
};

export const dynamicParams = false;

const getItemHref = (slug: string) => `/${contentTypeCategoryMap[ContentType.LAB]}/${slug}`;

const Page = async ({ params: { slug } }: Props) => {
  const { frontmatter } = (await getContentBySlug(ContentType.LAB, slug)) as LabContent;

  // Get all lab entries, and find the previous and next ones
  const entries = (await getAllContentFrontMatters([ContentType.LAB])) as LabFrontmatter[];
  const currentEntryIndex = entries.findIndex((item) => item.slug === slug);
  const prevItem = entries[currentEntryIndex + 1];
  const nextItem = entries[currentEntryIndex - 1];

  return (
    <main className="relative w-full h-full">
      <LabIFrame title={frontmatter.title} route={frontmatter.route} />
      <LabOverlay
        title={frontmatter.title}
        excerpt={frontmatter.excerpt}
        prevItemHref={prevItem && getItemHref(prevItem.slug)}
        nextItemHref={nextItem && getItemHref(nextItem.slug)}
      />
    </main>
  );
};

export default Page;
