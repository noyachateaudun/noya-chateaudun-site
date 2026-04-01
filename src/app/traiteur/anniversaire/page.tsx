import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schema";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Traiteur Anniversaire Levantin Paris — Buffet & Mezze",
  description:
    "Buffet levantin pour votre anniversaire à Paris : mezze, houmous, falafels, pitas & desserts orientaux. Convivial, coloré, pour tous les régimes. Devis gratuit.",
  openGraph: {
    title: "Traiteur Anniversaire Levantin Paris | Noya",
    description:
      "Un buffet mezze levantin pour votre anniversaire. Convivial, coloré, pour tous les goûts. Devis gratuit.",
    url: "https://www.eatnoya.com/traiteur/anniversaire",
  },
  alternates: { canonical: "https://www.eatnoya.com/traiteur/anniversaire" },
};

export default function TraiteurAnniversairePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
    { name: "Anniversaire", url: "https://www.eatnoya.com/traiteur/anniversaire" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-14 px-5 text-center bg-gradient-to-br from-[#C94C30] via-[#B5402A] to-[#8B3020] text-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cream/60 mb-4">
            Traiteur Anniversaire
          </p>
          <h1 className="font-serif text-[clamp(28px,5vw,46px)] font-normal leading-tight mb-4">
            Un buffet levantin pour votre anniversaire
          </h1>
          <p className="font-accent text-lg text-cream/70 italic max-w-xl mx-auto">
            Couleurs, saveurs et convivialité pour un anniversaire inoubliable
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-3xl mx-auto px-5 py-4">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-[12px] text-dark/40">
          <Link href="/" className="hover:text-dark transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/traiteur" className="hover:text-dark transition-colors">Traiteur</Link>
          <span>/</span>
          <span className="text-dark/60">Anniversaire</span>
        </nav>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="space-y-6 text-dark/70 leading-relaxed">
              <p>
                Vous préparez un <strong className="text-dark">anniversaire</strong>, une <strong className="text-dark">fête de famille</strong> ou une <strong className="text-dark">soirée privée</strong>&nbsp;? Offrez à vos invités une expérience culinaire qui change&nbsp;: un buffet levantin généreux, coloré et convivial, où chacun se sert et découvre de nouvelles saveurs.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Pourquoi un buffet mezzé pour un anniversaire&nbsp;?</h2>

              <p>
                Le format mezzé est <strong className="text-dark">fait pour les fêtes</strong>. Pas de service à l&apos;assiette compliqué, pas de file d&apos;attente devant un seul plat. On pose tout au centre de la table — houmous, falafels, pitas, salades, grillades — et tout le monde se sert. C&apos;est convivial, c&apos;est chaleureux, c&apos;est exactement l&apos;ambiance qu&apos;on veut pour un anniversaire.
              </p>

              <p>
                Le buffet levantin est aussi <strong className="text-dark">spectaculaire visuellement</strong>. Les couleurs naturelles des plats — le beige du houmous, le rose de la betterave, le vert du taboulé, le doré des falafels — créent une table magnifique sans effort de décoration. Vos photos d&apos;anniversaire seront canon.
              </p>

              <p>
                Et surtout, pas de casse-tête avec les régimes alimentaires. Votre cousin vegan, votre tante sans gluten, votre ami qui mange de tout — <strong className="text-dark">la cuisine levantine convient à tous</strong> naturellement, sans menus séparés.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Exemples de menus anniversaire</h2>

              <p>
                Pour un anniversaire de <strong className="text-dark">20 à 30 personnes</strong>, la formule Festin est idéale&nbsp;: 8 mezze variés, 2 plats chauds, pitas fraîches, desserts orientaux (baklava, knafeh) et boissons. De quoi régaler tous vos invités du début à la fin de la soirée.
              </p>

              <p>
                Pour un anniversaire plus <strong className="text-dark">intime (15-20 personnes)</strong>, la formule Mezze avec 6 plats à partager et des pitas offre un cocktail dînatoire parfait. Vous pouvez aussi ajouter un gâteau levantin en supplément.
              </p>

              <p>
                Pour les <strong className="text-dark">grandes fêtes (40+ personnes)</strong>, optez pour la formule Sur Mesure avec un menu entièrement personnalisé, le service sur place et pourquoi pas une sélection de <Link href="/blog/vins-israeliens-libanais-mediterranee" className="text-burgundy underline underline-offset-2">vins israéliens et libanais</Link> pour accompagner le repas.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Comment ça marche&nbsp;?</h2>

              <ol className="space-y-3 list-decimal list-inside">
                <li><strong className="text-dark">Demandez un devis</strong> en décrivant votre événement (date, nombre d&apos;invités, lieu, préférences).</li>
                <li><strong className="text-dark">Nous composons le menu</strong> ensemble, en fonction de vos goûts et de votre budget.</li>
                <li><strong className="text-dark">Le jour J</strong>, nous livrons tout frais et prêt à déguster. Service sur place en option.</li>
              </ol>

              <p>
                Tous nos plats sont préparés le matin même avec des ingrédients frais. Nous livrons dans tout Paris et en Île-de-France. <Link href="/menu" className="text-burgundy underline underline-offset-2">Consultez notre carte</Link> pour découvrir nos spécialités.
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="mt-12 bg-gradient-to-br from-burgundy/5 to-cream rounded-2xl p-8 md:p-10 text-center">
              <h2 className="font-serif text-2xl text-dark mb-3">
                Prêt à organiser votre anniversaire levantin&nbsp;?
              </h2>
              <p className="text-dark/50 mb-6 max-w-md mx-auto text-sm">
                Racontez-nous votre projet et recevez un devis personnalisé sous 24h.
              </p>
              <Link
                href="/traiteur#devis"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </Reveal>

          {/* Other pages */}
          <div className="mt-10 pt-8 border-t border-[#E5DFD5] flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-dark/30">Voir aussi&nbsp;:</span>
            <Link href="/traiteur/entreprise" className="text-burgundy underline underline-offset-4 hover:text-burgundy/70 transition-colors">
              Traiteur entreprise
            </Link>
            <span className="text-dark/20">|</span>
            <Link href="/traiteur/mariage" className="text-burgundy underline underline-offset-4 hover:text-burgundy/70 transition-colors">
              Traiteur mariage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
