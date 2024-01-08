"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

/**
 * Workaround to enable exit animations on page transitions while using the app router.
 * See: https://github.com/framer/motion/issues/1375#issuecomment-1784255089
 */
export const PageTransitionWrapper = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/**
       * We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
       * The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
       * During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.
       */}
      <motion.div key={pathname} id="transition-wrapper">
        <RouteFreezeWrapper>{children}</RouteFreezeWrapper>
      </motion.div>
    </AnimatePresence>
  );
};

const RouteFreezeWrapper = ({ children }: Props) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
};
