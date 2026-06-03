import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Notre Histoire — Noya · Bistrot levantin moderne · Paris 9ᵉ",
  description:
    "Noya, bistrot levantin moderne au 8 rue de Châteaudun. L'histoire d'Inès et Kalam, une cuisine fait maison, un accueil aux petits soins. 5/5 Google · 140 avis.",
  openGraph: {
    title: "Notre Histoire — Noya · Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Inès et Kalam vous accueillent au 8 rue de Châteaudun. Bistrot levantin moderne, fait maison, à deux pas de l'Opéra.",
    url: "https://www.eatnoya.com/a-propos",
    images: [{ url: "/og/a-propos.jpg", width: 1200, height: 630, alt: "L'histoire de Noya, bistrot levantin moderne Paris 9ᵉ" }],
  },
  twitter: {
    title: "Notre Histoire — Noya · Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Inès et Kalam vous accueillent au 8 rue de Châteaudun. Bistrot levantin moderne, fait maison, à deux pas de l'Opéra.",
  },
  alternates: { canonical: "https://www.eatnoya.com/a-propos" },
};

export default function AProposPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Notre Histoire", url: "https://www.eatnoya.com/a-propos" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-16 pb-12 px-5 text-center bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Notre Histoire" }]} />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3 mt-8">
            Qui sommes-nous
          </p>
          <h1 className="font-serif text-[clamp(38px,7vw,60px)] text-burgundy font-normal">
            Noya, c&apos;est nous.
          </h1>
          <p className="font-accent text-lg md:text-xl text-taupe italic mt-5 max-w-2xl mx-auto leading-relaxed">
            Un bistrot levantin moderne au 8 rue de Châteaudun, à deux pas de l&apos;Opéra. Fait maison, accueil aux petits soins.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <div className="text-sm text-taupe leading-[2] text-justify space-y-5">
            <p>
              Noya est un bistrot. Levantin par la cuisine, parisien par l&apos;esprit. On y mange une cuisine moderne du Levant — houmous chauds, côtes d&apos;agneau aux épices, shakshuka au feu doux, pain perdu à la rose — préparée chaque jour à la main, avec des produits frais.
            </p>
            <p>
              Le midi, on déjeune vite et bien. Le soir, on prend son temps : entrées à partager, plats signatures, desserts faits maison. Terrasse l&apos;été. À 5 minutes à pied de l&apos;Opéra et des théâtres du 9ᵉ.
            </p>
          </div>
        </div>
      </section>

      {/* Bloc Inès */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* TODO: portrait Inès en salle, à intégrer */}
          <div className="w-full aspect-[4/5] bg-warm-white border border-cream-dark flex items-center justify-center order-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-taupe/60">
              Portrait Inès — à intégrer
            </span>
          </div>
          <div className="order-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              En salle
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-normal mb-6">
              Inès
            </h2>
            <div className="text-sm text-taupe leading-[2] space-y-4">
              <p>
                Inès dirige la salle. C&apos;est elle que les clients croisent en arrivant, qui présente la carte, conseille les plats, et reste deux minutes à la fin du repas pour demander si tout s&apos;est bien passé. Dans les avis Google, c&apos;est elle « la restauratrice adorable », celle qu&apos;on cite, celle qu&apos;on remercie.
              </p>
              <p className="font-accent italic text-dark/40">
                [À COMPLÉTER — paragraphe personnel à écrire avec Inès, 2-3 phrases sur son parcours et sa philosophie de l&apos;accueil.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc Kalam */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              En cuisine
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-normal mb-6">
              Kalam
            </h2>
            <div className="text-sm text-taupe leading-[2] space-y-4">
              <p>
                Kalam est notre chef. Spécialiste de la cuisine du Levant, il a notamment dirigé la cuisine de Soum Soum avant de nous rejoindre. Toutes les recettes de la carte sortent de ses mains.
              </p>
              <p>
                Sa cuisine est celle du Levant moderne : les fondamentaux respectés — pitas faites maison, houmous chauds, falafels du jour, épices ajustées plat par plat — et la créativité d&apos;un bistrot qui regarde devant. Les côtes d&apos;agneau qui repartent en commentaires, le pain perdu à la rose que les clients citent dans leurs avis, la shakshuka qui rend les habitués accros : ce sont les siens.
              </p>
            </div>
          </div>
          {/* TODO: portrait Kalam en cuisine */}
          <div className="w-full aspect-[4/5] bg-cream border border-cream-dark flex items-center justify-center order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-taupe/60">
              Portrait Kalam — à intégrer
            </span>
          </div>
        </div>
      </section>

      {/* Bloc Le Lieu */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-5xl mx-auto">
          {/* TODO: photo salle ou terrasse */}
          <div className="w-full aspect-[16/9] bg-warm-white border border-cream-dark flex items-center justify-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-taupe/60">
              Photo salle ou terrasse — à intégrer
            </span>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              La maison
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-normal mb-6">
              Au 8 rue de Châteaudun
            </h2>
            <div className="text-sm text-taupe leading-[2] space-y-4 text-justify">
              <p>
                La salle est petite — 28 couverts en intérieur, 24 en terrasse l&apos;été. Zellige aux murs, lumière naturelle, touches végétales. On a voulu un endroit où l&apos;on se sent à sa place autant pour un déjeuner pressé que pour une soirée qu&apos;on prend le temps de raconter.
              </p>
              <p>
                Le quartier est un atout. À 5 minutes à pied : l&apos;Opéra Garnier, les Folies Bergère, le Théâtre de Paris, le Casino de Paris. Métros Notre-Dame-de-Lorette, Cadet, Le Peletier. Idéal avant ou après un spectacle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qu'on cuisine */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              Le Levant moderne
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-normal mb-6">
              Ce qu&apos;on cuisine
            </h2>
            <p className="text-sm text-taupe leading-[2] max-w-2xl mx-auto">
              Tout est fait maison, chaque jour. Pas de raccourci, pas de surgelé. Quelques signatures que les avis Google citent par leur prénom :
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Les côtes d&apos;agneau</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Marinées aux épices du Levant, grillées à cœur, sauce citron et herbes. Le plat dont les clients reparlent.
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">La shakshuka Noya</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Œufs pochés, sauce tomate-poivrons, viande mijotée aux épices. La recette de référence.
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Le Houmous Bilameh</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Houmous chaud aux pois chiches, tendre bœuf effiloché, tehina. Le hit signature, midi et soir.
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-3">Le pain perdu à la rose</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Challah dorée au beurre, crème à la rose, pistaches. « Un des meilleurs que j&apos;ai mangés » — Avis Google.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-burgundy border-b border-burgundy pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Voir toute la carte →
            </Link>
          </div>
        </div>
      </section>

      {/* Et bientôt, nos vins */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
            En construction
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-normal mb-6">
            Une carte des vins levantine, bientôt
          </h2>
          <p className="text-sm text-taupe leading-[2] mb-6">
            On construit une carte des vins à l&apos;image de notre cuisine : des cuvées du Liban (Château Musar, Massaya, IXSIR…) et d&apos;Israël (Domaine du Castel, Tulip, Golan Heights…) en regard de quelques classiques français. Une histoire que personne ne raconte vraiment dans le quartier, et qu&apos;on a hâte de partager.
          </p>
          <p className="font-accent italic text-dark/40 text-sm">
            [À COMPLÉTER — ajouter un lien vers la page carte des vins quand prête.]
          </p>
        </div>
      </section>

      {/* Ce qu'on nous dit */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              Avis & presse
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-normal">
              Ce qu&apos;on nous dit
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-cream p-6 border border-cream-dark">
              <p className="font-accent italic text-sm text-dark leading-relaxed mb-4">
                « On s&apos;est régalées du début à la fin. Mention spéciale pour le pain perdu qui était juste incroyable, vraiment un des meilleurs que j&apos;ai mangés. Les côtes d&apos;agneau étaient aussi excellentes, cuisson parfaite. Le personnel est hyper agréable, souriant et attentionné. »
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                Avis Google ★★★★★
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <p className="font-accent italic text-sm text-dark leading-relaxed mb-4">
                « Délicieux et copieux, dans une ambiance chaleureuse et agréable. Nous avons été accueillis par une mère et sa fille, très souriantes et extrêmement gentilles. Merci ! On reviendra. »
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                Avis Google ★★★★★
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <p className="font-accent italic text-sm text-dark leading-relaxed mb-4">
                « Un sans-faute pour toute l&apos;équipe du Noya. Accueil souriant, très agréable. Shakshouka exceptionnelle ! Accord mets-vin intéressant avec du Crozes Hermitage à la carte. On reviendra ! »
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                Avis Google ★★★★★
              </p>
            </div>
          </div>
          <div className="bg-cream p-8 border border-cream-dark text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-6">
              <div>
                <div className="font-serif text-xl text-burgundy">★ 5/5 sur Google</div>
                <div className="text-[10px] uppercase tracking-wider text-taupe mt-1">140 avis</div>
              </div>
              <div className="hidden md:block w-px h-10 bg-cream-dark" />
              <div>
                <div className="font-serif text-xl text-burgundy">9,6/10 sur TheFork</div>
                <div className="text-[10px] uppercase tracking-wider text-taupe mt-1">La mieux notée du 9ᵉ</div>
              </div>
              <div className="hidden md:block w-px h-10 bg-cream-dark" />
              <div>
                <div className="font-serif text-xl text-burgundy">Vu dans Le Figaro</div>
                <div className="text-[10px] uppercase tracking-wider text-taupe mt-1">Septembre 2025</div>
              </div>
            </div>
            <a
              href="https://www.lefigaro.fr/gastronomie/noya-une-cantine-levantine-pour-les-dejeuners-rapides-a-paris-9e-20250919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-burgundy border-b border-burgundy pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Lire l&apos;article du Figaro →
            </a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-burgundy to-burgundy-dark text-cream py-16 px-5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
          Réserver
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-normal mb-3">
          Venez goûter
        </h2>
        <p className="font-accent text-lg text-cream/80 italic mb-8 max-w-md mx-auto">
          On vous attend, du mardi au samedi, midi et soir.
        </p>
        <a
          href="https://bookings.zenchef.com/results?rid=386074&pid=1001&utm_source=website&utm_medium=apropos&utm_campaign=reservation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 border-[1.5px] border-cream text-cream text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-burgundy transition-all"
        >
          Réserver une table
        </a>
      </section>
    </>
  );
}
