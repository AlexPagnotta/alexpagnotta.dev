import { ContentType } from "./types";

export type ContentCategory = (typeof CONTENT_CATEGORIES)[number];

export const CONTENT_CATEGORIES = ["blog", "projects"] as const;

export const categoryContentTypeMap = {
  blog: ContentType.POST,
  projects: ContentType.PROJECT,
};

export const contentTypeCategoryMap = {
  [ContentType.POST]: "blog",
  [ContentType.PROJECT]: "projects",
};

export const contentTypeToCategoryDisplayMap = {
  [ContentType.POST]: "Blog",
  [ContentType.PROJECT]: "Project",
};
