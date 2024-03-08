"use client";

import { cx } from "class-variance-authority";
import { getMDXComponent, type MDXContentProps } from "mdx-bundler/client";
import React, { type Ref } from "react";

import { type Content } from "../content/types";
import { Image } from "../ui/image";
import { Link } from "../ui/link";

type Props = {
  frontmatter: Content["frontmatter"];
  markdown: Content["markdown"];
  className?: string;
};

// MDX Components

type MDXComponents = NonNullable<MDXContentProps["components"]>;

const MdxLink: MDXComponents["a"] = ({ ref, ...props }) => (
  <Link {...props} ref={ref as Ref<HTMLAnchorElement>} underline />
);

const MdxImage: MDXComponents["Image"] = ({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt}
    sizes="(max-width: 768px) 100vw, 480px"
    rounded
    className="w-full"
    placeholder="blur"
    data
    {...props}
  />
);

const getComponents = (frontmatter: Content["frontmatter"]): MDXContentProps["components"] => ({
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
