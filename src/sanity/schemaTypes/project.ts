import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
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
      name: "description_en",
      title: "Description (English)",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description_es",
      title: "Description (Spanish)",
      type: "text",
      validation: (r) => r.required(),
    }),

    // ── Taxonomías (referencias globales) ────────────
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),

    // ── Campos globales ──────────────────────────────
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "link",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
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