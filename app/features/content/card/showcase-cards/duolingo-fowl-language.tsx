import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { ShowcaseContentCardLayout } from "./layout";

type Props = ShowcaseContentCardProps;

export const DuolingoFowlLanguageShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      {...rest}
      className={cx("text-[--color-duolingo-fl-card-text]", className)}
      style={{
        background: "var(--color-duolingo-fl-card-bg)",
      }}
    >
      <div className="w-full" />
    </ShowcaseContentCardLayout>
  );
};
