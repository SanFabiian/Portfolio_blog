"use client";

import { ContentCard } from "@/components/ui/ContentCard";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types";
import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

const categoryLabel: Record<string, string> = {
  ux:        "UX Design",
  frontend:  "Frontend",
  fullstack: "Fullstack",
};

const categoryBadge: Record<string, "info" | "success" | "warning"> = {
  ux:        "info",
  frontend:  "success",
  fullstack: "warning",
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const meta = (
    <>
      {project.category && (
        <Badge variant={categoryBadge[project.category] ?? "info"}>
          {categoryLabel[project.category] ?? project.category}
        </Badge>
      )}
      {project.tags?.slice(0, 3).map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </>
  );

  // Plain <a> tags — safe here because footer renders outside <Link>
  const footer = (project.github || project.link) ? (
    <div className={styles.actions}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionLink}
        >
          GitHub →
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionLink}
        >
          Live →
        </a>
      )}
    </div>
  ) : undefined;

  return (
    <ContentCard
      href={`/projects/${project.slug}`}
      image={project.image}
      imageAlt={project.title}
      meta={meta}
      title={project.title}
      description={project.description}
      footer={footer}
      className={className}
    />
  );
}