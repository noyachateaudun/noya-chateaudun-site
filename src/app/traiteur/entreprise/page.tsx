import type { Metadata } from "next";
import TraiteurOccasion from "../TraiteurOccasion";

const TITLE = "Traiteur d’entreprise levantin à Paris — réunions, séminaires, afterworks";
const DESCRIPTION =
  "Traiteur levantin pour entreprises à Paris : cocktail déjeunatoire, apéro, Buffet Festin de 19 à 42 € par personne. −10 % pour les commandes mensuelles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: `${TITLE} | Noya`, description: DESCRIPTION, url: "https://www.eatnoya.com/traiteur/entreprise" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Noya`, description: DESCRIPTION },
  alternates: { canonical: "https://www.eatnoya.com/traiteur/entreprise" },
};

export default function TraiteurEntreprisePage() {
  return (
    <TraiteurOccasion
      slug="entreprise"
      breadcrumb="Entreprise"
      kicker="Traiteur entreprise · Paris 9ᵉ"
      title="Traiteur d’entreprise levantin à Paris"
      intro="Réunions, séminaires, afterworks, pots de départ : notre cuisine du Levant, faite maison chaque jour, livrée au bureau en format à partager."
      image={{ src: "/images/galerie/IMG_9356.jpg", alt: "Assiette levantine à partager : falafels, houmous, légumes rôtis" }}
      formulesTitle="Une formule pour chaque moment de la vie du bureau"
      formules={[
        { name: "Cocktail déjeunatoire", ideal: "Réunion, déjeuner d’équipe" },
        { name: "Apéro", ideal: "Afterwork, pot de départ" },
        { name: "Buffet Festin", ideal: "Séminaire, journée d’équipe" },
      ]}
      reasonsTitle="Pourquoi les équipes nous recommandent"
      reasons={[
        {
          title: "Tout le monde mange",
          text: "La cuisine du Levant fait la part belle aux légumes, aux pois chiches et aux herbes. Options vegan et sans gluten sur demande, sans menus séparés à gérer.",
        },
        {
          title: "Ça se mange debout",
          text: "Salatim, pièces salées et mini pitas se picorent sans couverts ni service : idéal entre deux réunions ou pour un afterwork.",
        },
        {
          title: "Moins cher quand c’est régulier",
          text: "−10 % pour les entreprises qui commandent au moins une fois par mois, et des remises dès 800 € de commande.",
        },
      ]}
      highlightRemises
    />
  );
}
