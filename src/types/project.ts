export interface Category {
  label: string;
  slug: string;
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

export interface Tag {
  label: string;
  slug: string;
}

import type { PortableTextBlock } from "sanity";

export interface Project {
  slug: string;
  title: string;
  description: string;
  content?: PortableTextBlock[];
  category: Category;
  image?: string;
  tags?: Tag[];
  link?: string;
  github?: string;
  featured?: boolean;
  publishedAt?: string;
  updatedAt?: string;
}