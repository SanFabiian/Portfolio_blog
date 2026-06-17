import { getTranslations } from "next-intl/server";
import { Container, Section, Stack } from "@/components/layout/index";
import { Heading, Text, Tag, PortableText, Button } from "@/components/ui/index";
import { Github, Linkedin, Mail } from "lucide-react";
import { getAbout } from "@/services/sanity";
import styles from "./page.module.scss";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [t, about] = await Promise.all([
    getTranslations({ locale, namespace: "about" }),
    getAbout(locale),
  ]);

  if (!about) {
    return (
      <Container as="main">
        <Section spacing="lg">
          <Heading level="h1">{t("bio_heading")}</Heading>
          <Text variant="secondary">{t("coming_soon")}</Text>
        </Section>
      </Container>
    );
  }

  return (
    <Container as="main">
      <Section spacing="lg">

        <div className={styles.header}>
          {about.avatar && (
            <img
              src={about.avatar}
              alt={about.heading}
              className={styles.avatar}
            />
          )}
          <div className={styles.headerText}>
            <Heading level="h1">{about.heading}</Heading>
            {about.role && (
              <Text variant="secondary">{about.role}</Text>
            )}
            <Stack direction="row" gap="sm" wrap="wrap">
              {about.email && (
                <Button
                  as="a"
                  href={`mailto:${about.email}`}
                  variant="secondary"
                  size="sm"
                  iconLeft={<Mail size={14} />}
                >
                  {about.email}
                </Button>
              )}
              {about.github && (
                <Button
                  as="a"
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  iconLeft={<Github size={14} />}
                >
                  GitHub
                </Button>
              )}
              {about.linkedin && (
                <Button
                  as="a"
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  iconLeft={<Linkedin size={14} />}
                >
                  LinkedIn
                </Button>
              )}
            </Stack>
          </div>
        </div>

        {about.bio && (
          <div className={styles.bio}>
            <Heading level="h2">{t("bio_heading")}</Heading>
            <PortableText value={about.bio} />
          </div>
        )}

        {about.skills && about.skills.length > 0 && (
          <div className={styles.skills}>
            <Heading level="h2">{t("skills_heading")}</Heading>
            <Stack direction="row" gap="sm" wrap="wrap">
              {about.skills.map((skill) => (
                <Tag key={skill.slug}>{skill.label}</Tag>
              ))}
            </Stack>
          </div>
        )}

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
  const about = await getAbout(locale);
  return {
    title: `${about?.heading} | SanFabiian`,
    description: about?.role ?? "",
  };
}