import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/portfolio", "/products", "/process", "/contact"].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
