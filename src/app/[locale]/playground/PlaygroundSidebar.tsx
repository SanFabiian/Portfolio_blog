"use client";

import { useState, useEffect } from "react";
import styles from "./PlaygroundSidebar.module.scss";

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const groups: NavGroup[] = [
  {
    label: "Brand",
    items: [
      { id: "overview", label: "Overview" },
      { id: "colors", label: "Colors" },
      { id: "logos", label: "Logos" },
    ],
  },
  {
    label: "Typography",
    items: [
      { id: "heading", label: "Heading" },
      { id: "text", label: "Text" },
    ],
  },
  {
    label: "Core",
    items: [
      { id: "badge", label: "Badge" },
      { id: "tag", label: "Tag" },
      { id: "button", label: "Button" },
      { id: "input", label: "Input" },
      { id: "card", label: "Card" },
    ],
  },
  {
    label: "Composed",
    items: [
      { id: "content-card", label: "ContentCard" },
      { id: "project-card", label: "ProjectCard" },
      { id: "post-row", label: "PostRow" },
    ],
  },
  {
    label: "Layout",
    items: [
      { id: "stack", label: "Stack" },
      { id: "grid", label: "Grid" },
    ],
  },
  {
    label: "Animation",
    items: [{ id: "code-animation", label: "CodeAnimation" }],
  },
];

export function PlaygroundSidebar() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(groups.map((g) => [g.label, true]))
  );
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const allIds = groups.flatMap((g) => g.items.map((i) => i.id));
    const observers: IntersectionObserver[] = [];

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.sidebar} aria-label="Component navigation">
      <p className={styles.sidebarTitle}>Components</p>
      {groups.map((group) => (
        <div key={group.label} className={styles.group}>
          <button
            className={styles.groupToggle}
            onClick={() => toggleGroup(group.label)}
            aria-expanded={openGroups[group.label]}
          >
            <svg
              className={`${styles.chevron} ${openGroups[group.label] ? styles.chevronOpen : ""}`}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {group.label}
          </button>

          {openGroups[group.label] && (
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    className={`${styles.item} ${activeId === item.id ? styles.itemActive : ""}`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}
