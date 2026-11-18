import type { MetadataRoute } from "next";
import { PAGE_PATH, SITE_URL } from "./components/static-services/immigration-lawyer-citizenship-tampa/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}${PAGE_PATH}`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
