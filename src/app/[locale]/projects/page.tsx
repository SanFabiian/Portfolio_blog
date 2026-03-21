import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types/project";
import styles from "./page.module.scss";

const projects: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    description: "A scalable component library built with React, TypeScript and SCSS.",
    category: "frontend",
    tags: ["React", "TypeScript", "SCSS"],
    github: "https://github.com",
    featured: true,
  },
  {
    slug: "ux-case-study",
    title: "UX Case Study",
    description: "End-to-end product design for a fintech mobile app.",
    category: "ux",
    tags: ["Figma", "Research", "Prototyping"],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js, Sanity CMS and a custom design system.",
    category: "fullstack",
    tags: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
    link: "https://example.com",
  },
];

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.header}>
          <Heading level="h1">{t("heading")}</Heading>
          <Text variant="secondary">{t("description")}</Text>
        </div>
        <Grid cols={1} colsMd={2} colsLg={3} gap="md">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}