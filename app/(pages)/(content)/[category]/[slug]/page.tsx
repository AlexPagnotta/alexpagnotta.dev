import { ContentBody } from "~/features/content/body/body";
import { contentTypeCategoryMap, type ContentCategory, categoryContentTypeMap } from "~/features/content/categories";
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

export const Content = async ({ params: { category, slug } }: Props) => {
  const contentType = categoryContentTypeMap[category];

  const { markdown } = await getContentBySlug(contentType, slug);

  return (
    <div>
      <ContentBody markdown={markdown} />
    </div>
  );
};

export default Content;
