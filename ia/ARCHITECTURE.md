# Architecture

Framework: Next.js 14 App Router

Folder Structure

/app
  layout.tsx
  page.tsx
  projects
  blog

/components
  ui
  layout
  projects
  blog

/types
  project.ts
  post.ts

/services
  sanity

Principles

- Server Components by default
- Client components only when necessary
- Data fetching in server components