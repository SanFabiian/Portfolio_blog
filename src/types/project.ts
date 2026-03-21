export interface Category {
  label: string;
  slug: string;
}

export interface Tag {
  label: string;
  slug: string;
}

export type ProjectCategory = "ux" | "frontend" | "fullstack";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: Category;
  image?: string;
  tags?: Tag[];
  link?: string;
  github?: string;
  featured?: boolean;
  publishedAt?: string;
  updatedAt?: string;
}