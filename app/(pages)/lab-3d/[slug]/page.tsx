import { Lab3DPageContent } from "./page.client";

import { ContentType, type Lab3DFrontmatter } from "~/features/content/types";
import { getAllContentFrontMatters, getAllContentSlugs, getContentBySlug } from "~/features/content/utils.server";

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

const Page = async ({ params: { slug } }: Props) => {
  const { frontmatter } = await getContentBySlug(ContentType.LAB_3D, slug);

  // Get all lab 3d entries, and find the previous and next ones
  const entries = (await getAllContentFrontMatters([ContentType.LAB_3D])) as Lab3DFrontmatter[];
  const currentEntryIndex = entries.findIndex((item) => item.slug === slug);
  const prevItem = entries[currentEntryIndex + 1];
  const nextItem = entries[currentEntryIndex - 1];

  return <Lab3DPageContent frontmatter={frontmatter as Lab3DFrontmatter} prevItem={prevItem} nextItem={nextItem} />;
};

export default Page;
