# Development Tasks

## ✅ Phase 1 — Core Layout
- [x] Create global layout
- [x] Create Navbar
- [x] Create Footer
- [x] Create Home page

## ✅ Phase 2 — Projects
- [x] Create ProjectCard component
- [x] Create ProjectsGrid
- [x] Create /projects page
- [x] Create /projects/[slug] page

## ✅ Phase 3 — Blog
- [x] Create PostCard
- [x] Create /blog page
- [x] Create /blog/[slug]

## ✅ Phase 4 — CMS
- [x] Setup Sanity
- [x] Create project schema
- [x] Create post schema
- [x] Fetch data in Next.js
- [x] Portable Text renderer for rich content

## 🔄 Phase 5 — Pending

- [ ] About page
- [ ] Footer — implement and reconnect (currently commented out in layout)
- [ ] SEO — dynamic metadata + sitemap + hreflang
- [ ] Framer Motion animations
- [ ] Home page polish with real data

## 🚀 Phase 6 — Deploy & Optimization

- [ ] Deploy on Vercel + domain + subdomains
- [ ] Sanity Webhook + on-demand revalidation
  - Create /api/revalidate route in Next.js
  - Configure webhook in sanity.io dashboard
  - Add SANITY_WEBHOOK_SECRET to env vars
- [ ] Performance optimization (CDN cache, revalidate strategy)

## 👥 Phase 7 — Multi-author & Studio Access

- [ ] Protect /studio route in production
  - Set project as private in sanity.io
  - Invite collaborators by email with roles:
    - Administrator → full access
    - Editor → create and edit content
    - Viewer → read only
- [ ] Author schema in Sanity
  - Create author document type (name, bio, avatar)
  - Update post schema: author field → reference to author
  - Update GROQ queries to include author data
  - Update Post type in TypeScript
  - Render author info in blog post page