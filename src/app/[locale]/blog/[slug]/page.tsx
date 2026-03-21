import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Tag } from "@/components/ui/Tag";
import { PortableText } from "@/components/ui/PortableText/PortableText";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getPosts } from "@/services/sanity";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  const posts = await getPosts("en");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        "en": `/en/blog/${slug}`,
        "es": `/es/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);
  if (!post) notFound();

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
        <Stack align="center">
        <div className={styles.back}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            {t("back")}
          </Link>
        </div>
          <div className={styles.header}>
            {post.tags && post.tags.length > 0 && (
              <Stack direction="row" gap="sm" wrap="wrap">
                {post.tags.map((tag) => (
                  <Tag key={tag.slug}>{tag.label}</Tag>
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
            {post.content ? (
              <PortableText value={post.content} />
            ) : (
              <Text variant="secondary">{t("content_soon")}</Text>
            )}
          </div>
        </Stack>
      </Section>
    </Container>
  );
}