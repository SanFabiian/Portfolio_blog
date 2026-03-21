import type { PortableTextBlock } from "sanity";
import type { Category, Tag } from "./project";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content?: PortableTextBlock[];
  coverImage?: string;
  category?: Category;
  tags?: Tag[];
  readingTime?: number;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}