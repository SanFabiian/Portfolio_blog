import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PostCard } from "@/components/ui/PostCard";
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