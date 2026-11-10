// Offre traiteur Noya — source unique pour /traiteur et ses sous-pages
// (entreprise, anniversaire, mariage). Modifier un prix ici le met à jour partout.

export type Formule = {
  name: string;
  price: string;
  meta: string;
  items: string[];
  dark?: boolean;
};

export const FORMULES: Formule[] = [
  {
    name: "Apéro",
    price: "19 €",
    meta: "8 pièces · dès 15 personnes",
    items: ["3 salatim et pitas", "3 pièces salées", "1 mini pita", "1 mini dessert"],
  },
  {
    name: "Cocktail déjeunatoire",
    price: "28 €",
    meta: "12 pièces · dès 15 personnes",
    items: ["4 salatim et pitas", "4 pièces salées", "2 mini pitas", "2 mini desserts"],
  },
  {
    name: "Cocktail dînatoire",
    price: "36 €",
    meta: "16 pièces · dès 20 personnes",
    items: ["5 salatim et pitas", "6 pièces salées", "3 mini pitas", "2 mini desserts"],
  },
  {
    name: "Buffet Festin",
    price: "42 €",
    meta: "Buffet complet · dès 20 personnes",
    items: [
      "6 salatim et pitas",
      "2 plats chauds : shakshuka Noya, poulet mariné",
      "Pommes de terre au thym",
      "2 mini desserts",
    ],
    dark: true,
  },
];

export const REMISES = [
  { value: "−5 %", label: "dès 800 € de commande" },
  { value: "−10 %", label: "dès 1 500 € de commande" },
  { value: "Sur devis", label: "dès 3 000 € de commande", italic: true },
  { value: "−10 %", label: "pour les entreprises qui commandent au moins une fois par mois" },
];

export const REMISES_NOTE =
  "Montant calculé sur les formules et la carte, hors livraison, boissons et service. Remises non cumulables.";

export const OPTIONS = [
  { name: "Softs et citronnade maison", price: "4 € / pers." },
  { name: "Vaisselle éco et serviettes", price: "1,50 € / pers." },
  { name: "Livraison Paris", price: "25 €, offerte dès 500 €" },
  { name: "Service sur place", price: "Sur devis, conseillé dès 40 personnes" },
];

export const COMMANDE = [
  { value: "72 h", text: "à l’avance pour la carte, 7 jours pour les formules" },
  { value: "30 %", text: "d’acompte, le solde 48 h avant l’événement" },
  { value: "Vegan", text: "et sans gluten sur demande" },
];

export function getFormule(name: string): Formule {
  const f = FORMULES.find((x) => x.name === name);
  if (!f) throw new Error(`Formule inconnue : ${name}`);
  return f;
}
