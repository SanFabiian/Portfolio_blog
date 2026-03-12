export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
  publishedAt?: string;
  updatedAt?: string;
}
