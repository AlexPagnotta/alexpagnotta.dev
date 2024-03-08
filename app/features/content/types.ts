import { type ShowcaseContentCardName } from "../card/showcase-cards/map";

export enum ContentType {
  BLOG_POST = "blog-post",
  PROJECT = "project",
  LAB_3D = "lab-3d",
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

export type Lab3DFrontmatter = BaseFrontmatter & {
  type: ContentType.LAB_3D;
  route: string;
};

export type ContentFrontmatter = BlogPostFrontmatter | ProjectFrontmatter | Lab3DFrontmatter;

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

export type Lab3DContent = BaseContent & {
  type: ContentType.LAB_3D;
  frontmatter: Lab3DFrontmatter;
};

export type Content = BlogPostContent | ProjectContent | Lab3DContent;
