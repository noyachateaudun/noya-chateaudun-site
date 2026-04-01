export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le délai minimum pour commander ?",
    answer:
      "Nous recommandons de passer commande au minimum 7 jours avant votre événement pour garantir la disponibilité. Pour les événements de plus de 50 personnes ou les formules Sur Mesure, prévoyez 2 à 3 semaines. En cas d'urgence, contactez-nous directement par téléphone — nous ferons notre possible pour vous accommoder.",
  },
  {
    question: "Livrez-vous partout à Paris et en Île-de-France ?",
    answer:
      "Oui, nous livrons dans tout Paris et en proche banlieue (Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne). Pour les événements en grande couronne ou hors Île-de-France, contactez-nous pour étudier la faisabilité. Les frais de livraison dépendent de la distance et sont inclus dans le devis.",
  },
  {
    question: "Proposez-vous des options vegan et sans gluten ?",
    answer:
      "Absolument. La cuisine levantine est naturellement riche en options végétales et sans gluten. Le houmous, le baba ghanoush, les falafels, le taboulé, les légumes grillés — une grande partie de notre carte est vegan par tradition. Pour le sans gluten, nous remplaçons les pitas par des crudités ou des galettes adaptées. Précisez vos contraintes dans votre demande de devis, nous adapterons le menu.",
  },
  {
    question: "Peut-on personnaliser le menu ?",
    answer:
      "C'est même notre spécialité. La formule Sur Mesure vous permet de composer votre menu à la carte, en choisissant parmi tous nos plats. Vous pouvez aussi partir d'une formule existante (Mezze ou Festin) et l'adapter à vos goûts. Nous vous accompagnons dans la composition pour garantir un buffet équilibré et gourmand.",
  },
  {
    question: "Le service sur place est-il inclus ?",
    answer:
      "Le service sur place (mise en place, service, débarrassage) est disponible en option pour les formules Festin et Sur Mesure. Il est particulièrement recommandé pour les événements de plus de 40 personnes. Le tarif dépend du nombre d'invités et de la durée de l'événement — il est détaillé dans le devis.",
  },
  {
    question: "Quel est le minimum de personnes ?",
    answer:
      "Le minimum est de 15 personnes pour la formule Mezze, 20 personnes pour la formule Festin, et 30 personnes pour la formule Sur Mesure. En dessous de 15 personnes, nous vous recommandons notre service de click & collect ou de livraison à domicile via nos partenaires.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Après validation du devis, nous demandons un acompte de 30% pour confirmer la réservation. Le solde est à régler au plus tard 48h avant l'événement. Nous acceptons les virements bancaires et les chèques. Pour les entreprises, nous pouvons établir une facture avec règlement à 30 jours.",
  },
];
