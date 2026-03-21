import { MetadataRoute } from "next";
import { getProjects, getPosts } from "@/services/sanity";

const baseUrl = "https://sanfabiian.com";
const locales = ["en", "es"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([
    getProjects("en"),
    getPosts("en"),
  ]);

  // Rutas estáticas
  const staticRoutes = [
    "",
    "/projects",
    "/blog",
    "/about",
  ].flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  // Rutas de proyectos
  const projectRoutes = projects.flatMap((project) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: project.updatedAt
        ? new Date(project.updatedAt)
        : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Rutas de posts
  const postRoutes = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.updatedAt
        ? new Date(post.updatedAt)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}