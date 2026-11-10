import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MENU_MIDI, MENU_SOIR, type MenuSection as MenuSectionType, type MenuItem } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import ReserveButton from "@/components/ReserveButton";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema, getMenuSchema } from "@/lib/schema";
import MenuTabs from "./MenuTabs";

export const metadata: Metadata = {
  title: "Carte & Menu — Noya · Bistrot levantin moderne · Paris 9ᵉ",
  description:
    "Notre carte midi et soir. Plats signatures : côtes d'agneau, shakshuka Noya, pain perdu à la rose, houmous Bilameh, formule midi à 16€. Fait maison, frais du jour.",
  openGraph: {
    title: "Carte & Menu — Noya · Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Carte midi & soir du bistrot levantin moderne. Côtes d'agneau, shakshuka, pain perdu à la rose. Fait maison.",
    url: "https://www.eatnoya.com/menu",
    images: [{ url: "/og/menu.jpg", width: 1200, height: 630, alt: "Carte du restaurant Noya, bistrot levantin moderne, Paris 9e" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carte & Menu — Noya · Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Carte midi & soir du bistrot levantin moderne. Côtes d'agneau, shakshuka, pain perdu à la rose. Fait maison.",
  },
  alternates: { canonical: "https://www.eatnoya.com/menu" },
};

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const h2 = "font-serif font-medium text-[clamp(38px,4.4vw,60px)] leading-[1.02]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

const TAGS = ["Fait maison", "Produits frais", "Végétarien", "Végan", "Sans gluten"];

const MIDI_PHOTOS = [
  { src: "/images/galerie/pita of.jpg", alt: "Pita Of au poulet mariné, aubergine et pickles", caption: "Pita Of" },
  { src: "/images/galerie/assiete falafel.jpg", alt: "Assiette Falafel, houmous et salade Noya", caption: "Assiette Falafel" },
  { src: "/images/galerie/the shakshuka.jpg", alt: "The Shakshuka à la viande fondante", caption: "The Shakshuka" },
];

const SOIR_PHOTOS = [
  { src: "/images/galerie/IMG_9358.jpg", alt: "Houmous maison, pois chiches et persil", caption: "Salatim" },
  { src: "/images/galerie/IMG_9357.jpg", alt: "Shakshuka Noya dans sa poêle en fonte", caption: "Shakshuka Noya" },
  { src: "/images/galerie/IMG_9353.jpg", alt: "Falafels maison et tahina", caption: "Falafel" },
];

function Leader({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex-1 min-w-[16px] border-b border-dotted -translate-y-1.5 ${light ? "border-paper/45" : "border-[#B9A894]"}`}
    />
  );
}

function DishItem({ item }: { item: MenuItem }) {
  return (
    <li>
      <article>
        <div className="flex items-baseline gap-3">
          <h4 className="min-w-0 font-bold text-[16px] md:text-[17px]">
            {item.name}
            {item.tag && <span className="ml-2 text-[13px] font-normal italic text-muted">{item.tag}</span>}
            {item.badge && (
              <span
                className={`ml-2 inline-block px-2 py-0.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase align-[2px] ${
                  item.badge === "VG" ? "bg-zellige text-warm-white" : "border border-ink text-ink"
                }`}
              >
                {item.badge}
              </span>
            )}
          </h4>
          <Leader />
          <span className="font-serif text-[22px] md:text-[24px] leading-none text-brick whitespace-nowrap">{item.price} €</span>
        </div>
        {item.desc && <p className="mt-1 max-w-[36em] text-[14px] md:text-[15px] leading-relaxed text-muted">{item.desc}</p>}
      </article>
    </li>
  );
}

function MenuSectionComponent({ section }: { section: MenuSectionType }) {
  return (
    <div className="min-w-0">
      <div className="pb-4 mb-6 border-b-2 border-ink flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif font-semibold text-[clamp(30px,3vw,38px)] leading-[1.05]">{section.title}</h3>
        {section.subtitle && <p className="font-serif italic text-[19px] text-muted">{section.subtitle}</p>}
      </div>
      <ul className="flex flex-col gap-5">
        {section.items.map((item) => (
          <DishItem key={`${section.title}-${item.name}`} item={item} />
        ))}
      </ul>
    </div>
  );
}

function PhotoRow({ photos }: { photos: { src: string; alt: string; caption: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
      {photos.map((p, i) => (
        <figure key={p.src} className="m-0 min-w-0">
          <div
            className={`relative w-full overflow-hidden ${
              i === 1 ? "h-[340px] md:h-[420px] rounded-t-full rounded-b-[20px]" : "h-[280px] md:h-[340px] rounded-[20px]"
            }`}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
          </div>
          <figcaption className="mt-2.5 text-[13px] text-muted">{p.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function MenuPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "La Carte", url: "https://www.eatnoya.com/menu" },
  ]);
  const menuSchema = getMenuSchema();

  const midiContent = (
    <>
      {/* Formule du midi */}
      <section aria-label="Formule du midi" className={`${wrap} pt-10 pb-20 md:pb-24`}>
        <div className="bg-zellige text-warm-white rounded-[28px] overflow-hidden flex flex-wrap items-stretch">
          <div className="flex-[1_1_440px] min-w-0 p-[clamp(32px,5vw,64px)] flex flex-col justify-center">
            <p className={`${kicker} text-[#BFD5CB] mb-4`}>Formule du midi · {RESTAURANT.hours.lunch.time}</p>
            <p className="font-serif font-medium text-[clamp(80px,10vw,136px)] leading-[0.88]">
              {MENU_MIDI.formule.price}
              <span className="text-[0.45em] align-top ml-1">€</span>
            </p>
            <p className="mt-5 max-w-[26em] font-serif italic text-[clamp(22px,2.4vw,28px)] leading-[1.3]">
              {MENU_MIDI.formule.desc}
            </p>
            <ol className="mt-8 pt-6 border-t border-warm-white/30 flex flex-wrap gap-x-8 gap-y-4">
              {["Entrée", "Pita", "Boisson"].map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 rounded-full border border-warm-white/50 flex items-center justify-center font-serif text-[18px]"
                  >
                    {i + 1}
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[0.16em]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex-[1_1_320px] min-w-0 relative min-h-[300px]">
            <Image
              src="/images/galerie/IMG_9356.jpg"
              alt="Assiette composée du midi : falafels, houmous, légumes rôtis"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Carte du midi */}
      <section aria-labelledby="midi-title" className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-4 mb-14">
            <div>
              <p className={`${kicker} text-brick mb-3.5`}>Le midi · {RESTAURANT.hours.lunch.days.toLowerCase()}</p>
              <h2 id="midi-title" className={h2}>
                Carte du Midi
              </h2>
            </div>
            <p className="max-w-[26em] text-muted">Sur place ou à emporter. Servi vite et bien.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[clamp(40px,6vw,96px)] gap-y-16">
            {MENU_MIDI.sections.map((section) => (
              <MenuSectionComponent key={section.title} section={section} />
            ))}
          </div>
          <p className="mt-16 text-center font-serif italic text-[20px] text-muted">
            Tous nos plats sont préparés maison avec des produits frais de saison.
          </p>
        </div>
      </section>

      <section aria-label="Plats du midi en images" className={`${wrap} py-20 md:py-24`}>
        <PhotoRow photos={MIDI_PHOTOS} />
      </section>
    </>
  );

  const soirContent = (
    <>
      {/* Bandeau dîner */}
      <section aria-label="Le dîner" className={`${wrap} pt-10 pb-20 md:pb-24`}>
        <div className="bg-ink text-warm-white rounded-[28px] overflow-hidden flex flex-wrap items-stretch">
          <div className="flex-[1_1_440px] min-w-0 p-[clamp(32px,5vw,64px)] flex flex-col justify-center">
            <p className={`${kicker} text-terracotta mb-4`}>Dîner · Paris 9e · {RESTAURANT.hours.dinner.time}</p>
            <p className="font-serif font-medium text-[clamp(48px,6vw,84px)] leading-[0.98]">
              Carte du <em className="italic text-terracotta">Soir</em>
            </p>
            <p className="mt-5 max-w-[26em] font-serif italic text-[clamp(22px,2.4vw,28px)] leading-[1.3] text-[#D9CBBB]">
              Tout est fait maison · Produits frais &amp; de saison
            </p>
            <div className="mt-8 pt-6 border-t border-warm-white/20 flex items-baseline gap-3.5 max-w-[30em]">
              <span className="font-serif text-[24px] md:text-[26px]">{MENU_SOIR.salatim.offer}</span>
              <Leader light />
              <span className="font-serif text-[26px] md:text-[30px] text-terracotta whitespace-nowrap">{MENU_SOIR.salatim.price} €</span>
            </div>
          </div>
          <div className="flex-[1_1_320px] min-w-0 relative min-h-[300px]">
            <Image
              src="/images/galerie/IMG_9119.jpg"
              alt="Une main trempe la pita dans la shakshuka, mur de zellige en fond"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[center_60%]"
            />
          </div>
        </div>
      </section>

      {/* Carte du soir */}
      <section aria-labelledby="soir-title" className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-4 mb-14">
            <div>
              <p className={`${kicker} text-brick mb-3.5`}>Le soir · {RESTAURANT.hours.dinner.days.toLowerCase()}</p>
              <h2 id="soir-title" className={h2}>
                Carte du Soir
              </h2>
            </div>
            <p className="max-w-[26em] text-muted">Des salatim pour commencer, des pièces à partager. On prend son temps.</p>
          </div>

          <div className="mb-16 bg-paper border border-line rounded-3xl p-[clamp(28px,4vw,44px)] flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
            <div className="flex-[1_1_420px] min-w-0">
              <p className={`${kicker} text-brick mb-2.5`}>Avant un spectacle ?</p>
              <p className="text-[16px] leading-relaxed">
                On vous sert en moins d&apos;une heure. Prévenez-nous à la réservation. Mogador, Folies Bergère, Olympia, Théâtre de Paris, Casino de Paris à 5–10 minutes à pied.
              </p>
            </div>
            <ReserveButton source="menu" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
              Réserver une table
            </ReserveButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[clamp(40px,6vw,96px)] gap-y-16">
            {MENU_SOIR.sections.map((section) => (
              <MenuSectionComponent key={`soir-${section.title}`} section={section} />
            ))}
          </div>
          <p className="mt-16 text-center font-serif italic text-[20px] text-muted">
            Produits frais &amp; de saison · Merci de nous informer de toute allergie.
          </p>
        </div>
      </section>

      <section aria-label="Plats du soir en images" className={`${wrap} py-20 md:py-24`}>
        <PhotoRow photos={SOIR_PHOTOS} />
      </section>
    </>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      {/* En-tête */}
      <section className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-brick">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink" aria-current="page">La Carte</span>
        </nav>
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Noya Châteaudun · Paris 9ᵉ</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              La <em className="italic text-brick">Carte</em>
            </h1>
            <p className="mt-7 max-w-[31em] text-[18px] leading-[1.65] text-muted">
              Tout est fait maison, chaque jour. Voici notre carte.
            </p>
            <ul aria-label="Engagements" className="mt-7 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <li key={t} className="px-3.5 py-1.5 rounded-full border border-line bg-paper text-[12px] font-bold uppercase tracking-[0.12em] text-zellige">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <ReserveButton source="menu" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
                Réserver une table
              </ReserveButton>
              <a href={RESTAURANT.links.emporter} target="_blank" rel="noopener noreferrer" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
                Commander à emporter
              </a>
            </div>
            <div className="mt-11 pt-6 border-t border-line flex flex-wrap gap-x-7 gap-y-3 text-[14px] text-muted">
              <span><strong className="text-ink">5/5</strong> sur Google · 140 avis</span>
              <span><strong className="text-ink">9,6/10</strong> sur TheFork</span>
            </div>
          </div>
          <figure className="flex-[1_1_380px] min-w-0 max-w-[520px] relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/houmous bilameh.jpg"
                alt="Houmous Bilameh au bœuf effiloché"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute left-5 bottom-5 px-4 py-2.5 rounded-full bg-paper/95 text-[13px] font-medium">
              Houmous Bilameh · la signature
            </figcaption>
          </figure>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* Onglets + les deux cartes (rendues côté serveur pour le SEO) */}
      <MenuTabs midiContent={midiContent} soirContent={soirContent} />

      <ReservationCTA source="menu" />
    </>
  );
}
