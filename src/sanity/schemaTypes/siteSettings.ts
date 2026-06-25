import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Hero",          options: { columns: 2 } },
    { name: "cta_hero", title: "CTA Hero",  options: { columns: 2 } },
    { name: "work", title: "Selected Work", options: { columns: 2 } },
    { name: "blog", title: "Blog",          options: { columns: 2 } },
    { name: "cta",  title: "CTA Section",   options: { columns: 2 } },
  ],
  fields: [
    // ── Hero ────────────────────────────────────────────────────────────────
    defineField({ name: "show_badge",        title: "Show badge",         type: "boolean", initialValue: true, fieldset: "hero" }),
    defineField({ name: "show_description",  title: "Show description",   type: "boolean", initialValue: true, fieldset: "hero" }),
    // Contenido
    defineField({ name: "available_en",    title: "Available badge — EN",    type: "string", fieldset: "hero" }),
    defineField({ name: "available_es",    title: "Available badge — ES",    type: "string", fieldset: "hero" }),
    defineField({ name: "heading_en",      title: "Heading — EN",            type: "string", fieldset: "hero" }),
    defineField({ name: "heading_es",      title: "Heading — ES",            type: "string", fieldset: "hero" }),
    defineField({ name: "description_en",  title: "Description — EN",        type: "text", rows: 3, fieldset: "hero" }),
    defineField({ name: "description_es",  title: "Description — ES",        type: "text", rows: 3, fieldset: "hero" }),
    // CTA
    defineField({ name: "show_cta_projects", title: "Show Primary",  type: "boolean", initialValue: true, fieldset: "cta_hero" }),
    defineField({ name: "show_cta_about",    title: "Show Secondary",     type: "boolean", initialValue: true, fieldset: "cta_hero" }),
    defineField({ name: "cta_projects_en",   title: "EN",   type: "string", fieldset: "cta_hero" }),
    defineField({ name: "cta_about_en",      title: "EN",   type: "string", fieldset: "cta_hero" }),
    defineField({ name: "cta_projects_es",   title: "ES",   type: "string", fieldset: "cta_hero" }),
    defineField({ name: "cta_about_es",      title: "ES",   type: "string", fieldset: "cta_hero" }), 
    defineField({ name: "cta_projects_link", title: "Link", type: "url",    fieldset: "cta_hero" }),
    defineField({ name: "cta_about_link",    title: "Link", type: "url",    fieldset: "cta_hero" }),
    // ── Selected Work ────────────────────────────────────────────────────────
    defineField({ name: "selected_work_en",      title: "Label — EN",       type: "string", fieldset: "work" }),
    defineField({ name: "selected_work_es",      title: "Label — ES",       type: "string", fieldset: "work" }),
    defineField({ name: "selected_work_desc_en", title: "Description — EN", type: "string", fieldset: "work" }),
    defineField({ name: "selected_work_desc_es", title: "Description — ES", type: "string", fieldset: "work" }),
    defineField({ name: "all_projects_en",       title: "Link label — EN",  type: "string", fieldset: "work" }),
    defineField({ name: "all_projects_es",       title: "Link label — ES",  type: "string", fieldset: "work" }),
    defineField({ name: "show_work_section",     title: "Show this section", type: "boolean", initialValue: true, fieldset: "work" }),
    // ── Blog ────────────────────────────────────────────────────────────────
    defineField({ name: "from_blog_en",      title: "Label — EN",       type: "string", fieldset: "blog" }),
    defineField({ name: "from_blog_es",      title: "Label — ES",       type: "string", fieldset: "blog" }),
    defineField({ name: "from_blog_desc_en", title: "Description — EN", type: "string", fieldset: "blog" }),
    defineField({ name: "from_blog_desc_es", title: "Description — ES", type: "string", fieldset: "blog" }),
    defineField({ name: "all_posts_en",      title: "Link label — EN",  type: "string", fieldset: "blog" }),
    defineField({ name: "all_posts_es",      title: "Link label — ES",  type: "string", fieldset: "blog" }),
    defineField({ name: "show_blog_section", title: "Show this section", type: "boolean", initialValue: true, fieldset: "blog" }),
    // ── CTA Section ──────────────────────────────────────────────────────────
    defineField({ name: "cta_heading_en",  title: "Heading — EN",      type: "string",  fieldset: "cta" }),
    defineField({ name: "cta_heading_es",  title: "Heading — ES",      type: "string",  fieldset: "cta" }),
    defineField({ name: "cta_desc_en",     title: "Description — EN",  type: "string",  fieldset: "cta" }),
    defineField({ name: "cta_desc_es",     title: "Description — ES",  type: "string",  fieldset: "cta" }),
    defineField({ name: "cta_button_en",   title: "Button label — EN", type: "string",  fieldset: "cta" }),
    defineField({ name: "cta_button_es",   title: "Button label — ES", type: "string",  fieldset: "cta" }),
    defineField({ name: "show_cta_section", title: "Show this section", type: "boolean", initialValue: true, fieldset: "cta" }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
