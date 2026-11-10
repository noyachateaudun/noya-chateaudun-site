import type { Metadata } from "next";
import TraiteurOccasion from "../TraiteurOccasion";

const TITLE = "Traiteur mariage levantin à Paris — cocktail et buffet";
const DESCRIPTION =
  "Un traiteur levantin pour votre mariage à Paris : cocktail dînatoire ou Buffet Festin, salatim et desserts maison, service sur place sur devis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: `${TITLE} | Noya`, description: DESCRIPTION, url: "https://www.eatnoya.com/traiteur/mariage" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Noya`, description: DESCRIPTION },
  alternates: { canonical: "https://www.eatnoya.com/traiteur/mariage" },
};

export default function TraiteurMariagePage() {
  return (
    <TraiteurOccasion
      slug="mariage"
      breadcrumb="Mariage"
      kicker="Traiteur mariage · Paris 9ᵉ"
      title="Un traiteur levantin pour votre mariage"
      intro="Pour le cocktail ou le repas, une cuisine du Levant faite maison, généreuse et colorée, à partager entre tous vos invités."
      image={{ src: "/images/galerie/IMG_9120.jpg", alt: "Table dressée devant le mur de zellige" }}
      formulesTitle="Pour le cocktail, pour le repas"
      formules={[
        { name: "Cocktail dînatoire", ideal: "Vin d’honneur, cocktail" },
        { name: "Buffet Festin", ideal: "Le repas du mariage" },
        { name: "Apéro", ideal: "Accueil des invités" },
      ]}
      reasonsTitle="Ce que vos invités vont retenir"
      reasons={[
        {
          title: "Une table qui change",
          text: "Salatim, pièces salées, mini pitas et plats chauds : une cuisine du Levant qui sort du buffet de mariage habituel.",
        },
        {
          title: "Chacun y trouve son compte",
          text: "Beaucoup de plats sont naturellement végétariens. Options vegan et sans gluten sur demande, pour tous vos invités.",
        },
        {
          title: "Un service à votre mesure",
          text: "Livraison dans Paris, ou service sur place sur devis, conseillé dès 40 personnes. Remises dès 800 € de commande.",
        },
      ]}
    />
  );
}
