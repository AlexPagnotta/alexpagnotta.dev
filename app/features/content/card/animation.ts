import { type HTMLMotionProps, type Variants } from "framer-motion";

type Props = { index: number; disabled?: boolean; isMdUp?: boolean };

const CardBaseAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: ({ index, disabled, isMdUp }: Props) => ({
    opacity: disabled ? 0.7 : 1,
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

export const CardBaseAnimationProps: (props: Props) => HTMLMotionProps<"article"> = ({ index, disabled, isMdUp }) => ({
  initial: "initial",
  animate: isMdUp === undefined ? undefined : "animate", // Wait for media query to resolve before animating
  variants: CardBaseAnimationVariants,
  custom: { index, disabled, isMdUp },
});
