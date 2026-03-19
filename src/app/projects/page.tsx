import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Stack } from "@/components/layout/Stack";
import {
  Heading,
  Text,
  Badge,
  Tag,
  Button,
  Card,
  ContentCard,
  ProjectCard,
  PostCard,
  Input,
} from "@/components/ui";
import { Save, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";

// ─── Sample data ──────────────────────────────────────────────────────────────

const sampleProject: Project = {
  slug: "design-system",
  title: "Design System",
  description: "A scalable component library built with React, TypeScript and SCSS following atomic design principles.",
  category: "frontend",
  tags: ["React", "TypeScript", "SCSS"],
  github: "https://github.com",
  link: "https://example.com",
};

const sampleProjectUX: Project = {
  slug: "ux-case-study",
  title: "UX Case Study",
  description: "End-to-end product design for a fintech mobile app — from discovery and user research to final prototype.",
  category: "ux",
  tags: ["Figma", "Research", "Prototyping"],
};

const sampleProjectFullstack: Project = {
  slug: "portfolio-platform",
  title: "Portfolio Platform",
  description: "Multi-project platform using Next.js 14 App Router, Sanity CMS and a custom design system.",
  category: "fullstack",
  tags: ["Next.js", "Sanity", "TypeScript"],
  github: "https://github.com",
};

const samplePost: Post = {
  slug: "design-systems-at-scale",
  title: "Design Systems at Scale",
  excerpt: "How to build and maintain a design system that grows with your team without becoming a bottleneck.",
  tags: ["Design Systems", "Frontend"],
  readingTime: 5,
  publishedAt: "2024-11-01",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <Container as="main">

      {/* ── Heading ──────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Heading</div>
        <Stack gap="md">
          <Heading level="h1">H1 — Designer & Developer</Heading>
          <Heading level="h2">H2 — Projects & Case Studies</Heading>
          <Heading level="h3">H3 — Component Library</Heading>
        </Stack>
      </Section>

      {/* ── Text ─────────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Text</div>
        <Stack gap="sm">
          <Text>Default body text — the quick brown fox jumps over the lazy dog.</Text>
          <Text variant="secondary">Secondary text — used for descriptions and subtitles.</Text>
          <Text variant="small">Small text — captions, metadata, timestamps.</Text>
        </Stack>
      </Section>

      {/* ── Badge ────────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Badge</div>
        <Stack direction="row" gap="sm" wrap="wrap">
          <Badge variant="success">Frontend</Badge>
          <Badge variant="info">UX Design</Badge>
          <Badge variant="warning">Fullstack</Badge>
          <Badge variant="error">Deprecated</Badge>
          <Badge>Default</Badge>
        </Stack>
      </Section>

      {/* ── Tag ──────────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Tag</div>
        <Stack direction="row" gap="sm" wrap="wrap">
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Next.js</Tag>
          <Tag>SCSS</Tag>
          <Tag>Figma</Tag>
          <Tag>Sanity</Tag>
        </Stack>
      </Section>

      {/* ── Button ───────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Button</div>
        <Stack gap="md">
          <Stack direction="row" gap="sm" align="center" wrap="wrap">
            <Button size="sm">Primary sm</Button>
            <Button size="md">Primary md</Button>
            <Button size="lg">Primary lg</Button>
          </Stack>
          <Stack direction="row" gap="sm" align="center" wrap="wrap">
            <Button variant="secondary" iconLeft={<Save size={16} />}>Save</Button>
            <Button variant="secondary" iconRight={<ExternalLink size={16} />}>Open</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost" iconLeft={<Github size={16} />}>GitHub</Button>
          </Stack>
          <Stack direction="row" gap="sm" align="center" wrap="wrap">
            <Button loading>Saving...</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth>Full width</Button>
          </Stack>
        </Stack>
      </Section>

      {/* ── Input ────────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Input</div>
        <Stack gap="md">
          <Input label="Email" type="email" placeholder="example@email.com" />
          <Input label="Name" type="text" placeholder="John Doe" />
        </Stack>
      </Section>

      {/* ── Card ─────────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>Card</div>
        <Grid cols={1} colsMd={3} gap="md">
          <Card>
            <Text>Default card — padding + no shadow.</Text>
          </Card>
          <Card shadow>
            <Text>Card with shadow.</Text>
          </Card>
          <Card hover shadow>
            <Text>Card with hover + shadow — hover me.</Text>
          </Card>
        </Grid>
      </Section>

      {/* ── ContentCard ──────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>ContentCard (base)</div>
        <Grid cols={1} colsMd={2} gap="md">
          <ContentCard
            href="#"
            title="ContentCard without image"
            description="The base slot-based card. Meta, title, description and footer are all optional slots."
            meta={<><Badge variant="info">Slot</Badge><Tag>base</Tag></>}
            footer={<Text variant="small">Footer slot — any content here</Text>}
          />
          <ContentCard
            href="#"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
            imageAlt="Code on a screen"
            title="ContentCard with image"
            description="Pass an image URL and it renders above the body with a 16/9 aspect ratio and zoom on hover."
            meta={<><Badge variant="success">With image</Badge><Tag>slot</Tag></>}
          />
        </Grid>
      </Section>

      {/* ── ProjectCard ──────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>ProjectCard</div>
        <Grid cols={1} colsMd={3} gap="md">
          <ProjectCard project={sampleProject} />
          <ProjectCard project={sampleProjectUX} />
          <ProjectCard project={sampleProjectFullstack} />
        </Grid>
      </Section>

      {/* ── PostCard ─────────────────────────────────────────── */}
      <Section spacing="md">
        <div className={styles.sectionLabel}>PostCard</div>
        <Grid cols={1} colsMd={3} gap="md">
          <PostCard post={samplePost} />
          <PostCard post={{ ...samplePost, slug: "b", title: "Next.js App Router in Practice", excerpt: "Lessons learned migrating a real project from Pages Router to App Router.", tags: ["Next.js", "React"], readingTime: 8, publishedAt: "2024-10-15" }} />
          <PostCard post={{ ...samplePost, slug: "c", title: "When UX Meets Frontend", excerpt: "Bridging the gap between design thinking and engineering — a workflow that actually works.", tags: ["UX", "Process"], readingTime: 6, publishedAt: "2024-09-20" }} />
        </Grid>
      </Section>

    </Container>
  );
}