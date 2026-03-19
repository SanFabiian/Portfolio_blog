"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logo } from "@/components/ui/index";
import { Stack } from "@/components/layout/Stack";
import styles from "./Navbar.module.scss";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/blog",     label: "Blog" },
  { href: "/about",    label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.navbar}>
      <Stack className={styles.content} direction="row" align="center" gap="lg">
        <Link href="/" className={styles.logo} aria-label="SanFabiian home">
          <Logo size="medium" aria-label="" variant="isotipo" />
        </Link>

        <nav aria-label="Main navigation">
          <ul className={styles.links} role="list">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(styles.link, {
                    [styles.active]: isActive(href),
                  })}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Stack>
    </header>
  );
}