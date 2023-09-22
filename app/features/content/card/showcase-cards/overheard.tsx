import { cx } from "class-variance-authority";
import { type Variants, type Variant } from "framer-motion";

import { type ShowcaseContentCardProps } from "../showcase";

import { ShowcaseContentCardLayout } from "./layout";

import { Image } from "~/features/ui/image";

type Props = ShowcaseContentCardProps;

type PhoneAnimationProps = { isScreenOff: boolean };

const PhoneAnimationHover: Variant = {
  rotate: 3,
  opacity: 1,
  transition: {
    rotate: {
      duration: 0.3,
      ease: "easeOut",
    },
    opacity: {
      duration: 0.1,
    },
  },
};

const FrameAnimationVariants: Variants = {
  initial: ({ isScreenOff }: PhoneAnimationProps) => ({
    rotate: 0,
    opacity: isScreenOff ? 1 : 0,
  }),
  hover: PhoneAnimationHover as Variant,
  inView: PhoneAnimationHover as Variant,
};

const PhoneImageProps = {
  width: 555,
  height: 1080,
  quality: 80,
  className: "absolute top-8 right-72 md:right-48 w-[15rem]",
  sizes: "150px",
  variants: FrameAnimationVariants,
  transition: {
    rotate: {
      duration: 0.3,
      ease: "easeOut",
    },
    opacity: {
      duration: 0.2,
    },
  },
};

export const OverheardShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      {...rest}
      className={cx("bg-[--color-overheard-card-bg] text-[--color-overheard-card-text]", className)}
    >
      <div className="relative h-216">
        <Image
          src="/content/projects/overheard/images/card-cover-screen-off.png"
          alt="An old Nokia dumb phone with a screen that says 'Overheard'"
          {...PhoneImageProps}
          custom={{ isScreenOff: true }}
        />
        <Image
          src="/content/projects/overheard/images/card-cover-screen-on.png"
          alt=""
          {...PhoneImageProps}
          custom={{ isScreenOff: false }}
        />
      </div>
    </ShowcaseContentCardLayout>
  );
};
