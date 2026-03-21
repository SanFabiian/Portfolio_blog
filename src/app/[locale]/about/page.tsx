import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import styles from "./page.module.scss";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <Container as="main">
      <Section spacing="lg">
        <div className={styles.header}>
          <Heading level="h1">{t("heading")}</Heading>
          <Text variant="secondary">{t("description")}</Text>
        </div>
      </Section>
    </Container>
  );
}