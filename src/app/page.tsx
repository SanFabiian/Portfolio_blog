import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PostCard } from "@/components/ui/PostCard";
import { CodeAnimation } from "@/components/ui/CodeAnimation";
import { ArrowRight, Mail } from "lucide-react";
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

// Static data — replaced with Sanity fetch in Phase 4
const featuredProjects: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    description: "A scalable component library built with React, TypeScript and SCSS following atomic design principles.",
    category: "frontend",
    tags: ["React", "TypeScript", "SCSS"],
    github: "https://github.com",
    featured: true,
  },
  {
    slug: "ux-case-study",
    title: "UX Case Study",
    description: "End-to-end product design for a fintech mobile app — from discovery and user research to final prototype.",
    category: "ux",
    tags: ["Figma", "Research", "Prototyping"],
    featured: true,
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js 14 App Router, Sanity CMS and a custom design system.",
    category: "fullstack",
    tags: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
    link: "https://example.com",
    featured: true,
  },
];

const latestPosts: Post[] = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    excerpt: "How to build and maintain a design system that grows with your team without becoming a bottleneck.",
    tags: ["Design Systems", "Frontend"],
    readingTime: 5,
    publishedAt: "2024-11-01",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router in Practice",
    excerpt: "Lessons learned migrating a real project from Pages Router to App Router — what works, what doesn't.",
    tags: ["Next.js", "React"],
    readingTime: 8,
    publishedAt: "2024-10-15",
  },
  {
    slug: "ux-meets-frontend",
    title: "When UX Meets Frontend",
    excerpt: "Bridging the gap between design thinking and engineering — a workflow that actually works.",
    tags: ["UX", "Process"],
    readingTime: 6,
    publishedAt: "2024-09-20",
  },
];

export default function HomePage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section spacing="xl">
        <Container>
          <div className={styles.hero}>

            {/* Left — text */}
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>UI/UX Designer & Frontend Developer</p>
              <Heading level="h1" className={styles.heroHeading}>
                Crafting elite digital experiences with precision.
              </Heading>
              <Text variant="secondary" className={styles.heroDescription}>
                I design and build products where aesthetics and engineering meet — from design systems to full-stack applications.
              </Text>
              <Stack direction="row" gap="sm" wrap="wrap">
                <Button
                  as="a"
                  href="/projects"
                  size="lg"
                  iconRight={<ArrowRight size={16} />}
                >
                  View Projects
                </Button>
                <Button
                  as="a"
                  href="/blog"
                  variant="secondary"
                  size="lg"
                >
                  Read Blog
                </Button>
              </Stack>
            </div>

            {/* Right — code animation */}
            <div className={styles.heroCode}>
              <CodeAnimation />
            </div>

          </div>
        </Container>
      </Section>

      {/* ── Featured Projects ────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <Heading level="h2">Selected Work</Heading>
              <Text variant="secondary">
                A mix of UX case studies and frontend projects.
              </Text>
            </div>
            <Button
              as="a"
              href="/projects"
              variant="ghost"
              iconRight={<ArrowRight size={16} />}
            >
              All projects
            </Button>
          </div>

          <Grid cols={1} colsMd={2} colsLg={3} gap="md">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── Latest Posts ─────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <Heading level="h2">From the Blog</Heading>
              <Text variant="secondary">
                Thoughts on design, frontend and the space between them.
              </Text>
            </div>
            <Button
              as="a"
              href="/blog"
              variant="ghost"
              iconRight={<ArrowRight size={16} />}
            >
              All posts
            </Button>
          </div>

          <Grid cols={1} colsMd={2} colsLg={3} gap="md">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── CTA Final ────────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <div className={styles.cta}>
            <Heading level="h2">Let's work together.</Heading>
            <Text variant="secondary">
              Have a project in mind? I'm available for freelance work and collaborations.
            </Text>
            <Button
              as="a"
              href="mailto:hello@sanfabiian.com"
              size="lg"
              iconLeft={<Mail size={16} />}
            >
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>

    </main>
  );
}