"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { Button, Logo, ToggleLang } from "@/components/ui/index";
import { Container, Stack } from "@/components/layout/index";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-navbar]")) setIsOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.navbar} data-navbar>
      <Container>
        <Stack className={styles.content} direction="row" align="center">
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Logo size="small" variant="isotipo" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className={styles.desktopNav}>
            <div className={styles.links} role="list">
              {navItems.map(({ href, labelKey }) => (
                <Button
                  key={href}
                  variant="rounded"
                  as={Link}
                  href={href}
                  active={isActive(href)}
                >
                  {t(labelKey)}
                </Button>
              ))}
            </div>
          </nav>

          {/* Right side */}
          <Stack direction="row" align="center" gap="xs">
            <ToggleLang />
            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              className={styles.hamburger}
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </Stack>
        </Stack>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          <Container>
            <nav>
              {navItems.map(({ href, labelKey }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.mobileLink} ${isActive(href) ? styles.mobileLinkActive : ""}`}
                >
                  {t(labelKey)}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
