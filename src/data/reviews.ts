export interface Review {
  author: string;
  text: string;
  platform: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Avis Google",
    text: "On s'est régalées du début à la fin. Mention spéciale pour le pain perdu, vraiment un des meilleurs que j'ai mangés. Les côtes d'agneau étaient excellentes.",
    platform: "Google",
  },
  {
    author: "Avis Google",
    text: "Un sans-faute pour toute l'équipe. Accueil souriant, shakshouka exceptionnelle, accord mets-vin intéressant avec du Crozes Hermitage.",
    platform: "Google",
  },
  {
    author: "Avis Google",
    text: "L'accueil est très chaleureux et attentionné. Les plats ont très bon goût, un vrai régal. La panna cotta à l'eau de rose est vraiment originale.",
    platform: "Google",
  },
  {
    author: "Avis Google",
    text: "De magnifiques assiettes pleines de couleurs, des saveurs remplies de soleil, une ambiance pleine de sourires et de gentillesse.",
    platform: "Google",
  },
  {
    author: "Google Review",
    text: "One of our favourite meals during our two weeks in Paris. If this restaurant was near our home, we would become regulars.",
    platform: "Google",
  },
];
