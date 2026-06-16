# AI Context

This repository is a personal portfolio and blog for sanfabiian.com.

Stack:
- Next.js 16 (App Router)
- React 19
- TypeScript
- SCSS Modules + SASS 7-1 architecture
- Sanity v4 CMS (studio at /studio)
- Framer Motion (animations)
- Lenis (smooth scroll, via SmoothScroll component)
- next-intl (i18n: en + es)
- clsx
- lucide-react

Goals:
- Fast performance
- Clean component architecture
- Scalable for future projects and subdomains

Structure:

src/
  app/
    [locale]/       → i18n routes (en|es): home, projects, blog, about, playground
    studio/         → Sanity Studio

  components/
    ui/             → design system components
    layout/         → structural components (Navbar, Footer, Container, Grid, etc.)

  styles/           → design tokens and global styles
  sanity/           → schemas and client
  services/         → GROQ queries (sanity.ts)
  i18n/             → routing and navigation helpers
  messages/         → en.json, es.json
  hooks/            → custom hooks
  types/            → TypeScript types

Rules:

- Components must be reusable
- Use TypeScript types
- Use next/image for images
- Use framer-motion for animations
- Avoid large components
- i18n is handled exclusively with next-intl (do NOT use react-i18next or i18next)