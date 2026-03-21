export const projectsQuery = `
  *[_type == "project"] | order(publishedAt desc) {
    "slug": slug.current,
    "title": select($locale == "es" => title_es, title_en),
    "description": select($locale == "es" => description_es, description_en),
    "category": category->{ 
      "label": select($locale == "es" => label_es, label_en), 
      "slug": slug.current 
    },
    "tags": tags[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    },
    "image": image.asset->url,
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
    "title": select($locale == "es" => title_es, title_en),
    "description": select($locale == "es" => description_es, description_en),
    "category": category->{ 
      "label": select($locale == "es" => label_es, label_en), 
      "slug": slug.current 
    },
    "tags": tags[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    },
    "image": image.asset->url,
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
    "title": select($locale == "es" => title_es, title_en),
    "excerpt": select($locale == "es" => excerpt_es, excerpt_en),
    "category": category->{ 
      "label": select($locale == "es" => label_es, label_en), 
      "slug": slug.current 
    },
    "tags": tags[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    },
    "coverImage": coverImage.asset->url,
    readingTime,
    publishedAt,
    updatedAt,
    author
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    "title": select($locale == "es" => title_es, title_en),
    "excerpt": select($locale == "es" => excerpt_es, excerpt_en),
    "content": select($locale == "es" => content_es, content_en),
    "category": category->{ 
      "label": select($locale == "es" => label_es, label_en), 
      "slug": slug.current 
    },
    "tags": tags[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    },
    "coverImage": coverImage.asset->url,
    readingTime,
    publishedAt,
    updatedAt,
    author
  }
`;

export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    "slug": slug.current,
    "title": select($locale == "es" => title_es, title_en),
    "description": select($locale == "es" => description_es, description_en),
    "category": category->{ 
      "label": select($locale == "es" => label_es, label_en), 
      "slug": slug.current 
    },
    "tags": tags[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    },
    "image": image.asset->url,
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
    "title": select($locale == "es" => title_es, title_en),
    "excerpt": select($locale == "es" => excerpt_es, excerpt_en),
    "category": category->{ 
      "label": select($locale == "es" => label_es, label_en), 
      "slug": slug.current 
    },
    "tags": tags[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    },
    "coverImage": coverImage.asset->url,
    readingTime,
    publishedAt,
    updatedAt,
    author
  }
`;