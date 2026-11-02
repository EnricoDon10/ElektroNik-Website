import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { siteContact } from "../data/site-content";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen von ElektroNIK Meisterbetrieb.",
  alternates: { canonical: "/agb/" },
};

const agreementMarkdown = readFileSync(
  join(process.cwd(), "app", "agb", "terms.md"),
  "utf8",
);
const sectionStart = agreementMarkdown.indexOf("## § 1");
const agreementSections = sectionStart >= 0 ? agreementMarkdown.slice(sectionStart) : "";
const agreementDate = agreementMarkdown.match(/\*\*Stand: (.+?)\*\*/)?.[1] ?? "November 2026";

type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] };

function renderInline(text: string): ReactNode {
  return text.replaceAll("ElektroNik", "ElektroNIK").split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function parseContentBlocks(markdown: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ kind: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list) {
      blocks.push({ kind: "list", ordered: list.ordered, items: list.items });
      list = null;
    }
  };

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line === "---") {
      flushParagraph();
      continue;
    }

    const numberedItem = line.match(/^(\d+)\.\s+(.+)$/);
    const bulletItem = line.match(/^[-*]\s+(.+)$/);
    if (numberedItem || bulletItem) {
      flushParagraph();
      const ordered = Boolean(numberedItem);

      if (list && list.ordered !== ordered) {
        flushList();
      }

      list ??= { ordered, items: [] };
      list.items.push(numberedItem?.[2] ?? bulletItem?.[1] ?? "");
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function renderContentBlocks(markdown: string): ReactNode[] {
  return parseContentBlocks(markdown).map((block, index) => {
    if (block.kind === "paragraph") {
      return <p key={index}>{renderInline(block.text)}</p>;
    }

    const List = block.ordered ? "ol" : "ul";
    return (
      <List key={index}>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{renderInline(item)}</li>
        ))}
      </List>
    );
  });
}

function renderAgreementSections(markdown: string): ReactNode[] {
  return markdown
    .split(/(?=^## § \d+)/m)
    .flatMap((sectionMarkdown, index) => {
      const section = sectionMarkdown.match(/^## (.+)\r?\n([\s\S]*)$/);
      if (!section) return [];

      return [(
        <section key={index}>
          <h2>{section[1]}</h2>
          {renderContentBlocks(section[2])}
        </section>
      )];
    })
}

export default function AgbPage() {
  return (
    <main className="legal-page">
      <article className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Allgemeine Geschäftsbedingungen</h1>
        <p className="legal-updated">Stand: {agreementDate}</p>

        <p className="agb-identity">
          {siteContact.businessName} (Markenname)<br />
          Inhaber: {siteContact.ownerName}, {siteContact.legalForm}<br />
          {siteContact.street}<br />
          {siteContact.postalCode} {siteContact.city}<br />
          Deutschland
        </p>
        <p className="agb-definition">(Nachfolgend „ElektroNIK“ oder „Auftragnehmer“ genannt)</p>

        <div className="agb-terms">{renderAgreementSections(agreementSections)}</div>
      </article>
    </main>
  );
}
