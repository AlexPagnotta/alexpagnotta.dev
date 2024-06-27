import { ContentType, type LabContent, type LabFrontmatter } from "~/features/content/types";
import { getAllContentSlugs, getContentBySlug } from "~/features/content/utils.server";
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

const Page = async ({ params: { slug } }: Props) => {
  const { frontmatter } = (await getContentBySlug(ContentType.LAB, slug)) as LabContent;

  return (
    <main className="relative w-full h-full">
      <LabIFrame title={frontmatter.title} route={frontmatter.route} />
      <LabOverlay title={frontmatter.title} excerpt={frontmatter.excerpt} actionLink={frontmatter.github} />
    </main>
  );
};

export default Page;
