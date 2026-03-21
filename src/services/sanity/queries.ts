export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    description,
    category,
    "image": image.asset->url,
    tags,
    link,
    github,
    featured,
    publishedAt,
    updatedAt
  }
`;

export const latestPostsQuery = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    "slug": slug.current,
    title,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    readingTime,
    publishedAt,
    updatedAt,
    author
  }
`;
export const projectsQuery = `
  *[_type == "project"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    description,
    category,
    "image": image.asset->url,
    tags,
    link,
    github,
    featured,
    publishedAt,
    updatedAt
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    description,
    category,
    "image": image.asset->url,
    tags,
    link,
    github,
    featured,
    publishedAt,
    updatedAt
  }
`;

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    readingTime,
    publishedAt,
    updatedAt,
    author
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    tags,
    readingTime,
    publishedAt,
    updatedAt,
    author
  }
`;