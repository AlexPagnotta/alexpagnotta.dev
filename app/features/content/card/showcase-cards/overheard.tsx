import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { ShowcaseContentCardLayout } from "./layout";

type Props = ShowcaseContentCardProps;

export const OverheardShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      {...rest}
      className={cx("bg-[--color-overheard-card-bg] text-[--color-overheard-card-text]", className)}
    >
      <div className="w-full" />
    </ShowcaseContentCardLayout>
  );
};
