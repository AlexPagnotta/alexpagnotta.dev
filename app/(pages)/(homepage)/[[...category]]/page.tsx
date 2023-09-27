import { CONTENT_CATEGORIES, categoryContentTypeMap, type ContentCategory } from "~/features/content/categories";
import { ContentGrid } from "~/features/content/grid";
import { getAllContentFrontMatters } from "~/features/content/utils.server";
import { HomepageTitle } from "~/features/homepage/title";

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
    <div className="flex flex-col items-end gap-72 lg:gap-96">
      <HomepageTitle className="text-theme-color-text-secondary">
        Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer from
        Italy.{"\n"}Currently building things at <span className="text-theme-color-text-primary">Wild</span>.
      </HomepageTitle>
      <div className="w-full flex justify-center lg:justify-end">
        <ContentGrid items={contentItems} />
      </div>
    </div>
  );
};

export default Home;
