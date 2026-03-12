# PRD MVP — Portafolio de Diseño + Blog

**Producto:** Portafolio personal de diseño UI/UX con blog integrado
**Deployment:** Vercel
**Stack principal:** Next.js + Sanity CMS

---

# 1. RESUMEN EJECUTIVO

## Problema que resuelve

Diseñadores UI/UX y creadores digitales necesitan una forma clara, rápida y profesional de:

* Mostrar su trabajo
* Explicar el contexto de los proyectos
* Publicar contenido de pensamiento o aprendizaje
* Controlar el contenido sin depender de código

Las soluciones actuales suelen ser:

* Muy complejas (Webflow)
* Poco flexibles
* Difíciles de mantener
* Mal optimizadas para SEO técnico

---

## Solución MVP

Una **aplicación web tipo portafolio** optimizada para performance y SEO que incluye:

* Galería de proyectos
* Página individual de proyecto
* Blog simple
* Gestión de contenido con Sanity
* Animaciones suaves
* Dark mode
* Filtros de proyectos

Todo desplegado automáticamente en **Vercel**.

---

## Propuesta de valor

Un portafolio rápido, elegante y fácil de mantener que permite:

* Mostrar proyectos como **case studies visuales**
* Publicar artículos
* Actualizar contenido sin tocar código

---

## Objetivos del MVP

Métricas de éxito:

* [ ] Tiempo de carga < 1.5s
* [ ] Lighthouse score > 90
* [ ] Publicar nuevo proyecto desde CMS en < 3 minutos
* [ ] SEO indexable correctamente
* [ ] Deployment automático en Vercel

---

# 2. ANÁLISIS DE USUARIO

## Usuario primario

**Diseñador UI/UX o Product Designer freelance**

Perfil:

Edad: 22–35

Comportamiento:

* Comparte su portafolio para conseguir trabajo
* Publica procesos de diseño
* Quiere mantener su sitio actualizado

Necesidades:

* Mostrar proyectos claramente
* Controlar el contenido
* Buena estética visual
* Buen SEO

---

## Casos de uso principales

### Caso 1 — Mostrar portafolio

El usuario comparte su sitio con reclutadores o clientes.

### Caso 2 — Mostrar detalle del proyecto

El visitante explora el proceso y resultados de un proyecto.

### Caso 3 — Publicar artículo

El usuario publica un artículo sobre diseño o desarrollo.

### Caso 4 — Filtrar proyectos

Un visitante filtra proyectos por categoría o tecnología.

---

## User Stories

**US1**
Como diseñador
quiero mostrar mis proyectos
para conseguir trabajo o clientes.

**US2**
Como visitante
quiero ver imágenes del proyecto rápidamente
para entender el resultado.

**US3**
Como diseñador
quiero escribir artículos
para compartir conocimiento.

**US4**
Como visitante
quiero filtrar proyectos
para encontrar lo que me interesa.

---

## Pain Points actuales

* Actualizar portafolio requiere tocar código
* Los sitios de portafolio suelen ser lentos
* Difícil mantener blog + portafolio
* Poca flexibilidad en plataformas no-code

---

# 3. ESPECIFICACIONES TÉCNICAS

## Dispositivos objetivo

Prioridad:

1. Desktop
2. Mobile
3. Tablet

---

## Plataforma

Web App

Framework:

Next.js (App Router)

Deployment:

Vercel

---

## Stack tecnológico

### Frontend

Next.js 14
React Server Components

**Justificación**

* Optimizado para Vercel
* Excelente SEO
* Muy compatible con AI coding

---

### Styling

SASS

Uso:

* Estilos globales
* Organización modular

---

### Utilidades CSS

clsx

Uso:

* Manejo condicional de clases

---

### Animaciones

Framer Motion

Uso:

* Animaciones de entrada
* Hover animations
* Page transitions

---

### CMS

Sanity

Justificación:

* Headless CMS moderno
* Muy flexible
* Excelente integración con Next.js

---

### Iconos

lucide-react

---

### Hosting

Vercel

---

# 4. FEATURES MVP (PRIORIZADAS)

# MUST HAVE (Core)

---

## Feature 1 — Página Home

Contenido:

* Hero
* Proyectos destacados
* Preview del blog
* Enlace a About

**Criterios de aceptación**

* [ ] Muestra entre 3 y 6 proyectos
* [ ] Carga en <1.5s
* [ ] Totalmente responsive

---

## Feature 2 — Galería de proyectos

Lista de todos los proyectos.

Elementos por proyecto:

* Imagen cover
* Título
* Categoría
* Tags
* Hover interaction

**Criterios**

* [ ] Grid responsive
* [ ] Animación hover
* [ ] Datos cargados desde CMS

---

## Feature 3 — Página de proyecto

Estructura visual:

1. Hero
2. Galería de imágenes
3. Problema
4. Resultado

**Criterios**

* [ ] Imágenes optimizadas con next/image
* [ ] Lazy loading
* [ ] Animaciones scroll

---

## Feature 4 — Blog

Listado de posts.

Cada post incluye:

* Título
* Cover
* Categoría
* Tags
* Contenido

**Criterios**

* [ ] Lista de posts
* [ ] Página individual
* [ ] SEO metadata

---

## Feature 5 — Dark Mode

Switch entre:

* Light
* Dark

**Criterios**

* [ ] Persistencia en localStorage
* [ ] Transición suave

---

# SHOULD HAVE

## Feature 6 — Filtros de proyectos

Filtros por:

* Categoría
* Tags

---

## Feature 7 — Página About

Contenido editable desde CMS.

---

# COULD HAVE (Futuro)

## Feature 8 — Newsletter

Integración con:

* Resend
* ConvertKit

---

# 5. WIREFRAMES Y FLUJOS

## Flujo principal

Home
↓
Projects
↓
Project Detail
↓
Blog
↓
Post

---

## Wireframe Home

```
--------------------------------
Hero
Nombre + tagline
--------------------------------
Featured Projects
[Project][Project][Project]
--------------------------------
Blog preview
[Post][Post]
--------------------------------
Footer
--------------------------------
```

---

## Wireframe Project

```
Hero image
Title
Category

Gallery

Problem
Text

Result
Images
```

---

# 6. ESPECIFICACIONES DE DESARROLLO

## Arquitectura

Arquitectura **JAMstack**

Frontend desacoplado del CMS.

Next.js consume contenido desde Sanity.

---

## APIs necesarias

Ejemplo endpoints:

```
GET /api/projects
GET /api/posts
GET /api/categories
```

---

## Autenticación

No necesaria para el MVP.

Sanity manejará autenticación del CMS.

---

## Base de datos (Sanity)

### Project

```
title
slug
coverImage
gallery[]
category
tags[]
problem
result
publishedAt
```

---

### Post

```
title
slug
coverImage
content
category
tags[]
publishedAt
```

---

### Category

```
title
slug
```

---

### Tag

```
title
slug
```

---

### Author

```
name
avatar
bio
```

---

# 7. CRITERIOS DE ACEPTACIÓN

## Definition of Done

* [ ] Deploy funcional en Vercel
* [ ] CMS conectado
* [ ] Proyectos cargan dinámicamente
* [ ] Blog funcional
* [ ] Responsive completo
* [ ] Dark mode funcional

---

## Testing

Caso 1

Cargar home.

Resultado esperado:

* Proyectos visibles.

Caso 2

Abrir proyecto.

Resultado esperado:

* Imágenes cargan correctamente.

---

## Performance

Requisitos:

* TTFB < 500ms
* LCP < 2.5s

---

## Seguridad

* Sanitización de contenido
* Headers seguros
* Protección XSS

---

# 8. ROADMAP Y TIMELINE (AI-ACCELERATED)

## Fase 1 — Setup (1 semana)

* Setup Next.js
* Setup Sanity
* Layout base
* Home

---

## Fase 2 — Core features (3–5 días)

* Galería de proyectos
* Página dinámica de proyectos
* Blog

---

## Fase 3 — UI mejoras (2–3 días)

* Animaciones
* Filtros
* Dark mode

---

# 9. ESPECIFICACIONES PARA AI CODING TOOLS

## Estructura de archivos

```
/app

/page.tsx
/projects
/projects/[slug]
/blog
/blog/[slug]
/about

/components

ProjectCard
PostCard
Navbar
Footer
ThemeToggle

/lib

sanity.ts
queries.ts

/styles

Main.scss

/types

project.ts
post.ts
```

---

## Naming conventions

Componentes:

PascalCase

```
ProjectCard.tsx
BlogPost.tsx
```

Funciones:

camelCase

```
fetchProjects()
fetchPosts()
```

---

## Dependencias

```
next
react
sass
clsx
lucide-react
framer-motion
@sanity/client
next-sanity
```

---

## Prompt ejemplo para AI coding

```
Create a responsive ProjectCard component using Next.js, TypeScript and SASS.

Requirements:
- image cover
- title
- category
- hover animation using framer-motion
- use clsx for conditional classes
- optimized image with next/image
```

---

# Resultado esperado

Un portafolio moderno:

* rápido
* escalable
* editable desde CMS
* optimizado para SEO
* fácilmente ampliable
