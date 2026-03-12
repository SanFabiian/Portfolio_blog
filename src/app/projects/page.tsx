import { Container } from "@/components/layout";
import styles from "./page.module.scss";

export const metadata = {
  title: "Projects | SanFabiian",
  description: "Explore my web design and development projects.",
};

export default function ProjectsPage() {
  return (
    <Container as="main">
      <div className={styles.page}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A collection of my work. Coming soon.
        </p>
      </div>
    </Container>
  );
}
