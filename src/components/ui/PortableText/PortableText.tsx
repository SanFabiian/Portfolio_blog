"use client";

import { PortableText as SanityPortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import styles from "./PortableText.module.scss";

const components = {
  block: {
    normal: ({ children }: any) => <p className={styles.paragraph}>{children}</p>,
    h1: ({ children }: any) => <h1 className={styles.h1}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className={styles.blockquote}>{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    underline: ({ children }: any) => <u>{children}</u>,
    code: ({ children }: any) => <code className={styles.inlineCode}>{children}</code>,
    link: ({ value, children }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className={styles.ul}>{children}</ul>,
    number: ({ children }: any) => <ol className={styles.ol}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className={styles.li}>{children}</li>,
    number: ({ children }: any) => <li className={styles.li}>{children}</li>,
  },
  types: {
    // Imagen sola con caption
    image: ({ value }: any) => (
      <figure className={styles.figure}>
        <img
          src={value.url}
          alt={value.alt ?? ""}
          className={styles.image}
        />
        {value.caption && (
          <figcaption className={styles.caption}>{value.caption}</figcaption>
        )}
      </figure>
    ),

    // Grid de imágenes
    imageGrid: ({ value }: any) => (
      <div
        className={styles.imageGrid}
        style={{ "--grid-cols": value.columns } as React.CSSProperties}
      >
        {value.images?.map((img: any, i: number) => (
          <figure key={i} className={styles.gridFigure}>
            <img
              src={img.url}
              alt={img.alt ?? ""}
              className={styles.gridImage}
            />
            {img.caption && (
              <figcaption className={styles.caption}>{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    ),

    // Imagen + texto lado a lado
    imageText: ({ value }: any) => (
      <div
        className={styles.imageText}
        data-position={value.imagePosition ?? "left"}
      >
        <figure className={styles.imageTextFigure}>
          <img
            src={value.image?.url}
            alt={value.image?.alt ?? ""}
            className={styles.imageTextImg}
          />
        </figure>
        <div className={styles.imageTextContent}>
          <SanityPortableText value={value.text} components={components} />
        </div>
      </div>
    ),
  },
};

interface Props {
  value: PortableTextBlock[];
}

export function PortableText({ value }: Props) {
  return (
    <div className={styles.root}>
      <SanityPortableText value={value} components={components} />
    </div>
  );
}