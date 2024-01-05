import { contentTypeCategoryMap } from "~/features/content/categories";
import { type Lab3DFrontmatter, ContentType } from "~/features/content/types";
import { Lab3DIFrame } from "~/features/lab-3d/iframe";
import { Lab3DOverlay } from "~/features/lab-3d/overlay";

type Props = {
  frontmatter: Lab3DFrontmatter;
  prevItem?: Lab3DFrontmatter;
  nextItem?: Lab3DFrontmatter;
};

const getItemHref = (slug: string) => `/${contentTypeCategoryMap[ContentType.LAB_3D]}/${slug}`;

export const Lab3DPageContent = ({ frontmatter, prevItem, nextItem }: Props) => {
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
