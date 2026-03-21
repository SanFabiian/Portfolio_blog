import { client } from "./client";
import {
  projectsQuery,
  projectBySlugQuery,
  postsQuery,
  postBySlugQuery,
} from "./queries";
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(projectsQuery);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(projectBySlugQuery, { slug });
}

export async function getPosts(): Promise<Post[]> {
  return client.fetch(postsQuery);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(postBySlugQuery, { slug });
}