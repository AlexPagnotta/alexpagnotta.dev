import { cx } from "class-variance-authority";

import { HeaderInfoItems } from "./items/info";
import { HeaderNavItems } from "./items/nav";

type Props = {
  className?: string;
};

export const MobileHeader = ({ className }: Props) => {
  return (
    <nav
      className={cx(
        "fixed z-header top-0 inset-x-0",
        "flex justify-between items-center gap-32 w-full h-[--header-height] px-[--container-side-spacing]",
        "overflow-auto scrollbar-none backdrop-blur-md bg-theme-color-body-bg bg-opacity-80",
        className
      )}
    >
      <ul className="shrink-0">
        <HeaderNavItems className="flex gap-16" />
      </ul>
      <ul className="shrink-0">
        <HeaderInfoItems className="flex gap-16" />
      </ul>
    </nav>
  );
};
