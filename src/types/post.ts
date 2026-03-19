export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  tags?: string[];
  readingTime?: number;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}