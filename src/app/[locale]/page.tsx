import { getTranslations } from "next-intl/server";

import { Container, Section, Grid, Stack } from "@/components/layout/index";
import { Heading, Text, Button, ProjectCard, PostRow } from "@/components/ui/index";

import { ArrowRight, Mail } from "lucide-react";
import { getFeaturedProjects, getLatestPosts, getSiteSettings } from "@/services/sanity";

import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const [featuredProjects, latestPosts, settings] = await Promise.all([
    getFeaturedProjects(locale),
    getLatestPosts(locale),
    getSiteSettings(locale),
  ]);

  // Prefer Sanity value, fall back to JSON translation
  const txt = (sanityValue: string | null | undefined, fallback: string) =>
    sanityValue || fallback;

  return (
    <main>
      {/* Hero */}
      <Container>
        <div className={styles.hero}>
          <div className={styles.availableBadge}>
            <span className={styles.availableDot} />
            {txt(settings?.available, t("available"))}
          </div>
          <Heading level="h1" className={styles.heroHeading}>
            {txt(settings?.heading, t("heading"))}
          </Heading>
          <Text className={styles.heroDescription}>
            {txt(settings?.description, t("description"))}
          </Text>
          <Stack direction="row" gap="sm" wrap="wrap">
            <Button as={Link} href="/projects" size="lg" iconRight={<ArrowRight size={16} />}>
              {txt(settings?.cta_projects, t("cta_projects"))}
            </Button>
            <Button as={Link} href="/about" variant="secondary" size="lg">
              {txt(settings?.cta_about, t("cta_about"))}
            </Button>
          </Stack>
        </div>
      </Container>

      {/* Featured Projects */}
      <Section spacing="xl">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>{txt(settings?.selected_work, t("selected_work"))}</p>
              <Text color="muted">{txt(settings?.selected_work_desc, t("selected_work_desc"))}</Text>
            </div>
            <Button as={Link} href="/projects" variant="ghost" iconRight={<ArrowRight size={16} />}>
              {txt(settings?.all_projects, t("all_projects"))}
            </Button>
          </div>
          <Grid cols={1} colsMd={2} colsLg={3} gap="lg">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Latest Posts */}
      <Section spacing="xl">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>{txt(settings?.from_blog, t("from_blog"))}</p>
              <Text color="muted">{txt(settings?.from_blog_desc, t("from_blog_desc"))}</Text>
            </div>
            <Button as={Link} href="/blog" variant="ghost" iconRight={<ArrowRight size={16} />}>
              {txt(settings?.all_posts, t("all_posts"))}
            </Button>
          </div>
          <div className={styles.blogFeed}>
            {latestPosts[0] && (
              <PostRow post={latestPosts[0]} featured locale={locale} />
            )}
            {latestPosts.slice(1).length > 0 && (
              <Grid cols={1} colsMd={2} gap="md">
                {latestPosts.slice(1).map((post) => (
                  <PostRow key={post.slug} post={post} locale={locale} />
                ))}
              </Grid>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="xl">
        <Container>
          <div className={styles.cta}>
            <Heading level="h2">{txt(settings?.cta_heading, t("cta_heading"))}</Heading>
            <Text color="muted">{txt(settings?.cta_desc, t("cta_desc"))}</Text>
            <Button as="a" href="mailto:hello@sanfabiian.com" size="lg" iconLeft={<Mail size={16} />}>
              {txt(settings?.cta_button, t("cta_button"))}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
