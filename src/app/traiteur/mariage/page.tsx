import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schema";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Traiteur Mariage Levantin Paris — Réception & Cocktail",
  description:
    "Traiteur mariage levantin à Paris : buffet mezze, cocktail, repas assis. Cuisine originale, options pour tous les régimes, accord vins. Devis gratuit.",
  openGraph: {
    title: "Traiteur Mariage Levantin Paris | Noya",
    description:
      "Un traiteur levantin pour votre mariage. Originalité, saveurs et convivialité. Devis gratuit.",
    url: "https://www.eatnoya.com/traiteur/mariage",
  },
  alternates: { canonical: "https://www.eatnoya.com/traiteur/mariage" },
};

export default function TraiteurMariagePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
    { name: "Mariage", url: "https://www.eatnoya.com/traiteur/mariage" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-14 px-5 text-center bg-gradient-to-br from-[#722F37] via-[#5C2240] to-[#3E1A3A] text-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4A853] mb-4">
            Traiteur Mariage
          </p>
          <h1 className="font-serif text-[clamp(28px,5vw,46px)] font-normal leading-tight mb-4">
            Un traiteur levantin pour votre mariage
          </h1>
          <p className="font-accent text-lg text-cream/70 italic max-w-xl mx-auto">
            Originalité, saveurs du Levant et convivialité pour le plus beau jour de votre vie
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
          <span className="text-dark/60">Mariage</span>
        </nav>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="space-y-6 text-dark/70 leading-relaxed">
              <p>
                Votre mariage mérite une cuisine à la hauteur de l&apos;événement&nbsp;: <strong className="text-dark">originale, généreuse et mémorable</strong>. Le traiteur levantin Noya vous propose une alternative élégante aux buffets classiques — une cuisine méditerranéenne authentique qui surprend, régale et rassemble.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Pourquoi choisir un traiteur levantin pour votre mariage&nbsp;?</h2>

              <p>
                <strong className="text-dark">L&apos;originalité.</strong> Vos invités se souviendront d&apos;un buffet de houmous crémeux, de falafels dorés, de pitas chaudes et de grillades aux épices du Levant. Ce n&apos;est pas le traiteur classique — c&apos;est un voyage culinaire.
              </p>

              <p>
                <strong className="text-dark">L&apos;inclusivité.</strong> Un mariage, c&apos;est réunir des gens aux régimes très différents. La cuisine levantine résout ce casse-tête naturellement&nbsp;: vegan, végétarien, sans gluten, halal — tout est couvert sans avoir à multiplier les menus spéciaux. Chacun se sert dans un buffet commun, sans se sentir à part.
              </p>

              <p>
                <strong className="text-dark">Le format.</strong> Cocktail debout avec mezzé et stations de pitas garnies minute, ou repas assis avec un enchaînement d&apos;entrées, plats et desserts levantins — nous nous adaptons à votre vision. Le format cocktail mezzé est particulièrement populaire pour les mariages&nbsp;: il libère les invités de la table et favorise la circulation et les rencontres.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">La formule Sur Mesure, pensée pour les mariages</h2>

              <p>
                Pour un mariage, nous recommandons la <strong className="text-dark">formule Sur Mesure</strong> (à partir de 30 personnes). Elle vous donne une liberté totale sur le menu&nbsp;:
              </p>

              <ul className="space-y-2">
                {[
                  "Carte entièrement personnalisée selon vos goûts et votre budget",
                  "Dégustation préalable pour valider le menu ensemble",
                  "Service sur place avec notre équipe (mise en place, service, débarrassage)",
                  "Accord mets & vins avec notre sélection de vins israéliens et libanais",
                  "Desserts orientaux : baklava aux pistaches, knafeh à la fleur d'oranger",
                  "Adaptation aux contraintes du lieu de réception",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-burgundy/40 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl text-dark pt-4">Accord mets & vins du Levant</h2>

              <p>
                Pour les mariages, nous proposons une <strong className="text-dark">carte des vins méditerranéens</strong> spéciale&nbsp;: des blancs frais du Golan pour accompagner les mezzé, des rosés libanais pour le cocktail, et des rouges de la vallée de la Bekaa pour les plats chauds. <Link href="/blog/vins-israeliens-libanais-mediterranee" className="text-burgundy underline underline-offset-2">En savoir plus sur nos vins</Link>.
              </p>

              <h2 className="font-serif text-2xl text-dark pt-4">Le déroulement</h2>

              <ol className="space-y-3 list-decimal list-inside">
                <li><strong className="text-dark">Premier contact</strong>&nbsp;: vous nous décrivez votre mariage (date, lieu, nombre d&apos;invités, vision).</li>
                <li><strong className="text-dark">Proposition de menu</strong>&nbsp;: nous composons un menu sur mesure avec devis détaillé.</li>
                <li><strong className="text-dark">Dégustation</strong>&nbsp;: rendez-vous au restaurant pour goûter et ajuster le menu.</li>
                <li><strong className="text-dark">Le jour J</strong>&nbsp;: notre équipe livre, installe et assure le service. Vous, vous profitez.</li>
              </ol>

              <p>
                Nous livrons dans tout Paris et en Île-de-France, et nous pouvons nous déplacer en dehors sur demande. <Link href="/menu" className="text-burgundy underline underline-offset-2">Découvrez notre carte</Link> pour un aperçu de nos spécialités.
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="mt-12 bg-gradient-to-br from-burgundy/5 to-cream rounded-2xl p-8 md:p-10 text-center">
              <h2 className="font-serif text-2xl text-dark mb-3">
                Votre mariage levantin commence ici
              </h2>
              <p className="text-dark/50 mb-6 max-w-md mx-auto text-sm">
                Racontez-nous votre projet de mariage et recevez une proposition personnalisée.
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
            <Link href="/traiteur/entreprise" className="text-burgundy underline underline-offset-4 hover:text-burgundy/70 transition-colors">
              Traiteur entreprise
            </Link>
            <span className="text-dark/20">|</span>
            <Link href="/traiteur/anniversaire" className="text-burgundy underline underline-offset-4 hover:text-burgundy/70 transition-colors">
              Traiteur anniversaire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
