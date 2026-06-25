import { getTranslations } from "next-intl/server";
import { Container, Section, Stack } from "@/components/layout/index";
import { Heading, Text, PostRow } from "@/components/ui/index";
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
        <Stack>
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
        </Stack>
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