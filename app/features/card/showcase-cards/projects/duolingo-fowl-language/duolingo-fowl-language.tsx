import { cx } from "class-variance-authority";
import { motion, type Variant, type Variants } from "framer-motion";

import { Image } from "~/features/ui/image";

import { type ShowcaseContentCardProps } from "../../../showcase";
import { ShowcaseContentCardLayout } from "../../layout";

import CardCoverImage from "./assets/card-cover.jpg";

type Props = ShowcaseContentCardProps;

const BgAnimationHover: Variant = {
  opacity: 0.3,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

const BgAnimationVariants: Variants = {
  initial: {
    opacity: 0.2,
  },
  hover: BgAnimationHover,
  inView: BgAnimationHover,
};

const FrameAnimationHover: Variant = {
  rotate: 4,
  x: -10,
  y: -15,
  scale: 1,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

const FrameAnimationVariants: Variants = {
  initial: {
    rotate: 8,
    x: 0,
    y: 0,
    scale: 0.96,
  },
  hover: FrameAnimationHover,
  inView: FrameAnimationHover,
};

const coverImageStyles = `
  absolute top-56 left-88 md:left-48 w-[27.5rem]
  border-[12px] border-[--color-duolingo-fl-card-cover-border]
  shadow-[-2px_-1px_6px_0px_rgba(0,_0,_0,_0.05)]
`;

export const DuolingoFowlLanguageShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout {...rest} className={cx("text-[--color-duolingo-fl-card-text]", className)}>
      <motion.div
        style={{
          background: "var(--color-duolingo-fl-card-bg)",
        }}
        className="absolute -inset-50"
        variants={BgAnimationVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <div className="relative h-192">
        <Image
          src={CardCoverImage}
          alt="A screenshot of the Duolingo Fowl Language app"
          quality={80}
          className={coverImageStyles}
          sizes="300px"
          variants={FrameAnimationVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          placeholder="blur"
        />
      </div>
    </ShowcaseContentCardLayout>
  );
};
