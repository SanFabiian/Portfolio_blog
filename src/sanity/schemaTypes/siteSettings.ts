import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // ── Hero ────────────────────────────────────────
    defineField({
      name: "available_en",
      title: "Available badge (English)",
      type: "string",
    }),
    defineField({
      name: "available_es",
      title: "Available badge (Spanish)",
      type: "string",
    }),
    defineField({
      name: "heading_en",
      title: "Hero heading (English)",
      type: "string",
    }),
    defineField({
      name: "heading_es",
      title: "Hero heading (Spanish)",
      type: "string",
    }),
    defineField({
      name: "description_en",
      title: "Hero description (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description_es",
      title: "Hero description (Spanish)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cta_projects_en",
      title: "CTA: View Projects (English)",
      type: "string",
    }),
    defineField({
      name: "cta_projects_es",
      title: "CTA: View Projects (Spanish)",
      type: "string",
    }),
    defineField({
      name: "cta_about_en",
      title: "CTA: About me (English)",
      type: "string",
    }),
    defineField({
      name: "cta_about_es",
      title: "CTA: About me (Spanish)",
      type: "string",
    }),

    // ── Selected Work ────────────────────────────────
    defineField({
      name: "selected_work_en",
      title: "Selected Work label (English)",
      type: "string",
    }),
    defineField({
      name: "selected_work_es",
      title: "Selected Work label (Spanish)",
      type: "string",
    }),
    defineField({
      name: "selected_work_desc_en",
      title: "Selected Work description (English)",
      type: "string",
    }),
    defineField({
      name: "selected_work_desc_es",
      title: "Selected Work description (Spanish)",
      type: "string",
    }),
    defineField({
      name: "all_projects_en",
      title: "All projects link (English)",
      type: "string",
    }),
    defineField({
      name: "all_projects_es",
      title: "All projects link (Spanish)",
      type: "string",
    }),

    // ── Blog ────────────────────────────────────────
    defineField({
      name: "from_blog_en",
      title: "From the Blog label (English)",
      type: "string",
    }),
    defineField({
      name: "from_blog_es",
      title: "From the Blog label (Spanish)",
      type: "string",
    }),
    defineField({
      name: "from_blog_desc_en",
      title: "From the Blog description (English)",
      type: "string",
    }),
    defineField({
      name: "from_blog_desc_es",
      title: "From the Blog description (Spanish)",
      type: "string",
    }),
    defineField({
      name: "all_posts_en",
      title: "All posts link (English)",
      type: "string",
    }),
    defineField({
      name: "all_posts_es",
      title: "All posts link (Spanish)",
      type: "string",
    }),

    // ── CTA Section ─────────────────────────────────
    defineField({
      name: "cta_heading_en",
      title: "CTA section heading (English)",
      type: "string",
    }),
    defineField({
      name: "cta_heading_es",
      title: "CTA section heading (Spanish)",
      type: "string",
    }),
    defineField({
      name: "cta_desc_en",
      title: "CTA section description (English)",
      type: "string",
    }),
    defineField({
      name: "cta_desc_es",
      title: "CTA section description (Spanish)",
      type: "string",
    }),
    defineField({
      name: "cta_button_en",
      title: "CTA button label (English)",
      type: "string",
    }),
    defineField({
      name: "cta_button_es",
      title: "CTA button label (Spanish)",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
