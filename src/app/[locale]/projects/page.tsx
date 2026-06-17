import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
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
          <Text color="muted">{t("description")}</Text>
        </div>
        {projects.length > 0 ? (
          <Grid cols={1} colsMd={2} colsLg={3} gap="md">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Grid>
        ) : (
          <Text color="muted">{t("empty")}</Text>
        )}

        <div className={styles.labSection}>
          <p className={styles.labLabel}>{t("lab_label")}</p>
          <ContentCard
            href="/playground"
            title={t("playground_title")}
            description={t("playground_desc")}
            meta={<Badge>{t("playground_badge")}</Badge>}
            className={styles.playgroundCard}
          />
        </div>
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