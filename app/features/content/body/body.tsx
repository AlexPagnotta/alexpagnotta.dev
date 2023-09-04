"use client";

import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

import { type Content } from "../types";

type Props = {
  markdown: Content["markdown"];
};

export const ContentBody = ({ markdown }: Props) => {
  const PostContent = React.useMemo(() => getMDXComponent(markdown), [markdown]);

  return (
    <PostContent
    //   components={{
    //     h2: Heading,
    //     h3: Subheading,
    //     ol: OrderedList,
    //     a: Link
    //   }}
    />
  );
};
