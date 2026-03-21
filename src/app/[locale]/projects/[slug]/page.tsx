import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
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

// Datos locales (esto luego lo reemplazarás por tu fetch de Sanity)
const projects: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    description: "A scalable component library built with React, TypeScript and SCSS.",
    category: "frontend",
    tags: ["React", "TypeScript", "SCSS"],
    github: "https://github.com",
    publishedAt: "2024-11-01",
  },
  {
    slug: "ux-case-study",
    title: "UX Case Study",
    description: "End-to-end product design for a fintech mobile app.",
    category: "ux",
    tags: ["Figma", "Research", "Prototyping"],
    publishedAt: "2024-10-15",
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js, Sanity CMS and a custom design system.",
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

// ✅ MODIFICACIÓN: Componente asíncrono para Server Component
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  // ✅ MODIFICACIÓN: Await para params en Next.js 15
  const { slug, locale } = await params;
  
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // ✅ MODIFICACIÓN: Uso de getTranslations (Server Side) con await
  const t = await getTranslations({ locale, namespace: "projects" });

  // ✅ MODIFICACIÓN: Formateo de fecha usando el locale actual
  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.back}>
          {/* ✅ Usando Link de @/i18n/navigation mantiene el locale */}
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            {t("back")}
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
            {formattedDate && <Text variant="small">{formattedDate}</Text>}
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
            <Text variant="secondary">{t("cover_soon")}</Text>
          </div>
        )}

        <div className={styles.content}>
          <Text variant="secondary">{t("content_soon")}</Text>
        </div>
      </Section>
    </Container>
  );
}