import { Container } from "@/components/layout";
import styles from "./page.module.scss";

export const metadata = {
  title: "Blog | SanFabiian",
  description: "Thoughts on web design, development, and more.",
};

export default function BlogPage() {
  return (
    <Container as="main">
      <div className={styles.page}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Articles and updates. Coming soon.
        </p>
      </div>
    </Container>
  );
}
