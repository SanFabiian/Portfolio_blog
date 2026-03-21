import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Tag } from "@/components/ui/Tag";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

// Datos locales (reemplazar luego con fetch de Sanity)
const posts: Post[] = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    excerpt: "How to build and maintain a design system that grows with your team.",
    tags: ["Design Systems", "Frontend"],
    readingTime: 5,
    publishedAt: "2024-11-01",
    author: "SanFabiian",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router in Practice",
    excerpt: "Lessons learned migrating from Pages Router to App Router.",
    tags: ["Next.js", "React"],
    readingTime: 8,
    publishedAt: "2024-10-15",
    author: "SanFabiian",
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // params es una promesa en Next.js 15
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | SanFabiian`,
    description: post.excerpt,
  };
}

// Convertimos a función async para Server Component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) notFound();

  // Cargamos las traducciones del servidor
  const t = await getTranslations({ locale, namespace: "blog" });

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.back}>
          {/* El Link de navigation.ts mantiene el prefijo del idioma */}
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            {t("back")}
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
              <Text variant="small">
                {post.readingTime} {t("min_read")}
              </Text>
            )}
          </Stack>
        </div>

        {post.coverImage ? (
          <div className={styles.cover}>
            <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
          </div>
        ) : (
          <div className={styles.coverPlaceholder}>
            <Text variant="secondary">{t("cover_soon")}</Text>
          </div>
        )}

        <div className={styles.content}>
          <Text variant="secondary">{t("content_soon")}</Text>
        </div>
      </Section>
    </Container>
  );
}