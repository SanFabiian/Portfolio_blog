# Architecture

Framework: Next.js 16 App Router

Folder Structure

src/
  app/
    layout.tsx              → root layout (Inter font)
    [locale]/
      layout.tsx            → NextIntlClientProvider + SmoothScroll + Navbar
      page.tsx              → Home page (server component)
      projects/             → /projects + /projects/[slug]
      blog/                 → /blog + /blog/[slug]
      about/                → About page
      playground/           → Dev playground
    studio/                 → Sanity Studio (embedded)

  components/
    ui/                     → design system: Button, Heading, Text, Card, Badge, Tag,
                              Logo, Spinner, Input, CodeAnimation, ContentCard,
                              PostCard, ProjectCard, PortableText, ThemeToggle,
                              ToggleLang, CurtainSection, SmoothScroll
    layout/                 → Container, Footer, Grid, Navbar, Section, Stack

  styles/                   → globals.scss, index.scss, _variables.scss,
                              _mixins.scss, abstracts/primitives/
  sanity/                   → schemas and Sanity client
  services/                 → sanity.ts (GROQ queries)
  i18n/                     → routing.ts, navigation.ts (next-intl)
  messages/                 → en.json, es.json
  hooks/                    → custom hooks
  types/                    → TypeScript types

Principles

- Server Components by default
- Client components only when necessary ("use client")
- Data fetching in server components
- i18n via next-intl (locales: en, es — prefix: always)
- Smooth scroll via Lenis (SmoothScroll component, wraps layout children)
- Scroll-snap sections in Home use overflow-y: scroll on .main div (separate scroll context, Lenis targets window)