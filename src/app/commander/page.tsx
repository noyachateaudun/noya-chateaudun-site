import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT } from "@/data/restaurant";
import { getBreadcrumbSchema } from "@/lib/schema";
import ReservationCTA from "@/components/ReservationCTA";

export const metadata: Metadata = {
  title: "Commander en ligne — Click & Collect & Livraison",
  description:
    "Commandez Noya en click & collect ou livraison. Houmous, pitas, falafels & shakshuka livrés chez vous. Deliveroo, Uber Eats ou retrait au restaurant.",
  openGraph: {
    title: "Commander en ligne — Noya Restaurant Levantin Paris 9e",
    description:
      "Click & collect ou livraison : retrouvez la saveur Noya chez vous.",
    url: "https://www.eatnoya.com/commander",
  },
  alternates: { canonical: "https://www.eatnoya.com/commander" },
};

const BESTSELLERS = [
  {
    name: "Pita Of",
    desc: "Poulet mariné, aubergine, salade Noya, oignons pickles, tahina & cornichons.",
    price: "13,00€",
    image: "/images/galerie/pita of.jpg",
    alt: "Pita Of au poulet mariné et à l’aubergine",
  },
  {
    name: "Assiette Falafel",
    desc: "Falafels maison, houmous, salade Noya, aubergine, chou, pommes de terre & tahina.",
    price: "16,00€",
    image: "/images/galerie/assiete falafel.jpg",
    alt: "Assiette Falafel avec houmous et tahina",
  },
  {
    name: "The Shakshuka",
    desc: "Poivrons, tomates, oignons, épices & œuf.",
    price: "16,00€",
    image: "/images/galerie/the shakshuka.jpg",
    alt: "The Shakshuka aux poivrons, tomates et œuf",
  },
  {
    name: "Houmous Bilameh",
    desc: "Notre houmous signature, sublimé par du parguit mariné & grillé.",
    price: "16,50€",
    image: "/images/galerie/houmous bilameh.jpg",
    alt: "Houmous Bilameh, houmous signature et parguit grillé",
  },
];

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const h2 = "font-serif font-medium text-[clamp(38px,4.4vw,60px)] leading-[1.02]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

function Leader({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex-1 min-w-[24px] border-b border-dotted -translate-y-1.5 ${light ? "border-paper/45" : "border-[#B9A894]"}`}
    />
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function CommanderPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Commander", url: "https://www.eatnoya.com/commander" },
  ]);

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
          <span className="text-ink">Commander</span>
        </nav>
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Commander en ligne</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              Commandez <em className="italic text-brick">en ligne.</em>
            </h1>
            <p className="mt-7 max-w-[31em] text-[18px] leading-[1.65] text-muted">
              Retrouvez toute la saveur de Noya chez vous. Click &amp; collect ou livraison.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={RESTAURANT.links.emporter}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pill} gap-2.5 bg-brick text-paper hover:bg-burgundy-dark`}
              >
                Click &amp; collect
                <ExternalIcon />
              </a>
              <a href="#livraison" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
                Se faire livrer
              </a>
            </div>
          </div>
          <div className="flex-[1_1_380px] min-w-0 max-w-[520px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/pita of.jpg"
                alt="Pita Of à emporter, poulet mariné et aubergine"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* Click & Collect */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] p-[clamp(28px,5vw,64px)] flex flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-10">
          <div className="flex-[1_1_320px] min-w-0">
            <p className={`${kicker} text-[#BFD5CB] mb-3.5`}>À emporter</p>
            <h2 className={h2}>Click &amp; Collect</h2>
            <p className="mt-5 max-w-[26em] text-[17px] text-[#CFE0D8]">
              Commandez en ligne et récupérez votre commande au restaurant.
            </p>
            <p className="mt-7 flex items-baseline gap-3">
              <span className="font-serif text-[64px] leading-[0.9] text-terracotta">20 min</span>
              <span className="text-[#CFE0D8]">Prête en 20 minutes.</span>
            </p>
          </div>
          <div className="flex-[1_1_380px] min-w-0 flex flex-col gap-5">
            <dl className="flex flex-col gap-5">
              <div>
                <div className="flex items-baseline gap-3.5">
                  <dt className="font-serif text-[26px] font-semibold">Horaires de retrait</dt>
                  <Leader light />
                </div>
                <dd className="mt-1 text-[16px] text-[#CFE0D8]">Du mardi au samedi, 11h30–14h30 et 19h–22h30</dd>
              </div>
              <div>
                <div className="flex items-baseline gap-3.5">
                  <dt className="font-serif text-[26px] font-semibold">Adresse</dt>
                  <Leader light />
                </div>
                <dd className="mt-1 text-[16px] text-[#CFE0D8]">
                  {RESTAURANT.address.street}, {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                </dd>
              </div>
            </dl>
            <a
              href={RESTAURANT.links.emporter}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} gap-2.5 self-start mt-3 bg-warm-white text-ink hover:bg-terracotta`}
            >
              Commander en Click &amp; Collect
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Livraison */}
      <section id="livraison" className="bg-cream scroll-mt-24">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-4 mb-12">
            <div>
              <p className={`${kicker} text-brick mb-3.5`}>Livraison à domicile</p>
              <h2 className={h2}>Faites-vous livrer</h2>
            </div>
            <p className="max-w-[26em] text-muted">
              Livraison en ~30 minutes dans le 9e et arrondissements voisins
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={RESTAURANT.links.deliveroo}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper border border-line rounded-3xl p-8 md:p-9 flex items-center gap-6 transition-colors hover:border-ink"
            >
              <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" className="flex-none">
                <rect width="24" height="24" rx="6" fill="#00CCBC" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">D</text>
              </svg>
              <span className="min-w-0 flex-1">
                <span className="block font-serif font-semibold text-[32px] leading-[1.05]">Deliveroo</span>
                <span className="block mt-1 text-[15px] text-muted">Commander sur Deliveroo</span>
              </span>
              <span aria-hidden="true" className="text-[22px] transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={RESTAURANT.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper border border-line rounded-3xl p-8 md:p-9 flex items-center gap-6 transition-colors hover:border-ink"
            >
              <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" className="flex-none">
                <rect width="24" height="24" rx="6" fill="#06C167" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">U</text>
              </svg>
              <span className="min-w-0 flex-1">
                <span className="block font-serif font-semibold text-[32px] leading-[1.05]">Uber Eats</span>
                <span className="block mt-1 text-[15px] text-muted">Commander sur Uber Eats</span>
              </span>
              <span aria-hidden="true" className="text-[22px] transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Best-sellers */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-4 mb-12">
          <div>
            <p className={`${kicker} text-brick mb-3.5`}>Les plus commandés</p>
            <h2 className={`${h2} max-w-[14em]`}>Nos best-sellers à emporter</h2>
          </div>
          <Link href="/menu" className="font-bold text-[14px] hover:text-brick">
            Voir toute la carte →
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {BESTSELLERS.map((dish) => (
            <article key={dish.name} className="min-w-0">
              <div className="relative h-[320px] lg:h-[340px] overflow-hidden rounded-[20px]">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <h3 className="font-serif font-semibold text-[28px] leading-[1.1]">{dish.name}</h3>
                <Leader />
                <span className="font-serif text-[24px] text-brick whitespace-nowrap">{dish.price}</span>
              </div>
              <p className="mt-2 text-[15px] text-muted">{dish.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bandeau de confiance */}
      <section aria-label="Avis clients" className="bg-ink text-warm-white">
        <div className={`${wrap} py-16 grid gap-8 md:grid-cols-3`}>
          <div className="pt-6 border-t border-warm-white/30">
            <p className="font-serif font-medium text-[56px] leading-[0.9]">5/5</p>
            <p className="mt-3 text-[#D9CBBB]">sur Google · 140 avis</p>
          </div>
          <div className="pt-6 border-t border-warm-white/30">
            <p className="font-serif font-medium text-[56px] leading-[0.9]">9,6/10</p>
            <p className="mt-3 text-[#D9CBBB]">sur TheFork, mieux noté du 9ᵉ</p>
          </div>
          <div className="pt-6 border-t border-warm-white/30">
            <p className="font-serif italic font-medium text-[40px] leading-[1.02] text-terracotta">
              Même qualité en salle et à emporter
            </p>
          </div>
        </div>
      </section>

      <ReservationCTA source="commander" />
    </>
  );
}
