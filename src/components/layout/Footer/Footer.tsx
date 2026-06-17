"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.scss";

const currentYear = new Date().getFullYear();

export function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo} aria-label="SanFabiian home">
          <Logo size="small" aria-label="" variant="logo" color="white" />
        </Link>
        <p className={styles.copyright}>
          © {currentYear} SanFabiian. {tFooter("copyright")}
        </p>
        <nav className={styles.links}>
          <Link href="/projects">{tNav("projects")}</Link>
          <Link href="/blog">{tNav("blog")}</Link>
          <Link href="/about">{tNav("about")}</Link>
        </nav>
      </div>
    </footer>
  );
}
