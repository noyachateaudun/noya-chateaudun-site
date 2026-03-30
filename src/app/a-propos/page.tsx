import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Notre Histoire — Noya, Cuisine Levantine à Paris",
  description:
    "L'histoire de Noya : une cuisine inspirée des traditions du Levant, des produits frais et des recettes authentiques, au cœur du 9e arrondissement.",
  openGraph: {
    title: "Notre Histoire — Noya, Cuisine Levantine à Paris",
    description:
      "L'histoire de Noya : cuisine inspirée des traditions du Levant, produits frais, recettes authentiques.",
    url: "https://www.eatnoya.com/a-propos",
    images: [{ url: "/og/a-propos.jpg", width: 1200, height: 630, alt: "L'histoire de Noya, restaurant levantin Paris 9e" }],
  },
  alternates: { canonical: "https://www.eatnoya.com/a-propos" },
};

export default function AProposPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Notre Histoire", url: "https://www.eatnoya.com/a-propos" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-16 pb-12 px-5 text-center bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Notre Histoire" }]} />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3 mt-8">
            Qui sommes-nous
          </p>
          <h1 className="font-serif text-[clamp(38px,7vw,60px)] text-burgundy font-normal">
            Notre Histoire
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-accent text-[22px] text-dark leading-[1.85] text-center font-light mb-10">
            Noya, c&apos;est ce coin du Levant en plein cœur de Paris : entre élégance et chaleur, héritage et modernité.
          </p>
          <div className="text-sm text-taupe leading-[2] text-justify space-y-5">
            <p>
              Née d&apos;une passion pour la cuisine méditerranéenne et la convivialité levantine, Noya est un lieu où chaque plat raconte une histoire. Des falafels croustillants aux houmous onctueux, en passant par nos pitas généreusement garnies. Tout est préparé chaque jour, à la main, avec des produits frais sélectionnés avec soin.
            </p>
            <p>
              Chez Noya, on célèbre la convivialité levantine, celle qui rassemble autour d&apos;une table, qui fait voyager les papilles et réchauffer les cœurs. Notre cuisine puise dans les traditions du Moyen-Orient tout en s&apos;inscrivant dans la modernité parisienne. Chaque recette est un hommage aux marchés du bassin méditerranéen, aux épices du Levant et aux souvenirs de tables familiales.
            </p>
            <p>
              Situé au 8 rue de Châteaudun, dans le 9e arrondissement de Paris, entre Notre-Dame-de-Lorette et les Grands Boulevards, notre restaurant vous accueille dans un cadre chaleureux mêlant zellige artisanal, lumière naturelle et touches végétales. Un lieu pensé pour le partage et la découverte.
            </p>
            <p>
              Que vous veniez pour un déjeuner rapide entre collègues, un repas en famille ou un moment de partage entre amis, notre équipe vous accueille avec le sourire et la chaleur qui font l&apos;identité de Noya.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-dark font-normal text-center mb-8">
            Notre philosophie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-warm-white p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Fait maison</h3>
              <p className="text-sm text-taupe leading-relaxed">
                De l&apos;houmous au malabi, chaque plat est préparé sur place, chaque jour. Pas de raccourci, pas de surgelé. La fraîcheur est notre signature.
              </p>
            </div>
            <div className="bg-warm-white p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Produits frais</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Nous travaillons avec des producteurs locaux et sélectionnons des ingrédients de saison pour garantir la qualité et le goût authentique de chaque plat.
              </p>
            </div>
            <div className="bg-warm-white p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Pour tous</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Vegan, végétarien, sans gluten : notre carte propose des options pour tous les régimes alimentaires, sans compromis sur le goût.
              </p>
            </div>
            <div className="bg-warm-white p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Convivialité</h3>
              <p className="text-sm text-taupe leading-relaxed">
                La cuisine levantine, c&apos;est avant tout le partage. Nos assiettes sont pensées pour être au centre de la table, pour créer du lien et des souvenirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream p-8 text-center border border-cream-dark">
            <p className="font-accent text-xl text-burgundy italic mb-6 leading-relaxed">
              &ldquo;La culture levantine se raconte à travers ses saveurs.&rdquo;
            </p>
            <div className="flex justify-center gap-10 flex-wrap">
              {[
                { value: "100%", label: "Fait maison" },
                { value: "9.6/10", label: "TheFork" },
                { value: "5/5", label: "Google" },
                { value: "♥", label: "Avec amour" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl text-burgundy">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-taupe mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
