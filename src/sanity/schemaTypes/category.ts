import { defineField, defineType } from "sanity";

export const categorySchema = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "label_en",
      title: "Label (English)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label_es",
      title: "Label (Spanish)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "label_en" },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "label_en", subtitle: "label_es" },
  },
});