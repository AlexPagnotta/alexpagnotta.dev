import { cx } from "class-variance-authority";
import { getMDXComponent, type MDXContentProps } from "mdx-bundler/client";
import React from "react";

import { type Content } from "../content/types";
import { MdxImage } from "../markdown/image/image";
import { MdxLink } from "../markdown/link";

type Props = {
  frontmatter: Content["frontmatter"];
  markdown: Content["markdown"];
  className?: string;
};

// MDX Components

export type MDXComponents = NonNullable<MDXContentProps["components"]>;

const getComponents = (frontmatter: Content["frontmatter"]): MDXComponents => ({
  a: MdxLink,
  Image: ({ src, ...props }) => <MdxImage src={`/${frontmatter.assetsPath}/images/${src}`} {...props} />,
});

// Body

export const PostBody = ({ frontmatter, markdown, className }: Props) => {
  const Content = React.useMemo(() => getMDXComponent(markdown), [markdown]);

  const components = getComponents(frontmatter);

  return (
    <div className={cx("prose lg:prose-lg text-justify", className)}>
      <Content components={components} />
    </div>
  );
};
