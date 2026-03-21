import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

const featuredProjects: Project[] = [
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
    featured: true,
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js 14, Sanity CMS and a custom design system.",
    category: "fullstack",
    tags: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
    featured: true,
  },
];

const latestPosts: Post[] = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    excerpt: "How to build and maintain a design system that grows with your team.",
    tags: ["Design Systems", "Frontend"],
    readingTime: 5,
    publishedAt: "2024-11-01",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router in Practice",
    excerpt: "Lessons learned migrating from Pages Router to App Router.",
    tags: ["Next.js", "React"],
    readingTime: 8,
    publishedAt: "2024-10-15",
  },
  {
    slug: "ux-meets-frontend",
    title: "When UX Meets Frontend",
    excerpt: "Bridging the gap between design thinking and engineering.",
    tags: ["UX", "Process"],
    readingTime: 6,
    publishedAt: "2024-09-20",
  },
];

export default function HomePage() {
  const t = useTranslations("home");

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
                <Button
                  as="a"
                  href="/projects"
                  size="lg"
                  iconRight={<ArrowRight size={16} />}
                >
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
            <Button
              as="a"
              href="mailto:hello@sanfabiian.com"
              size="lg"
              iconLeft={<Mail size={16} />}
            >
              {t("cta_button")}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}