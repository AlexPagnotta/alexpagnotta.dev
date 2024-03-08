import { ContentType } from "./types";

export type ContentCategory = (typeof CONTENT_CATEGORIES)[number];

export const CONTENT_CATEGORIES = ["blog", "projects", "lab-3d"] as const;

export const categoryContentTypeMap: Record<ContentCategory, ContentType> = {
  blog: ContentType.BLOG_POST,
  projects: ContentType.PROJECT,
  "lab-3d": ContentType.LAB_3D,
};

export const contentTypeCategoryMap: Record<ContentType, ContentCategory> = {
  [ContentType.BLOG_POST]: "blog",
  [ContentType.PROJECT]: "projects",
  [ContentType.LAB_3D]: "lab-3d",
};

export const contentTypeToCategoryDisplayMap: Record<ContentType, string> = {
  [ContentType.BLOG_POST]: "Blog",
  [ContentType.PROJECT]: "Project",
  [ContentType.LAB_3D]: "3D Lab",
};
