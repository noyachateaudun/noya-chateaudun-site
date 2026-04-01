export interface Review {
  author: string;
  text: string;
  platform: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Thierry B.",
    text: "Un très bon endroit cosy, un accueil et un service parfait, un rapport qualité prix excellent et de très bons plats.",
    platform: "Google",
  },
  {
    author: "Alisson C.",
    text: "Un joli lieu dans un quartier super animé, un accueil d'une grande gentillesse, des plats faits maisons qui sont un vrai délice.",
    platform: "TheFork",
  },
  {
    author: "Avis Google",
    text: "L'accueil est très chaleureux et attentionné. Les plats ont très bon goût, un vrai régal. Le panna cotta à l'eau de rose est vraiment original.",
    platform: "Google",
  },
  {
    author: "Romain B.",
    text: "Très bon accueil. Nous avons beaucoup apprécié nos plats, proposés à un prix abordable.",
    platform: "TheFork",
  },
  {
    author: "Michel Z.",
    text: "Cadre agréable, nourriture très bonne et copieuse. Nous nous sommes régalés !",
    platform: "Google",
  },
  {
    author: "Avis Uber Eats",
    text: "Première commande, une très belle découverte !",
    platform: "Uber Eats",
  },
];
