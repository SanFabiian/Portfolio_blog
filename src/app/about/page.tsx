import { Container } from "@/components/layout";
import styles from "./page.module.scss";

export const metadata = {
  title: "About | SanFabiian",
  description: "Learn more about SanFabiian, web designer and developer.",
};

export default function AboutPage() {
  return (
    <Container as="main">
      <div className={styles.page}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.subtitle}>
          Web designer and developer with a passion for creating beautiful and functional websites.
        </p>
      </div>
    </Container>
  );
}
