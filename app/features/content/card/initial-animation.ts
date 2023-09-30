import { type HTMLMotionProps, type Variants } from "framer-motion";

type Props = {
  index: number;
  cardDisabled?: boolean;
  isMdUp?: boolean;
  onInitialAnimationComplete?: () => void;
};

const CardInitialAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: ({ index, cardDisabled, isMdUp }: Props) => ({
    opacity: cardDisabled ? 0.7 : 1,
    y: 0,
    transition: {
      delay: isMdUp ? 0.4 + index * 0.05 : 0.3 + index * 0.07,
      type: "spring",
      bounce: 0,
      mass: 1,
      stiffness: 140,
      damping: 20,
    },
  }),
};

export const CardInitialAnimationProps: (props: Props) => HTMLMotionProps<"article"> = ({
  index,
  cardDisabled,
  isMdUp,
  onInitialAnimationComplete,
}) => ({
  initial: "initial",
  animate: isMdUp === undefined ? undefined : "animate", // Wait for media query to resolve before animating
  variants: CardInitialAnimationVariants,
  custom: { index, cardDisabled, isMdUp },
  onAnimationComplete: (anim) => {
    if (anim === "animate") onInitialAnimationComplete?.();
  },
});
