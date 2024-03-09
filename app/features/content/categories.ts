import { ContentType } from "./types";

export type ContentCategory = (typeof CONTENT_CATEGORIES)[number];

export const CONTENT_CATEGORIES = ["blog", "projects", "lab"] as const;

export const categoryContentTypeMap: Record<ContentCategory, ContentType> = {
  blog: ContentType.BLOG_POST,
  projects: ContentType.PROJECT,
  lab: ContentType.LAB,
};

export const contentTypeCategoryMap: Record<ContentType, ContentCategory> = {
  [ContentType.BLOG_POST]: "blog",
  [ContentType.PROJECT]: "projects",
  [ContentType.LAB]: "lab",
};

export const contentTypeToCategoryDisplayMap: Record<ContentType, string> = {
  [ContentType.BLOG_POST]: "Blog",
  [ContentType.PROJECT]: "Project",
  [ContentType.LAB]: "Lab",
};
