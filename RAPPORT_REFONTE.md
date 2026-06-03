# Rapport de refonte éditoriale — Mai 2026

## Résumé

Refonte éditoriale complète du site noya-website sous le nouveau positionnement "bistrot levantin moderne · Paris 9ᵉ". 22 fichiers réécrits : pages éditoriales (home, /a-propos, /menu, /contact, /diner, /galerie, /commander, /blog, /traiteur), composants transverses (Header, Footer, AnnouncementBar, Hero, FloatingButtons), data (reviews, blog, menu), plus un refactor minimal de ReserveButton/ReservationCTA pour injecter des UTM par page source. Build Next.js OK, vocab banni purgé, compteurs à jour (140 avis Google + 9,6/10 TheFork), liens Zenchef instrumentés.

## Branche

`refonte-editoriale-mai-2026`

Pour merger après validation :

```bash
git checkout main
git merge refonte-editoriale-mai-2026
git push origin main
```

⚠️ Déploiement Vercel à déclencher manuellement après validation visuelle.

## Fichiers modifiés

### Pages (12)
- `src/app/page.tsx` — home : metadata override, prose "Le Levant moderne, à la française", 6 plats signatures avec badges Midi/Soir, section L'équipe (Inès/Kalam), tous CTA avec source="home", compteur 140 avis + 9,6/10 TheFork.
- `src/app/a-propos/page.tsx` — réécriture intégrale : H1 "Noya, c'est nous.", blocs Inès/Kalam/Lieu/plats signatures/vins/avis/CTA Zenchef avec UTM source=apropos, mention Le Figaro sept. 2025.
- `src/app/menu/page.tsx` — metadata refondue, intro simplifiée, bandeau confiance à jour, mini-section "Avant un spectacle ?", ReservationCTA source="menu".
- `src/app/contact/page.tsx` — H1 "Nous Trouver", bloc "À proximité" (Opéra, Folies Bergère, Casino de Paris, Galeries Lafayette, Théâtre de Paris), ReservationCTA source="contact".
- `src/app/diner/page.tsx` — meta/OG nettoyés (plats concrets vs formules creuses), ReservationCTA source="diner".
- `src/app/galerie/page.tsx` — intro reformulée, ReservationCTA source="galerie".
- `src/app/commander/page.tsx` — trust banner enrichi 140 avis + 9,6/10 TheFork.
- `src/app/blog/page.tsx` — meta + sous-titre nettoyés.
- `src/app/blog/[slug]/page.tsx` — CTA bas de page, ReserveButton source="blog-article".
- `src/app/traiteur/page.tsx` — keyword SEO + trust banner.
- `src/app/traiteur/mariage/page.tsx` — hero/intro avec plats concrets.
- `src/app/layout.tsx` — metadata description (140 avis), OG/Twitter alignés sur "bistrot levantin moderne".

### Composants (7)
- `src/components/Hero.tsx` — kicker "Bistrot levantin moderne · Paris 9ᵉ", tagline italique, bandeau preuves avec Le Figaro, CTA source="home".
- `src/components/Header.tsx` — ReserveButton source="header" (desktop + mobile).
- `src/components/Footer.tsx` — ReserveButton source="footer", compteur 5/5 Google · 140 avis · 9,6/10 TheFork.
- `src/components/AnnouncementBar.tsx` — message 1 avec UTM medium=sticky, emojis retirés sur messages 2/3, compteur 140 avis.
- `src/components/FloatingButtons.tsx` — ReserveButton source="mobile-bar".
- `src/components/ReserveButton.tsx` — refactor : nouvelle prop `source` qui injecte UTM (utm_source=website, utm_medium=<source>, utm_campaign=reservation).
- `src/components/ReservationCTA.tsx` — refactor : prop `source` forwardée à ReserveButton.

### Data (3)
- `src/data/reviews.ts` — 5 nouveaux avis (4 FR + 1 EN).
- `src/data/menu.ts` — Côtes d'Agneau reformulées (Levant vs Moyen-Orient), Pain Perdu à la Rose en tête desserts soir, harmonisation tahina → tehina.
- `src/data/blog.ts` — sweep vocab sur 9 articles (authentique, Moyen-Orient, voyage), UTM ajouté au lien Zenchef de l'article cuisine-levantine-libanaise-israelienne. Slugs URL préservés.

## Quality gates

### Vocabulaire banni résiduel

```
$ grep -rni "voyage culinaire" src/   → aucun résultat
$ grep -rni "papilles en voyage" src/ → aucun résultat
$ grep -rni "authentique" src/        → 5 occurrences, TOUTES dans des slugs URL préservés :
  - src/components/BlogIllustration.tsx:154,197,202 → "recette-houmous-maison-authentique" (slug identifier)
  - src/data/blog.ts:59,93,188,642 → liens vers /blog/recette-houmous-maison-authentique
$ grep -rni "authenticit" src/        → aucun résultat
$ grep -rni "Moyen-Orient" src/       → aucun résultat
$ grep -rni "saveurs d'Orient" src/   → aucun résultat
$ grep -rni "marchés du bassin méditerranéen" src/ → aucun résultat
```

✅ Vocab éditorial propre. Les 5 occurrences résiduelles de "authentique" sont uniquement dans le slug URL `recette-houmous-maison-authentique`, préservé intentionnellement (pas de redirect à créer).

### Compteurs résiduels

```
$ grep -rn "110+" src/         → aucun résultat
$ grep -rn "110 avis" src/     → aucun résultat
$ grep -rn "Plus de 110" src/  → aucun résultat
```

✅ Tous les compteurs sont à jour (140 avis).

### Liens Zenchef sans UTM

```
$ grep -rn "bookings.zenchef.com" src/
src/app/a-propos/page.tsx:300        → utm_medium=apropos       ✅
src/components/AnnouncementBar.tsx:18 → utm_medium=sticky        ✅
src/data/blog.ts:715                 → utm_medium=blog-article  ✅
src/data/restaurant.ts:46            → URL de base sans UTM     (utilisée par ReserveButton qui injecte les UTM dynamiquement via la prop `source` — comportement attendu)
```

✅ Tous les liens Zenchef portent un UTM, soit en dur (3 occurrences directes), soit via le composant ReserveButton qui injecte l'UTM à l'exécution selon la page source.

### Build

✅ `npm run build` passe : 29 pages statiques générées, lint OK, types OK.

## Marqueurs [À COMPLÉTER]

2 marqueurs éditoriaux visibles en italique discret dans `/a-propos` :

1. `src/app/a-propos/page.tsx:90` — paragraphe personnel à écrire avec Inès (2-3 phrases sur son parcours et sa philosophie de l'accueil).
2. `src/app/a-propos/page.tsx:217` — lien vers la page carte des vins à ajouter quand elle sera prête.

### Images manquantes (placeholders en place)

5 visuels à brancher avant mise en production :

- Portrait Inès en salle (`/public/images/equipe/ines.jpg`) — utilisé dans home (section L'équipe) et /a-propos.
- Portrait Kalam en cuisine (`/public/images/equipe/kalam.jpg`) — utilisé dans home et /a-propos.
- Photo salle ou terrasse (`/public/images/`) — bloc Le Lieu dans /a-propos.
- Plat Côtes d'Agneau — actuellement placeholder.jpg dans SIGNATURE_DISHES.
- Plat Côte de Bœuf à Partager — actuellement placeholder.jpg.
- Dessert Pain Perdu à la Rose — actuellement placeholder.jpg.

Note : le fichier `/public/images/galerie/placeholder.jpg` n'existe pas encore — soit créer un placeholder neutre, soit brancher directement les vrais clichés.

## Décisions humaines requises

Aucune décision bloquante remontée par les agents. Les seules zones nécessitant input humain sont :
- Le paragraphe Inès à co-écrire (marqueur visible).
- Le lien carte des vins quand la page sera prête (marqueur visible).
- Les photos à fournir/brancher (placeholders en place, ne cassent pas le build).

## Notes

- `noya-site.jsx` (code mort, hors build Next.js) non touché.
- Pas de `EDITS_A_VALIDER.md` créé : aucun agent n'a remonté de décision rédactionnelle ambiguë.
- Refactor mineur appliqué en post-validation : retrait d'un import `ReactNode` inutilisé dans `ReservationCTA.tsx` (lint ESLint bloquait le build initial — corrigé, build OK).
