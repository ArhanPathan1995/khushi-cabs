import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/company";
import { routes } from "@/data/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/vehicles",
    "/routes",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cancellation-policy",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...routes.map((route) => ({
      url: `${siteUrl}/routes/${route.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
