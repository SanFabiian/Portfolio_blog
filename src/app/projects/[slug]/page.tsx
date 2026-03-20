import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import type { Project } from "@/types/project";
import styles from "./page.module.scss";

const projects: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    description: "A scalable component library built with React, TypeScript and SCSS following atomic design principles.",
    category: "frontend",
    tags: ["React", "TypeScript", "SCSS"],
    github: "https://github.com",
    publishedAt: "2024-11-01",
  },
  {
    slug: "ux-case-study",
    title: "UX Case Study",
    description: "End-to-end product design for a fintech mobile app — from discovery and user research to final prototype.",
    category: "ux",
    tags: ["Figma", "Research", "Prototyping"],
    publishedAt: "2024-10-15",
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js 14 App Router, Sanity CMS and a custom design system.",
    category: "fullstack",
    tags: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
    link: "https://example.com",
    publishedAt: "2024-09-20",
  },
];

const categoryLabel: Record<string, string> = {
  ux:        "UX Design",
  frontend:  "Frontend",
  fullstack: "Fullstack",
};

const categoryBadge: Record<string, "info" | "success" | "warning"> = {
  ux:        "info",
  frontend:  "success",
  fullstack: "warning",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Next.js 15 — params is a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | SanFabiian`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 15 — await params before accessing properties
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Container as="main">
      <Section spacing="lg">

        <div className={styles.back}>
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            All projects
          </Link>
        </div>

        <div className={styles.header}>
          <Stack direction="row" align="center" gap="sm" wrap="wrap">
            <Badge variant={categoryBadge[project.category] ?? "info"}>
              {categoryLabel[project.category] ?? project.category}
            </Badge>
            {project.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Stack>

          <Heading level="h1">{project.title}</Heading>
          <Text variant="secondary">{project.description}</Text>

          <Stack direction="row" align="center" gap="lg" wrap="wrap">
            {formattedDate && (
              <Text variant="small">{formattedDate}</Text>
            )}
            <Stack direction="row" gap="sm">
              {project.github && (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  iconLeft={<Github size={14} />}
                >
                  GitHub
                </Button>
              )}
              {project.link && (
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  iconLeft={<ExternalLink size={14} />}
                >
                  Live
                </Button>
              )}
            </Stack>
          </Stack>
        </div>

        {project.image ? (
          <div className={styles.cover}>
            <img src={project.image} alt={project.title} className={styles.coverImage} />
          </div>
        ) : (
          <div className={styles.coverPlaceholder}>
            <Text variant="secondary">Project cover — coming soon</Text>
          </div>
        )}

        <div className={styles.content}>
          <Text variant="secondary">
            Full project content will be available once Sanity CMS is connected in Phase 4.
          </Text>
        </div>

      </Section>
    </Container>
  );
}