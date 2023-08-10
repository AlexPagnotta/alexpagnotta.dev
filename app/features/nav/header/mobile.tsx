import { cx } from "class-variance-authority";

import { HeaderInfoItems, HeaderNavItems } from "./items";

type Props = {
  className?: string;
};

export const MobileHeader = ({ className }: Props) => {
  return (
    <nav
      className={cx(
        "flex gap-40 py-32 w-full overflow-auto scrollbar-none ",
        "relative left-1/2 right-1/2 w-screen ml-[-50vw] px-[--container-side-spacing]",
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
