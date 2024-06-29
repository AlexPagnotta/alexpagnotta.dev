"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { motion } from "framer-motion";
import React from "react";

import { iconLabelMap, type IconName } from "~/features/ui/icon/assets/map";

type Props = {
  name: IconName;
  className?: string;
};

const IconComponent = React.forwardRef<HTMLSpanElement, Props>(({ name, className, ...rest }, ref) => {
  const { svg: Component, label } = iconLabelMap[name];

  return (
    <span ref={ref} className={className} {...rest}>
      <AccessibleIcon.Root label={label}>
        <Component />
      </AccessibleIcon.Root>
    </span>
  );
});

IconComponent.displayName = "Icon";

const Icon = motion(IconComponent);

export { Icon };
