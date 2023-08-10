"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

import { iconLabelMap, type IconName } from "~/features/ui/icon/assets/map";

export type Props = {
  name: IconName;
  className?: string;
};

export const Icon = ({ name, className, ...rest }: Props) => {
  const { svg: Component, label } = iconLabelMap[name];

  return (
    <span className={className} {...rest}>
      <AccessibleIcon.Root label={label}>
        <Component />
      </AccessibleIcon.Root>
    </span>
  );
};
