import { ContentType } from "./types";

export type ContentCategory = (typeof CONTENT_CATEGORIES)[number];

export const CONTENT_CATEGORIES = ["blog", "projects"] as const;

export const categoryContentTypeMap: Record<ContentCategory, ContentType> = {
  blog: ContentType.POST,
  projects: ContentType.PROJECT,
};

export const contentTypeCategoryMap: Record<ContentType, ContentCategory> = {
  [ContentType.POST]: "blog",
  [ContentType.PROJECT]: "projects",
};

export const contentTypeToCategoryDisplayMap: Record<ContentType, string> = {
  [ContentType.POST]: "Blog",
  [ContentType.PROJECT]: "Project",
};
