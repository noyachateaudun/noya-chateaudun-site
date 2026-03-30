export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  platform: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Sophie M.",
    rating: 10,
    text: "Le meilleur houmous que j'ai goûté à Paris ! Les pitas sont incroyablement fraîches et généreusement garnies. L'accueil est chaleureux, on se sent comme chez soi.",
    date: "2025-12",
    platform: "TheFork",
  },
  {
    author: "Thomas L.",
    rating: 10,
    text: "Une vraie pépite dans le 9e arrondissement. La shakshuka est un délice et l'assiette falafel est copieuse. On y retourne chaque semaine avec les collègues !",
    date: "2025-11",
    platform: "TheFork",
  },
  {
    author: "Camille D.",
    rating: 9,
    text: "Cuisine levantine authentique et raffinée. Le service est rapide et souriant. La formule du midi à 16€ est un excellent rapport qualité-prix pour le quartier.",
    date: "2025-10",
    platform: "TheFork",
  },
  {
    author: "Marc R.",
    rating: 10,
    text: "Le traiteur Noya a sublimé notre événement d'entreprise. Les mezze étaient spectaculaires et nos invités en parlent encore. Merci pour cette belle prestation !",
    date: "2025-09",
    platform: "Google",
  },
];
