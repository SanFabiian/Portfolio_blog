"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { Card, Text } from "@/components/ui";
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
              <Image src={image} alt={imageAlt} fill className={styles.image} />
            </div>
          )}

          <div className={styles.body}>
            {meta && <div className={styles.meta}>{meta}</div>}
            <h3 className={styles.title}>{title}</h3>
            <Text>
              {description}
            </Text>
          </div>

        </Card>
      </Link>

      {footer && (
        <div className={styles.footer}>{footer}</div>
      )}
    </div>
  );
}