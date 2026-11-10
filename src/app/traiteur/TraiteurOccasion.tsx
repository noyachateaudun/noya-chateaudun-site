import Link from "next/link";
import Image from "next/image";
import { getBreadcrumbSchema } from "@/lib/schema";
import { COMMANDE, OPTIONS, REMISES, REMISES_NOTE, getFormule } from "@/data/traiteur";

/*
 * Gabarit commun des pages traiteur par occasion (entreprise, anniversaire,
 * mariage). Les formules et les prix viennent de src/data/traiteur.ts :
 * ils restent identiques à ceux de la page /traiteur.
 */

const OCCASIONS = [
  { slug: "entreprise", label: "Entreprises" },
  { slug: "anniversaire", label: "Anniversaires" },
  { slug: "mariage", label: "Mariages" },
];

export type OccasionProps = {
  slug: "entreprise" | "anniversaire" | "mariage";
  breadcrumb: string;
  kicker: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  formulesTitle: string;
  formules: { name: string; ideal: string }[];
  reasonsTitle: string;
  reasons: { title: string; text: string }[];
  highlightRemises?: boolean;
};

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kickerCls = "text-[12px] font-bold uppercase tracking-[0.28em]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

export default function TraiteurOccasion(props: OccasionProps) {
  const url = `https://www.eatnoya.com/traiteur/${props.slug}`;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
    { name: props.breadcrumb, url },
  ]);
  const others = OCCASIONS.filter((o) => o.slug !== props.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* En-tête */}
      <section className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-brick">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/traiteur" className="hover:text-brick">Traiteur</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{props.breadcrumb}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kickerCls} text-brick mb-6`}>{props.kicker}</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              {props.title}
            </h1>
            <p className="mt-7 max-w-[31em] text-[18px] leading-[1.65] text-muted">{props.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/traiteur#devis" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
                Demander un devis
              </Link>
              <Link href="/traiteur" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
                Toute la carte traiteur
              </Link>
            </div>
          </div>
          <div className="flex-[1_1_380px] min-w-0 max-w-[520px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image src={props.image.src} alt={props.image.alt} fill priority sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* Formules conseillées */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-3 mb-12">
          <h2 className="font-serif font-medium text-[clamp(36px,4.2vw,56px)] leading-[1.04] max-w-[16em]">{props.formulesTitle}</h2>
          <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#76624F]">Prix par personne</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {props.formules.map(({ name, ideal }) => {
            const f = getFormule(name);
            return (
              <article
                key={name}
                className={`rounded-3xl p-8 flex flex-col gap-4 ${f.dark ? "bg-ink text-warm-white" : "bg-paper border border-line"}`}
              >
                <p className={`${kickerCls} !tracking-[0.18em] ${f.dark ? "text-terracotta" : "text-brick"}`}>{ideal}</p>
                <h3 className="font-serif font-semibold text-[32px] leading-[1.05]">{f.name}</h3>
                <p className="flex items-baseline gap-2">
                  <span className={`font-serif text-[60px] leading-[0.9] ${f.dark ? "text-terracotta" : "text-brick"}`}>{f.price}</span>
                  <span className={`text-[14px] ${f.dark ? "text-[#D9CBBB]" : "text-muted"}`}>/ pers.</span>
                </p>
                <p className={`text-[13px] font-bold uppercase tracking-[0.12em] ${f.dark ? "text-[#D9CBBB]" : "text-muted"}`}>{f.meta}</p>
                <ul className={`pt-4 border-t flex flex-col gap-2 text-[15px] ${f.dark ? "border-warm-white/20" : "border-line"}`}>
                  {f.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-[15px] text-muted">
          Besoin d’autre chose ? Composez votre table vous-même à partir de la{" "}
          <Link href="/traiteur" className="underline underline-offset-4 hover:text-brick">carte traiteur</Link> : salatim, pièces salées, mini pitas et mini desserts.
        </p>
      </section>

      {/* Pourquoi */}
      <section className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <h2 className="font-serif font-medium text-[clamp(36px,4.2vw,56px)] leading-[1.04] mb-12 max-w-[16em]">{props.reasonsTitle}</h2>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
            {props.reasons.map((r) => (
              <div key={r.title} className="pt-6 border-t-2 border-ink">
                <h3 className="font-serif font-semibold text-[26px] leading-[1.15]">{r.title}</h3>
                <p className="mt-3 text-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remises */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] p-[clamp(32px,5vw,64px)]">
          <h2 className="font-serif font-medium text-[clamp(34px,3.8vw,50px)] leading-[1.04] mb-10">
            {props.highlightRemises ? "Commandez régulièrement, payez moins" : "Remises sur volume"}
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {REMISES.map((r, i) => (
              <div key={i} className="pt-5 border-t border-warm-white/30">
                <p className={`font-serif text-[52px] md:text-[60px] leading-[0.95] ${r.italic ? "italic" : ""}`}>{r.value}</p>
                <p className="mt-2.5 text-[#CFE0D8]">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 text-[13px] text-[#BFD5CB]">{REMISES_NOTE}</p>
        </div>
      </section>

      {/* Pratique */}
      <section className={`${wrap} pb-24 md:pb-[104px]`}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif font-medium text-[clamp(32px,3.4vw,44px)] leading-[1.05] mb-7">Options</h2>
            <ul className="flex flex-col gap-4">
              {OPTIONS.map((o) => (
                <li key={o.name} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span>{o.name}</span>
                  <span aria-hidden="true" className="flex-1 min-w-[40px] border-b border-dotted border-[#B9A894] -translate-y-1.5" />
                  <span className="font-bold">{o.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper border border-line rounded-3xl p-9">
            <h2 className="font-serif font-medium text-[clamp(32px,3.4vw,44px)] leading-[1.05] mb-6">Commander</h2>
            <ul className="flex flex-col gap-5">
              {COMMANDE.map((c) => (
                <li key={c.value} className="flex gap-4">
                  <span className="flex-none w-[92px] font-serif text-[30px] leading-none text-brick">{c.value}</span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Appel */}
      <section className="bg-brick text-paper">
        <div className={`${wrap} py-20 flex flex-wrap items-center justify-between gap-x-12 gap-y-8`}>
          <div className="flex-[1_1_420px] min-w-0">
            <h2 className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]">Parlons de votre événement.</h2>
            <p className="mt-4 max-w-[30em] text-[#F6E4DB]">
              Dites-nous la date, le nombre de personnes et ce qui vous fait envie. On vous répond avec un devis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/traiteur#devis" className={`${pill} bg-paper text-ink hover:bg-terracotta`}>
              Demander un devis
            </Link>
            <a href="tel:+33611610206" className={`${pill} border border-paper text-paper hover:bg-paper hover:text-ink`}>
              06 11 61 02 06
            </a>
          </div>
        </div>
      </section>

      {/* Autres occasions */}
      <nav aria-label="Autres occasions" className={`${wrap} py-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]`}>
        <span className="text-muted">Voir aussi :</span>
        {others.map((o) => (
          <Link key={o.slug} href={`/traiteur/${o.slug}`} className="font-bold underline underline-offset-4 hover:text-brick">
            Traiteur {o.label.toLowerCase()}
          </Link>
        ))}
      </nav>
    </>
  );
}
