import type { MetadataRoute } from "next";

const BASE_URL = "https://sanfabiian.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/playground"], // keep playground private from crawlers
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}