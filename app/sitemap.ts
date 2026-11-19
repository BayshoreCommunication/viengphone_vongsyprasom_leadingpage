import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "./components/static-services/immigration-lawyer-citizenship-tampa/content";

const APP_DIR = join(process.cwd(), "app");
const PAGE_EXTENSIONS = new Set(["tsx", "ts", "jsx", "js"]);

// Walk the app directory and return the URL route of every folder that
// contains a page file, so new pages show up in the sitemap automatically.
function collectRoutes(dir: string, segments: string[] = []): string[] {
  let routes: string[] = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_") || entry.name.startsWith("@")) continue;
    if (!entry.isDirectory()) continue;

    const fullPath = join(dir, entry.name);
    const nextSegments = [...segments, entry.name];

    const hasPage = readdirSync(fullPath).some(
      (name) =>
        name.startsWith("page.") &&
        PAGE_EXTENSIONS.has(name.split(".").pop() ?? ""),
    );
    if (hasPage) {
      routes.push(segmentsToRoute(nextSegments));
    }

    // A folder with its own page can still contain nested pages.
    routes = routes.concat(collectRoutes(fullPath, nextSegments));
  }

  return routes;
}

// Drop route groups like (seo-services) so they do not appear in the URL.
function segmentsToRoute(segments: string[]): string {
  const path = segments
    .filter((segment) => !segment.startsWith("("))
    .join("/");
  return path ? `/${path}` : "/";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...collectRoutes(APP_DIR)];

  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
