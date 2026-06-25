import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About",
  type: "document",
  fieldsets: [
    { name: "content", title: "Content", options: { columns: 2 } },
  ],
  fields: [
    // ── Traducibles ──────────────────────────────────────────────────────────
    defineField({ name: "heading_en", title: "Heading — EN", type: "string", fieldset: "content", validation: (r) => r.required() }),
    defineField({ name: "heading_es", title: "Heading — ES", type: "string", fieldset: "content", validation: (r) => r.required() }),
    defineField({ name: "role_en",    title: "Role — EN",    type: "string", fieldset: "content" }),
    defineField({ name: "role_es",    title: "Role — ES",    type: "string", fieldset: "content" }),
    defineField({ name: "bio_en",     title: "Bio — EN",     type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),
    defineField({ name: "bio_es",     title: "Bio — ES",     type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),

    // ── Globales ─────────────────────────────────────────────────────────────
    defineField({ name: "avatar",   title: "Avatar",      type: "image",  options: { hotspot: true } }),
    defineField({ name: "email",    title: "Email",       type: "string" }),
    defineField({ name: "github",   title: "GitHub URL",  type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
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
