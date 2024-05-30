import { cx } from "class-variance-authority";
import { type Variants, motion, type Variant, type Transition } from "framer-motion";

import { type ShowcaseContentCardProps } from "../../../showcase";
import { ShowcaseContentCardLayout } from "../../layout";

type Props = ShowcaseContentCardProps;

const AnimationTransition: Transition = {
  type: "spring",
  stiffness: 165,
  damping: 25,
};

const CardAnimationHover = ({ index }: { index: number }): Variant => ({
  opacity: 1,
  x: "-100%",
  scale: index === 4 ? 1 : 0.9,
  transition: AnimationTransition,
});

const CardAnimationVariants: Variants = {
  initial: ({ index }: { index: number }) => ({
    opacity: 0.6,
    scale: index === 3 ? 1 : 0.9,
  }),
  hover: CardAnimationHover as Variant,
  inView: CardAnimationHover as Variant,
};

export const CarouselContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      className={cx("bg-[--color-carousel-card-bg] text-[--color-carousel-card-text]", className)}
      {...rest}
    >
      <div className="h-[19.6rem] flex gap-8-px justify-center items-center rotate-[-18deg]">
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            className="w-[10.8rem] h-[14.8rem] shrink-0 rounded-[0.8rem]"
            style={{
              background: "var(--color-carousel-card-cards-gradient)",
            }}
            custom={{ index }}
            variants={CardAnimationVariants}
            transition={AnimationTransition}
          />
        ))}
      </div>
    </ShowcaseContentCardLayout>
  );
};
