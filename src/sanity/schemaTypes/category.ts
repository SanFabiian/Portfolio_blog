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
    defineField({
      name: "variant",
      title: "Color",
      type: "string",
      initialValue: "default",
      options: {
        list: [
          { title: "Default (grey)",   value: "default" },
          { title: "Info (blue)",      value: "info"    },
          { title: "Success (green)",  value: "success" },
          { title: "Warning (yellow)", value: "warning" },
          { title: "Danger (red)",     value: "danger"  },
        ],
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: { title: "label_en", subtitle: "label_es" },
  },
});