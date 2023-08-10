import { cx } from "class-variance-authority";
import React from "react";

import { Text } from "./text";

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props) => {
  return (
    <footer className={cx("text-center lg:text-end", className)}>
      <Text size="body-1" className="text-theme-color-text-tertiary">
        Made With TODO & NextJS + CVA
      </Text>
    </footer>
  );
};
