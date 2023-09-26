import { type Variants, motion } from "framer-motion";

type Props = {
  index: number;
  isMdUp: boolean;
  children: React.ReactNode;
};

type AnimationVariantsProps = Pick<Props, "index" | "isMdUp">;
const animationVariants: Variants = {
  initial: ({ isMdUp }: AnimationVariantsProps) => ({
    opacity: 0,
    y: isMdUp ? -10 : -15,
  }),
  animate: ({ index }: AnimationVariantsProps) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      type: "spring",
      bounce: 0,
      mass: 1,
      stiffness: 180,
      damping: 20,
    },
  }),
};

export const HeaderItem = ({ index, isMdUp, children }: Props) => {
  return (
    <motion.li initial="initial" animate="animate" custom={{ index, isMdUp }} variants={animationVariants}>
      {children}
    </motion.li>
  );
};
