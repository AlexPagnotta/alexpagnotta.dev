import { type HTMLMotionProps, type Variants } from "framer-motion";

type Props = {
  index: number;
  initialDelay: number;
  cardDisabled?: boolean;
  isMdUp?: boolean;
};

const CardInitialAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: ({ index, initialDelay, cardDisabled, isMdUp }: Props) => ({
    opacity: cardDisabled ? 0.7 : 1,
    y: 0,
    transition: {
      delay: isMdUp ? initialDelay + index * 0.05 : initialDelay + index * 0.07,
      type: "spring",
      bounce: 0,
      mass: 1,
      stiffness: 140,
      damping: 20,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const CardInitialAnimationProps: (props: Props) => HTMLMotionProps<"article"> = ({
  index,
  initialDelay,
  cardDisabled,
  isMdUp,
}) => ({
  variants: CardInitialAnimationVariants,
  custom: { index, initialDelay, cardDisabled, isMdUp },
});
