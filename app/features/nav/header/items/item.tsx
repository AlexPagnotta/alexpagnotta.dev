import { type Variants, motion } from "framer-motion";

type Props = {
  index: number;
  children: React.ReactNode;
};

const animationVariants: Variants = {
  initial: {
    opacity: 0,
    y: "var(--animation-y-from)",
  },
  animate: ({ index }: { index: number }) => ({
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

export const HeaderItem = ({ index, children }: Props) => {
  return (
    <motion.li
      initial="initial"
      animate="animate"
      variants={animationVariants}
      custom={{ index }}
      className="[--animation-y-from:-15px]  md:[--animation-y-from:-10px] shrink-0"
    >
      {children}
    </motion.li>
  );
};
