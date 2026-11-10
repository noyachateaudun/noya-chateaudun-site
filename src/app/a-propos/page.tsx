import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReserveButton from "@/components/ReserveButton";
import ReservationCTA from "@/components/ReservationCTA";
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

const FIGARO_URL =
  "https://www.lefigaro.fr/gastronomie/noya-une-cantine-levantine-pour-les-dejeuners-rapides-a-paris-9e-20250919";

const SIGNATURES = [
  {
    name: "Les côtes d’agneau",
    desc: "Marinées aux épices du Levant, grillées à cœur, sauce citron et herbes. Le plat dont les clients reparlent.",
  },
  {
    name: "La shakshuka Noya",
    desc: "Œufs pochés, sauce tomate-poivrons, viande mijotée aux épices. La recette de référence.",
  },
  {
    name: "Le Houmous Bilameh",
    desc: "Houmous chaud aux pois chiches, tendre bœuf effiloché, tahina. Le hit signature, midi et soir.",
  },
  {
    name: "Le pain perdu à la rose",
    desc: "Challah dorée au beurre, crème à la rose, pistaches. « Un des meilleurs que j’ai mangés » — Avis Google.",
  },
];

const QUOTES = [
  "« On s’est régalées du début à la fin. Mention spéciale pour le pain perdu qui était juste incroyable, vraiment un des meilleurs que j’ai mangés. Les côtes d’agneau étaient aussi excellentes, cuisson parfaite. Le personnel est hyper agréable, souriant et attentionné. »",
  "« Délicieux et copieux, dans une ambiance chaleureuse et agréable. Nous avons été accueillis par une mère et sa fille, très souriantes et extrêmement gentilles. Merci ! On reviendra. »",
  "« Un sans-faute pour toute l’équipe du Noya. Accueil souriant, très agréable. Shakshouka exceptionnelle ! Accord mets-vin intéressant avec du Crozes Hermitage à la carte. On reviendra ! »",
];

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const h2 = "font-serif font-medium text-[clamp(38px,4.4vw,60px)] leading-[1.02]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

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

      {/* ============ EN-TÊTE ============ */}
      <section className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 text-[13px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brick">Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="text-ink">Notre Histoire</span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Qui sommes-nous</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              Noya,
              <br />
              c’est <em className="italic text-brick">nous.</em>
            </h1>
            <p className="mt-7 max-w-[31em] font-serif italic text-[clamp(22px,2.2vw,28px)] leading-[1.35] text-ink">
              Un bistrot levantin moderne au 8 rue de Châteaudun, à deux pas de l’Opéra. Fait maison, accueil aux petits soins.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ReserveButton source="apropos" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
                Réserver une table
              </ReserveButton>
              <Link href="/menu" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
                Voir la carte
              </Link>
            </div>
          </div>
          <figure className="flex-[1_1_380px] min-w-0 max-w-[520px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/IMG_9120.jpg"
                alt="Une table dressée devant le mur de zellige vert de Noya"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3.5 text-[13px] text-muted">Zellige aux murs, lumière naturelle.</figcaption>
          </figure>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* ============ INTRO ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="grid gap-x-[clamp(40px,6vw,96px)] gap-y-10 lg:grid-cols-[5fr_6fr] items-start">
          <div className="min-w-0">
            <p className={`${kicker} text-brick mb-3.5`}>Le bistrot</p>
            <h2 className={`${h2} max-w-[11em]`}>
              Levantin par la cuisine, <em className="italic text-brick">parisien</em> par l’esprit.
            </h2>
          </div>
          <div className="min-w-0 flex flex-col gap-6 text-[17px] md:text-[18px] leading-[1.7] text-muted">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[76px] first-letter:leading-[0.8] first-letter:text-brick">
              Noya est un bistrot. Levantin par la cuisine, parisien par l’esprit. On y mange une cuisine moderne du Levant — houmous chauds, côtes d’agneau aux épices, shakshuka au feu doux, pain perdu à la rose — préparée chaque jour à la main, avec des produits frais.
            </p>
            <p>
              Le midi, on déjeune vite et bien. Le soir, on prend son temps : entrées à partager, plats signatures, desserts faits maison. Terrasse l’été. À 5 minutes à pied de l’Opéra et des théâtres du 9ᵉ.
            </p>
          </div>
        </div>
      </section>

      {/* ============ L'ÉQUIPE ============ */}
      <section className="bg-brick text-paper">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <p className={`${kicker} text-[#F6D9CC] mb-3.5`}>Ceux qui vous reçoivent</p>
          <h2 className="font-serif font-medium text-[clamp(40px,4.6vw,64px)] leading-[1.02] max-w-[14em]">
            Inès en salle, Kalam en cuisine.
          </h2>

          <div className="mt-14 grid gap-x-[clamp(40px,6vw,96px)] gap-y-16 lg:grid-cols-2">
            {/* Bloc Inès */}
            <article className="min-w-0 pt-8 border-t border-paper/35">
              {/* TODO: réintégrer ici le portrait Inès quand /images/equipe/ines.jpg sera disponible */}
              <p className={`${kicker} !tracking-[0.22em] text-[#F6D9CC]`}>En salle</p>
              <h3 className="mt-2 font-serif font-medium text-[clamp(48px,5vw,72px)] leading-[0.95]">Inès</h3>
              <div className="mt-6 flex flex-col gap-5 text-[17px] leading-[1.7] text-[#F6E4DB]">
                <p>
                  Inès dirige la salle. C’est elle que les clients croisent en arrivant, qui présente la carte, conseille les plats, et reste deux minutes à la fin du repas pour demander si tout s’est bien passé.
                </p>
                <blockquote className="font-serif italic text-[clamp(24px,2.4vw,32px)] leading-[1.3] text-paper">
                  Dans les avis Google, c’est elle « la restauratrice adorable », celle qu’on cite, celle qu’on remercie.
                </blockquote>
                {/* TODO: ajouter ici le paragraphe personnel d'Inès (parcours + philosophie d'accueil) après validation avec elle */}
              </div>
            </article>

            {/* Bloc Kalam */}
            <article className="min-w-0 pt-8 border-t border-paper/35">
              {/* TODO: réintégrer ici le portrait Kalam quand /images/equipe/kalam.jpg sera disponible */}
              <p className={`${kicker} !tracking-[0.22em] text-[#F6D9CC]`}>En cuisine</p>
              <h3 className="mt-2 font-serif font-medium text-[clamp(48px,5vw,72px)] leading-[0.95]">Kalam</h3>
              <div className="mt-6 flex flex-col gap-5 text-[17px] leading-[1.7] text-[#F6E4DB]">
                <p>
                  Kalam est notre chef. Spécialiste de la cuisine du Levant, il a notamment dirigé la cuisine de Soum Soum avant de nous rejoindre. Toutes les recettes de la carte sortent de ses mains.
                </p>
                <p>
                  Sa cuisine est celle du Levant moderne : les fondamentaux respectés — pitas faites maison, houmous chauds, falafels du jour, épices ajustées plat par plat — et la créativité d’un bistrot qui regarde devant. Les côtes d’agneau qui repartent en commentaires, le pain perdu à la rose que les clients citent dans leurs avis, la shakshuka qui rend les habitués accros : ce sont les siens.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ LE LIEU ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        {/* TODO: réintégrer ici la photo salle/terrasse quand disponible */}
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,96px)] gap-y-12">
          <figure className="flex-[1_1_340px] min-w-0 max-w-[460px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/IMG_9118.jpg"
                alt="Étagère de la salle, vases verts et céramiques"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </figure>
          <div className="flex-[1_1_480px] min-w-0">
            <p className={`${kicker} text-brick mb-3.5`}>La maison</p>
            <h2 className={h2}>Au 8 rue de Châteaudun</h2>
            <div className="mt-7 flex flex-col gap-5 text-[17px] leading-[1.7] text-muted max-w-[34em]">
              <p>
                La salle est petite — 28 couverts en intérieur, 24 en terrasse l’été. Zellige aux murs, lumière naturelle, touches végétales. On a voulu un endroit où l’on se sent à sa place autant pour un déjeuner pressé que pour une soirée qu’on prend le temps de raconter.
              </p>
              <p>
                Le quartier est un atout. À 5 minutes à pied : l’Opéra Garnier, les Folies Bergère, le Théâtre de Paris, le Casino de Paris. Métros Notre-Dame-de-Lorette, Cadet, Le Peletier. Idéal avant ou après un spectacle.
              </p>
            </div>
            <dl className="mt-11 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
              <div className="pt-5 border-t-2 border-ink">
                <dt className="sr-only">Couverts en salle</dt>
                <dd className="font-serif font-medium text-[64px] md:text-[76px] leading-[0.9]">28</dd>
                <dd className="mt-2.5 text-[14px] text-muted">couverts en salle</dd>
              </div>
              <div className="pt-5 border-t-2 border-ink">
                <dt className="sr-only">Couverts en terrasse</dt>
                <dd className="font-serif font-medium text-[64px] md:text-[76px] leading-[0.9]">24</dd>
                <dd className="mt-2.5 text-[14px] text-muted">en terrasse l’été</dd>
              </div>
              <div className="pt-5 border-t-2 border-ink">
                <dt className="sr-only">Distance de l’Opéra</dt>
                <dd className="font-serif font-medium text-[64px] md:text-[76px] leading-[0.9]">
                  5<span className="text-[0.45em] ml-1">min</span>
                </dd>
                <dd className="mt-2.5 text-[14px] text-muted">à pied de l’Opéra</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ============ CE QU'ON CUISINE ============ */}
      <section className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px] grid gap-x-[clamp(40px,6vw,96px)] gap-y-14 lg:grid-cols-[5fr_7fr] items-start`}>
          <div className="min-w-0">
            <p className={`${kicker} text-brick mb-3.5`}>Le Levant moderne</p>
            <h2 className={h2}>Ce qu’on cuisine</h2>
            <p className="mt-6 max-w-[28em] text-[17px] leading-[1.7] text-muted">
              Tout est fait maison, chaque jour. Pas de raccourci, pas de surgelé. Quelques signatures que les avis Google citent par leur prénom :
            </p>
            <figure className="mt-10 max-w-[420px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
                <Image
                  src="/images/galerie/IMG_9116.jpg"
                  alt="En cuisine chez Noya, dressage d’une assiette"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3.5 text-[13px] text-muted">En cuisine, tout est préparé le jour même.</figcaption>
            </figure>
          </div>
          <div className="min-w-0">
            <ul className="flex flex-col">
              {SIGNATURES.map((dish, i) => (
                <li
                  key={dish.name}
                  className={`py-8 border-dotted border-[#B9A894] ${i === 0 ? "border-y" : "border-b"}`}
                >
                  <div className="flex items-baseline gap-5">
                    <span aria-hidden="true" className="font-serif italic text-[22px] text-brick w-8 flex-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif font-semibold text-[clamp(28px,2.8vw,36px)] leading-[1.1]">{dish.name}</h3>
                      <p className="mt-2 text-[16px] leading-[1.65] text-muted">{dish.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/menu" className="inline-block mt-9 pb-0.5 font-bold text-[14px] border-b border-ink/50 hover:text-brick hover:border-brick">
              Voir toute la carte →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CARTE DES VINS ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] p-[clamp(32px,5vw,64px)] flex flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-8">
          <div className="flex-[1_1_300px] min-w-0">
            <p className={`${kicker} text-[#BFD5CB] mb-3`}>En construction</p>
            <h2 className="font-serif italic font-medium text-[clamp(34px,3.8vw,52px)] leading-[1.05]">
              Une carte des vins levantine, bientôt
            </h2>
          </div>
          <div className="flex-[2_1_420px] min-w-0 self-center">
            <p className="text-[17px] leading-[1.7] text-[#CFE0D8]">
              On construit une carte des vins à l’image de notre cuisine : des cuvées du Liban (Château Musar, Massaya, IXSIR…) et d’Israël (Domaine du Castel, Tulip, Golan Heights…) en regard de quelques classiques français. Une histoire que personne ne raconte vraiment dans le quartier, et qu’on a hâte de partager.
            </p>
            {/* TODO: ajouter ici le lien vers la page carte des vins quand elle sera publiée */}
          </div>
        </div>
      </section>

      {/* ============ AVIS & PRESSE ============ */}
      <section className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <p className={`${kicker} text-brick mb-3.5`}>Avis &amp; presse</p>
          <h2 className={`${h2} mb-12`}>Ce qu’on nous dit</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="pt-8 border-t-2 border-ink">
              <p className="font-serif font-medium text-[88px] leading-[0.9]">5/5</p>
              <p className="mt-3.5 font-bold">Sur Google</p>
              <p className="text-muted">140 avis</p>
            </div>
            <div className="pt-8 border-t-2 border-ink">
              <p className="font-serif font-medium text-[88px] leading-[0.9]">9,6</p>
              <p className="mt-3.5 font-bold">Sur 10 sur TheFork</p>
              <p className="text-muted">La mieux notée du 9ᵉ</p>
            </div>
            <div className="pt-8 border-t-2 border-ink">
              <p className="font-serif italic font-medium text-[72px] leading-[1.02]">Le Figaro</p>
              <p className="mt-3.5 font-bold">Vu dans la presse</p>
              <a
                href={FIGARO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-brick"
              >
                Lire l’article du Figaro, septembre 2025 →
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {QUOTES.map((q) => (
              <figure key={q} className="bg-paper border border-line rounded-[20px] p-8 flex flex-col">
                <blockquote className="font-serif italic text-[22px] leading-[1.4]">{q}</blockquote>
                <figcaption className="mt-auto pt-5 text-[13px] font-bold uppercase tracking-[0.16em] text-muted">
                  Avis Google · 5 étoiles
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA source="apropos" />
    </>
  );
}
