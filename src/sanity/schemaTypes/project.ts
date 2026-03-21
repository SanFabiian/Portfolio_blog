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
    defineField({
      name: "content_en",
      title: "Content (English)",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          name: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        },
        {
          type: "object",
          name: "imageGrid",
          title: "Image Grid",
          fields: [
            defineField({
              name: "columns",
              title: "Columns",
              type: "string",
              options: {
                list: [
                  { title: "2 columns", value: "2" },
                  { title: "3 columns", value: "3" },
                  { title: "4 columns", value: "4" },
                ],
              },
              initialValue: "2",
            }),
            defineField({
              name: "images",
              title: "Images",
              type: "array",
              of: [{
                type: "image",
                options: { hotspot: true },
                fields: [
                  defineField({ name: "alt", title: "Alt text", type: "string" }),
                  defineField({ name: "caption", title: "Caption", type: "string" }),
                ],
              }],
            }),
          ],
          preview: {
            select: { columns: "columns" },
            prepare: ({ columns }: any) => ({
              title: `Image Grid — ${columns} columns`,
            }),
          },
        },
        {
          type: "object",
          name: "imageText",
          title: "Image + Text",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt text", type: "string" }),
              ],
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
              },
              initialValue: "left",
            }),
          ],
          preview: {
            select: { position: "imagePosition" },
            prepare: ({ position }: any) => ({
              title: `Image + Text — image ${position}`,
            }),
          },
        },
      ],
    }),
    defineField({
      name: "content_es",
      title: "Content (Spanish)",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          name: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        },
        {
          type: "object",
          name: "imageGrid",
          title: "Image Grid",
          fields: [
            defineField({
              name: "columns",
              title: "Columns",
              type: "string",
              options: {
                list: [
                  { title: "2 columns", value: "2" },
                  { title: "3 columns", value: "3" },
                  { title: "4 columns", value: "4" },
                ],
              },
              initialValue: "2",
            }),
            defineField({
              name: "images",
              title: "Images",
              type: "array",
              of: [{
                type: "image",
                options: { hotspot: true },
                fields: [
                  defineField({ name: "alt", title: "Alt text", type: "string" }),
                  defineField({ name: "caption", title: "Caption", type: "string" }),
                ],
              }],
            }),
          ],
          preview: {
            select: { columns: "columns" },
            prepare: ({ columns }: any) => ({
              title: `Image Grid — ${columns} columns`,
            }),
          },
        },
        {
          type: "object",
          name: "imageText",
          title: "Image + Text",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt text", type: "string" }),
              ],
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
              },
              initialValue: "left",
            }),
          ],
          preview: {
            select: { position: "imagePosition" },
            prepare: ({ position }: any) => ({
              title: `Image + Text — image ${position}`,
            }),
          },
        },
      ],
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