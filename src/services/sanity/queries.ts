export const projectsQuery = `
  *[_type == "project"] | order(publishedAt desc) {
    "slug": slug.current,
    "title": select($locale == "es" => title_es, title_en),
    "description": select($locale == "es" => description_es, description_en),
    "category": category->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current,
      variant
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
    "content": select($locale == "es" => content_es, content_en)[]{
      ...,
      _type == "image" => {
        "_type": "image",
        "url": asset->url,
        alt,
        caption
      },
      _type == "imageGrid" => {
        "_type": "imageGrid",
        columns,
        "images": images[]{
          "url": asset->url,
          alt,
          caption
        }
      },
      _type == "imageText" => {
        "_type": "imageText",
        imagePosition,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        },
        text
      }
    },
    "category": category->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current,
      variant
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
      "slug": slug.current,
      variant
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
    "content": select($locale == "es" => content_es, content_en)[]{
      ...,
      _type == "image" => {
        "_type": "image",
        "url": asset->url,
        alt,
        caption
      },
      _type == "imageGrid" => {
        "_type": "imageGrid",
        columns,
        "images": images[]{
          "url": asset->url,
          alt,
          caption
        }
      },
      _type == "imageText" => {
        "_type": "imageText",
        imagePosition,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        },
        text
      }
    },
    "category": category->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current,
      variant
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
      "slug": slug.current,
      variant
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
      "slug": slug.current,
      variant
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

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    "available": select($locale == "es" => available_es, available_en),
    "heading": select($locale == "es" => heading_es, heading_en),
    "description": select($locale == "es" => description_es, description_en),
    "cta_projects": select($locale == "es" => cta_projects_es, cta_projects_en),
    "cta_about": select($locale == "es" => cta_about_es, cta_about_en),
    "selected_work": select($locale == "es" => selected_work_es, selected_work_en),
    "selected_work_desc": select($locale == "es" => selected_work_desc_es, selected_work_desc_en),
    "all_projects": select($locale == "es" => all_projects_es, all_projects_en),
    "from_blog": select($locale == "es" => from_blog_es, from_blog_en),
    "from_blog_desc": select($locale == "es" => from_blog_desc_es, from_blog_desc_en),
    "all_posts": select($locale == "es" => all_posts_es, all_posts_en),
    "cta_heading": select($locale == "es" => cta_heading_es, cta_heading_en),
    "cta_desc": select($locale == "es" => cta_desc_es, cta_desc_en),
    "cta_button": select($locale == "es" => cta_button_es, cta_button_en),
    cta_projects_link,
    cta_about_link,
    show_badge,
    show_description,
    show_cta_projects,
    show_cta_about,
    show_work_section,
    show_blog_section,
    show_cta_section
  }
`;

export const aboutQuery = `
  *[_type == "about"][0] {
    "heading": select($locale == "es" => heading_es, heading_en),
    "bio": select($locale == "es" => bio_es, bio_en),
    "role": select($locale == "es" => role_es, role_en),
    "avatar": avatar.asset->url,
    email,
    github,
    linkedin,
    "skills": skills[defined(@->_id)]->{
      "label": select($locale == "es" => label_es, label_en),
      "slug": slug.current
    }
  }
`;