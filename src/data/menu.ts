export interface MenuItem {
  name: string;
  desc: string | null;
  price: string;
  badge?: string;
  tag?: string;
}

export interface MenuSection {
  title: string;
  subtitle: string | null;
  items: MenuItem[];
}

export const MENU_MIDI: {
  formule: { price: string; desc: string };
  sections: MenuSection[];
} = {
  formule: {
    price: "16",
    desc: "Une entrée au choix + une pita au choix + une boisson au choix",
  },
  sections: [
    {
      title: "Entrées",
      subtitle: "À partager",
      items: [
        { name: "Houmous Classique", desc: "Pois chiches, tehina, filet d'huile d'olive & touche de citron frais", price: "5" },
        { name: "Babaganush", desc: "Caviar d'aubergines, tehina, grenade & herbes fraîches", price: "5,5" },
        { name: "Falafel Maison", desc: "Pois chiches, herbes fraîches, accompagnés de tehina", price: "6 / 10", tag: "x6 / x10" },
        { name: "Egg Salad", desc: "Œufs hachés, mayo maison, coriandre & oignons pickles", price: "6" },
        { name: "Noya Salad", desc: "Concombre, tomate, oignon rouge & herbes fraîches", price: "5" },
        { name: "Sweet Patata", desc: "Patate douce rôtie, graines de tournesol, zaatar et tehina", price: "6" },
        { name: "Labaneh", desc: "Crème fromagère, oignon doux, pickles, tomates cerises & grenade fraîche", price: "5" },
        { name: "Pomme de Terre Rôti", desc: "Pommes de terre dorées au four, parfumées au zaatar", price: "5,5" },
        { name: "Petria", desc: "Champignons confits, tehina parfumée à la truffe & œuf poché", price: "5,5" },
        { name: "Pita Zaatar", desc: "Pita toastée au zaatar accompagnée d'une sauce tehina", price: "6,5" },
      ],
    },
    {
      title: "Salades",
      subtitle: "Servies avec une pita",
      items: [
        { name: "Salade Quinoa", desc: "Un bol coloré de quinoa, légumes rôtis, grenade acidulée, herbes fraîches & œuf poché", price: "14" },
        { name: "Cocotte", desc: "Poulet mariné, pousses d'épinard, tomates, concombres, chou, grenade, graines de sésame, fenouil, pois chiches, œuf poché, croûtons au zaatar", price: "14,5" },
      ],
    },
    {
      title: "Pitas Signature",
      subtitle: null,
      items: [
        { name: "Pita Falafel", desc: "Falafels maison, houmous, salade Noya, chou, aubergine, tehina", price: "10,5", badge: "VG" },
        { name: "Pita Aubergine", desc: "Aubergine rôtie, houmous, pomme de terre, œuf, salade Noya, chou, tehina, herbes fraîches & sauce amba", price: "9" },
        { name: "Pita Of", desc: "Poulet mariné, aubergine, salade Noya, oignons pickles, tehina & cornichons", price: "13" },
        { name: "Pita Bilo", desc: "Champignons mijotés, egg salad crémeuse, aubergines grillées & touche de tehina à la truffe", price: "13,5", badge: "VG" },
        { name: "Pita Pitzel", desc: "Poulet pané croustillant mariné à la patate douce, aubergines, cornichons, oignons pickles, chou, sauce tartare", price: "13" },
        { name: "Pita Fishta", desc: "Boulettes de poisson dorées, patate douce, aubergine rôtie, oignons pickles, sauce tartare, fenouil au zaatar & filet de tehina", price: "13" },
      ],
    },
    {
      title: "Assiettes Composées",
      subtitle: "Servies avec une pita",
      items: [
        { name: "Assiette Vegan", desc: "Houmous, salade Noya, patate douce rôtie, aubergine, chou, shakshuka, tehina, avec pommes de terre ou pâte orzo au choix", price: "13,5", badge: "VG" },
        { name: "Assiette Falafel", desc: "Falafels, houmous, salade Noya, aubergine, chou, pommes de terre & tehina", price: "16" },
        { name: "Assiette Parguit", desc: "Poulet mariné aux épices, houmous, salade Noya, aubergine rôtie, chou, pâte orzo & sauce tehina", price: "16,5" },
        { name: "Assiette Schnitzel", desc: "Poulet pané, houmous, salade Noya, chou, aubergine avec pommes de terre ou pâte orzo au choix & tehina", price: "16,5" },
        { name: "Assiette Dag", desc: "Boulettes de poisson, houmous, salade Noya, aubergine rôtie, chou, champignons mijotés, pommes de terre ou pâtes orzo au choix, tehina", price: "16,5" },
      ],
    },
    {
      title: "Shakshuka",
      subtitle: null,
      items: [
        { name: "Shakshuka Veggie", desc: "Poivrons, tomates, oignons, épices & œuf", price: "13" },
        { name: "The Shakshuka", desc: "Poivrons, tomates, oignons & viande fondante", price: "16" },
        { name: "Noya Shakshuka", desc: "Poivrons, tomates, oignons, boulette de poisson, œuf poché", price: "15" },
      ],
    },
    {
      title: "Houmous",
      subtitle: null,
      items: [
        { name: "Le Houmous de Noya", desc: "Houmous maison aux pois chiches chauds, huile d'olive, tehina & herbes fraîches", price: "12" },
        { name: "Le Houmous Parguit", desc: "Houmous Noya, sublimé par du parguit mariné & grillé", price: "16" },
        { name: "Houmous Bilameh", desc: "Houmous maison avec notre tendre bœuf effiloché", price: "16,5" },
      ],
    },
    {
      title: "Desserts",
      subtitle: null,
      items: [
        { name: "Malabi", desc: "Panna cotta à l'eau de rose, pistaches concassées, sirop de sucre", price: "4" },
        { name: "Babka", desc: null, price: "4" },
        { name: "Crumble aux Pommes", desc: null, price: "4" },
      ],
    },
    {
      title: "Boissons",
      subtitle: null,
      items: [
        { name: "Coca Cola", desc: null, price: "2,5" },
        { name: "Coca Cola Zéro", desc: null, price: "2,5" },
        { name: "Evian", desc: null, price: "2,5" },
        { name: "Badoit", desc: null, price: "3" },
        { name: "Ice Tea", desc: null, price: "2,5" },
        { name: "Citronade Maison", desc: null, price: "3,5" },
      ],
    },
  ],
};

export const MENU_SOIR: {
  salatim: { offer: string; price: string; unitLabel: string };
  sections: MenuSection[];
} = {
  salatim: { offer: "3 salatim + pita", price: "23", unitLabel: "à l'unité" },
  sections: [
    {
      title: "Salatim",
      subtitle: "3 salatim + pita 23€ · à l'unité 8€",
      items: [
        { name: "Houmous", desc: "Pois chiches, tahina, citron, ail, huile d'olive", price: "8" },
        { name: "Baba Ganoush", desc: "Aubergine rôtie au feu, tahina, citron, persil", price: "8" },
        { name: "Tabouleh", desc: "Persil, tomates, concombre, chou rouge, fruits de saison", price: "8" },
        { name: "Pétria", desc: "Champignons confits, tahina à la truffe, œuf poché", price: "8" },
        { name: "Falafel x6", desc: "Pois chiches aux herbes, tahina citronnée, pickles", price: "8" },
        { name: "Pita à l'Ail", desc: "Beurre d'ail confit, herbes fraîches", price: "8" },
      ],
    },
    {
      title: "Entrées",
      subtitle: null,
      items: [
        { name: "Arayes", desc: "Pita farcie viande hachée aux épices, grillée, tahina citronnée", price: "15" },
        { name: "Fish Labaneh", desc: "Boulettes de poisson, labaneh, pickles, grenade, zaatar", price: "15" },
        { name: "Carpaccio de Bœuf", desc: "Tranché fin, tahina citronnée, zaatar, grenade, herbes", price: "17" },
        { name: "Shishlik x3", desc: "Brochettes de bœuf mariné aux épices, grillées à la braise, oignon rouge", price: "16" },
        { name: "Ceviche de Daurade", desc: "Marinade citron, oignon rouge, herbes, fruits de saison", price: "15" },
        { name: "Avocado Sumac", desc: "Sumac, citron, challah toasté, chips patate douce", price: "13" },
      ],
    },
    {
      title: "Nos Plats Signatures",
      subtitle: null,
      items: [
        { name: "Côte de Bœuf à Partager", desc: "Pièce noble à la braise, épices levantines, chimichurri — Pour deux, 2 accompagnements inclus", price: "76", badge: "POUR 2" },
        { name: "Côtes d'Agneau", desc: "Marinées aux épices du Moyen-Orient, grillées à cœur — Sauce citron et herbes, 1 accompagnement inclus", price: "28" },
      ],
    },
    {
      title: "Plats",
      subtitle: "1 accompagnement au choix inclus",
      items: [
        { name: "Durum au Poulet Grillé", desc: "Lafah, poulet mariné, épinards, oignons caramélisés, tahina", price: "21" },
        { name: "Chicken Shnitzel", desc: "Filet pané à la patate douce et épices douces", price: "20" },
        { name: "Shakshuka Noya", desc: "Œufs pochés, sauce tomate poivrons, viande mijotée aux épices", price: "18" },
        { name: "Filet de Daurade Sauté", desc: "Daurade saisie, légumes de saison, huile d'olive citronnée", price: "26" },
        { name: "Shnitzel Burger", desc: "Shnitzel croustillant, brioche, pickles, tahina et harissa", price: "21" },
        { name: "Le Jardin de Noya", desc: "Salatim chauds et froids, légumes rôtis, houmous, labaneh", price: "18", badge: "VG" },
      ],
    },
    {
      title: "Accompagnements",
      subtitle: null,
      items: [
        { name: "Pommes de Terre au Thym", desc: "Rôties à l'huile d'olive, fleur de sel", price: "6" },
        { name: "Frites au Zaatar", desc: "Croustillantes, sumac", price: "5" },
        { name: "Salade Épinards & Endives", desc: "Noix, sauce citron", price: "5" },
      ],
    },
    {
      title: "Desserts",
      subtitle: null,
      items: [
        { name: "Malabi", desc: "Fleur d'oranger, sirop de rose, noix de coco, pistache", price: "8" },
        { name: "Crumble aux Pommes", desc: "Pommes rôties, éclats de halva, glace vanille, miel", price: "8" },
        { name: "Babka au Chocolat", desc: "Brioche torsadée, ganache chocolat intense, caramel", price: "8" },
        { name: "Pain Perdu à la Rose", desc: "Challah dorée au beurre, crème à la rose, pistaches", price: "8" },
      ],
    },
  ],
};
