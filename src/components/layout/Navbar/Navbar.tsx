"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation"; // ✅ IMPORTANTE: Todo de @/i18n/navigation
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Stack } from "@/components/layout/Stack";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.scss";

const navItems = [
  { href: "/projects", labelKey: "projects" },
  { href: "/blog",     labelKey: "blog"     },
  { href: "/about",    labelKey: "about"    },
] as const;

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  function switchLocale(nextLocale: "en" | "es") {
    if (nextLocale === locale) return;
    // next-intl se encarga de la cookie y de reconstruir la URL correctamente
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Logo size="medium" variant="isotipo" />
        </Link>
      <Stack className={styles.content} direction="row" align="center" gap="lg">
        <nav aria-label="Main navigation">
          <ul className={styles.links} role="list">
            {navItems.map(({ href, labelKey }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(styles.link, { [styles.active]: isActive(href) })}
                >
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.localeToggle}>
          <button
            className={clsx(styles.localeBtn, { [styles.localeBtnActive]: locale === "en" })}
            onClick={() => switchLocale("en")}
          >
            EN
          </button>
          <span className={styles.localeDivider}>|</span>
          <button
            className={clsx(styles.localeBtn, { [styles.localeBtnActive]: locale === "es" })}
            onClick={() => switchLocale("es")}
          >
            ES
          </button>
        </div>
        <ThemeToggle />
      </Stack>
    </header>
  );
}