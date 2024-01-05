import { getAllContentFrontMatters } from "~/features/content/utils.server";
import { HomepageGrid } from "~/features/homepage/grid";
import { HomepageTitle } from "~/features/homepage/title";

const Page = async () => {
  const contentItems = await getAllContentFrontMatters();

  return (
    <div className="flex flex-col items-end gap-72 lg:gap-96">
      <HomepageTitle className="text-theme-color-text-secondary">
        Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer from
        Italy.
      </HomepageTitle>
      <div className="w-full flex justify-center lg:justify-end">
        <HomepageGrid items={contentItems} />
      </div>
    </div>
  );
};

export default Page;
