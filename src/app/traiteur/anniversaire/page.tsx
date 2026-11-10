import type { Metadata } from "next";
import TraiteurOccasion from "../TraiteurOccasion";

const TITLE = "Traiteur anniversaire levantin à Paris — apéro, cocktail, buffet";
const DESCRIPTION =
  "Un traiteur levantin pour votre anniversaire à Paris : salatim, mini pitas, desserts maison. Apéro, cocktail dînatoire ou Buffet Festin dès 15 personnes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: `${TITLE} | Noya`, description: DESCRIPTION, url: "https://www.eatnoya.com/traiteur/anniversaire" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Noya`, description: DESCRIPTION },
  alternates: { canonical: "https://www.eatnoya.com/traiteur/anniversaire" },
};

export default function TraiteurAnniversairePage() {
  return (
    <TraiteurOccasion
      slug="anniversaire"
      breadcrumb="Anniversaire"
      kicker="Traiteur anniversaire · Paris 9ᵉ"
      title="Un traiteur levantin pour votre anniversaire"
      intro="Salatim, mini pitas et desserts faits maison à poser au centre de la table : tout le monde se sert, et vous profitez de votre fête."
      image={{ src: "/images/galerie/IMG_9119.jpg", alt: "Une main trempe la pita dans la shakshuka" }}
      formulesTitle="Trois façons de recevoir"
      formules={[
        { name: "Apéro", ideal: "Apéritif entre amis" },
        { name: "Cocktail dînatoire", ideal: "Une soirée qui remplace le dîner" },
        { name: "Buffet Festin", ideal: "Un vrai repas, avec plats chauds" },
      ]}
      reasonsTitle="Une table qu’on partage"
      reasons={[
        {
          title: "Coloré, généreux",
          text: "Houmous, baba ganoush, tabouleh, labaneh : les salatim font une table qui donne envie dès l’arrivée des invités.",
        },
        {
          title: "Pour tous les invités",
          text: "Beaucoup de plats sont naturellement végétariens. Options vegan et sans gluten sur demande.",
        },
        {
          title: "Le dessert qu’on attend",
          text: "Bouchées de pain perdu à la rose, mini malabi, mini babka chocolat caramel : les desserts du restaurant, en format à partager.",
        },
      ]}
    />
  );
}
