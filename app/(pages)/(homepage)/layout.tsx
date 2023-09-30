import { type ReactNode } from "react";

import { HomepageTitle } from "~/features/homepage/title";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-end gap-72 lg:gap-96">
      <HomepageTitle className="text-theme-color-text-secondary">
        Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer from
        Italy.{"\n"}Currently building things at <span className="text-theme-color-text-primary">Wild</span>.
      </HomepageTitle>
      {children}
    </div>
  );
};

export default Layout;
