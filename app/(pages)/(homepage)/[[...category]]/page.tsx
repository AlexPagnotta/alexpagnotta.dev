import { CONTENT_CATEGORIES, categoryContentTypeMap, type ContentCategory } from "~/features/content/categories";
import { ContentGrid } from "~/features/content/grid";
import { getAllContentFrontMatters } from "~/features/content/utils.server";
import { Text } from "~/features/ui/text";

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
      <Text size="title-2" asChild className="relative whitespace-pre-wrap text-right text-theme-color-text-secondary">
        <h1>
          Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer
          from Italy.{"\n"}Currently building things at <span className="text-theme-color-text-primary">Wild</span>.
        </h1>
      </Text>
      <div className="w-full flex justify-center lg:justify-end">
        <ContentGrid items={contentItems} />
      </div>
    </div>
  );
};

export default Home;
