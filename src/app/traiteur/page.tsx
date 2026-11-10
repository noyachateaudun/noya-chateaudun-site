import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import { getBreadcrumbSchema, getCateringSchema } from "@/lib/schema";
import TraiteurForm from "./TraiteurForm";

const TITLE = "Carte Traiteur — salatim, cocktails et buffets levantins";
const DESCRIPTION =
  "Traiteur levantin Noya, Paris 9e : apéro, cocktails et Buffet Festin de 19 à 42 € par personne dès 15 personnes. Salatim, mini pitas, devis gratuit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Noya`,
    description: DESCRIPTION,
    url: "https://www.eatnoya.com/traiteur",
    type: "website",
    images: [
      {
        url: "/og/traiteur.jpg",
        width: 1200,
        height: 630,
        alt: "Carte traiteur levantine Noya, Paris 9e",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Noya`,
    description: DESCRIPTION,
    images: ["/og/traiteur.jpg"],
  },
  alternates: { canonical: "https://www.eatnoya.com/traiteur" },
};

/*
 * Bouton « Télécharger la carte (PDF) » : il n'apparaît que si le fichier
 * public/carte-traiteur-noya.pdf existe. Il suffit de déposer le PDF dans
 * public/ (sous ce nom exact) pour que le bouton s'affiche au prochain build.
 */
const PDF_PATH = "/carte-traiteur-noya.pdf";
const hasPdf = fs.existsSync(
  path.join(process.cwd(), "public", "carte-traiteur-noya.pdf")
);

type Formule = {
  name: string;
  price: string;
  meta: string;
  items: string[];
  dark?: boolean;
};

const FORMULES: Formule[] = [
  {
    name: "Apéro",
    price: "19 €",
    meta: "8 pièces · dès 15 personnes",
    items: ["3 salatim et pitas", "3 pièces salées", "1 mini pita", "1 mini dessert"],
  },
  {
    name: "Cocktail déjeunatoire",
    price: "28 €",
    meta: "12 pièces · dès 15 personnes",
    items: ["4 salatim et pitas", "4 pièces salées", "2 mini pitas", "2 mini desserts"],
  },
  {
    name: "Cocktail dînatoire",
    price: "36 €",
    meta: "16 pièces · dès 20 personnes",
    items: ["5 salatim et pitas", "6 pièces salées", "3 mini pitas", "2 mini desserts"],
  },
  {
    name: "Buffet Festin",
    price: "42 €",
    meta: "Buffet complet · dès 20 personnes",
    items: [
      "6 salatim et pitas",
      "2 plats chauds : shakshuka Noya, poulet mariné",
      "Pommes de terre au thym",
      "2 mini desserts",
    ],
    dark: true,
  },
];

const REMISES = [
  { value: "−5 %", label: "dès 800 € de commande" },
  { value: "−10 %", label: "dès 1 500 € de commande" },
  { value: "Sur devis", label: "dès 3 000 € de commande", italic: true },
  { value: "−10 %", label: "pour les entreprises qui commandent au moins une fois par mois" },
];

type Item = { name: string; price: string; desc?: string; vegan?: boolean };
type Category = { title: string; note: string; items: Item[] };

const CARTE: Category[] = [
  {
    title: "Salatim",
    note: "Bol de 500 g pour 8 à 10 personnes, servi avec pitas",
    items: [
      { name: "Houmous", price: "16 €", desc: "Pois chiches, tahina, citron, huile d’olive" },
      { name: "Baba ganoush", price: "16 €", desc: "Aubergine rôtie au feu, tahina, grenade" },
      { name: "Tabouleh", price: "16 €", desc: "Persil, tomates, concombre, quinoa" },
      { name: "Labaneh", price: "16 €", desc: "Pickles, tomates cerises, grenade" },
      { name: "Sweet patata", price: "18 €", desc: "Patate douce rôtie, zaatar, tahina" },
      { name: "Pétria", price: "20 €", desc: "Champignons confits, tahina à la truffe" },
      { name: "Houmous Bilameh", price: "26 €", desc: "Houmous chaud, bœuf effiloché" },
    ],
  },
  {
    title: "Pièces salées",
    note: "À la pièce, 20 minimum par référence",
    items: [
      { name: "Falafel maison", price: "1,50 €", desc: "Tahina citronnée" },
      { name: "Pommes de terre au zaatar", price: "1,50 €" },
      { name: "Toast avocado sumac", price: "2,20 €", desc: "Sur challah toastée" },
      { name: "Mini shnitzel de poulet", price: "2,50 €", desc: "Sauce tartare" },
      { name: "Bouchée fish labaneh", price: "2,50 €" },
      { name: "Mini arayes", price: "2,80 €", desc: "Pita farcie viande hachée, tahina" },
      { name: "Cuillère ceviche de daurade", price: "3,00 €" },
      { name: "Brochette de bœuf", price: "3,20 €", desc: "Grillée à la braise" },
    ],
  },
  {
    title: "Mini pitas",
    note: "À la pièce, 12 minimum par référence",
    items: [
      { name: "Mini pita falafel", price: "3,80 €", vegan: true },
      { name: "Mini pita aubergine", price: "3,80 €", desc: "Œuf, houmous, amba" },
      { name: "Mini pita Of", price: "4,50 €", desc: "Poulet mariné, pickles, tahina" },
      { name: "Mini pita Pitzel", price: "4,50 €", desc: "Poulet pané, patate douce" },
      { name: "Mini pita Bilo", price: "4,50 €", desc: "Champignons, egg salad, truffe" },
      { name: "Mini pita Fishta", price: "4,50 €", desc: "Boulettes de poisson, tartare" },
    ],
  },
  {
    title: "Mini desserts",
    note: "À la pièce, 12 minimum par référence",
    items: [
      { name: "Mini babka", price: "2,20 €", desc: "Chocolat, caramel" },
      { name: "Mini crumble", price: "2,20 €", desc: "Pommes rôties, miel" },
      { name: "Mini malabi", price: "2,50 €", desc: "Eau de rose, pistaches" },
      { name: "Bouchée de pain perdu", price: "2,50 €", desc: "Challah à la rose, pistaches" },
    ],
  },
];

const OPTIONS = [
  { name: "Softs et citronnade maison", price: "4 € / pers." },
  { name: "Vaisselle éco et serviettes", price: "1,50 € / pers." },
  { name: "Livraison Paris", price: "25 €, offerte dès 500 €" },
  { name: "Service sur place", price: "Sur devis" },
];

const PHOTOS = [
  {
    src: "/images/galerie/IMG_9358.jpg",
    alt: "Salatim : houmous maison",
    caption: "Salatim",
    className: "h-[320px] md:h-[420px] rounded-[20px]",
  },
  {
    src: "/images/galerie/houmous bilameh.jpg",
    alt: "Houmous Bilameh au bœuf effiloché",
    caption: "Houmous Bilameh",
    className: "h-[400px] md:h-[500px] rounded-t-full rounded-b-[20px]",
  },
  {
    src: "/images/galerie/IMG_9352.jpg",
    alt: "Pita au poulet pané",
    caption: "Pita",
    className: "h-[320px] md:h-[420px] rounded-[20px]",
  },
];

const CONTAINER = "max-w-[1320px] mx-auto px-5 md:px-14";
const BTN =
  "inline-flex items-center min-h-[52px] px-7 rounded-full text-[13px] font-bold tracking-[0.14em] uppercase transition-colors";

function Dots() {
  return (
    <span
      aria-hidden="true"
      className="flex-1 min-w-[16px] border-b border-dotted border-[#B9A894] -translate-y-[5px]"
    />
  );
}

export default function TraiteurPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
  ]);
  const cateringSchema = getCateringSchema();

  return (
    <div className="bg-warm-white text-ink font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />

      {/* 1. En-tête */}
      <section className={`${CONTAINER} pt-10 pb-20 md:pb-24`}>
        <div className="flex flex-wrap justify-between items-end gap-x-16 gap-y-8">
          <div className="flex-1 basis-full lg:basis-[520px] min-w-0">
            <p className="mb-6 text-xs font-bold tracking-[0.28em] uppercase text-brick">
              Bistrot levantin · Paris 9ᵉ
            </p>
            <h1 className="font-serif font-medium text-[clamp(56px,7.4vw,112px)] leading-[0.94] tracking-[-0.01em]">
              Carte <em className="italic text-brick">Traiteur</em>
            </h1>
            <p className="mt-7 max-w-[30em] text-[17px] md:text-[19px] leading-relaxed text-muted">
              Notre cuisine du Levant, faite maison chaque jour, en format à
              partager pour vos réunions, cocktails et fêtes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#devis" className={`${BTN} bg-brick text-paper hover:bg-ink`}>
              Demander un devis
            </a>
            {hasPdf && (
              <a
                href={PDF_PATH}
                download
                className={`${BTN} gap-2.5 border border-ink text-ink hover:border-brick hover:text-brick`}
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Télécharger la carte (PDF)
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 items-end">
          {PHOTOS.map((photo, i) => (
            <figure key={photo.src} className="m-0 min-w-0">
              <div className={`relative w-full overflow-hidden ${photo.className}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={i === 1}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-[13px] text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* 2. Nos formules */}
      <section className={`${CONTAINER} py-20 md:py-[104px]`}>
        <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-3 mb-12">
          <h2 className="font-serif font-medium text-[clamp(40px,4.6vw,62px)] leading-[1.02]">
            Nos formules
          </h2>
          <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#8A7666]">
            Prix par personne
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {FORMULES.map((f) => (
            <article
              key={f.name}
              className={`rounded-3xl p-8 flex flex-col gap-[18px] ${
                f.dark ? "bg-ink text-warm-white" : "bg-paper border border-line"
              }`}
            >
              <h3 className="font-serif font-semibold text-[32px] leading-[1.05]">
                {f.name}
              </h3>
              <p className="flex items-baseline gap-2">
                <span
                  className={`font-serif text-[64px] leading-[0.9] ${
                    f.dark ? "text-terracotta" : "text-brick"
                  }`}
                >
                  {f.price}
                </span>
                <span className={`text-sm ${f.dark ? "text-[#D9CBBB]" : "text-muted"}`}>
                  / pers.
                </span>
              </p>
              <p
                className={`text-[13px] font-bold tracking-[0.12em] uppercase ${
                  f.dark ? "text-[#D9CBBB]" : "text-muted"
                }`}
              >
                {f.meta}
              </p>
              <ul
                className={`pt-[18px] border-t flex flex-col gap-2 text-[15px] ${
                  f.dark ? "border-warm-white/20" : "border-line"
                }`}
              >
                {f.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Remises sur volume */}
      <section className={`${CONTAINER} pb-20 md:pb-[104px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] p-[clamp(32px,5vw,64px)]">
          <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-3 mb-10">
            <h2 className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]">
              Remises sur volume
            </h2>
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#BFD5CB]">
              Plus vous êtes nombreux…
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {REMISES.map((r, i) => (
              <div key={i} className="pt-5 border-t border-warm-white/30">
                <p
                  className={`font-serif text-[52px] md:text-[64px] leading-[0.95] ${
                    r.italic ? "italic" : ""
                  }`}
                >
                  {r.value}
                </p>
                <p className="mt-2.5 text-[#CFE0D8]">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 text-[13px] text-[#BFD5CB]">
            Montant calculé sur les formules et la carte, hors livraison,
            boissons et service. Remises non cumulables.
          </p>
        </div>
      </section>

      {/* 4. À la carte */}
      <section className="bg-cream">
        <div className={`${CONTAINER} py-20 md:py-[104px]`}>
          <h2 className="mb-3 font-serif font-medium text-[clamp(40px,4.6vw,62px)] leading-[1.02]">
            À la carte
          </h2>
          <p className="mb-14 max-w-[34em] text-muted">
            Composez votre table vous-même, ou complétez une formule.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[clamp(40px,6vw,96px)] gap-y-16">
            {CARTE.map((cat) => (
              <div key={cat.title} className="min-w-0">
                <h3 className="font-serif font-semibold text-[34px]">{cat.title}</h3>
                <p className="mt-1 mb-6 text-sm text-muted">{cat.note}</p>
                <ul className="flex flex-col gap-4">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-bold">
                          {item.name}
                          {item.vegan && (
                            <span className="ml-1.5 px-2 py-0.5 rounded-full bg-zellige text-warm-white text-[11px] font-bold tracking-[0.08em] uppercase align-[2px]">
                              Vegan
                            </span>
                          )}
                        </span>
                        <Dots />
                        <span className="font-serif text-[22px] whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="mt-0.5 text-sm text-muted">{item.desc}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Options + 6. Commander */}
      <section className={`${CONTAINER} py-20 md:py-[104px]`}>
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-x-[clamp(40px,6vw,96px)] gap-y-14 items-start">
          <div className="min-w-0">
            <h2 className="mb-7 font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.04]">
              Options
            </h2>
            <ul className="flex flex-col gap-[18px]">
              {OPTIONS.map((o) => (
                <li key={o.name} className="flex items-baseline gap-3">
                  <span>{o.name}</span>
                  <Dots />
                  <span className="font-bold text-right">{o.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2.5 text-sm text-muted">
              Service sur place conseillé dès 40 personnes.
            </p>
          </div>
          <div className="min-w-0 bg-paper border border-line rounded-3xl p-7 md:p-9">
            <h2 className="mb-6 font-serif font-medium text-[clamp(32px,3.4vw,44px)] leading-[1.05]">
              Commander
            </h2>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4">
                <span className="flex-none w-[92px] font-serif text-[30px] leading-none text-brick">
                  72 h
                </span>
                <span>
                  à l’avance pour la carte, <strong>7 jours</strong> pour les formules
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-none w-[92px] font-serif text-[30px] leading-none text-brick">
                  30 %
                </span>
                <span>d’acompte, le solde 48 h avant l’événement</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-none w-[92px] font-serif text-[30px] leading-none text-brick">
                  Vegan
                </span>
                <span>et sans gluten sur demande</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Formulaire */}
      <section id="devis" className="bg-brick text-paper scroll-mt-24">
        <div
          className={`${CONTAINER} py-20 md:py-[104px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-[clamp(40px,6vw,96px)] gap-y-12`}
        >
          <div className="min-w-0">
            <p className="mb-3.5 text-xs font-bold tracking-[0.28em] uppercase text-[#F6D9CC]">
              Devis gratuit
            </p>
            <h2 className="font-serif font-medium text-[clamp(40px,4.6vw,62px)] leading-[1.02]">
              Parlons de votre événement.
            </h2>
            <p className="mt-6 max-w-[24em] text-[#F6E4DB]">
              Dites-nous la date, le nombre de personnes et ce qui vous fait
              envie. On vous répond avec un devis.
            </p>
            <p className="mt-8 text-[#F6E4DB]">
              Plutôt par téléphone ?
              <br />
              <a
                href="tel:+33611610206"
                className="inline-flex items-center min-h-[44px] text-paper font-bold text-xl hover:underline"
              >
                06 11 61 02 06
              </a>
            </p>
          </div>
          <div className="min-w-0 bg-paper text-ink rounded-3xl p-[clamp(24px,4vw,48px)]">
            <TraiteurForm />
          </div>
        </div>
      </section>
    </div>
  );
}
