import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PostCard } from "@/components/ui/PostCard";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

const posts: Post[] = [
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

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.header}>
          <Heading level="h1">{t("heading")}</Heading>
          <Text variant="secondary">{t("description")}</Text>
        </div>
        <Grid cols={1} colsMd={2} colsLg={3} gap="md">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}