import { cx } from "class-variance-authority";
import React from "react";

import { Icon } from "./icon/icon-component";
import { Text } from "./text";

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props) => {
  return (
    <footer className={cx("flex justify-center lg:justify-end", className)}>
      <Text size="body-2" className="text-theme-color-text-tertiary flex items-center">
        Made With <Icon name="heart" className="inline-block w-14 mx-2 mb-1" /> & NextJS + CVA
      </Text>
    </footer>
  );
};
