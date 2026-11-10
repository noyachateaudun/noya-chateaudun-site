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
import BlogIllustration from "@/components/BlogIllustration";
import ReserveButton from "@/components/ReserveButton";
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

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";
const linkCls =
  "text-brick underline decoration-brick/40 underline-offset-[3px] hover:decoration-brick transition-colors";

/*
 * Rendu markdown maison (sous-ensemble utilisé par src/data/blog.ts) :
 * ## / ###, paragraphes, **gras**, *italique*, [liens](url), listes "- "
 * et "1. ", tableaux "|", citations "> ", séparateurs "---".
 */
function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let inTable = false;
  let tableRows: string[][] = [];

  function processInline(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    // Order matters: bold (**...**) before italic (*...*) before links
    const regex = /\*\*(.+?)\*\*|\*([^*\n]+?)\*|\[(.+?)\]\((.+?)\)/g;
    let last = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > last) {
        parts.push(text.slice(last, match.index));
      }
      if (match[1]) {
        parts.push(
          <strong key={match.index} className="font-semibold text-ink">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        parts.push(
          <em key={match.index} className="italic">
            {match[2]}
          </em>
        );
      } else if (match[3] && match[4]) {
        const isExternal = match[4].startsWith("http");
        parts.push(
          <Link
            key={match.index}
            href={match[4]}
            className={linkCls}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {match[3]}
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
      if (!/^\|[\s-|:]+\|$/.test(line)) {
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
          <div
            key={`table-${i}`}
            className="my-10 overflow-x-auto rounded-[20px] border border-line bg-paper"
          >
            <table className="w-full border-collapse text-left text-[16px]">
              <thead className="bg-cream">
                <tr>
                  {tableRows[0]?.map((cell, ci) => (
                    <th
                      key={ci}
                      scope="col"
                      className="px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-ink"
                    >
                      {processInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri} className="border-t border-line">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-3.5 align-top leading-[1.55] ${
                          ci === 0 ? "font-semibold text-ink" : "text-muted"
                        }`}
                      >
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
          className="mt-12 mb-3 font-serif font-semibold text-[clamp(24px,2.4vw,28px)] leading-[1.15] text-ink"
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
          className="mt-16 mb-5 font-serif font-medium text-[clamp(32px,3.4vw,42px)] leading-[1.06] text-ink first:mt-0"
        >
          {processInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ") || line === ">") {
      const quote: string[] = [];
      while (i < lines.length && (lines[i].startsWith("> ") || lines[i] === ">")) {
        quote.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="my-10 border-l-[3px] border-terracotta pl-6 md:pl-8 font-serif italic text-[clamp(24px,2.4vw,30px)] leading-[1.35] text-ink"
        >
          {quote
            .filter((q) => q.trim() !== "")
            .map((q, qi) => (
              <p key={qi} className={qi > 0 ? "mt-3" : undefined}>
                {processInline(q)}
              </p>
            ))}
        </blockquote>
      );
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
        <ul key={`ul-${i}`} className="my-7 flex flex-col gap-3.5">
          {items.map((item, j) => (
            <li key={j} className="relative pl-7 leading-[1.7]">
              <span
                aria-hidden="true"
                className="absolute left-0.5 top-[0.72em] w-[7px] h-[7px] rotate-45 bg-brick"
              />
              {processInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-8 flex flex-col gap-5">
          {items.map((item, j) => (
            <li key={j} className="flex gap-5 leading-[1.7]">
              <span
                aria-hidden="true"
                className="flex-none w-8 font-serif text-[32px] leading-[0.9] text-brick tabular-nums"
              >
                {j + 1}
              </span>
              <span className="min-w-0">{processInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Horizontal rule (---)
    if (/^-{3,}$/.test(line.trim())) {
      elements.push(
        <hr key={i} className="my-14 mx-auto w-24 border-0 border-t-2 border-terracotta" />
      );
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="mb-6 leading-[1.75]">
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

  const faqSchema =
    article.faq && article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  const updated = article.updatedAt && article.updatedAt !== article.publishedAt;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <article>
        {/* ============ EN-TÊTE ============ */}
        <header className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24`}>
          <nav aria-label="Fil d'Ariane" className="mb-10 text-[13px] text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brick">Accueil</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-brick">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="min-w-0 max-w-full sm:max-w-[42ch] truncate text-ink" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
            <div className="flex-[1_1_520px] min-w-0">
              <p className={`${kicker} text-brick mb-6`}>{article.category}</p>
              <h1 className="font-serif font-medium text-[clamp(40px,5.2vw,76px)] leading-[1] tracking-[-0.01em] text-balance">
                {article.title}
              </h1>
              <p className="mt-7 max-w-[34em] text-[18px] leading-[1.65] text-muted">
                {article.excerpt}
              </p>
              <p className="mt-9 pt-6 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-muted">
                <span>
                  Publié le{" "}
                  <time dateTime={article.publishedAt} className="text-ink font-medium">
                    {formatDate(article.publishedAt)}
                  </time>
                </span>
                {updated && (
                  <span>
                    Mis à jour le{" "}
                    <time dateTime={article.updatedAt} className="text-ink font-medium">
                      {formatDate(article.updatedAt)}
                    </time>
                  </span>
                )}
                <span>
                  <strong className="text-ink font-medium">{readingTime} min</strong> de lecture
                </span>
              </p>
            </div>
            <div className="flex-[1_1_340px] min-w-0 max-w-[460px] mx-auto md:mx-0">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
                <BlogIllustration slug={article.slug} category={article.category} />
              </div>
            </div>
          </div>
        </header>

        <div aria-hidden="true" className="zellige-band" />

        {/* ============ CORPS ============ */}
        <div className={`${wrap} pt-20 md:pt-[96px]`}>
          <div className="mx-auto max-w-[68ch] text-[17px] md:text-[18px] text-ink">
            {renderMarkdown(article.content)}
          </div>
        </div>

        {/* ============ FAQ ============ */}
        {article.faq && article.faq.length > 0 && (
          <section aria-labelledby="faq-titre" className={`${wrap} mt-20`}>
            <div className="mx-auto max-w-[68ch]">
              <p className={`${kicker} text-brick mb-3.5`}>FAQ</p>
              <h2
                id="faq-titre"
                className="font-serif font-medium text-[clamp(32px,3.4vw,42px)] leading-[1.06] mb-8"
              >
                Questions fréquentes
              </h2>
              <div className="flex flex-col gap-3">
                {article.faq.map((item, idx) => (
                  <details
                    key={idx}
                    className="group rounded-[20px] border border-line bg-paper open:border-[#D4C3AE]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-[20px] px-6 py-5 md:px-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick [&::-webkit-details-marker]:hidden">
                      <span className="font-serif font-semibold text-[21px] md:text-[23px] leading-[1.2]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="relative flex-none w-9 h-9 rounded-full border border-line bg-warm-white text-brick transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                      >
                        <span className="absolute left-1/2 top-1/2 w-3.5 h-[2px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-1/2 w-[2px] h-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      </span>
                    </summary>
                    <p className="px-6 md:px-7 pb-6 -mt-1 text-[16px] leading-[1.7] text-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ PARTAGE ============ */}
        <div className={`${wrap} mt-16`}>
          <div className="mx-auto max-w-[68ch] flex flex-wrap items-center justify-between gap-4 py-6 border-y border-line">
            <span className={`${kicker} !tracking-[0.22em] text-muted`}>Partager cet article</span>
            <ShareButton slug={article.slug} title={article.title} />
          </div>
        </div>
      </article>

      {/* ============ APPEL ============ */}
      <section aria-labelledby="venez-gouter" className={`${wrap} py-20 md:py-[96px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] overflow-hidden">
          <div className="p-[clamp(32px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
            <div className="flex-[1_1_420px] min-w-0">
              <p className={`${kicker} text-[#BFD5CB] mb-3`}>À deux pas de l’Opéra</p>
              <h2
                id="venez-gouter"
                className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]"
              >
                Venez goûter <em className="italic">chez Noya.</em>
              </h2>
              <p className="mt-4 max-w-[30em] text-[17px] text-[#CFE0D8]">
                Bistrot levantin moderne au 8 rue de Châteaudun, Paris 9e.
                Déjeuner, dîner et traiteur.
              </p>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-[14px] text-[#BFD5CB]">
                <span>{RESTAURANT.hours.lunch.days}</span>
                <span>Midi {RESTAURANT.hours.lunch.time}</span>
                <span>Soir {RESTAURANT.hours.dinner.time}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ReserveButton
                source="blog-article"
                className={`${pill} bg-warm-white text-ink hover:bg-terracotta`}
              >
                Réserver une table
              </ReserveButton>
              <Link
                href="/menu"
                className={`${pill} border border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-ink`}
              >
                Voir la carte
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="h-3.5 bg-[repeating-linear-gradient(90deg,#24180F_0_22px,#2E5A4E_22px_44px)] opacity-40" />
        </div>
      </section>

      {/* ============ PRÉCÉDENT / SUIVANT ============ */}
      <nav aria-label="Autres articles" className={`${wrap} pb-24 md:pb-[104px]`}>
        <div className="grid gap-5 md:grid-cols-2">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              rel="prev"
              className="group flex flex-col gap-3 rounded-3xl border border-line bg-paper p-7 md:p-8 hover:border-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brick"
            >
              <span className={`${kicker} !tracking-[0.22em] text-brick`}>← Article précédent</span>
              <span className="font-serif font-semibold text-[24px] md:text-[26px] leading-[1.15] group-hover:text-brick transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              rel="next"
              className="group flex flex-col gap-3 rounded-3xl border border-line bg-paper p-7 md:p-8 md:text-right md:items-end hover:border-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brick"
            >
              <span className={`${kicker} !tracking-[0.22em] text-brick`}>Article suivant →</span>
              <span className="font-serif font-semibold text-[24px] md:text-[26px] leading-[1.15] group-hover:text-brick transition-colors">
                {next.title}
              </span>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
        <Link
          href="/blog"
          className="inline-block mt-8 font-bold text-[14px] hover:text-brick"
        >
          ← Tous les articles du blog
        </Link>
      </nav>
    </>
  );
}
