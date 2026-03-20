"use client";

import { useEffect, useState } from "react";
import styles from "./CodeAnimation.module.scss";

const CODE_LINES = [
  { text: 'import { ProjectCard } from "@/components/ui";', type: "import" },
  { text: 'import type { Project } from "@/types";',        type: "import" },
  { text: "",                                               type: "empty"  },
  { text: "const project: Project = {",                    type: "keyword" },
  { text: '  slug: "portfolio-platform",',                 type: "string" },
  { text: '  title: "Portfolio Platform",',                type: "string" },
  { text: '  category: "fullstack",',                      type: "string" },
  { text: '  tags: ["Next.js", "TypeScript"],',            type: "string" },
  { text: "};",                                            type: "keyword" },
  { text: "",                                              type: "empty"  },
  { text: "export default function Page() {",              type: "keyword" },
  { text: "  return (",                                    type: "default" },
  { text: "    <ProjectCard project={project} />",         type: "jsx"    },
  { text: "  );",                                          type: "default" },
  { text: "}",                                             type: "keyword" },
];

const CHAR_DELAY  = 28;  // ms per character
const LINE_PAUSE  = 120; // ms pause between lines
const LOOP_PAUSE  = 2400; // ms before restarting

export function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine]   = useState(0);
  const [currentChar, setCurrentChar]   = useState(0);

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) {
      // All lines done — pause then restart
      const timeout = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, LOOP_PAUSE);
      return () => clearTimeout(timeout);
    }

    const line = CODE_LINES[currentLine];

    if (line.type === "empty") {
      // Empty line — add immediately and move on
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, ""]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
      return () => clearTimeout(timeout);
    }

    if (currentChar < line.text.length) {
      // Type next character
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(timeout);
    }

    // Line complete — pause then move to next
    const timeout = setTimeout(() => {
      setVisibleLines((prev) => [...prev, line.text]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }, LINE_PAUSE);
    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  const currentTyping =
    currentLine < CODE_LINES.length
      ? CODE_LINES[currentLine].text.slice(0, currentChar)
      : null;

  return (
    <div className={styles.window}>
      {/* Window chrome */}
      <div className={styles.chrome}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        <span className={styles.filename}>ProjectCard.tsx</span>
      </div>

      {/* Code body */}
      <div className={styles.body}>
        <pre className={styles.pre}>
          {visibleLines.map((line, i) => (
            <CodeLine key={i} text={line} index={i} />
          ))}
          {/* Currently typing line */}
          {currentTyping !== null && (
            <div className={styles.line}>
              <span className={styles.lineNumber}>
                {visibleLines.length + 1}
              </span>
              <span className={styles.lineText}>
                <Colorize text={currentTyping} />
                <span className={styles.cursor} />
              </span>
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}

function CodeLine({ text, index }: { text: string; index: number }) {
  return (
    <div className={styles.line}>
      <span className={styles.lineNumber}>{index + 1}</span>
      <span className={styles.lineText}>
        <Colorize text={text} />
      </span>
    </div>
  );
}

// Minimal syntax colorizer
function Colorize({ text }: { text: string }) {
  if (!text) return null;

  // imports
  if (text.startsWith("import")) {
    const parts = text.split(/(["'][^"']+["'])/g);
    return (
      <>
        {parts.map((p, i) =>
          /^["']/.test(p)
            ? <span key={i} className={styles.string}>{p}</span>
            : <span key={i} className={styles.keyword}>{p}</span>
        )}
      </>
    );
  }

  // JSX
  if (text.trim().startsWith("<")) {
    return <span className={styles.jsx}>{text}</span>;
  }

  // strings inside object
  const parts = text.split(/(["'][^"']*["'])/g);
  if (parts.length > 1) {
    return (
      <>
        {parts.map((p, i) =>
          /^["']/.test(p)
            ? <span key={i} className={styles.string}>{p}</span>
            : <span key={i} className={styles.default}>{p}</span>
        )}
      </>
    );
  }

  // keywords
  if (/^(const|export|default|function|return|type)\b/.test(text.trim())) {
    return <span className={styles.keyword}>{text}</span>;
  }

  return <span className={styles.default}>{text}</span>;
}