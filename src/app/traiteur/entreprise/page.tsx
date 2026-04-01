import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schema";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Traiteur Levantin pour Entreprises à Paris — Séminaires & Événements",
  description:
    "Traiteur d'entreprise levantin à Paris : buffets mezze pour séminaires, afterworks, team buildings et lancements. Format convivial, options vegan. Devis gratuit.",
  openGraph: {
    title: "Traiteur Levantin pour Entreprises à Paris | Noya",
    description:
      "Buffets mezze levantins pour vos événements corporate. Séminaires, afterworks, team buildings. Devis gratuit.",
    url: "https://www.eatnoya.com/traiteur/entreprise",
  },
  alternates: { canonical: "https://www.eatnoya.com/traiteur/entreprise" },
};

export default function TraiteurEntreprisePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
    { name: "Entreprise", url: "https://www.eatnoya.com/traiteur/entreprise" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-14 px-5 text-center bg-gradient-to-br from-[#4A5A3C] via-[#3E4E32] to-[#2E3D24] text-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4A853] mb-4">
            Traiteur Entreprise
          </p>
          <h1 className="font-serif text-[clamp(28px,5vw,46px)] font-normal leading-tight mb-4">
            Traiteur d&apos;entreprise levantin à Paris
          </h1>
          <p className="font-accent text-lg text-cream/70 italic max-w-xl mx-auto">
            Un format mezzé original et convivial pour tous vos événements corporate
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-3xl mx-auto px-5 py-4">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-[12px] text-dark/55">
          <Link href="/" className="hover:text-dark transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/traiteur" className="hover:text-dark transition-colors">Traiteur</Link>
          <span>/</span>
          <span className="text-dark/60">Entreprise</span>
        </nav>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="space-y-6 text-dark/70 leading-relaxed">
              <p>
                Vous organisez un <strong className="text-dark">séminaire</strong>, un <strong className="text-dark">afterwork</strong>, un <strong className="text-dark">pot de départ</strong> ou un <strong className="text-dark">lancement de produit</strong>&nbsp;? Le format mezzé levantin est le choix idéal pour surprendre vos collaborateurs et clients avec une cuisine qui sort de l&apos;ordinaire.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Pourquoi le mezzé levantin pour vos événements d&apos;entreprise&nbsp;?</h2>

              <p>
                Fini les plateaux de sandwichs triangles et les buffets fades. Le buffet levantin apporte de la <strong className="text-dark">couleur, de la fraîcheur et de l&apos;originalité</strong> à vos événements professionnels. Le format mezzé — de nombreux petits plats à partager — est naturellement adapté au format cocktail&nbsp;: vos invités circulent, picorent, découvrent de nouvelles saveurs.
              </p>

              <p>
                C&apos;est aussi un format <strong className="text-dark">inclusif par nature</strong>. La cuisine levantine propose naturellement des options vegan, végétariennes et sans gluten — sans avoir à commander des menus séparés. Le houmous, les falafels, le taboulé, les légumes grillés&nbsp;: une grande partie de la carte convient à tous les régimes alimentaires.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Types d&apos;événements que nous accompagnons</h2>

              <ul className="space-y-2">
                {[
                  "Séminaires et journées d'étude — buffet déjeuner ou dîner",
                  "Afterworks et cocktails — format mezzé debout, idéal pour le networking",
                  "Pots de départ et célébrations d'équipe — convivial et généreux",
                  "Lancements de produit et événements presse — un buffet spectaculaire et photogénique",
                  "Team buildings et journées off-site — formules adaptables à tous les lieux",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-burgundy/40 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl text-dark pt-4">Nos formules pour les entreprises</h2>

              <p>
                Nous proposons des <Link href="/traiteur" className="text-burgundy underline underline-offset-2">formules adaptées</Link> à chaque type d&apos;événement et de budget. De la formule Mezze (à partir de 15 personnes) pour un cocktail léger, à la formule Sur Mesure pour les grands événements avec service sur place et accord mets-vins — nous nous adaptons à vos besoins.
              </p>

              <p>
                Tous nos plats sont préparés le jour même avec des <strong className="text-dark">ingrédients frais</strong>, comme au restaurant. Nous livrons dans tout Paris et en Île-de-France, et nous pouvons assurer la mise en place et le service sur place pour les événements de plus de 40 personnes.
              </p>

              <p>
                Nous établissons des factures entreprise avec possibilité de règlement à 30 jours. <Link href="/menu" className="text-burgundy underline underline-offset-2">Découvrez notre carte</Link> pour vous inspirer.
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="mt-12 bg-gradient-to-br from-burgundy/5 to-cream rounded-2xl p-8 md:p-10 text-center">
              <h2 className="font-serif text-2xl text-dark mb-3">
                Un devis pour votre événement d&apos;entreprise&nbsp;?
              </h2>
              <p className="text-dark/50 mb-6 max-w-md mx-auto text-sm">
                Décrivez-nous votre projet, nous vous enverrons un devis personnalisé sous 24h.
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
            <span className="text-dark/50">Voir aussi&nbsp;:</span>
            <Link href="/traiteur/anniversaire" className="text-burgundy underline underline-offset-4 hover:text-burgundy/70 transition-colors">
              Traiteur anniversaire
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
