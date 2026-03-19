export type ProjectCategory = "ux" | "frontend" | "fullstack";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  publishedAt?: string;
  updatedAt?: string;
}