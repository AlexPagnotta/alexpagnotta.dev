"use client";

import { cx } from "class-variance-authority";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

import { type Content } from "./types";

type Props = {
  markdown: Content["markdown"];
  className?: string;
};

export const ContentBody = ({ markdown, className }: Props) => {
  const Content = React.useMemo(() => getMDXComponent(markdown), [markdown]);

  return (
    <div className={cx("text-justify", className)}>
      <Content
      //   components={{
      //     h2: Heading,
      //     h3: Subheading,
      //     ol: OrderedList,
      //     a: Link
      //   }}
      />
    </div>
  );
};
