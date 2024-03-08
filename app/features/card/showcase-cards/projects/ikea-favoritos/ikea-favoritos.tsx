import { cx } from "class-variance-authority";
import { type Variants, motion, type Variant } from "framer-motion";

import { type ShowcaseContentCardProps } from "../../../showcase";
import { ShowcaseContentCardLayout } from "../../layout";

type Props = ShowcaseContentCardProps;

const DoorAnimationHover: Variant = {
  opacity: 1,
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

const DoorAnimationVariants: Variants = {
  initial: {
    opacity: 0.6,
  },
  hover: DoorAnimationHover,
  inView: DoorAnimationHover,
};

export const IkeaFavoritosShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      className={cx("bg-[--color-ikea-favoritos-card-bg] text-[--color-ikea-favoritos-card-text]", className)}
      {...rest}
    >
      <div className="w-full flex justify-end pr-56-px md:pr-24-px pt-18">
        <motion.div
          className="h-[19.6rem] w-[16rem] rounded-t-full"
          style={{
            background: "var(--color-ikea-favoritos-card-door-gradient)",
          }}
          variants={DoorAnimationVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </ShowcaseContentCardLayout>
  );
};
