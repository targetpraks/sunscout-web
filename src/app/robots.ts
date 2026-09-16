import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

// Required for `output: "export"`: metadata routes must be explicitly static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
