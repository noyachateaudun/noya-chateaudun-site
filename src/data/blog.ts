export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  keyword: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  imageAlt: string;
  content: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "cuisine-levantine-origines-plats-traditions",
    title: "Qu'est-ce que la cuisine levantine ? Origines, plats emblématiques et traditions",
    metaTitle: "Cuisine levantine : origines, plats emblématiques et traditions",
    metaDescription: "Découvrez la cuisine levantine, ses origines, ses plats emblématiques (houmous, falafel, shakshuka) et ses traditions culinaires méditerranéennes.",
    excerpt: "Des rives de la Méditerranée orientale à nos assiettes : plongée dans la cuisine levantine, ses origines millénaires et ses plats emblématiques.",
    category: "Culture culinaire",
    keyword: "cuisine levantine",
    keywords: ["cuisine levantine", "cuisine du Levant", "plats levantins", "gastronomie méditerranéenne"],
    publishedAt: "2026-03-31",
    updatedAt: "2026-03-31",
    imageAlt: "Mezzé levantin coloré avec houmous, falafel, pita et légumes frais",
    content: `## La cuisine levantine, une identité culinaire millénaire

La cuisine levantine désigne l'ensemble des traditions gastronomiques nées sur les rivages orientaux de la Méditerranée. On parle du Liban, de la Syrie, de la Jordanie, d'Israël et des territoires voisins — une mosaïque de cultures dont les frontières politiques n'ont jamais empêché les saveurs de circuler. Le Levant, c'est littéralement « là où le soleil se lève », et c'est aussi là que sont nées certaines des recettes les plus anciennes du monde.

Quand on parle de **cuisine du Levant**, on évoque un art de vivre autant qu'un art culinaire : celui du partage, du temps long, des repas qui s'étirent autour de dizaines de petits plats posés au centre de la table.

## Des influences croisées, de l'Empire Ottoman aux routes de la soie

La géographie du Levant en a fait un carrefour naturel. Les routes commerciales qui reliaient l'Asie, l'Afrique et l'Europe passaient par ces terres, apportant épices, techniques et ingrédients nouveaux. L'Empire Ottoman, qui a dominé la région pendant des siècles, a unifié certaines pratiques culinaires tout en laissant chaque terroir exprimer sa singularité.

Les Perses ont apporté le safran et les fruits secs. Les Arabes ont perfectionné la pâtisserie et les sirops parfumés. Les échanges avec le Maghreb ont enrichi le répertoire d'épices et de ragoûts. Résultat : une cuisine incroyablement riche qui ne se résume à aucun pays en particulier, mais qui appartient à toute une région.

## Les ingrédients phares de la cuisine levantine

Ce qui distingue immédiatement la **gastronomie méditerranéenne** du Levant, ce sont ses ingrédients de base — simples, végétaux, gorgés de soleil :

- **L'huile d'olive** : omniprésente, elle est la matière grasse principale. On l'utilise pour cuire, assaisonner, et même en pâtisserie.
- **Les pois chiches** : la base du houmous et des falafels. Riches en protéines, ils sont le pilier de l'alimentation levantine.
- **Le tehina (crème de sésame)** : indissociable du houmous, mais aussi utilisée en sauce, en dessert, dans les salades.
- **Le zaatar** : mélange d'origan, de thym, de sésame et de sumac. On le retrouve sur les manouché (galettes du petit-déjeuner) et dans les marinades.
- **Le sumac** : cette poudre rouge aux notes acidulées remplace souvent le citron dans les assaisonnements. Son goût fruité est immédiatement reconnaissable.
- **Le citron** : frais, confit ou en jus, il apporte la fraîcheur caractéristique des plats levantins.
- **Les herbes fraîches** : persil plat, menthe, coriandre — elles sont utilisées en quantités généreuses, jamais comme simple garniture.

## Les plats emblématiques

Les **plats levantins** les plus connus ont largement dépassé les frontières du Levant pour conquérir le monde entier :

### Houmous
Crème de pois chiches au tehina, citron et ail. Chaque famille, chaque restaurant a sa recette secrète. C'est le plat national officieux de toute la région. [Découvrez notre recette du houmous authentique](/blog/recette-houmous-maison-authentique).

### Falafel
Boulettes de pois chiches (ou de fèves selon les régions), frites à la perfection. Croustillantes à l'extérieur, vertes et moelleuses à l'intérieur. [En savoir plus sur le falafel, ses origines et où en manger à Paris](/blog/falafel-origines-recette-paris).

### Shakshuka
Œufs pochés dans une sauce tomate épicée aux poivrons et oignons. Un plat réconfortant par excellence. [Découvrez l'histoire de la shakshuka et sa recette](/blog/shakshuka-histoire-recette).

### Baba ghanoush
Purée d'aubergine grillée au tehina, avec des notes fumées irrésistibles. Moins connu que le houmous mais tout aussi addictif.

### Taboulé levantin
Rien à voir avec le taboulé de semoule français : le vrai taboulé est une salade de persil, tomate, oignon et menthe, avec juste un soupçon de boulgour. C'est le persil la star, pas le grain.

### Pita
Le pain rond et gonflé qui accompagne tout. Fraîchement sorti du four, il se transforme en poche pour accueillir falafels, viandes et salades.

## Pourquoi la cuisine levantine est-elle si tendance ?

Si les **plats levantins** connaissent un succès grandissant en France et en Europe, ce n'est pas un hasard. Cette cuisine coche toutes les cases des attentes alimentaires contemporaines :

**Naturellement végétarienne.** Une grande partie du répertoire levantin est à base de légumes, légumineuses et céréales. Pas besoin d'adapter : les options végétales sont au cœur de la tradition.

**Healthy sans effort.** Huile d'olive, pois chiches, légumes grillés, herbes fraîches — les ingrédients de base sont naturellement bons pour la santé, riches en fibres et en nutriments.

**Conviviale par nature.** Le format mezzé — de nombreux petits plats à partager — est l'antithèse du repas individuel. C'est une cuisine qui rassemble, qui encourage la conversation, qui prend son temps.

**Accessible et gourmande.** Pas de techniques intimidantes, pas d'ingrédients introuvables. C'est une cuisine généreuse, sincère, qui ne cherche pas à impressionner mais à nourrir.

## La cuisine levantine à Paris, chez Noya

À Paris, [Noya](/menu) propose une carte levantine authentique au 8 rue de Châteaudun, dans le 9e arrondissement. Houmous crémeux, falafels croustillants, pitas garnies, shaukshukas fumantes — chaque plat est préparé avec des ingrédients frais, dans le respect des recettes traditionnelles. Une façon de voyager au Levant sans quitter la capitale. [Découvrez les meilleurs plats à commander dans un restaurant levantin](/blog/meilleurs-plats-restaurant-levantin).`,
  },
  {
    slug: "recette-houmous-maison-authentique",
    title: "Houmous maison : la recette authentique et les secrets d'un houmous crémeux",
    metaTitle: "Recette houmous maison authentique : secrets d'un houmous crémeux",
    metaDescription: "La vraie recette du houmous maison crémeux : pois chiches, tehina, citron. Tous les secrets pour un houmous authentique ultra onctueux.",
    excerpt: "Pois chiches, tehina, citron et patience : tous les secrets pour réussir un houmous maison aussi crémeux qu'au Levant.",
    category: "Recettes",
    keyword: "recette houmous maison",
    keywords: ["recette houmous maison", "houmous crémeux", "houmous authentique", "houmous pois chiches"],
    publishedAt: "2026-03-31",
    updatedAt: "2026-03-31",
    imageAlt: "Bol de houmous crémeux garni d'huile d'olive, pois chiches et paprika",
    content: `## Le houmous, bien plus qu'une simple purée de pois chiches

Le houmous est probablement le plat levantin le plus connu au monde — et aussi le plus mal compris. En France, on trouve des versions industrielles pâles et granuleuses qui n'ont rien à voir avec un **houmous authentique**. Le vrai houmous, c'est une crème soyeuse, intensément parfumée de tehina et de citron, dans laquelle on plonge un morceau de pita chaude avec un bonheur simple et absolu.

La recette est minimaliste — pois chiches, tehina, citron, ail, sel — mais c'est justement cette simplicité qui rend chaque détail crucial. Un **houmous crémeux** parfait demande de la méthode.

## La recette authentique du houmous

### Ingrédients (pour 4-6 personnes)

- 250 g de pois chiches secs (ou 500 g cuits)
- 1 cuillère à café de bicarbonate de soude
- 150 g de tehina (crème de sésame) de qualité
- Le jus de 2 citrons (environ 80 ml)
- 1 petite gousse d'ail écrasée
- Sel fin
- Eau glacée de cuisson
- Pour servir : huile d'olive, paprika, pois chiches entiers, persil

### Préparation

**La veille :** Faites tremper les pois chiches dans un grand volume d'eau froide avec le bicarbonate. Minimum 12 heures — c'est non négociable pour un résultat onctueux.

**La cuisson :** Égouttez, rincez, puis couvrez d'eau fraîche. Portez à ébullition et cuisez à feu doux pendant 45 minutes à 1 heure, jusqu'à ce que les **pois chiches** s'écrasent sans résistance entre vos doigts. Ils doivent être très tendres, voire légèrement en sur-cuisson. Gardez l'eau de cuisson.

**L'assemblage — et c'est là que tout se joue :**

1. Mixez la tehina avec le jus de citron et l'ail pendant 2 bonnes minutes. Le mélange va d'abord épaissir puis devenir une crème blanche et aérée. C'est la base aromatique de votre houmous.
2. Ajoutez les pois chiches égouttés (encore chauds si possible) et mixez en ajoutant progressivement de l'eau de cuisson glacée, cuillère par cuillère.
3. Mixez longtemps — 4 à 5 minutes minimum au blender puissant. C'est la durée de mixage qui fait la texture.
4. Goûtez, ajustez le sel et le citron. Le houmous doit être légèrement plus assaisonné que ce que vous souhaitez, car les saveurs s'atténuent en refroidissant.

## Les 5 secrets d'un houmous ultra crémeux

**1. Épluchez les pois chiches.** Oui, c'est fastidieux. Mais retirer la fine peau qui entoure chaque pois chiche fait une différence spectaculaire sur la texture. Pour accélérer, frottez-les entre vos mains dans l'eau : les peaux flottent en surface.

**2. Mixez la tehina et le citron en premier.** C'est la technique des maîtres houmousiers : le tehina émulsionné avec le citron crée une base onctueuse qui enrobe les pois chiches au lieu de les alourdir.

**3. Utilisez de l'eau de cuisson glacée.** Mettez une partie de l'eau de cuisson au réfrigérateur ou ajoutez des glaçons. Le contraste de température aide à obtenir une texture plus lisse et plus aérée.

**4. Ne lésinez pas sur le mixage.** Un bon houmous se mixe pendant 4-5 minutes au minimum. Au blender puissant, c'est l'idéal. Au robot, comptez plutôt 6-7 minutes.

**5. Investissez dans un bon tehina.** Le tehina représente un tiers du houmous — sa qualité est déterminante. Choisissez un tehina 100% sésame, à la texture fluide et au goût légèrement amer et noisété.

## Les variantes gourmandes

Le houmous classique est parfait tel quel, mais les variantes sont infinies :

- **Houmous à la betterave** : mixez une betterave cuite avec les pois chiches pour une couleur fuchsia spectaculaire et une douceur sucrée.
- **Houmous aux poivrons grillés** : ajoutez 2 poivrons rouges grillés et pelés pour une version fumée et sucrée.
- **Houmous aux champignons truffés** : une poêlée de champignons sautés avec une touche d'huile de truffe sur le dessus. C'est la version que l'on retrouve chez Noya, et elle est addictive.
- **Houmous msabaha** : une version plus rustique avec des pois chiches entiers mélangés à la crème, du cumin et un généreux filet d'huile d'olive.

## Les erreurs à éviter absolument

- **Utiliser des pois chiches en boîte sans les recuire.** Ils sont trop fermes pour un résultat crémeux. Si vous les utilisez, faites-les recuire 20 minutes avec du bicarbonate.
- **Oublier le bicarbonate.** C'est lui qui ramollit les pois chiches pendant le trempage et la cuisson.
- **Mettre trop d'ail.** Une demi-gousse à une gousse maximum. L'ail ne doit pas dominer.
- **Servir le houmous glacé.** Le houmous est meilleur à température ambiante. Sortez-le du réfrigérateur 30 minutes avant de servir.

## Pas envie de le faire vous-même ?

On vous comprend — un bon houmous demande du temps et de la patience. Venez goûter notre houmous fait maison chez [Noya](/menu), préparé chaque matin avec des pois chiches frais et un tehina premium. Classique, aux champignons truffés, ou en version du jour — il y a toujours une bonne raison de revenir. [Découvrez toute notre carte levantine](/menu).`,
  },
  {
    slug: "meilleurs-plats-restaurant-levantin",
    title: "Les 10 meilleurs plats à découvrir dans un restaurant levantin",
    metaTitle: "Les 10 meilleurs plats d'un restaurant levantin à découvrir",
    metaDescription: "Houmous, falafel, shakshuka, pita garnie... Découvrez les 10 plats incontournables à commander dans un restaurant levantin.",
    excerpt: "De l'incontournable houmous au surprenant sabich : les 10 plats à ne pas manquer quand on pousse la porte d'un restaurant levantin.",
    category: "Guide",
    keyword: "restaurant levantin",
    keywords: ["restaurant levantin", "plats levantins", "que manger restaurant levantin", "spécialités levantines"],
    publishedAt: "2026-03-31",
    updatedAt: "2026-03-31",
    imageAlt: "Table de restaurant levantin avec houmous, falafel, pita et plats à partager",
    content: `## Que commander dans un restaurant levantin ?

Pousser la porte d'un **restaurant levantin** pour la première fois, c'est un peu comme découvrir un nouveau vocabulaire culinaire. Les noms sont exotiques, la carte est longue, et on ne sait pas toujours par où commencer. Houmous, bien sûr — mais après ? Shakshuka ou sabich ? Taboulé ou fattoush ?

Voici les 10 **plats levantins** incontournables à commander, que vous soyez néophyte ou habitué.

## 1. Le Houmous — la base absolue

Impossible de passer à côté. Le houmous, c'est la porte d'entrée de la cuisine levantine : une crème de pois chiches au tehina, citron et ail, servie avec un filet d'huile d'olive et de la pita chaude. Dans un bon restaurant, le houmous est préparé chaque matin et sa texture est soyeuse, presque aérienne. [Apprenez à le préparer chez vous avec notre recette](/blog/recette-houmous-maison-authentique).

Chez [Noya](/menu), le houmous est disponible en version classique et en variantes créatives — dont un houmous aux champignons truffés qui mérite le détour.

## 2. Le Falafel — le roi du street food

Des boulettes de pois chiches crus (jamais cuits avant la friture !), mixés avec du persil, de la coriandre, de l'oignon et des épices, puis frites jusqu'à obtenir une croûte dorée et croustillante. À l'intérieur, c'est vert et moelleux. Le falafel se mange en pita, en assiette, ou simplement à la main en sortant de la friteuse. [Tout savoir sur le falafel et ses origines](/blog/falafel-origines-recette-paris).

## 3. La Shakshuka — le plat réconfort

Des œufs pochés dans une sauce tomate mijotée avec des poivrons, des oignons et un mélange d'épices. Servie brûlante dans la poêle avec du pain pour saucer. C'est le plat du petit-déjeuner levantin, mais aussi du déjeuner, du dîner, et de tous les moments où l'on a besoin de réconfort. [Découvrez l'histoire fascinante de la shakshuka](/blog/shakshuka-histoire-recette).

## 4. La Pita garnie — le sandwich parfait

Oubliez tout ce que vous savez sur les sandwichs. La pita garnie levantine, c'est un pain rond et gonflé, ouvert en poche, dans lequel on empile poulet mariné, aubergine grillée, salade, pickles, tehina et sauce piquante. C'est un repas complet, équilibré, explosif en saveurs. La Pita Of de Noya, avec son poulet mariné et ses oignons pickles, est un classique.

## 5. Le Baba ghanoush — la douceur fumée

Cousin du houmous mais à base d'aubergine grillée au feu. La chair fondante est mélangée avec du tehina, du citron et de l'ail. Le résultat est une crème aux notes fumées irrésistibles. Plus léger que le houmous, le baba ghanoush est le mezzé des connaisseurs.

## 6. Le Taboulé levantin — le vrai, le seul

Rien à voir avec le taboulé de semoule qu'on trouve en supermarché. Le vrai taboulé, c'est une montagne de persil finement ciselé, avec de la tomate, de l'oignon, de la menthe, un soupçon de boulgour, le tout assaisonné de citron et d'huile d'olive. Frais, herbacé, vivifiant.

## 7. Le Chou-fleur rôti — la révélation végétale

Le chou-fleur rôti entier est devenu un classique des **spécialités levantines** modernes. Rôti au four jusqu'à être doré et caramélisé, nappé de tehina et parsemé de grenade et d'herbes fraîches. Un plat spectaculaire qui convertit même les réfractaires aux légumes.

## 8. Le Labneh — la fraîcheur incarnée

Un yaourt égoutté pendant des heures jusqu'à obtenir une texture crémeuse et épaisse, entre le fromage frais et la crème. Servi avec de l'huile d'olive, du zaatar et de la pita, c'est le mezzé le plus simple et l'un des plus délicieux. Parfait pour équilibrer les saveurs plus intenses d'un repas levantin.

## 9. Le Sabich — le sandwich du samedi

Moins connu que le falafel, le sabich est un sandwich de pita garni d'aubergine frite, d'œuf dur, de houmous, de salade, de pickles et d'amba (sauce à la mangue). C'est le sandwich du samedi matin au Levant, copieux et réconfortant.

## 10. Le Baklava — le final sucré

Des couches de pâte filo croustillantes, fourrées de pistaches ou de noix, imbibées d'un sirop parfumé à la fleur d'oranger. Le baklava est le dessert emblématique de toute la Méditerranée orientale. Riche, croquant, parfumé — il se déguste avec un café turc.

## Comment profiter au maximum d'un repas levantin

Le secret d'un bon repas dans un restaurant levantin, c'est de **commander en mezzé** : plusieurs petits plats à partager plutôt qu'un seul plat principal. Commencez par 3-4 entrées froides (houmous, baba ghanoush, labneh, taboulé), ajoutez 2-3 plats chauds (falafel, shakshuka, chou-fleur), et partagez tout au centre de la table. C'est comme ça qu'on mange au Levant, et c'est comme ça qu'on profite le mieux de chaque saveur.

[Consultez notre carte complète](/menu) pour composer votre mezzé chez Noya, au 8 rue de Châteaudun, Paris 9e. Et si vous hésitez entre la carte du midi et celle du soir, sachez que la carte du soir propose des plats plus élaborés, avec notamment une [sélection de vins méditerranéens](/blog/vins-israeliens-libanais-mediterranee) parfaits pour accompagner votre repas. Pour vos événements, découvrez aussi nos [formules traiteur](/traiteur).`,
  },
  {
    slug: "organiser-buffet-levantin-evenement",
    title: "Comment organiser un buffet levantin pour vos événements",
    metaTitle: "Buffet levantin : comment organiser un mezzé pour vos événements",
    metaDescription: "Conseils pour organiser un buffet levantin réussi : composition du mezzé, quantités, options végétariennes. Traiteur levantin à Paris.",
    excerpt: "Mezzé, couleurs, convivialité : le format levantin est idéal pour vos événements. Guide complet pour un buffet réussi.",
    category: "Événements",
    keyword: "buffet levantin",
    keywords: ["buffet levantin", "traiteur levantin Paris", "buffet méditerranéen événement", "mezze événement"],
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    imageAlt: "Buffet levantin coloré avec mezzé, pita et plats à partager pour événement",
    content: `## Pourquoi le format mezzé est idéal pour vos événements

Organiser un buffet pour un événement professionnel, un anniversaire ou un mariage, c'est toujours le même casse-tête : trouver un format qui plaise à tout le monde, qui soit beau visuellement, et qui gère les contraintes alimentaires sans multiplier les menus séparés. Le **buffet levantin** résout tout ça d'un coup.

Le format mezzé — de nombreux petits plats à partager — est naturellement convivial. Pas de file d'attente devant un plat unique, pas de portions individuelles tristes dans leur barquette. Les invités circulent, picorent, découvrent, reviennent. C'est un format vivant, coloré, généreux.

Et surtout, la cuisine levantine est naturellement inclusive : une grande partie des plats sont végétariens, vegan, sans gluten ou halal par tradition, pas par adaptation forcée. [Découvrez la richesse de la cuisine levantine](/blog/cuisine-levantine-origines-plats-traditions).

## Comment composer un buffet levantin réussi

### Les entrées froides — la base du mezzé

C'est le cœur du buffet. Prévoyez 4 à 6 variétés :

- **Houmous classique** et une variante (betterave, poivrons grillés, champignons truffés)
- **Baba ghanoush** (purée d'aubergine fumée)
- **Labneh** au zaatar et huile d'olive
- **Taboulé levantin** (persil, tomate, menthe, boulgour)
- **Salade fattoush** (légumes croquants, pain pita grillé, sumac)

Chaque mezzé froid est servi avec des pains pita fraîchement cuits, coupés en triangles, et éventuellement des crudités (concombre, radis, carottes) pour tremper.

### Les entrées chaudes — le wow factor

Les plats chauds apportent de la gourmandise et de la spectacle :

- **Falafels** fraîchement frits, servis avec du tehina
- **Börek** (feuilletés au fromage et aux épinards)
- **Chou-fleur rôti** au tehina et grenade
- **Halloumi grillé** avec du miel et du zaatar

### Les plats principaux — pour les gros appétits

Si votre événement remplace un repas complet :

- **Pitas garnies** (poulet mariné, falafel, agneau) avec une station de garnitures
- **Shawarma** découpé minute devant les invités
- **Shakshuka** en grandes poêles pour un effet buffet chaud spectaculaire

### Les desserts — la touche finale

- **Baklava** aux pistaches et aux noix
- **Knafeh** (pâtisserie au fromage et aux cheveux d'ange, sirop de fleur d'oranger)
- **Fruits frais** de saison avec de la menthe et de l'eau de rose

## Les quantités par personne

Pour un **buffet méditerranéen événement**, comptez :

| Type de plat | Quantité par personne |
|---|---|
| Mezzé froids (total) | 250-300 g |
| Pita / pain | 2-3 pièces |
| Plats chauds (total) | 200-250 g |
| Desserts | 100-150 g |

Pour un cocktail dînatoire (debout, 2-3 heures), réduisez de 30%. Pour un repas assis avec mezzé au centre, augmentez de 20%.

## Les avantages logistiques du format levantin

**Pas de chaîne du chaud complexe.** La majorité des mezzé froids se servent à température ambiante. Seuls les falafels, le chou-fleur et les plats principaux nécessitent un maintien au chaud.

**Préparation en avance.** Le houmous, le baba ghanoush, le taboulé, les börek — tout peut être préparé la veille. Seule la friture des falafels se fait au dernier moment.

**Visuel spectaculaire.** Les couleurs naturelles des plats levantins — le beige du houmous, le rose de la betterave, le vert du taboulé, le rouge du shakshuka — créent une table magnifique sans effort de décoration.

**Régimes alimentaires couverts.** Sans aucune modification, un buffet levantin propose naturellement des options :
- **Vegan** : houmous, baba ghanoush, falafel, taboulé, chou-fleur
- **Sans gluten** : tous les mezzé (en remplaçant la pita par des crudités)
- **Halal** : toute la carte, par tradition

## Noya, traiteur levantin à Paris

Chez [Noya](/traiteur), nous proposons des formules traiteur sur mesure pour vos événements : cocktails d'entreprise, anniversaires, mariages, lancements de produit. Nos mezzé sont préparés le jour même avec des ingrédients frais, et nous nous adaptons à vos contraintes de lieu, de nombre et de budget.

Du buffet de 15 personnes au cocktail de 200 invités, nous composons avec vous un menu levantin qui surprend et régale. [Contactez-nous pour un devis personnalisé](/traiteur) ou appelez-nous directement.`,
  },
  {
    slug: "shakshuka-histoire-recette",
    title: "Shakshuka : l'histoire et la recette du plat réconfortant du Levant",
    metaTitle: "Shakshuka : histoire, recette authentique et variantes",
    metaDescription: "Découvrez l'histoire de la shakshuka, la recette authentique et ses variantes. Le plat réconfortant levantin par excellence.",
    excerpt: "Œufs pochés dans une sauce tomate épicée : la shakshuka est le plat réconfortant ultime. Son histoire, sa recette et ses variantes.",
    category: "Recettes",
    keyword: "shakshuka recette",
    keywords: ["shakshuka recette", "shakshuka origine", "shakshuka Paris", "recette shakshuka authentique"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    imageAlt: "Shakshuka dans sa poêle en fonte avec œufs pochés, poivrons et tomates",
    content: `## La shakshuka, un plat aux origines multiples

La shakshuka — prononcez « chak-CHOU-ka » — est l'un de ces plats dont tout le monde revendique la paternité. Tunisiens, Libyens, Égyptiens, Palestiniens, tous affirment que la **shakshuka origine** vient de chez eux. Et ils ont probablement tous un peu raison.

Le mot lui-même viendrait de l'arabe « shakka » (mélange) ou du berbère, et désigne simplement des œufs cuits dans une sauce. Le concept est si universel — des œufs pochés dans des légumes mijotés — qu'il a naturellement émergé dans toute la Méditerranée et le Maghreb.

Ce qui est certain, c'est que la shakshuka telle qu'on la connaît aujourd'hui — œufs dans une sauce tomate aux poivrons — s'est popularisée au Levant au XXe siècle, portée par les échanges culinaires entre les communautés d'Afrique du Nord et du Moyen-Orient. Elle est devenue un classique absolu du petit-déjeuner levantin, servie dès le matin avec du pain pour saucer.

## La recette traditionnelle de la shakshuka

### Ingrédients (pour 2-3 personnes)

- 3 cuillères à soupe d'huile d'olive
- 1 gros oignon émincé
- 2 poivrons (1 rouge, 1 vert) coupés en dés
- 3 gousses d'ail émincées
- 1 cuillère à café de cumin moulu
- 1 cuillère à café de paprika doux
- ½ cuillère à café de piment d'Espelette (ou harissa)
- 1 boîte de tomates pelées concassées (400 g)
- 2-3 tomates fraîches coupées en dés
- 1 cuillère à café de sucre
- 4-6 œufs
- Sel, poivre
- Persil et coriandre frais
- Feta émiettée (facultatif)

### Préparation

**1. La base aromatique (10 min).** Dans une large poêle (en fonte de préférence), chauffez l'huile d'olive à feu moyen. Faites revenir l'oignon 5 minutes jusqu'à ce qu'il soit translucide. Ajoutez les poivrons et cuisez encore 5 minutes. Ajoutez l'ail, le cumin, le paprika et le piment. Mélangez 1 minute jusqu'à ce que les épices embaument.

**2. La sauce (15-20 min).** Ajoutez les tomates concassées, les tomates fraîches, le sucre, le sel et le poivre. Laissez mijoter à feu doux, sans couvrir, pendant 15-20 minutes. La sauce doit réduire et épaissir. Si elle est trop sèche, ajoutez un peu d'eau. Si trop liquide, montez le feu quelques minutes.

**3. Les œufs (5-7 min).** Avec une cuillère, creusez des petits puits dans la sauce. Cassez un œuf dans chaque puits. Couvrez la poêle et laissez cuire 5-7 minutes à feu doux. Le blanc doit être pris, le jaune encore coulant. C'est là toute la magie : un jaune d'œuf crémeux qui se mélange à la sauce quand on le perce.

**4. La finition.** Parsemez de persil et coriandre ciselés, éventuellement de feta émiettée. Servez immédiatement, dans la poêle, avec du bon pain.

## Le secret d'une shakshuka réussie

La clé, c'est la sauce. Elle doit être épaisse, concentrée, parfumée. Si vous posez vos œufs dans une sauce trop liquide, les blancs vont se mélanger à la tomate et le résultat sera brouillon. Prenez le temps de la réduction.

L'autre secret, c'est la poêle en fonte. Elle maintient une chaleur uniforme et permet de servir directement dedans — la shakshuka se mange à même la poêle, avec du pain qu'on déchire et qu'on trempe.

## Les variantes créatives

La shakshuka classique est parfaite, mais elle se prête à l'infini aux variations :

- **Shakshuka verte** : remplacez les tomates par des épinards, du chou kale, des herbes fraîches et du pesto. Plus légère, très printanière.
- **Shakshuka aux champignons** : ajoutez des champignons sautés dans la sauce. Chez Noya, c'est l'une des variantes les plus demandées.
- **Shakshuka à la viande** : du bœuf haché ou de l'agneau émietté dans la sauce, pour une version plus consistante.
- **Shakshuka à la feta et au miel** : des morceaux de feta fondus dans la sauce avec un filet de miel. Le sucré-salé est addictif.

[Découvrez d'autres plats levantins incontournables](/blog/meilleurs-plats-restaurant-levantin).

## Pourquoi la shakshuka est le plat réconfortant ultime

Il y a quelque chose de fondamentalement réconfortant dans la shakshuka. C'est chaud, c'est épicé, c'est simple. Ça se mange avec les mains, en trempant du pain dans la sauce et en perçant le jaune d'œuf. C'est un plat qui ne demande aucune sophistication, aucune mise en scène — juste une poêle, du bon pain, et quelqu'un avec qui partager.

Au Levant, c'est le plat du vendredi matin en famille, du brunch entre amis, du dîner improvisé quand le frigo est presque vide. C'est un plat qui console, qui nourrit, qui rassemble.

## Goûtez nos shaukshukas chez Noya

Venez goûter nos 3 variantes de shakshuka chez [Noya](/menu), au 8 rue de Châteaudun, Paris 9e. Classique, aux champignons ou créative — chacune est préparée minute dans sa poêle en fonte et servie avec notre pita maison. Le petit-déjeuner levantin parfait, du matin au soir.`,
  },
  {
    slug: "falafel-origines-recette-paris",
    title: "Falafel : origines, recette et où en manger à Paris",
    metaTitle: "Falafel : origines, recette authentique et meilleurs falafels à Paris",
    metaDescription: "L'histoire du falafel, la recette authentique (pois chiches crus !) et où trouver les meilleurs falafels à Paris. Guide complet.",
    excerpt: "Croustillant à l'extérieur, vert et moelleux à l'intérieur : tout sur le falafel, de ses origines à la recette et les bonnes adresses à Paris.",
    category: "Recettes",
    keyword: "falafel Paris",
    keywords: ["falafel Paris", "meilleur falafel Paris", "recette falafel maison", "falafel authentique"],
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    imageAlt: "Falafels croustillants dorés servis dans une pita avec houmous et salade",
    content: `## Le falafel, du Nil aux rues de Paris

Le falafel est sans doute le street food le plus populaire du monde méditerranéen. Ces petites boulettes dorées et croustillantes, d'un vert intense à l'intérieur, sont devenues un symbole de la cuisine de rue mondiale. Mais d'où vient le **falafel authentique** ?

Les historiens s'accordent sur une origine égyptienne. Le ta'amiya, ancêtre du falafel, était préparé à base de fèves par les Coptes d'Égypte, possiblement comme alternative à la viande pendant le Carême. En remontant le Levant, la recette s'est transformée : les fèves ont été remplacées par les pois chiches, les herbes se sont multipliées, et le falafel tel qu'on le connaît est né.

Aujourd'hui, le falafel est partout — des échoppes de Beyrouth aux food trucks de Brooklyn, en passant par le Marais à Paris. Mais attention : tous les falafels ne se valent pas.

## Falafel égyptien vs falafel levantin

La distinction est fondamentale :

- **Le falafel égyptien (ta'amiya)** est à base de **fèves** (foul). Il est plus plat, plus large, avec une texture plus dense et une croûte parsemée de graines de sésame. Sa couleur intérieure tire sur le brun-vert.

- **Le falafel levantin** est à base de **pois chiches** crus. Il est plus petit, plus rond, plus vert à l'intérieur grâce à l'abondance de persil et de coriandre. Sa texture est plus aérée, plus croustillante.

En France et en Europe, c'est la version levantine qui domine — et c'est celle qu'on retrouve chez Noya.

## La recette authentique du falafel

### Le secret absolu : des pois chiches CRUS

C'est l'erreur la plus courante et la plus fatale : utiliser des pois chiches en boîte (donc déjà cuits). Un **falafel authentique** est TOUJOURS fait à partir de pois chiches crus, simplement trempés. C'est ce qui lui donne sa structure, son croustillant et sa capacité à tenir la friture sans se désintégrer.

### Ingrédients (pour ~25 falafels)

- 300 g de pois chiches secs, trempés 24h (pas 12h — 24h)
- 1 gros oignon
- 4 gousses d'ail
- 1 gros bouquet de persil plat (30 g)
- 1 bouquet de coriandre (20 g)
- 1 cuillère à café de cumin moulu
- 1 cuillère à café de coriandre moulue
- ½ cuillère à café de piment
- 1 cuillère à café de sel
- ½ cuillère à café de poivre
- 1 cuillère à café de bicarbonate de soude
- 2 cuillères à soupe de graines de sésame
- Huile de friture (tournesol ou arachide)

### Préparation

**1. Le trempage (24h).** Faites tremper les pois chiches dans un grand volume d'eau froide pendant 24 heures. Ils vont tripler de volume. Égouttez bien.

**2. Le mixage.** Dans un robot culinaire (pas un blender), mixez les pois chiches égouttés avec l'oignon, l'ail, le persil, la coriandre et les épices. Mixez par pulsations — la texture doit être granuleuse, comme du couscous humide, JAMAIS lisse. Si c'est trop lisse, les falafels seront pâteux.

**3. Le repos (1h).** Couvrez et laissez reposer au réfrigérateur minimum 1 heure. Le froid aide à la cohésion.

**4. Le façonnage.** Ajoutez le bicarbonate et les graines de sésame. Formez des boulettes de la taille d'une noix (ou utilisez un moule à falafel pour la forme aplatie traditionnelle). Tassez bien.

**5. La friture.** Chauffez l'huile à 180°C. Faites frire 3-4 minutes par fournée, jusqu'à ce qu'ils soient bien dorés. Égouttez sur du papier absorbant.

### Le résultat

L'extérieur doit être croustillant et doré. En cassant le falafel, l'intérieur révèle un vert intense, presque émeraude, et une texture moelleuse et humide. C'est le contraste entre le craquant de la croûte et la tendresse du cœur qui fait tout le plaisir.

## Les erreurs fatales

- **Pois chiches cuits** : le falafel se désintègre à la friture ou devient une bouillie.
- **Mixage trop fin** : texture pâteuse au lieu de granuleuse.
- **Huile pas assez chaude** : les falafels absorbent l'huile et deviennent gras.
- **Ajouter de la farine** : signe qu'il y a un problème en amont. Un bon falafel n'a besoin d'aucun liant.

## Où trouver de bons falafels à Paris ?

Paris regorge d'adresses pour manger des falafels, mais la qualité varie énormément. Le Marais est historiquement le quartier des falafels parisiens, avec ses institutions de la rue des Rosiers. On en trouve aussi d'excellents dans le 10e et le 11e arrondissements, portés par la vague de restaurants levantins et moyen-orientaux.

Ce qui distingue un excellent falafel : la fraîcheur (frits à la commande, pas réchauffés), la couleur verte à l'intérieur (signe d'herbes abondantes), et le croustillant (signe d'une bonne friture).

## Nos falafels chez Noya

Chez [Noya](/menu), nos falafels sont préparés chaque matin avec des pois chiches frais trempés 24 heures et une abondance de persil et coriandre. Frits à la commande, jamais réchauffés. Servis en assiette avec houmous, salade, aubergine et tehina, ou en pita garnie pour un déjeuner complet. Au 8 rue de Châteaudun, Paris 9e. [Voir notre carte complète](/menu).`,
  },
  {
    slug: "vins-israeliens-libanais-mediterranee",
    title: "Les vins du bassin méditerranéen : israéliens et libanais, des pépites méconnues",
    metaTitle: "Vins israéliens et libanais : les pépites de la Méditerranée",
    metaDescription: "Découvrez les vins israéliens et libanais, tradition viticole millénaire du Levant. Régions, cépages et accords avec la cuisine levantine.",
    excerpt: "De la vallée de la Bekaa aux collines du Golan : les vins du Levant sont parmi les plus anciens du monde et les plus surprenants.",
    category: "Vins & accords",
    keyword: "vins israéliens libanais",
    keywords: ["vins israéliens libanais", "vin levantin", "vin méditerranéen", "carte des vins restaurant levantin"],
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    imageAlt: "Verres de vin rouge et blanc avec mezzé levantin en arrière-plan",
    content: `## Une tradition viticole millénaire

Le Levant est l'un des berceaux historiques de la viticulture. On y a retrouvé des traces de vinification datant de plus de 5 000 ans — bien avant la Grèce et l'Italie. Les Phéniciens, qui vivaient sur les côtes de l'actuel Liban, sont considérés comme les premiers grands exportateurs de vin de l'histoire. Ce sont eux qui ont planté les premières vignes en Afrique du Nord, en Sicile, en Espagne.

Malgré cette histoire millénaire, les **vins israéliens et libanais** restent largement méconnus en France. C'est une injustice œnologique, car ces deux pays produisent aujourd'hui des vins remarquables, qui méritent leur place sur les meilleures tables.

## Les vins israéliens : la révolution qualitative

La viticulture moderne en Israël a connu une véritable révolution à partir des années 1980, quand des vignerons formés en Californie et à Bordeaux ont commencé à planter des cépages nobles dans des terroirs d'altitude.

### Les grandes régions viticoles

- **La Galilée (Galil)** : au nord du pays, c'est la région la plus prestigieuse. L'altitude (jusqu'à 1 000 m) et le climat frais produisent des vins élégants et complexes. Le Haut-Galilée est considéré comme le « Bordeaux israélien ».

- **Le plateau du Golan** : terroir volcanique en altitude, avec des nuits fraîches qui favorisent une belle acidité. Les vins blancs y sont particulièrement remarquables.

- **Les collines de Judée** : entre Jérusalem et la côte, un terroir calcaire qui rappelle certaines appellations du sud de la France. Des rouges puissants et structurés.

### Les cépages et styles

Les vignerons israéliens travaillent principalement les cépages internationaux — Cabernet Sauvignon, Merlot, Syrah, Chardonnay, Sauvignon Blanc — avec des résultats souvent surprenants pour qui s'attend à des vins « exotiques ». On trouve aussi des cépages méditerranéens comme le Carignan, le Mourvèdre et le Viognier, ainsi que des variétés locales rares en cours de réhabilitation.

Les meilleurs domaines israéliens produisent des vins qui rivalisent avec les appellations françaises et californiennes les plus réputées. Le terroir unique — calcaire, volcanique, altitude — apporte une minéralité et une fraîcheur qui distinguent ces vins de leurs cousins du Nouveau Monde.

## Les vins libanais : l'héritage phénicien

Le Liban produit du vin depuis l'Antiquité phénicienne, et malgré des décennies de troubles, sa viticulture n'a jamais cessé. Les domaines libanais ont une constance et un savoir-faire qui forcent le respect.

### La vallée de la Bekaa

C'est LE terroir libanais par excellence. Située entre les chaînes du Mont-Liban et de l'Anti-Liban, à environ 1 000 mètres d'altitude, la vallée de la Bekaa bénéficie d'un ensoleillement généreux, de sols calcaires et argilo-calcaires, et de nuits fraîches en altitude.

### Les domaines emblématiques

- **Château Musar** : fondé en 1930, c'est le domaine le plus célèbre du Liban. Ses rouges sont des assemblages de Cabernet Sauvignon, Cinsault et Carignan, vieillis longuement. Ils sont atypiques, oxydatifs, complexes — on les aime ou on les déteste, mais on ne les oublie pas.

- **Château Ksara** : le plus ancien domaine du Liban (1857). Des vins plus accessibles et modernes, avec une gamme large qui va du blanc frais aux rouges de garde.

- **Château Kefraya** : des assemblages élégants et des mono-cépages réussis. Leur rosé est un classique des tables libanaises.

## Comment accorder ces vins avec la cuisine levantine

L'accord entre le **vin méditerranéen** et la cuisine levantine est naturel — ils sont nés sur le même sol, sous le même soleil.

### Les blancs

Un Sauvignon Blanc du Golan ou un blanc de Ksara accompagnent parfaitement les mezzé froids : houmous, labneh, taboulé. Leur acidité tranche la richesse du tehina et rafraîchit le palais entre chaque bouchée.

### Les rosés

Le rosé libanais de Kefraya est fait pour les falafels, le chou-fleur rôti et les salades estivales. Frais, fruité, sans prétention — exactement ce qu'il faut pour un mezzé en terrasse.

### Les rouges

Les rouges de Galilée ou de la Bekaa s'accordent magnifiquement avec les plats plus corsés : agneau mariné, shakshuka épicée, kebabs. Un Château Musar avec un plat mijoté levantin, c'est un voyage gustatif complet.

### Le principe général

La cuisine levantine est une cuisine d'épices douces (cumin, coriandre, paprika), d'herbes fraîches et d'acidité (citron, sumac). Les vins qui fonctionnent le mieux sont ceux qui offrent de la fraîcheur et du fruit, plutôt que du bois et de l'extraction. Privilégiez les vins jeunes et vivants plutôt que les grandes cuvées boisées.

## Découvrez notre carte des vins chez Noya

Chez [Noya](/diner), nous avons composé une carte des vins qui fait la part belle aux pépites du bassin méditerranéen — vins israéliens et libanais, mais aussi des sélections de Grèce, de Turquie et du sud de la France. Chaque vin a été choisi pour son accord avec notre cuisine levantine.

Découvrez-la lors d'un [dîner chez Noya](/diner), au 8 rue de Châteaudun, Paris 9e. Notre équipe se fera un plaisir de vous guider dans vos choix. [Consultez notre carte du soir](/menu) pour voir les plats qui accompagneront votre dégustation.`,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
