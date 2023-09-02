import { type ShowcaseContentCardName } from "./card/showcase-cards/map";

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
} & ({ showcase: ShowcaseContentCardName } | { showcase?: never; excerpt: string }); // Excerpt is not needed when a showcase card is displayed

type PostFrontmatter = BaseFrontmatter & {
  type: ContentType.POST;
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
