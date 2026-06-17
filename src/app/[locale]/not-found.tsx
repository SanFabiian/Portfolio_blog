import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/index";
import { Heading, Text, Button } from "@/components/ui/index";
import { ArrowLeft } from "lucide-react";
import styles from "./not-found.module.scss";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "not_found" });

  return (
    <Container as="main">
      <div className={styles.wrapper}>
        <p className={styles.code}>404</p>
        <Heading level="h1">{t("title")}</Heading>
        <Text color="muted">{t("message")}</Text>
        <Button as={Link} href="/" variant="secondary" iconLeft={<ArrowLeft size={16} />}>
          {t("back")}
        </Button>
      </div>
    </Container>
  );
}
