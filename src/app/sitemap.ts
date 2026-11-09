import type { MetadataRoute } from "next";
import { SITE, posts } from "@/lib/site";
import { procedures } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/thu-tuc", "/tro-ly", "/ho-so", "/nhac-nho", "/co-quan", "/san-pham", "/giai-phap", "/bang-gia", "/blog", "/tai-app", "/gioi-thieu", "/lien-he", "/dang-ky-demo", "/phap-ly"];
  return [
    ...pages.map((p) => ({ url: SITE.url + p })),
    ...procedures.map((p) => ({ url: `${SITE.url}/thu-tuc/${p.slug}` })),
    ...posts.map((p) => ({ url: `${SITE.url}/blog/${p.slug}` })),
  ];
}
