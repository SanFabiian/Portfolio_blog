import { getTranslations } from "next-intl/server";

import { Container, Section, Grid, Stack  } from "@/components/layout/index";
import { Heading, Text, Button, ProjectCard, PostCard, CodeAnimation } from "@/components/ui/index";

import { ArrowRight, Mail } from "lucide-react";
import { getFeaturedProjects, getLatestPosts } from "@/services/sanity";

import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";

import { Footer } from "@/components/layout";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const [featuredProjects, latestPosts] = await Promise.all([
    getFeaturedProjects(locale),
    getLatestPosts(locale),
  ]);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <Section className={styles.curtain}>
        <Container className="h100">
          <div className={`${styles.hero} ${styles.h100}`}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>{t("eyebrow")}</p>
              <Heading level="h1" className={styles.heroHeading}>
                {t("heading")}
              </Heading>
              <Text variant="secondary" className={styles.heroDescription}>
                {t("description")}
              </Text>
              <Stack direction="row" gap="sm" wrap="wrap">
                <Button as={Link} href="/projects" size="lg" iconRight={<ArrowRight size={16} />}>
                  {t("cta_projects")}
                </Button>
                <Button as={Link} href="/blog" variant="secondary" size="lg" iconRight={<ArrowRight size={16} />}>
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
      <Section className={styles.curtain}>
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
      <Section className={styles.curtain}>
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
      <Section className={styles.curtain}>
        <Container>
          <div className={styles.cta}>
            <Heading level="h2">{t("cta_heading")}</Heading>
            <Text variant="secondary">{t("cta_desc")}</Text>
            <Button as="a" href="mailto:hello@sanfabiian.com" size="lg" iconLeft={<Mail size={16} />}>
              {t("cta_button")}
            </Button>
          </div>
        </Container>
        <Footer />
      </Section>
    </main>
  );
}