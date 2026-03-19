import { ContentCard } from "@/components/ui/ContentCard";
import { Tag } from "@/components/ui/Tag";
import type { Post } from "@/types";
import styles from "./PostCard.module.scss";

export interface PostCardProps {
  post: Post;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  const meta = post.tags?.length ? (
    <>
      {post.tags.slice(0, 2).map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </>
  ) : undefined;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const footer = (formattedDate || post.readingTime) ? (
    <div className={styles.footerContent}>
      {formattedDate && (
        <span className={styles.date}>{formattedDate}</span>
      )}
      {formattedDate && post.readingTime && (
        <span className={styles.dot}>·</span>
      )}
      {post.readingTime && (
        <span className={styles.readingTime}>{post.readingTime} min read</span>
      )}
    </div>
  ) : undefined;

  return (
    <ContentCard
      href={`/blog/${post.slug}`}
      image={post.coverImage}
      imageAlt={post.title}
      meta={meta}
      title={post.title}
      description={post.excerpt}
      footer={footer}
      className={className}
    />
  );
}