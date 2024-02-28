import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../../../showcase";
import { ShowcaseContentCardLayout } from "../../layout";

type Props = ShowcaseContentCardProps;

export const BallpitContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      className={cx(
        "bg-[--color-ballpit-card-bg] text-[--color-ballpit-card-text] border border-[--color-ballpit-card-border] min-h-[30rem]",
        className
      )}
      {...rest}
    >
      <div className="absolute inset-0 -z-10">{/* TODO: Add 2d balls here */}</div>
    </ShowcaseContentCardLayout>
  );
};
