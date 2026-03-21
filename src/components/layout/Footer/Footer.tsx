import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.scss";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo} aria-label="SanFabiian home">
          <Logo size="small" aria-label="" variant="logo"/>
        </Link>
        <p className={styles.copyright}>
          © {currentYear} SanFabiian. All rights reserved.
        </p>
        <nav className={styles.links}>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
}
