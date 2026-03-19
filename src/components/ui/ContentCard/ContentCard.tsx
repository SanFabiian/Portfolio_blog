"use client";

import Link from "next/link";
import clsx from "clsx";
import { Card } from "@/components/ui/Card";
import styles from "./ContentCard.module.scss";

export interface ContentCardProps {
  href: string;
  image?: string;
  imageAlt?: string;
  meta?: React.ReactNode;
  title: string;
  description: string;
  footer?: React.ReactNode;
  className?: string;
}

export function ContentCard({
  href,
  image,
  imageAlt = "",
  meta,
  title,
  description,
  footer,
  className,
}: ContentCardProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Link href={href} className={styles.link}>
        <Card padding={false} as="article" className={styles.card}>

          {image && (
            <div className={styles.cover}>
              <img src={image} alt={imageAlt} className={styles.image} />
            </div>
          )}

          <div className={styles.body}>
            {meta && <div className={styles.meta}>{meta}</div>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>

        </Card>
      </Link>

      {footer && (
        <div className={styles.footer}>{footer}</div>
      )}
    </div>
  );
}