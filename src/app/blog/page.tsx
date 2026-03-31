import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES, getReadingTime, formatDate } from "@/data/blog";
import Reveal from "@/components/Reveal";
import BlogIllustration from "@/components/BlogIllustration";

export const metadata: Metadata = {
  title: "Blog — Cuisine levantine, recettes et culture culinaire",
  description:
    "Articles sur la cuisine levantine, recettes authentiques (houmous, falafel, shakshuka), vins méditerranéens et conseils traiteur. Le blog de Noya.",
  openGraph: {
    title: "Blog — Cuisine levantine, recettes et culture culinaire | Noya",
    description:
      "Articles sur la cuisine levantine, recettes authentiques et culture culinaire méditerranéenne.",
    url: "https://www.eatnoya.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://www.eatnoya.com/blog",
  },
};

export default function BlogPage() {
  return (
    <section className="py-16 md:py-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-5 text-center mb-16">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy/60 mb-4">
            Le journal de Noya
          </p>
          <h1 className="font-serif text-[clamp(28px,5vw,48px)] text-dark leading-tight mb-4">
            Blog
          </h1>
          <p className="text-dark/60 max-w-xl mx-auto leading-relaxed">
            Cuisine levantine, recettes authentiques, accords mets-vins et
            conseils pour vos événements.
          </p>
        </Reveal>
      </div>

      {/* Articles grid */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block bg-white rounded-xl border border-[#E5DFD5] overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Illustration */}
                <BlogIllustration
                  slug={article.slug}
                  title={article.title}
                  category={article.category}
                  size="card"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[12px] text-dark/40 mb-3">
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-dark/20" />
                    <span>{getReadingTime(article.content)} min de lecture</span>
                  </div>

                  <p className="text-sm text-dark/50 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-burgundy group-hover:gap-2.5 transition-all">
                    Lire l&apos;article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
