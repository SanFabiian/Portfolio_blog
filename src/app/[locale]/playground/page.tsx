import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
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
  PostRow,
  Input,
  Logo,
} from "@/components/ui";
import { CodeAnimation } from "@/components/ui/CodeAnimation";
import { Save, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import type { Post } from "@/types/post";
import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";
import { PlaygroundSidebar } from "./PlaygroundSidebar";

// ─── Color palette data ───────────────────────────────────────────────────────

const seaPalette = [
  { step: "50",  hex: "#EFF7FF" },
  { step: "100", hex: "#DEEEFF" },
  { step: "200", hex: "#B6DEFF" },
  { step: "300", hex: "#76C5FF" },
  { step: "400", hex: "#2DA8FF" },
  { step: "500", hex: "#028DF5" },
  { step: "600", hex: "#006ED2" },
  { step: "700", hex: "#0058AA" },
  { step: "800", hex: "#005096" },
  { step: "900", hex: "#073E73" },
  { step: "950", hex: "#04274D" },
];

const sandPalette = [
  { step: "50",  hex: "#FFF6ED" },
  { step: "100", hex: "#FFEAD4" },
  { step: "200", hex: "#FFD2A9" },
  { step: "300", hex: "#FFAA64" },
  { step: "400", hex: "#FE8639" },
  { step: "500", hex: "#FC6413" },
  { step: "600", hex: "#ED4909" },
  { step: "700", hex: "#C53509" },
  { step: "800", hex: "#9C2B10" },
  { step: "900", hex: "#7E2510" },
  { step: "950", hex: "#441006" },
];

const greyPalette = [
  { step: "0",    hex: "#FFFFFF" },
  { step: "50",   hex: "#F7F7F7" },
  { step: "100",  hex: "#EDEDED" },
  { step: "200",  hex: "#DFDFDF" },
  { step: "300",  hex: "#C7C7C7" },
  { step: "400",  hex: "#ADADAD" },
  { step: "500",  hex: "#999999" },
  { step: "600",  hex: "#888888" },
  { step: "700",  hex: "#7B7B7B" },
  { step: "800",  hex: "#676767" },
  { step: "900",  hex: "#545454" },
  { step: "950",  hex: "#363636" },
  { step: "1000", hex: "#000000" },
];

// ─── Sample data ──────────────────────────────────────────────────────────────

const sampleProjects: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    description: "A scalable component library built with React, TypeScript and SCSS following atomic design principles.",
    category: { label: "Frontend", slug: "frontend" },
    tags: [
      { label: "React", slug: "react" },
      { label: "TypeScript", slug: "typescript" },
      { label: "SCSS", slug: "scss" },
    ],
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    slug: "ux-case-study",
    title: "UX Case Study",
    description: "End-to-end product design for a fintech mobile app — from discovery and user research to final prototype.",
    category: { label: "UX", slug: "ux" },
    tags: [
      { label: "Figma", slug: "figma" },
      { label: "Research", slug: "research" },
      { label: "Prototyping", slug: "prototyping" },
    ],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "Multi-project platform using Next.js App Router, Sanity CMS and a custom design system.",
    category: { label: "Fullstack", slug: "fullstack" },
    tags: [
      { label: "Next.js", slug: "nextjs" },
      { label: "Sanity", slug: "sanity" },
      { label: "TypeScript", slug: "typescript" },
    ],
    github: "https://github.com",
  },
];

const samplePosts: Post[] = [
  {
    slug: "design-tokens-that-scale",
    title: "Design tokens that actually scale",
    excerpt: "How we structured a three-tier token system so designers and engineers finally spoke the same language.",
    category: { label: "Engineering", slug: "engineering" },
    tags: [
      { label: "Design Systems", slug: "design-systems" },
      { label: "Tokens", slug: "tokens" },
    ],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    readingTime: 7,
    publishedAt: "2025-05-28",
  },
  {
    slug: "empty-states",
    title: "The quiet craft of empty states",
    excerpt: "Empty states are the most-skipped, most-seen screens in any product. Here's how I approach them.",
    category: { label: "Design", slug: "design" },
    tags: [
      { label: "UX", slug: "ux" },
      { label: "UI", slug: "ui" },
    ],
    readingTime: 5,
    publishedAt: "2025-04-12",
  },
  {
    slug: "shipping-multilingual",
    title: "Shipping multilingual by default",
    excerpt: "A practical guide to i18n with Next.js App Router and a localized CMS, without the headache.",
    category: { label: "Engineering", slug: "engineering" },
    tags: [
      { label: "Next.js", slug: "nextjs" },
      { label: "i18n", slug: "i18n" },
    ],
    readingTime: 9,
    publishedAt: "2025-03-03",
  },
  {
    slug: "motion-with-intent",
    title: "Motion with intent",
    excerpt: "Animation should explain, not decorate. A small set of rules I keep coming back to.",
    category: { label: "Design", slug: "design" },
    tags: [
      { label: "Motion", slug: "motion" },
      { label: "UX", slug: "ux" },
    ],
    readingTime: 4,
    publishedAt: "2025-01-21",
  },
  {
    slug: "type-scales-that-work",
    title: "Type scales that actually work",
    excerpt: "A fluid type scale built on CSS clamp — no more magic numbers, no more breakpoint overrides.",
    category: { label: "Engineering", slug: "engineering" },
    tags: [
      { label: "Typography", slug: "typography" },
      { label: "CSS", slug: "css" },
    ],
    readingTime: 6,
    publishedAt: "2024-12-10",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ColorRamp({
  label,
  description,
  colors,
}: {
  label: string;
  description: string;
  colors: { step: string; hex: string }[];
}) {
  return (
    <div style={{ marginBottom: "2.4rem" }}>
      <Text variant="secondary" style={{ marginBottom: "1.2rem" }}>
        <strong>{label}</strong> — {description}
      </Text>
      <div className={styles.swatchGrid}>
        {colors.map(({ step, hex }) => (
          <div key={step} className={styles.swatch}>
            <div
              className={styles.swatchColor}
              style={{ background: hex }}
            />
            <span className={styles.swatchStep}>{step}</span>
            <span className={styles.swatchHex}>{hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaygroundSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.sectionLabel}>{title}</span>
        {description && <span className={styles.sectionDesc}>{description}</span>}
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
}

// ─── Overview data ────────────────────────────────────────────────────────────

const overviewSpecs = [
  {
    label: "Brand",
    value: "Calm, editorial, engineering-minded",
    detail: "Deep navy ink, sea-blue accent, warm sand-orange highlight, generous whitespace.",
  },
  {
    label: "Voice",
    value: "First person · Warm · Understated",
    detail: "Bilingual ES/EN. Sentence case everywhere. No emoji. Em dashes for asides.",
  },
  {
    label: "Color",
    value: "Sea · Sand · Grey",
    detail: "Sea 600 #006ED2 primary. Sand 500 #FC6413 secondary highlight. Grey 950 #04274D ink.",
  },
  {
    label: "Type",
    value: "Inter — one family",
    detail: "Display 72 · H1 48 · H2 32 · H3 24 · Body 16 · Small 14 · Caption 12. Bold 700, tight −0.02em tracking.",
  },
  {
    label: "Spacing",
    value: "4px base grid",
    detail: "–space-1 → –space-20. Section rhythm 72–96px. Card padding 24px. Max layout 1200px.",
  },
  {
    label: "Radius",
    value: "Soft, not bubbly",
    detail: "Cards 16px · Inputs/buttons 8px · Pills 80px. Avatars fully rounded.",
  },
  {
    label: "Elevation",
    value: "Navy-tinted shadows",
    detail: "–shadow-xs resting → –shadow-lg hover. –shadow-brand on primary button hover (sea-blue glow).",
  },
  {
    label: "Motion",
    value: "140–220ms ease-out",
    detail: "cubic-bezier(0.16,1,0.3,1). Cards lift 3–4px on hover. No bounces, no infinite loops.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PlaygroundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "playground" });

  return (
    <Container as="main">
      <div className={styles.layout}>

        {/* Sidebar */}
        <div className={styles.sidebarWrapper}>
          <PlaygroundSidebar />
        </div>

        {/* Content */}
        <div>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerBadge}>{t("badge")}</div>
            <Heading level="h1">{t("heading")}</Heading>
            <Text variant="secondary">{t("description")}</Text>
          </div>

          {/* ── Overview ──────────────────────────────────────── */}
          <PlaygroundSection id="overview" title="Overview" description="Design system at a glance">
            <div className={styles.overviewGrid}>
              {overviewSpecs.map(({ label, value, detail }) => (
                <div key={label} className={styles.overviewCard}>
                  <span className={styles.overviewLabel}>{label}</span>
                  <strong className={styles.overviewValue}>{value}</strong>
                  <p className={styles.overviewDetail}>{detail}</p>
                </div>
              ))}
            </div>
          </PlaygroundSection>

          {/* ── Colors ────────────────────────────────────────── */}
          <PlaygroundSection id="colors" title="Colors" description="Brand palette — Sea / Sand / Grey">
            <ColorRamp label="Sea — Primary" description="The brand blue. Primary actions, links, focus." colors={seaPalette} />
            <ColorRamp label="Sand — Secondary" description="Warm accent orange. CTAs that need extra warmth, highlights." colors={sandPalette} />
            <ColorRamp label="Grey — Neutral" description="Text, surfaces, borders. Grey 950 = primary text, Grey 0 = page." colors={greyPalette} />
          </PlaygroundSection>

          {/* ── Logos ─────────────────────────────────────────── */}
          <PlaygroundSection id="logos" title="Logos" description="Isotipo and wordmark — default (blue) and white variants">
            <div className={styles.logoGrid}>
              <div className={styles.logoSwatch}>
                <Logo variant="isotipo" color="default" size="medium" />
                <span className={styles.logoLabel}>isotipo / default</span>
              </div>
              <div className={`${styles.logoSwatch} ${styles.logoSwatchDark}`}>
                <Logo variant="isotipo" color="white" size="medium" />
                <span className={`${styles.logoLabel} ${styles.logoLabelDark}`}>isotipo / white</span>
              </div>
              <div className={styles.logoSwatch}>
                <Logo variant="logo" color="default" size="medium" />
                <span className={styles.logoLabel}>logo / default</span>
              </div>
              <div className={`${styles.logoSwatch} ${styles.logoSwatchDark}`}>
                <Logo variant="logo" color="white" size="medium" />
                <span className={`${styles.logoLabel} ${styles.logoLabelDark}`}>logo / white</span>
              </div>
            </div>
          </PlaygroundSection>

          {/* ── Heading ───────────────────────────────────────── */}
          <PlaygroundSection id="heading" title="Heading" description="H1 → 48px / H2 → 32px / H3 → 24px">
            <Stack gap="md">
              <Heading level="h1">H1 — Crafting elite digital experiences</Heading>
              <Heading level="h2">H2 — Projects & Case Studies</Heading>
              <Heading level="h3">H3 — Component Library</Heading>
            </Stack>
          </PlaygroundSection>

          {/* ── Text ──────────────────────────────────────────── */}
          <PlaygroundSection id="text" title="Text" description="Body / Secondary / Small">
            <Stack gap="sm">
              <Text>Default body — the quick brown fox jumps over the lazy dog.</Text>
              <Text variant="secondary">Secondary — used for descriptions and subtitles.</Text>
              <Text variant="small">Small — captions, metadata, timestamps.</Text>
            </Stack>
          </PlaygroundSection>

          {/* ── Badge ─────────────────────────────────────────── */}
          <PlaygroundSection id="badge" title="Badge" description="Semantic status indicators">
            <Stack direction="row" gap="sm" wrap="wrap">
              <Badge variant="success">Frontend</Badge>
              <Badge variant="info">UX Design</Badge>
              <Badge variant="warning">Fullstack</Badge>
              <Badge variant="error">Deprecated</Badge>
              <Badge>Default</Badge>
            </Stack>
          </PlaygroundSection>

          {/* ── Tag ───────────────────────────────────────────── */}
          <PlaygroundSection id="tag" title="Tag" description="Neutral labels for categories and tech stack">
            <Stack direction="row" gap="sm" wrap="wrap">
              <Tag>React</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Next.js</Tag>
              <Tag>SCSS</Tag>
              <Tag>Figma</Tag>
              <Tag>Sanity</Tag>
            </Stack>
          </PlaygroundSection>

          {/* ── Button ────────────────────────────────────────── */}
          <PlaygroundSection id="button" title="Button" description="Primary / Secondary / Ghost / Line / Rounded — sizes sm / md / lg">
            <Stack gap="md">
              <Stack direction="row" gap="sm" align="center" wrap="wrap">
                <Button size="sm" variant="primary" iconLeft={<Save size={14} />}>Primary</Button>
                <Button size="sm" variant="secondary" iconLeft={<Save size={14} />}>Secondary</Button>
                <Button size="sm" variant="ghost" iconLeft={<Save size={14} />}>Ghost</Button>
                <Button size="sm" variant="line" iconLeft={<Save size={14} />}>Line</Button>
                <Button size="sm" variant="rounded" as="a">Rounded</Button>
              </Stack>
              <Stack direction="row" gap="sm" align="center" wrap="wrap">
                <Button size="sm" variant="primary" disabled>Primary</Button>
                <Button size="sm" variant="secondary" disabled>Secondary</Button>
                <Button size="sm" variant="ghost" disabled>Ghost</Button>
                <Button size="sm" variant="line" disabled>Line</Button>
                <Button size="sm" variant="rounded" as="a" disabled>Rounded</Button>
              </Stack>
              <Stack direction="row" gap="sm" align="center" wrap="wrap">
                <Button size="md" variant="primary" iconRight={<ArrowRight size={16} />}>Primary</Button>
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

          {/* ── Input ─────────────────────────────────────────── */}
          <PlaygroundSection id="input" title="Input" description="Form field with label">
            <Stack gap="md">
              <Input label="Email" type="email" placeholder="example@email.com" />
              <Input label="Name" type="text" placeholder="John Doe" />
            </Stack>
          </PlaygroundSection>

          {/* ── Card ──────────────────────────────────────────── */}
          <PlaygroundSection id="card" title="Card" description="Base card — padding / shadow / hover variants">
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

          {/* ── ContentCard ───────────────────────────────────── */}
          <PlaygroundSection id="content-card" title="ContentCard" description="Base slot card — meta / title / description / footer">
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

          {/* ── ProjectCard ───────────────────────────────────── */}
          <PlaygroundSection id="project-card" title="ProjectCard" description="Composed on ContentCard — frontend / ux / fullstack">
            <Grid cols={1} colsMd={3} gap="md">
              {sampleProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </Grid>
          </PlaygroundSection>

          {/* ── PostRow ───────────────────────────────────────── */}
          <PlaygroundSection id="post-row" title="PostRow" description="Blog list — featured (image left) + rows without image">
            <PostRow post={samplePosts[0]} featured />
            <div style={{ marginTop: "2.4rem" }}>
              {samplePosts.slice(1).map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </div>
          </PlaygroundSection>

          {/* ── CodeAnimation ─────────────────────────────────── */}
          <PlaygroundSection id="code-animation" title="CodeAnimation" description="Typewriter animation — used in Hero">
            <div style={{ maxWidth: 560 }}>
              <CodeAnimation />
            </div>
          </PlaygroundSection>

          {/* ── Stack ─────────────────────────────────────────── */}
          <PlaygroundSection id="stack" title="Stack" description="Flex layout — direction / gap / align / justify">
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

          {/* ── Grid ──────────────────────────────────────────── */}
          <PlaygroundSection id="grid" title="Grid" description="12-col responsive — cols / colsMd / colsLg">
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

        </div>
      </div>
    </Container>
  );
}
