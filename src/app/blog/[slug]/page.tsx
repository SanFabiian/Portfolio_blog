import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Tag } from "@/components/ui/Tag";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

const posts: Post[] = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    excerpt: "How to build and maintain a design system that grows with your team without becoming a bottleneck.",
    tags: ["Design Systems", "Frontend"],
    readingTime: 5,
    publishedAt: "2024-11-01",
    author: "SanFabiian",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router in Practice",
    excerpt: "Lessons learned migrating a real project from Pages Router to App Router — what works, what doesn't.",
    tags: ["Next.js", "React"],
    readingTime: 8,
    publishedAt: "2024-10-15",
    author: "SanFabiian",
  },
  {
    slug: "ux-meets-frontend",
    title: "When UX Meets Frontend",
    excerpt: "Bridging the gap between design thinking and engineering — a workflow that actually works.",
    tags: ["UX", "Process"],
    readingTime: 6,
    publishedAt: "2024-09-20",
    author: "SanFabiian",
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Next.js 15 — params is a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | SanFabiian`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 15 — await params before accessing properties
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Container as="main">
      <Section spacing="lg">

        <div className={styles.back}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            All posts
          </Link>
        </div>

        <div className={styles.header}>
          {post.tags && post.tags.length > 0 && (
            <Stack direction="row" gap="sm" wrap="wrap">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Stack>
          )}

          <Heading level="h1">{post.title}</Heading>
          <Text variant="secondary">{post.excerpt}</Text>

          <Stack direction="row" align="center" gap="md" wrap="wrap">
            {post.author && <Text variant="small">{post.author}</Text>}
            {formattedDate && <Text variant="small">{formattedDate}</Text>}
            {post.readingTime && (
              <Text variant="small">{post.readingTime} min read</Text>
            )}
          </Stack>
        </div>

        {post.coverImage ? (
          <div className={styles.cover}>
            <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
          </div>
        ) : (
          <div className={styles.coverPlaceholder}>
            <Text variant="secondary">Post cover — coming soon</Text>
          </div>
        )}

        <div className={styles.content}>
          <Text variant="secondary">
            Full post content will be available once Sanity CMS is connected in Phase 4.
          </Text>
        </div>

      </Section>
    </Container>
  );
}