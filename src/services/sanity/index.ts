import { client } from "./client";
import {
  projectsQuery,
  projectBySlugQuery,
  postsQuery,
  postBySlugQuery,
  featuredProjectsQuery,
  latestPostsQuery,
  aboutQuery,
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