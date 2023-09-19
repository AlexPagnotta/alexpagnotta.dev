import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { ShowcaseContentCardLayout } from "./layout";

type Props = ShowcaseContentCardProps;

export const IkeaFavoritosShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      {...rest}
      className={cx("bg-[--color-ikea-favoritos-card-bg] text-[--color-ikea-favoritos-card-text]", className)}
    >
      <div className="w-full flex justify-end pr-56-px md:pr-24-px pt-18">
        <div
          className="h-[19.6rem] w-[16rem] rounded-t-full"
          style={{
            background: "var(--color-ikea-favoritos-card-door-gradient)",
          }}
        />
      </div>
    </ShowcaseContentCardLayout>
  );
};
