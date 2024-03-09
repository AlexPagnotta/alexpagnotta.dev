"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSpinDelay } from "spin-delay";

import { Lab3DLoading } from "./loading";

type Props = {
  title: string;
  route: string;
};

const LabIFrame = React.forwardRef<HTMLIFrameElement, Props>(({ title, route, ...rest }, ref) => {
  const [hasMounted, setHasMounted] = useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const isLoadingVisible = useSpinDelay(isLoading, { delay: 500, minDuration: 300 });

  const src = `${process.env.NEXT_PUBLIC_LAB_3D_BASE_URL}/${route}`;

  return (
    <div className="relative w-full h-full">
      {/* Only load the iframe on client side, otherwise onLoad is not called on page load */}
      {hasMounted ? (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <motion.iframe
          ref={ref}
          title={title}
          src={src}
          onLoad={() => {
            setIsLoading(false);
          }}
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: !isLoading ? 1 : 0 }}
          transition={{ duration: isLoadingVisible ? 0 : 0.3 }}
          {...rest}
        />
      ) : undefined}

      <AnimatePresence>
        {isLoadingVisible && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex justify-center items-center bg-theme-color-body-bg"
          >
            <div className="w-32 h-32 md:w-48 md:h-48">
              <Lab3DLoading />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

LabIFrame.displayName = "Lab3DIFrame";

export { LabIFrame };
