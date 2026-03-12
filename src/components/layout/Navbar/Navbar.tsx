"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/index";
import { Stack } from "@/components/layout/index";
import styles from "./Navbar.module.scss";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Stack className={styles.content} direction="row" align="center" gap="md">
        <Link href="/" className={styles.logo} aria-label="SanFabiian home">
          <Logo size="medium" aria-label="" variant="isotipo"/>
        </Link>
        <ul className={styles.links}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Stack>
    </nav>
  );
}
