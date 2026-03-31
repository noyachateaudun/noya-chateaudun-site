import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import ReservationCTA from "@/components/ReservationCTA";
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

const PHOTOS = [
  { id: 1, src: "/images/galerie/IMG_9116.jpg", cat: "plats", label: "Pita Of signature", alt: "Pita Of signature, poulet mariné et aubergine, restaurant Noya Paris" },
  { id: 2, src: "/images/galerie/IMG_9117.jpg", cat: "plats", label: "Assiette Falafel", alt: "Assiette falafel avec houmous et tehina, cuisine levantine Noya" },
  { id: 3, src: "/images/galerie/IMG_9118.jpg", cat: "plats", label: "Houmous Bilameh", alt: "Houmous Bilameh au poulet grillé, spécialité levantine Noya Paris 9e" },
  { id: 4, src: "/images/galerie/IMG_9119.jpg", cat: "plats", label: "The Shakshuka", alt: "Shakshuka aux poivrons et tomates, plat levantin fait maison chez Noya" },
  { id: 5, src: "/images/galerie/IMG_9120.jpg", cat: "plats", label: "Assortiment de plats", alt: "Assortiment de plats levantins, houmous, pita et salades fraîches, Noya Paris 9e" },
  { id: 6, src: "/images/galerie/IMG_9352.jpg", cat: "plats", label: "Salatim & mezze", alt: "Salatim et mezze levantins à partager, entrées du restaurant Noya Paris" },
  { id: 7, src: "/images/galerie/IMG_9353.jpg", cat: "plats", label: "Pita garnie", alt: "Pita généreusement garnie, street food levantine chez Noya Châteaudun" },
  { id: 8, src: "/images/galerie/IMG_9354.jpg", cat: "interieur", label: "Ambiance du restaurant", alt: "Ambiance chaleureuse du restaurant Noya, 8 rue de Châteaudun, Paris 9e" },
  { id: 9, src: "/images/galerie/IMG_9355.jpg", cat: "interieur", label: "Terrasse & décoration", alt: "Terrasse et décoration levantine du restaurant Noya Paris 9e" },
  { id: 10, src: "/images/galerie/IMG_9356.jpg", cat: "plats", label: "Assiette composée", alt: "Assiette composée levantine avec falafels et légumes grillés, Noya Paris" },
  { id: 11, src: "/images/galerie/IMG_9357.jpg", cat: "equipe", label: "En cuisine", alt: "L'équipe Noya en cuisine, préparation des plats levantins frais chaque jour" },
  { id: 12, src: "/images/galerie/IMG_9358.jpg", cat: "plats", label: "Dessert levantin", alt: "Dessert levantin fait maison, malabi ou knafeh, restaurant Noya Paris 9e" },
];

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

      {/* Hero */}
      <section className="pt-16 pb-12 px-5 text-center bg-gradient-to-b from-cream to-warm-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <Breadcrumbs items={[{ label: "Galerie" }]} />
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3 mt-8">
              Noya en images
            </p>
            <h1 className="font-serif text-[clamp(38px,7vw,60px)] text-burgundy font-normal">
              Galerie
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <Divider />
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe max-w-lg mx-auto leading-[1.85] font-light">
              L&apos;ambiance, les saveurs, les sourires. Découvrez l&apos;univers Noya à travers notre galerie de photos prises au cœur du 9e arrondissement de Paris.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery grid with filters */}
      <GalerieGrid photos={PHOTOS} />

      {/* Instagram CTA */}
      <section className="py-20 px-5 bg-cream text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <Reveal>
          <div className="relative z-10">
            <Divider />
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe italic mb-6">
              Retrouvez notre univers au quotidien
            </p>
            <a
              href={RESTAURANT.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 border-[1.5px] border-burgundy/30 text-burgundy text-[11px] font-normal tracking-[0.2em] uppercase hover:bg-burgundy hover:text-cream hover:border-burgundy hover:scale-[1.02] transition-all duration-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              @noya.chateaudun
            </a>
          </div>
        </Reveal>
      </section>

      <ReservationCTA />
    </>
  );
}
