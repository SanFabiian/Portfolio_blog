"use client";

import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import clsx from "clsx";
import { Button, Logo, ToggleLang } from "@/components/ui/index";
import { Stack } from "@/components/layout/index";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.scss";

const navItems = [
  { href: "/", labelKey: "home" },
  { href: "/projects", labelKey: "projects" },
  { href: "/blog", labelKey: "blog" },
  { href: "/about", labelKey: "about" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();


  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Logo size="small" variant="isotipo" />
      </Link>
      <Stack className={styles.content} direction="row" align="center" gap="lg">
        <nav aria-label="Main navigation">
          <div className={styles.links} role="list">
            {navItems.map(({ href, labelKey }) => (
              <Button key={href}
                variant="rounded"
                as={Link}
                href={href}
                active={isActive(href)}
                className={styles.item}
              >
                {t(labelKey)}
              </Button>
            ))}
          </div>
        </nav>

        <ToggleLang />
        <ThemeToggle />
      </Stack>
    </header>
  );
}