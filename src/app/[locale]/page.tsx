import { getTranslations } from "next-intl/server";
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
import { getFeaturedProjects, getLatestPosts } from "@/services/sanity";
import styles from "./page.module.scss";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const [featuredProjects, latestPosts] = await Promise.all([
    getFeaturedProjects(),
    getLatestPosts(),
  ]);

  return (
    <main>
      {/* Hero */}
      <Section spacing="xl">
        <Container>
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>{t("eyebrow")}</p>
              <Heading level="h1" className={styles.heroHeading}>
                {t("heading")}
              </Heading>
              <Text variant="secondary" className={styles.heroDescription}>
                {t("description")}
              </Text>
              <Stack direction="row" gap="sm" wrap="wrap">
                <Button as="a" href="/projects" size="lg" iconRight={<ArrowRight size={16} />}>
                  {t("cta_projects")}
                </Button>
                <Button as="a" href="/blog" variant="secondary" size="lg">
                  {t("cta_blog")}
                </Button>
              </Stack>
            </div>
            <div className={styles.heroCode}>
              <CodeAnimation />
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section spacing="lg">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <Heading level="h2">{t("selected_work")}</Heading>
              <Text variant="secondary">{t("selected_work_desc")}</Text>
            </div>
            <Button as="a" href="/projects" variant="ghost" iconRight={<ArrowRight size={16} />}>
              {t("all_projects")}
            </Button>
          </div>
          <Grid cols={1} colsMd={2} colsLg={3} gap="md">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Latest Posts */}
      <Section spacing="lg">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <Heading level="h2">{t("from_blog")}</Heading>
              <Text variant="secondary">{t("from_blog_desc")}</Text>
            </div>
            <Button as="a" href="/blog" variant="ghost" iconRight={<ArrowRight size={16} />}>
              {t("all_posts")}
            </Button>
          </div>
          <Grid cols={1} colsMd={2} colsLg={3} gap="md">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <Container>
          <div className={styles.cta}>
            <Heading level="h2">{t("cta_heading")}</Heading>
            <Text variant="secondary">{t("cta_desc")}</Text>
            <Button as="a" href="mailto:hello@sanfabiian.com" size="lg" iconLeft={<Mail size={16} />}>
              {t("cta_button")}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}