import { cx } from "class-variance-authority";

import { HeaderInfoItems } from "./items/info";
import { HeaderNavItems } from "./items/nav";

type Props = {
  className?: string;
};

export const DesktopHeader = ({ className }: Props) => {
  return (
    <nav className={cx("fixed flex flex-col gap-48", className)}>
      <ul>
        <HeaderNavItems className="flex flex-col gap-24" />
      </ul>
      <ul>
        <HeaderInfoItems className="flex flex-col gap-16" />
      </ul>
    </nav>
  );
};
