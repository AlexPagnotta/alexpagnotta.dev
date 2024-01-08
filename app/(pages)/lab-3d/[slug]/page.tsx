import { contentTypeCategoryMap } from "~/features/content/categories";
import { ContentType, type Lab3DFrontmatter } from "~/features/content/types";
import { getAllContentFrontMatters, getAllContentSlugs, getContentBySlug } from "~/features/content/utils.server";
import { Lab3DIFrame } from "~/features/lab-3d/iframe";
import { Lab3DOverlay } from "~/features/lab-3d/overlay";

type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const contentItems = await getAllContentSlugs([ContentType.LAB_3D]);
  return contentItems.map(({ slug }) => ({ slug }));
};

export const dynamicParams = false;

const getItemHref = (slug: string) => `/${contentTypeCategoryMap[ContentType.LAB_3D]}/${slug}`;

const Page = async ({ params: { slug } }: Props) => {
  const { frontmatter } = await getContentBySlug(ContentType.LAB_3D, slug);

  // Get all lab 3d entries, and find the previous and next ones
  const entries = (await getAllContentFrontMatters([ContentType.LAB_3D])) as Lab3DFrontmatter[];
  const currentEntryIndex = entries.findIndex((item) => item.slug === slug);
  const prevItem = entries[currentEntryIndex + 1];
  const nextItem = entries[currentEntryIndex - 1];

  return (
    <main className="relative w-full h-full">
      <Lab3DIFrame route="" />
      <Lab3DOverlay
        title={frontmatter.title}
        excerpt={frontmatter.excerpt}
        prevItemHref={prevItem && getItemHref(prevItem.slug)}
        nextItemHref={nextItem && getItemHref(nextItem.slug)}
      />
    </main>
  );
};

export default Page;
