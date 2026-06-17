import type { MetadataRoute } from "next";

const BASE_URL = "https://sanfabiian.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/playground", "/studio", "/api"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}