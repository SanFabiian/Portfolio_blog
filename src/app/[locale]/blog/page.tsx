import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PostRow } from "@/components/ui/PostRow";
import { getPosts } from "@/services/sanity";
import styles from "./page.module.scss";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = await getPosts(locale);

  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.content}>
          <div className={styles.header}>
            <Heading level="h1">{t("heading")}</Heading>
            <Text color="muted">{t("description")}</Text>
          </div>
          <div>
            {posts.length === 0 ? (
              <Text color="muted">{t("empty")}</Text>
            ) : (
              <>
                {posts[0] && <PostRow post={posts[0]} featured locale={locale} />}
                <div style={{ marginTop: posts[0] ? "2.4rem" : undefined }}>
                  {posts.slice(1).map((post) => (
                    <PostRow key={post.slug} post={post} locale={locale} />
                  ))}
                </div>
              </>
            )}
          </div>
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
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("heading")} | SanFabiian`,
    description: t("description"),
  };
}