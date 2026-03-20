import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types/project";
import styles from "./page.module.scss";

export const metadata = {
  title: "Projects | SanFabiian",
  description: "A selection of work across UX design and frontend development.",
};

// Static data — replaced with Sanity fetch in Phase 4
const projects: Project[] = [
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
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js 14 App Router, Sanity CMS and a custom design system.",
    category: "fullstack",
    tags: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
    link: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.header}>
          <Heading level="h1">Projects</Heading>
          <Text variant="secondary">
            A selection of work across UX design and frontend development.
          </Text>
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