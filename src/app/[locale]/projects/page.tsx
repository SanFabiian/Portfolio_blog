import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getProjects } from "@/services/sanity";
import styles from "./page.module.scss";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const projects = await getProjects(locale);

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: `${t("heading")} | SanFabiian`,
    description: t("description"),
  };
}