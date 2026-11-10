import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES, getReadingTime, formatDate } from "@/data/blog";
import BlogIllustration from "@/components/BlogIllustration";
import ReserveButton from "@/components/ReserveButton";

export const metadata: Metadata = {
  title: "Blog — Cuisine levantine, recettes et culture culinaire",
  description:
    "Articles sur la cuisine du Levant, recettes (houmous, falafel, shakshuka), vins israéliens & libanais et conseils traiteur. Le blog de Noya.",
  openGraph: {
    title: "Blog — Cuisine levantine, recettes et culture culinaire | Noya",
    description:
      "Articles sur la cuisine du Levant, recettes et culture culinaire levantine.",
    url: "https://www.eatnoya.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://www.eatnoya.com/blog",
  },
};

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";
// Lien étiré : toute la carte est cliquable, mais le nom accessible reste le titre.
const stretched =
  "after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] focus-visible:outline-none";
const cardFocus =
  "has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-brick";

function Meta({ date, minutes, className = "" }: { date: string; minutes: number; className?: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-muted ${className}`}>
      <time dateTime={date}>{formatDate(date)}</time>
      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#B9A894]" />
      <span>{minutes} min de lecture</span>
    </p>
  );
}

export default function BlogPage() {
  // Le plus récent en tête ; tri stable pour les articles publiés le même jour.
  const articles = BLOG_ARTICLES.map((a, i) => ({ a, i }))
    .sort((x, y) => y.a.publishedAt.localeCompare(x.a.publishedAt) || x.i - y.i)
    .map(({ a }) => a);
  const [featured, ...rest] = articles;

  return (
    <>
      {/* ============ EN-TÊTE ============ */}
      <section className={`${wrap} pt-6 md:pt-10 pb-16 md:pb-20`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-brick">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink" aria-current="page">Blog</span>
        </nav>
        <div className="flex flex-wrap justify-between items-end gap-x-16 gap-y-6">
          <div className="flex-[1_1_520px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Le journal de Noya</p>
            <h1 className="font-serif font-medium text-[clamp(52px,6.6vw,98px)] leading-[0.96] tracking-[-0.01em]">
              Le <em className="italic text-brick">blog</em>
            </h1>
          </div>
          <p className="flex-[0_1_420px] min-w-0 text-[18px] leading-[1.65] text-muted">
            Cuisine du Levant, recettes, accords mets-vins et conseils pour vos événements.
          </p>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* ============ ARTICLE À LA UNE ============ */}
      {featured && (
        <section aria-labelledby="a-la-une" className={`${wrap} pt-20 md:pt-[104px] pb-16 md:pb-20`}>
          <p id="a-la-une" className={`${kicker} text-brick mb-8`}>À la une</p>
          <article
            className={`group relative grid gap-y-8 gap-x-[clamp(32px,5vw,80px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center rounded-3xl ${cardFocus}`}
          >
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-t-[200px] rounded-b-[20px] md:rounded-t-[260px]">
              <BlogIllustration slug={featured.slug} category={featured.category} ornament />
            </div>
            <div className="min-w-0">
              <Meta date={featured.publishedAt} minutes={getReadingTime(featured.content)} className="mb-5" />
              <h2 className="font-serif font-medium text-[clamp(36px,4.2vw,58px)] leading-[1.04]">
                <Link href={`/blog/${featured.slug}`} className={`${stretched} group-hover:text-brick transition-colors`}>
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-6 max-w-[34em] text-[17px] leading-[1.7] text-muted">{featured.excerpt}</p>
              <span aria-hidden="true" className="mt-8 inline-flex items-center gap-2 font-bold text-[14px] text-ink group-hover:text-brick transition-colors">
                Lire l&apos;article <span className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
              </span>
            </div>
          </article>
        </section>
      )}

      {/* ============ TOUS LES ARTICLES ============ */}
      {rest.length > 0 && (
        <section aria-labelledby="tous-les-articles" className="bg-cream">
          <div className={`${wrap} py-20 md:py-[104px]`}>
            <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-3 mb-12">
              <h2 id="tous-les-articles" className="font-serif font-medium text-[clamp(36px,4.2vw,56px)] leading-[1.04]">
                Tous les articles
              </h2>
              <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#76624F]">
                {articles.length} articles
              </p>
            </div>
            <ul className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <li key={article.slug} className="min-w-0">
                  <article className={`group relative h-full flex flex-col rounded-[20px] ${cardFocus}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                      <BlogIllustration slug={article.slug} category={article.category} ornament />
                    </div>
                    <Meta date={article.publishedAt} minutes={getReadingTime(article.content)} className="mt-6" />
                    <h3 className="mt-2.5 font-serif font-semibold text-[28px] leading-[1.12]">
                      <Link href={`/blog/${article.slug}`} className={`${stretched} group-hover:text-brick transition-colors`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-muted">{article.excerpt}</p>
                    <span aria-hidden="true" className="mt-auto pt-5 font-bold text-[14px] text-ink group-hover:text-brick transition-colors">
                      Lire l&apos;article →
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ============ APPEL ============ */}
      <section className="bg-brick text-paper">
        <div className={`${wrap} py-20 flex flex-wrap items-center justify-between gap-x-12 gap-y-8`}>
          <div className="flex-[1_1_420px] min-w-0">
            <p className={`${kicker} text-[#F6D9CC] mb-3`}>8 rue de Châteaudun · Paris 9ᵉ</p>
            <h2 className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]">
              Après la lecture, la dégustation.
            </h2>
            <p className="mt-4 max-w-[30em] text-[#F6E4DB]">
              Houmous, falafels, shakshuka : tout ce dont parle ce blog, fait maison chaque jour chez Noya.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ReserveButton source="blog" className={`${pill} bg-paper text-ink hover:bg-terracotta`}>
              Réserver une table
            </ReserveButton>
            <Link href="/menu" className={`${pill} border border-paper text-paper hover:bg-paper hover:text-ink`}>
              Voir la carte
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
