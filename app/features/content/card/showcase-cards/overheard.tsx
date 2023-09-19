import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { ShowcaseContentCardLayout } from "./layout";

import { Image } from "~/features/ui/image";

type Props = ShowcaseContentCardProps;

export const OverheardShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      {...rest}
      className={cx("bg-[--color-overheard-card-bg] text-[--color-overheard-card-text]", className)}
    >
      <div className="relative h-216">
        <Image
          src="/content/projects/overheard/images/card-cover.png"
          alt="An old Nokia dumb phone with a screen that says 'Overheard'"
          width={555}
          height={1080}
          quality={80}
          className="absolute top-8 right-72 md:right-48 w-[15rem] rotate-[24deg]"
          sizes="150px"
        />
      </div>
    </ShowcaseContentCardLayout>
  );
};
