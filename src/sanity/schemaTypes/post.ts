import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    // ── Slug ─────────────────────────────────────────
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title_en" },
      validation: (r) => r.required(),
    }),

    // ── Campos traducibles ───────────────────────────
    defineField({
      name: "title_en",
      title: "Title (English)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title_es",
      title: "Title (Spanish)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt_en",
      title: "Excerpt (English)",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt_es",
      title: "Excerpt (Spanish)",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "content_en",
      title: "Content (English)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "content_es",
      title: "Content (Spanish)",
      type: "array",
      of: [{ type: "block" }],
    }),

    // ── Taxonomías (referencias globales) ────────────
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),

    // ── Campos globales ──────────────────────────────
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time (min)",
      type: "number",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "title_en", subtitle: "category.label_en" },
  },
});