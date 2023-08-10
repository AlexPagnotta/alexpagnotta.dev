import { cx } from "class-variance-authority";

import { HeaderInfoItems, HeaderNavItems } from "./items";

type Props = {
  className?: string;
};

export const MobileHeader = ({ className }: Props) => {
  return (
    <nav
      className={cx(
        "fixed z-header top-0 inset-x-0",
        "flex justify-between items-center gap-40 w-full h-[--header-height] px-[--container-side-spacing]",
        "overflow-auto scrollbar-none backdrop-blur-md bg-white bg-opacity-50",
        className
      )}
    >
      <ul>
        <HeaderNavItems className="flex gap-24" />
      </ul>
      <ul>
        <HeaderInfoItems className="flex gap-16" />
      </ul>
    </nav>
  );
};
