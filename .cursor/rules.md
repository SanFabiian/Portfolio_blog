# Project Rules

## Stack

Use the following technologies:

- Next.js 14 (App Router)
- React Server Components
- TypeScript
- SASS modules
- Framer Motion
- clsx
- lucide-react
- Sanity CMS

---

## Architecture Rules

- Use server components by default
- Only use client components when necessary
- Keep components small and reusable
- Avoid large page components

---

## Styling Rules

- Use SASS modules for components
- Use global styles only for layout or resets
- Follow mobile-first responsive design

---

## Component Structure

Every component should follow this structure:

ComponentName/
  ComponentName.tsx
  ComponentName.module.scss
  index.ts

---

## Naming Conventions

Components → PascalCase

Example:

ProjectCard.tsx

Functions → camelCase

Example:

fetchProjects()

---

## Images

Always use:

next/image

---

## Animations

Use:

Framer Motion

For:

- hover effects
- page transitions
- reveal animations

---

## Performance Rules

- Prefer server components
- Avoid unnecessary client-side state
- Lazy load images

## Folder Structure

Use this folder structure:

src/
  app/
  components/
  styles/
  lib/
  types/

## Data Fetching

All CMS data must come from Sanity queries inside:

src/lib/sanity


## Design System Rules

Always use the tokens defined in:

src/styles/tokens.scss

Do not hardcode colors, spacing or border radius.