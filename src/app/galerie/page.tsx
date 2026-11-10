import type { Metadata } from "next";
import Link from "next/link";
import ReservationCTA from "@/components/ReservationCTA";
import ReserveButton from "@/components/ReserveButton";
import { RESTAURANT } from "@/data/restaurant";
import { getBreadcrumbSchema } from "@/lib/schema";
import GalerieGrid from "./GalerieGrid";

export const metadata: Metadata = {
  title: "Galerie Photos — Noya Restaurant Levantin Paris 9e",
  description:
    "Découvrez l'univers Noya en images : nos plats levantins, l'ambiance chaleureuse du restaurant et notre équipe passionnée au 8 rue de Châteaudun, Paris 9e.",
  openGraph: {
    title: "Galerie Photos — Noya Restaurant Levantin Paris 9e",
    description:
      "Découvrez l'univers Noya en images : plats levantins, ambiance chaleureuse et équipe passionnée.",
    url: "https://www.eatnoya.com/galerie",
    images: [
      {
        url: "/images/galerie/IMG_9120.jpg",
        width: 1200,
        height: 630,
        alt: "Galerie photos du restaurant Noya, cuisine levantine, Paris 9e",
      },
    ],
  },
  alternates: { canonical: "https://www.eatnoya.com/galerie" },
};

// Les libellés ne sont pas affichés sur les photos (choix du restaurant) :
// ils servent de repère interne. Les textes alternatifs restent lus.
const PHOTOS = [
  { id: 1, src: "/images/galerie/IMG_9116.jpg", cat: "equipe", label: "En cuisine", alt: "En cuisine chez Noya, dressage d'une assiette" },
  { id: 2, src: "/images/galerie/IMG_9117.jpg", cat: "interieur", label: "La devanture", alt: "La devanture de Noya rue de Châteaudun, auvent terracotta" },
  { id: 3, src: "/images/galerie/IMG_9118.jpg", cat: "interieur", label: "Décoration de la salle", alt: "Étagère de la salle, vases verts et céramiques" },
  { id: 4, src: "/images/galerie/IMG_9119.jpg", cat: "plats", label: "Shakshuka", alt: "Une main trempe la pita dans la shakshuka, mur de zellige en fond" },
  { id: 5, src: "/images/galerie/IMG_9120.jpg", cat: "interieur", label: "La salle et le zellige", alt: "Plats servis devant le mur de zellige, suspensions allumées" },
  { id: 6, src: "/images/galerie/IMG_9352.jpg", cat: "plats", label: "Pita Pizel", alt: "Pita Pizel au poulet pané croustillant" },
  { id: 7, src: "/images/galerie/IMG_9353.jpg", cat: "plats", label: "Falafels", alt: "Falafels maison et sauce tahina" },
  { id: 8, src: "/images/galerie/IMG_9354.jpg", cat: "plats", label: "Houmous et challah", alt: "Houmous maison et challah grillée" },
  { id: 9, src: "/images/galerie/IMG_9355.jpg", cat: "plats", label: "Salade composée", alt: "Salade composée, pois chiches et œuf poché" },
  { id: 10, src: "/images/galerie/IMG_9356.jpg", cat: "plats", label: "Assiette composée", alt: "Assiette composée : falafels, aubergine rôtie, pommes de terre, houmous" },
  { id: 11, src: "/images/galerie/IMG_9357.jpg", cat: "plats", label: "Shakshuka Noya", alt: "Shakshuka Noya dans sa poêle en fonte" },
  { id: 12, src: "/images/galerie/IMG_9358.jpg", cat: "plats", label: "Houmous", alt: "Houmous maison, pois chiches et persil" },
];

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

export default function GaleriePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Galerie", url: "https://www.eatnoya.com/galerie" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* En-tête */}
      <section className={`${wrap} pt-6 md:pt-10 pb-16 md:pb-20`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-brick">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">Galerie</span>
        </nav>
        <div className="flex flex-wrap justify-between items-end gap-x-[clamp(32px,6vw,88px)] gap-y-8">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Noya en images</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              La salle, les plats,
              <br />
              <em className="italic text-brick">l’équipe.</em>
            </h1>
          </div>
          <div className="flex-[1_1_360px] min-w-0 max-w-[32em]">
            <p className="text-[18px] leading-[1.65] text-muted">
              Découvrez l’univers Noya à travers notre galerie de photos prises au cœur du 9ᵉ arrondissement de Paris.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ReserveButton source="galerie" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
                Réserver une table
              </ReserveButton>
              <Link href="/menu" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
                Voir la carte
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* Mosaïque avec filtres */}
      <GalerieGrid photos={PHOTOS} />

      {/* Instagram */}
      <section className="bg-cream">
        <div className={`${wrap} py-20 md:py-24 flex flex-wrap items-center justify-between gap-x-12 gap-y-8`}>
          <div className="flex-[1_1_420px] min-w-0">
            <p className={`${kicker} text-brick mb-3.5`}>Instagram</p>
            <h2 className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]">
              Retrouvez notre univers au quotidien.
            </h2>
          </div>
          <a
            href={RESTAURANT.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} gap-2.5 normal-case tracking-[0.04em] text-[15px] bg-ink text-warm-white hover:bg-brick`}
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @noya.chateaudun
          </a>
        </div>
      </section>

      <ReservationCTA source="galerie" />
    </>
  );
}
