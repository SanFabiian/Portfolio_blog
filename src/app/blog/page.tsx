import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PostCard } from "@/components/ui/PostCard";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

export const metadata = {
  title: "Blog | SanFabiian",
  description: "Thoughts on design, frontend development and the space between them.",
};

// Static data — replaced with Sanity fetch in Phase 4
const posts: Post[] = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    excerpt: "How to build and maintain a design system that grows with your team without becoming a bottleneck.",
    tags: ["Design Systems", "Frontend"],
    readingTime: 5,
    publishedAt: "2024-11-01",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router in Practice",
    excerpt: "Lessons learned migrating a real project from Pages Router to App Router — what works, what doesn't.",
    tags: ["Next.js", "React"],
    readingTime: 8,
    publishedAt: "2024-10-15",
  },
  {
    slug: "ux-meets-frontend",
    title: "When UX Meets Frontend",
    excerpt: "Bridging the gap between design thinking and engineering — a workflow that actually works.",
    tags: ["UX", "Process"],
    readingTime: 6,
    publishedAt: "2024-09-20",
  },
];

export default function BlogPage() {
  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.header}>
          <Heading level="h1">Blog</Heading>
          <Text variant="secondary">
            Thoughts on design, frontend development and the space between them.
          </Text>
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