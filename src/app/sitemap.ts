import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getPosts } from "@/lib/posts";

// Bump when the homepage content changes meaningfully.
const SITE_UPDATED = "2026-10-21";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  return [
    { url: site.url, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 1 },
    ...(posts.length > 0
      ? [
          { url: `${site.url}/writing`, lastModified: posts[0].date, changeFrequency: "weekly" as const, priority: 0.7 },
          ...posts.map((p) => ({
            url: `${site.url}/writing/${p.slug}`,
            lastModified: p.date,
            changeFrequency: "yearly" as const,
            priority: 0.6,
          })),
        ]
      : []),
  ];
}
