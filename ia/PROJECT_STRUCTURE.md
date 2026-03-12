# Project Structure

Framework: Next.js

Architecture:

src/
  app/                → Next.js pages
  components/

    ui/               → design system components
    features/         → product components

  styles/             → design tokens and global styles

Rules:

- UI components must be reusable
- Feature components compose UI components
- Pages compose feature components