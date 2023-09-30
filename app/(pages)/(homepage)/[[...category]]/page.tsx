import { CONTENT_CATEGORIES, categoryContentTypeMap, type ContentCategory } from "~/features/content/categories";
import { ContentGrid } from "~/features/content/grid";
import { getAllContentFrontMatters } from "~/features/content/utils.server";

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

const Home = async ({ params }: Props) => {
  const category = params.category?.[0];

  const contentItems = await getAllContentFrontMatters(category ? categoryContentTypeMap[category] : undefined);

  return (
    <div className="w-full flex justify-center lg:justify-end">
      <ContentGrid items={contentItems} />
    </div>
  );
};

export default Home;
