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
import { CodeAnimation } from "@/components/ui/CodeAnimation";
import { Save, Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation"; 

// ─── Sample data ──────────────────────────────────────────────────────────────

const sampleProjects: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    description: "A scalable component library built with React, TypeScript and SCSS following atomic design principles.",
    category: "frontend",
    tags: ["React", "TypeScript", "SCSS"],
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    slug: "ux-case-study",
    title: "UX Case Study",
    description: "End-to-end product design for a fintech mobile app — from discovery and user research to final prototype.",
    category: "ux",
    tags: ["Figma", "Research", "Prototyping"],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js App Router, Sanity CMS and a custom design system.",
    category: "fullstack",
    tags: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com",
  },
];

const samplePosts: Post[] = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    excerpt: "How to build and maintain a design system that grows with your team without becoming a bottleneck.",
    tags: ["Design Systems", "Frontend"],
    readingTime: 5,
    publishedAt: "2024-11-01",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router in Practice",
    excerpt: "Lessons learned migrating from Pages Router to App Router — what works, what doesn't.",
    tags: ["Next.js", "React"],
    readingTime: 8,
    publishedAt: "2024-10-15",
  },
  {
    slug: "ux-meets-frontend",
    title: "When UX Meets Frontend",
    excerpt: "Bridging the gap between design thinking and engineering.",
    tags: ["UX", "Process"],
    readingTime: 6,
    publishedAt: "2024-09-20",
  },
];

// ─── Section wrapper ──────────────────────────────────────────────────────────

function PlaygroundSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.sectionLabel}>{title}</span>
        {description && (
          <span className={styles.sectionDesc}>{description}</span>
        )}
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlaygroundPage() {
  return (
    <Container as="main">
      <Section spacing="lg">

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>Internal</div>
          <Heading level="h1">Component Playground</Heading>
          <Text variant="secondary">
            Visual reference for all UI components. Not linked from the public site.
          </Text>
        </div>

        {/* ── Heading ─────────────────────────────────────────── */}
        <PlaygroundSection title="Heading" description="H1 → 48px / H2 → 32px / H3 → 24px">
          <Stack gap="md">
            <Heading level="h1">H1 — Crafting elite digital experiences</Heading>
            <Heading level="h2">H2 — Projects & Case Studies</Heading>
            <Heading level="h3">H3 — Component Library</Heading>
          </Stack>
        </PlaygroundSection>

        {/* ── Text ────────────────────────────────────────────── */}
        <PlaygroundSection title="Text" description="Body / Secondary / Small">
          <Stack gap="sm">
            <Text>Default body — the quick brown fox jumps over the lazy dog.</Text>
            <Text variant="secondary">Secondary — used for descriptions and subtitles.</Text>
            <Text variant="small">Small — captions, metadata, timestamps.</Text>
          </Stack>
        </PlaygroundSection>

        {/* ── Badge ───────────────────────────────────────────── */}
        <PlaygroundSection title="Badge" description="Semantic status indicators">
          <Stack direction="row" gap="sm" wrap="wrap">
            <Badge variant="success">Frontend</Badge>
            <Badge variant="info">UX Design</Badge>
            <Badge variant="warning">Fullstack</Badge>
            <Badge variant="error">Deprecated</Badge>
            <Badge>Default</Badge>
          </Stack>
        </PlaygroundSection>

        {/* ── Tag ─────────────────────────────────────────────── */}
        <PlaygroundSection title="Tag" description="Neutral labels for categories and tech stack">
          <Stack direction="row" gap="sm" wrap="wrap">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Next.js</Tag>
            <Tag>SCSS</Tag>
            <Tag>Figma</Tag>
            <Tag>Sanity</Tag>
          </Stack>
        </PlaygroundSection>

        {/* ── Button ──────────────────────────────────────────── */}
        <PlaygroundSection title="Button" description="Primary / Secondary / Ghost / Line / Rounded — sizes sm / md / lg">
          <Stack gap="md">
            <Stack direction="row" gap="sm" align="center" wrap="wrap">
              <Button size="sm" variant="primary" iconLeft={<Save size={16} />} iconRight={<ExternalLink size={16}/>}>Primary</Button>
              <Button size="sm" variant="secondary" iconLeft={<Save size={16} />} iconRight={<ExternalLink size={16}/>}>Secondary</Button>
              <Button size="sm" variant="ghost" iconLeft={<Save size={16} />} iconRight={<ExternalLink size={16}/>}>Ghost</Button>
              <Button size="sm" variant="line" iconLeft={<Save size={16} />} iconRight={<ExternalLink size={16}/>}>Line</Button>
              <Button size="sm" variant="rounded" as="a" iconLeft={<Save size={16} />} iconRight={<ExternalLink size={16}/>}>Rounded</Button>
            </Stack>
            <Stack direction="row" gap="sm" align="center" wrap="wrap">
              <Button size="sm" variant="primary" disabled>Primary</Button>
              <Button size="sm" variant="secondary" disabled>Secondary</Button>
              <Button size="sm" variant="ghost" disabled>Ghost</Button>
              <Button size="sm" variant="line" disabled>Line</Button>
              <Button size="sm" variant="rounded" as="a" disabled>Rounded</Button>
            </Stack>
            <Stack direction="row" gap="sm" align="center" wrap="wrap">
              <Button size="md" variant="primary">Primary</Button>
              <Button size="md" variant="secondary">Secondary</Button>
              <Button size="md" variant="ghost">Ghost</Button>
              <Button size="md" variant="line">Line</Button>
              <Button size="md" variant="rounded" as={Link} href="#">Rounded</Button>
            </Stack>
            <Stack direction="row" gap="sm" align="center" wrap="wrap">
              <Button size="lg" variant="primary">Primary</Button>
              <Button size="lg" variant="secondary">Secondary</Button>
              <Button size="lg" variant="ghost">Ghost</Button>
              <Button size="lg" variant="line">Line</Button>
              <Button size="lg" variant="rounded" as={Link} href="#">Rounded</Button>
            </Stack>
          </Stack>
        </PlaygroundSection>

        {/* ── Input ───────────────────────────────────────────── */}
        <PlaygroundSection title="Input" description="Form field with label">
          <Stack gap="md">
            <Input label="Email" type="email" placeholder="example@email.com" />
            <Input label="Name" type="text" placeholder="John Doe" />
          </Stack>
        </PlaygroundSection>

        {/* ── Card ────────────────────────────────────────────── */}
        <PlaygroundSection title="Card" description="Base card — padding / shadow / hover variants">
          <Grid cols={1} colsMd={3} gap="md">
            <Card>
              <Text>Default — padding, no shadow.</Text>
            </Card>
            <Card shadow>
              <Text>With shadow.</Text>
            </Card>
            <Card hover shadow>
              <Text>Hover + shadow — try hovering.</Text>
            </Card>
          </Grid>
        </PlaygroundSection>

        {/* ── ContentCard ─────────────────────────────────────── */}
        <PlaygroundSection title="ContentCard" description="Base slot card — meta / title / description / footer">
          <Grid cols={1} colsMd={2} gap="md">
            <ContentCard
              href="#"
              title="Without image"
              description="The base slot-based card. Meta, title, description and footer are all optional slots."
              meta={<><Badge variant="info">Slot</Badge><Tag>base</Tag></>}
              footer={<Text variant="small">Footer slot — any content</Text>}
            />
            <ContentCard
              href="#"
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
              imageAlt="Code on screen"
              title="With image"
              description="Pass an image URL and it renders above the body with a 16/9 ratio and zoom on hover."
              meta={<><Badge variant="success">With image</Badge><Tag>slot</Tag></>}
            />
          </Grid>
        </PlaygroundSection>

        {/* ── ProjectCard ─────────────────────────────────────── */}
        <PlaygroundSection title="ProjectCard" description="Composed on ContentCard — frontend / ux / fullstack">
          <Grid cols={1} colsMd={3} gap="md">
            {sampleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Grid>
        </PlaygroundSection>

        {/* ── PostCard ────────────────────────────────────────── */}
        <PlaygroundSection title="PostCard" description="Composed on ContentCard — date + reading time">
          <Grid cols={1} colsMd={3} gap="md">
            {samplePosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Grid>
        </PlaygroundSection>

        {/* ── CodeAnimation ───────────────────────────────────── */}
        <PlaygroundSection title="CodeAnimation" description="Typewriter animation — used in Hero">
          <div style={{ maxWidth: 560 }}>
            <CodeAnimation />
          </div>
        </PlaygroundSection>

        {/* ── Stack ───────────────────────────────────────────── */}
        <PlaygroundSection title="Stack" description="Flex layout — direction / gap / align / justify">
          <Stack gap="md">
            <Stack direction="row" gap="sm" align="center">
              <Badge>row</Badge>
              <Badge variant="info">gap sm</Badge>
              <Badge variant="success">align center</Badge>
            </Stack>
            <Stack direction="row" gap="lg" justify="between" align="center">
              <Tag>justify between</Tag>
              <Tag>gap lg</Tag>
              <Tag>row</Tag>
            </Stack>
            <Stack direction="column" gap="xs">
              <Tag>column</Tag>
              <Tag>gap xs</Tag>
              <Tag>default align start</Tag>
            </Stack>
          </Stack>
        </PlaygroundSection>

        {/* ── Grid ────────────────────────────────────────────── */}
        <PlaygroundSection title="Grid" description="12-col responsive — cols / colsMd / colsLg">
          <Stack gap="md">
            <Text variant="small">cols=1 colsMd=2 colsLg=4</Text>
            <Grid cols={1} colsMd={2} colsLg={4} gap="sm">
              {["A", "B", "C", "D"].map((l) => (
                <Card key={l}>
                  <Text>{l}</Text>
                </Card>
              ))}
            </Grid>
          </Stack>
        </PlaygroundSection>

      </Section>
    </Container>
  );
}