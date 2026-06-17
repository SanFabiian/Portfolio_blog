import { client } from "./client";
import {
  projectsQuery,
  projectBySlugQuery,
  postsQuery,
  postBySlugQuery,
  featuredProjectsQuery,
  latestPostsQuery,
  aboutQuery,
  siteSettingsQuery,
} from "./queries";
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";
import type { PortableTextBlock } from "sanity";
import type { Tag } from "@/types/project";

export async function getProjects(locale: string): Promise<Project[]> {
  return client.fetch(projectsQuery, { locale });
}

export async function getProjectBySlug(slug: string, locale: string): Promise<Project | null> {
  return client.fetch(projectBySlugQuery, { slug, locale });
}

export async function getPosts(locale: string): Promise<Post[]> {
  return client.fetch(postsQuery, { locale });
}

export async function getPostBySlug(slug: string, locale: string): Promise<Post | null> {
  return client.fetch(postBySlugQuery, { slug, locale });
}

export async function getFeaturedProjects(locale: string): Promise<Project[]> {
  return client.fetch(featuredProjectsQuery, { locale });
}

export async function getLatestPosts(locale: string): Promise<Post[]> {
  return client.fetch(latestPostsQuery, { locale });
}

export interface About {
  heading: string;
  bio: PortableTextBlock[];
  role?: string;
  avatar?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  skills?: Tag[];
}

export async function getAbout(locale: string): Promise<About | null> {
  return client.fetch(aboutQuery, { locale });
}

export interface SiteSettings {
  available?: string | null;
  heading?: string | null;
  description?: string | null;
  cta_projects?: string | null;
  cta_about?: string | null;
  selected_work?: string | null;
  selected_work_desc?: string | null;
  all_projects?: string | null;
  from_blog?: string | null;
  from_blog_desc?: string | null;
  all_posts?: string | null;
  cta_heading?: string | null;
  cta_desc?: string | null;
  cta_button?: string | null;
}

export async function getSiteSettings(locale: string): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery, { locale }, {
    next: { tags: ["site-settings"] },
  });
}