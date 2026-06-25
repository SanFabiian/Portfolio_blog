import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/types";
import styles from "./PostRow.module.scss";
import { Stack } from "@/components/layout/Stack/Stack";

export interface PostRowProps {
  post: Post;
  featured?: boolean;
  locale?: string;
}

export function PostRow({ post, featured = false, locale = "en" }: PostRowProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        locale === "es" ? "es-ES" : "en-US",
        { year: "numeric", month: "short", day: "numeric" }
      )
    : null;

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className={`${styles.wrapper} ${styles.featured}`}>
        {post.coverImage && (
          <div className={styles.featuredImg}>
            <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: "cover" }} />
          </div>
        )}
        <div className={styles.featuredBody}>
          <Stack>
            {post.category && <Badge variant={post.category.variant ?? "default"}>{post.category.label}</Badge>}
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{post.title}</h3>
              <ArrowRight size={18} className={styles.arrow} />
            </div>
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
          </Stack>
          {(formattedDate || post.readingTime) && (
            <div className={styles.featuredMeta}>
              {formattedDate && <span>{formattedDate}</span>}
              {formattedDate && post.readingTime && <span>·</span>}
              {post.readingTime && (
                <span className={styles.reading}>
                  <Clock size={11} />
                  {post.readingTime} min
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className={styles.wrapper}>
      <div className={styles.left}>
        {formattedDate && <span className={styles.date}>{formattedDate}</span>}
        {post.readingTime && (
          <span className={styles.reading}>
            <Clock size={11} />
            {post.readingTime} min
          </span>
        )}
      </div>

      <div className={styles.right}>
        {post.category && (
          <div>
            <Badge variant={post.category.variant ?? "default"}>{post.category.label}</Badge>
          </div>
        )}
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{post.title}</h3>
          <ArrowRight size={16} className={styles.arrow} />
        </div>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
      </div>
    </Link>
  );
}
