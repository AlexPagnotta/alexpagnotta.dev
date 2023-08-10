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
      <Text size="body-1" className="text-theme-color-text-tertiary flex items-center">
        Made With <Icon name="hearth" className="inline-block w-10 mx-2" /> & NextJS + CVA
      </Text>
    </footer>
  );
};
