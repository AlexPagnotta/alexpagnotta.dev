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

const getAllContentPaths = async (type?: ContentType) => {
  return glob(`app/${CONTENT_FOLDER_NAME}/${type ? contentTypePathMap[type] + "/" : ""}**/${CONTENT_FILENAME}`);
};

const extractSlugFromPath = (path: string) => path.replace(`app/content`, "").replace("/index.mdx", "");

const getTypeFromSlug = (slug: string) => {
  const path = slug.split("/")[1] as keyof typeof pathContentTypeMap;
  return pathContentTypeMap[path];
};

const generateIdFromSlug = (slug: string) => {
  const type = getTypeFromSlug(slug);
  const folderName = slug.split("/")[2];
  return `${type}-${folderName}`;
};

/**
 * Get the slug of all the content mdx files
 * @param type The type of the content, if not provided, all the content paths will be returned
 */
export const getAllContentSlugs = async (type?: ContentType) => {
  const paths = await getAllContentPaths(type);

  return paths.map(extractSlugFromPath);
};

/**
 * Extract frontmatter data of all the content mdx files
 * @param type The type of the content, if not provided, all the content paths will be returned
 */
export const getAllContentFrontMatters = async <T extends ContentType>(type?: T) => {
  const paths = await getAllContentPaths(type);

  const contentFrontmatters = paths.map((file) => {
    const fileSource = fs.readFileSync(path.join(process.cwd(), file), "utf-8");

    const { data } = matter(fileSource);

    const slug = extractSlugFromPath(file);
    const type = getTypeFromSlug(slug);

    return {
      ...data,
      slug,
      type,
      id: generateIdFromSlug(slug),
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
    // TODO: Add options
    // mdxOptions(options) {
    //   options.rehypePlugins = [
    //     ...(options.rehypePlugins ?? []),
    //     [
    //       rehypePrettyCode,
    //       {
    //         theme,
    //         onVisitHighlightedLine(node) {
    //           // Each line node by default has `class="line"`.
    //           node.properties.className.push("highlighted");
    //         },
    //       },
    //     ],
    //   ];
    //   return options;
    // },
  });

  return {
    code: mdxData.code,
    frontmatter: { ...mdxData.frontmatter, id: generateIdFromSlug(slug) },
    type: getTypeFromSlug(slug),
    slug,
  } as Content;
};
