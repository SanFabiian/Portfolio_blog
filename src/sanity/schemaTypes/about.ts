import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    // ── Campos traducibles ───────────────────────────
    defineField({
      name: "heading_en",
      title: "Heading (English)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heading_es",
      title: "Heading (Spanish)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bio_en",
      title: "Bio (English)",
      type: "array",
      of: [{ type: "block" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bio_es",
      title: "Bio (Spanish)",
      type: "array",
      of: [{ type: "block" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role_en",
      title: "Role (English)",
      type: "string",
    }),
    defineField({
      name: "role_es",
      title: "Role (Spanish)",
      type: "string",
    }),

    // ── Campos globales ──────────────────────────────
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
  ],
  preview: {
    select: { title: "heading_en" },
  },
});