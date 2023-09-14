import { siteConfig } from "./config";
import { CONTENT_CATEGORIES } from "./features/content/categories";

export default async function sitemap() {
  // TODO: add content pages, e.g. blog posts, projects, etc.

  const routes = [
    "", // homepage
    ...CONTENT_CATEGORIES,
  ].map((route) => ({
    url: `${siteConfig.baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
