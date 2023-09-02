export enum ContentType {
  POST = "post",
  PROJECT = "project",
}
/* Frontmatter */

type BaseFrontmatter = {
  id: string;
  title: string;
  slug: string;
  date: string;
};

type PostFrontmatter = BaseFrontmatter & {
  type: ContentType.POST;
  excerpt: string;
};

type ProjectFrontmatter = BaseFrontmatter & {
  type: ContentType.PROJECT;
  url: string;
  // TODO: Awards
};

export type ContentFrontmatter = PostFrontmatter | ProjectFrontmatter;

/* Content */

export type BaseContent = {
  code: string;
  slug: string;
};

export type PostContent = BaseContent & {
  type: ContentType.POST;
  frontmatter: PostFrontmatter;
};

export type ProjectContent = BaseContent & {
  type: ContentType.PROJECT;
  frontmatter: ProjectFrontmatter;
};

export type Content = PostContent | ProjectContent;
