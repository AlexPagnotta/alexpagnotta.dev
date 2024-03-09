import { type ShowcaseContentCardName } from "../card/showcase-cards/map";

export enum ContentType {
  BLOG_POST = "blog-post",
  PROJECT = "project",
  LAB = "lab",
}

/* Frontmatter */

type BaseFrontmatter = {
  id: string;
  title: string;
  slug: string;
  date: string;
  assetsPath: string;
} & ({ showcase: ShowcaseContentCardName; excerpt?: never } | { showcase?: never; excerpt: string }); // Excerpt is not needed when a showcase card is displayed

export type BlogPostFrontmatter = BaseFrontmatter & {
  type: ContentType.BLOG_POST;
};

export type ProjectFrontmatter = BaseFrontmatter & {
  type: ContentType.PROJECT;
  url: string;
  agency: string;
  // TODO: Awards
};

export type LabFrontmatter = BaseFrontmatter & {
  type: ContentType.LAB;
  route: string;
};

export type ContentFrontmatter = BlogPostFrontmatter | ProjectFrontmatter | LabFrontmatter;

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

export type LabContent = BaseContent & {
  type: ContentType.LAB;
  frontmatter: LabFrontmatter;
};

export type Content = BlogPostContent | ProjectContent | LabContent;
