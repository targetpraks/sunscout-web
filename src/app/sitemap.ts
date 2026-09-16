import type { MetadataRoute } from "next";
import { beaches } from "@/lib/beaches";
import { SITE_URL } from "@/config/site";

// Required for `output: "export"`: metadata routes must be explicitly static.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const beachPages = beaches.map((beach) => ({
    url: `${SITE_URL}/beaches/${beach.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/beaches/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/data/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/merchants/`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${SITE_URL}/coordinators/`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/institutions/`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...beachPages,
  ];
}
