# Project Structure

Framework: Next.js 16 (App Router)

Architecture:

src/
  app/                → Next.js routes (root + [locale] + studio)
  components/
    ui/               → design system components (reusable, atomic)
    layout/           → structural layout components
  styles/             → design tokens and global styles (SCSS)
  sanity/             → Sanity schemas and client config
  services/           → data fetching (GROQ queries via sanity.ts)
  i18n/               → next-intl routing and navigation helpers
  messages/           → translation files (en.json, es.json)
  hooks/              → custom React hooks
  types/              → shared TypeScript types
  assets/             → static assets

Rules:

- UI components must be reusable
- Layout components handle structure only
- Pages (server components) compose layout + ui components
- Always use design tokens from styles/abstracts/primitives/
- i18n exclusively via next-intl