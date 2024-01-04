import { type ShowcaseContentCardName } from "../card/showcase-cards/map";

export enum ContentType {
  BLOG_POST = "blog-post",
  PROJECT = "project",
}

/* Frontmatter */

type BaseFrontmatter = {
  id: string;
  title: string;
  slug: string;
  assetsPath: string;
  date: string;
} & ({ showcase: ShowcaseContentCardName; excerpt?: never } | { showcase?: never; excerpt: string }); // Excerpt is not needed when a showcase card is displayed

type BlogPostFrontmatter = BaseFrontmatter & {
  type: ContentType.BLOG_POST;
};

type ProjectFrontmatter = BaseFrontmatter & {
  type: ContentType.PROJECT;
  url: string;
  agency: string;
  // TODO: Awards
};

export type ContentFrontmatter = BlogPostFrontmatter | ProjectFrontmatter;

/* Content */

export type BaseContent = {
  markdown: string;
};

export type BlogPostContent = BaseContent & {
  type: ContentType.BLOG_POST;
  frontmatter: BlogPostFrontmatter;
};

export type ProjectContent = BaseContent & {
  type: ContentType.PROJECT;
  frontmatter: ProjectFrontmatter;
};

export type Content = BlogPostContent | ProjectContent;
