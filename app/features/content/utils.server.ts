import fs from "fs";
import path from "path";

import { glob } from "glob";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

import { type Content, type ContentFrontmatter, ContentType } from "./types";

const CONTENT_FOLDER_NAME = "content";
const CONTENT_FILENAME = "index.mdx";
const ROOT_CONTENT_FOLDER = path.join(process.cwd(), "app", CONTENT_FOLDER_NAME);

const contentTypePathMap = {
  [ContentType.POST]: "posts",
  [ContentType.PROJECT]: "projects",
} as const;

const pathContentTypeMap = {
  posts: ContentType.POST,
  projects: ContentType.PROJECT,
} as const;

const getAllContentFullPaths = async (type?: ContentType) => {
  return glob(`app/${CONTENT_FOLDER_NAME}/${type ? contentTypePathMap[type] + "/" : ""}**/${CONTENT_FILENAME}`);
};

const extractPathFromFullPath = (path: string) => path.replace(`app/${CONTENT_FOLDER_NAME}/`, "");

const extractSlugFromPath = (path: string) => path.split("/")[1] as string;

const getTypeFromPath = (path: string) => {
  const contentTypeFolder = path.split("/")[0] as keyof typeof pathContentTypeMap;
  return pathContentTypeMap[contentTypeFolder];
};

const generateIdFromSlug = (type: ContentType, slug: string) => `${type}-${slug}`;

/**
 * Get the slug of all the content mdx files
 * @param type The type of the content, if not provided, all the content paths will be returned
 */
export const getAllContentSlugs = async (type?: ContentType) => {
  const fullPaths = await getAllContentFullPaths(type);

  return fullPaths.map((fullPath) => {
    const path = extractPathFromFullPath(fullPath);
    const slug = extractSlugFromPath(path);
    const type = getTypeFromPath(path);
    return { slug, type };
  });
};

/**
 * Extract frontmatter data of all the content mdx files
 * @param type The type of the content, if not provided, all the content paths will be returned
 */
export const getAllContentFrontMatters = async <T extends ContentType>(type?: T) => {
  const fullPaths = await getAllContentFullPaths(type);

  const contentFrontmatters = fullPaths.map((filePath) => {
    const fileSource = fs.readFileSync(path.join(process.cwd(), filePath), "utf-8");

    const { data } = matter(fileSource);

    const contentPath = extractPathFromFullPath(filePath);
    const type = getTypeFromPath(contentPath);
    const slug = extractSlugFromPath(contentPath);
    const id = generateIdFromSlug(type, slug);

    return {
      ...data,
      slug,
      type,
      id,
    } as ContentFrontmatter;
  });

  return contentFrontmatters.sort(({ date: date1 }, { date: date2 }) => (date1 > date2 ? -1 : date1 < date2 ? 1 : 0));
};

/**
 * Extract data of a mdx file based on its slug and type
 * @param type The type of the content, if not provided, all the content paths will be returned
 */
export const getContentBySlug = async <T extends ContentType>(type: T, slug: string) => {
  const contentFolder = path.join(ROOT_CONTENT_FOLDER, contentTypePathMap[type], slug);
  const contentSource = fs.readFileSync(path.join(contentFolder, CONTENT_FILENAME), "utf8");

  const mdxData = await bundleMDX({
    source: contentSource,
    cwd: contentFolder,
  });

  return {
    markdown: mdxData.code,
    frontmatter: { ...mdxData.frontmatter, id: generateIdFromSlug(type, slug), type, slug },
  } as Content;
};
