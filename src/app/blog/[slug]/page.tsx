import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_ARTICLES,
  getArticleBySlug,
  getReadingTime,
  formatDate,
} from "@/data/blog";
import { RESTAURANT } from "@/data/restaurant";
import Reveal from "@/components/Reveal";
import BlogIllustration from "@/components/BlogIllustration";
import ShareButton from "./ShareButton";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://www.eatnoya.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [RESTAURANT.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
    alternates: {
      canonical: `https://www.eatnoya.com/blog/${article.slug}`,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let inTable = false;
  let tableRows: string[][] = [];

  function processInline(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
    let last = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > last) {
        parts.push(text.slice(last, match.index));
      }
      if (match[1]) {
        parts.push(
          <strong key={match.index} className="font-semibold text-dark">
            {match[1]}
          </strong>
        );
      } else if (match[2] && match[3]) {
        const isExternal = match[3].startsWith("http");
        parts.push(
          <Link
            key={match.index}
            href={match[3]}
            className="text-burgundy underline underline-offset-2 hover:text-burgundy/70 transition-colors"
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {match[2]}
          </Link>
        );
      }
      last = match.index + match[0].length;
    }
    if (last < text.length) parts.push(text.slice(last));
    return parts;
  }

  while (i < lines.length) {
    const line = lines[i];

    // Table rows
    if (line.startsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      // Skip separator rows
      if (!/^\|[\s-|]+\|$/.test(line)) {
        const cells = line
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        tableRows.push(cells);
      }
      i++;
      // Check if next line is not a table row — flush
      if (i >= lines.length || !lines[i].startsWith("|")) {
        inTable = false;
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E5DFD5]">
                  {tableRows[0]?.map((cell, ci) => (
                    <th
                      key={ci}
                      className="text-left py-2 pr-4 font-semibold text-dark"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri} className="border-b border-[#E5DFD5]/50">
                    {row.map((cell, ci) => (
                      <td key={ci} className="py-2 pr-4 text-dark/70">
                        {processInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="font-serif text-lg text-dark mt-8 mb-3 leading-snug"
        >
          {processInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-serif text-[clamp(20px,3vw,26px)] text-dark mt-12 mb-4 leading-snug"
        >
          {processInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex gap-2 text-dark/70 leading-relaxed"
            >
              <span className="text-burgundy/40 mt-1.5 flex-shrink-0">
                &#x2022;
              </span>
              <span>{processInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="text-dark/70 leading-relaxed mb-4">
        {processInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const readingTime = getReadingTime(article.content);
  const currentIndex = BLOG_ARTICLES.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? BLOG_ARTICLES[currentIndex - 1] : null;
  const next =
    currentIndex < BLOG_ARTICLES.length - 1
      ? BLOG_ARTICLES[currentIndex + 1]
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.eatnoya.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.eatnoya.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.eatnoya.com/blog/${article.slug}`,
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: RESTAURANT.name,
      url: RESTAURANT.url,
    },
    publisher: {
      "@type": "Organization",
      name: RESTAURANT.name,
      url: RESTAURANT.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.eatnoya.com/blog/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
    wordCount: article.content.trim().split(/\s+/).length,
    timeRequired: `PT${readingTime}M`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />

      <article className="pb-16 md:pb-24">
        {/* Hero illustration */}
        <div className="group mb-10">
          <BlogIllustration
            slug={article.slug}
            title={article.title}
            category={article.category}
            size="hero"
          />
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-3xl mx-auto px-5 mb-6">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-[12px] text-dark/55"
          >
            <Link href="/" className="hover:text-dark transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-dark transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-dark/60 truncate max-w-[200px]">
              {article.title}
            </span>
          </nav>
        </div>

        {/* Meta info */}
        <header className="max-w-3xl mx-auto px-5 mb-12">
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-dark/55">
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
              <span className="w-1 h-1 rounded-full bg-dark/20" />
              <span>{readingTime} min de lecture</span>
            </div>
          </Reveal>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <div className="prose-noya">{renderMarkdown(article.content)}</div>
          </Reveal>
        </div>

        {/* Share + CTA */}
        <div className="max-w-3xl mx-auto px-5 mt-16">
          {/* Share */}
          <div className="flex items-center gap-3 pb-8 border-b border-[#E5DFD5]">
            <span className="text-sm text-dark/55">Partager :</span>
            <ShareButton slug={article.slug} title={article.title} />
          </div>

          {/* CTA */}
          <Reveal>
            <div className="my-12 bg-gradient-to-br from-burgundy/5 to-cream rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-2xl text-dark mb-3">
                Venez goûter chez Noya
              </h2>
              <p className="text-dark/60 mb-6 max-w-md mx-auto">
                Cuisine levantine authentique au 8 rue de Châteaudun, Paris 9e.
                Déjeuner, dîner et traiteur.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={RESTAURANT.links.reservation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
                >
                  Réserver une table
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-burgundy/20 text-burgundy rounded-lg text-sm font-medium hover:bg-burgundy/5 transition-colors"
                >
                  Voir la carte
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Prev / Next */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group p-5 rounded-xl border border-[#E5DFD5] hover:shadow-md transition-shadow"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-dark/50 mb-2 block">
                  ← Article précédent
                </span>
                <span className="font-serif text-sm text-dark group-hover:text-burgundy transition-colors leading-snug line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group p-5 rounded-xl border border-[#E5DFD5] hover:shadow-md transition-shadow text-right"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-dark/50 mb-2 block">
                  Article suivant →
                </span>
                <span className="font-serif text-sm text-dark group-hover:text-burgundy transition-colors leading-snug line-clamp-2">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
