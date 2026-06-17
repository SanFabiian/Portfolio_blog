import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/layout/index";
import { Heading, Text, Button } from "@/components/ui/index";
import { ArrowLeft } from "lucide-react";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "not_found" });

  return (
    <Container as="main">
      <Section spacing="xl">
        <Heading level="h1">404</Heading>
        <Heading level="h2">{t("title")}</Heading>
        <Text color="muted">{t("message")}</Text>
        <Button as={Link} href="/" variant="secondary" iconLeft={<ArrowLeft size={16} />}>
          {t("back")}
        </Button>
      </Section>
    </Container>
  );
}
