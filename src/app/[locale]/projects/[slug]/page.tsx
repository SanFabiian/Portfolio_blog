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
import { getProjectBySlug, getProjects } from "@/services/sanity";
import styles from "./page.module.scss";

const categoryLabel: Record<string, string> = {
  ux: "UX Design",
  frontend: "Frontend",
  fullstack: "Fullstack",
};

const categoryBadge: Record<string, "info" | "success" | "warning"> = {
  ux: "info",
  frontend: "success",
  fullstack: "warning",
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | SanFabiian`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "projects" });

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
                <Button as="a" href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" iconLeft={<Github size={14} />}>
                  GitHub
                </Button>
              )}
              {project.link && (
                <Button as="a" href={project.link} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" iconLeft={<ExternalLink size={14} />}>
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