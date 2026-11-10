import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT } from "@/data/restaurant";
import ReserveButton from "@/components/ReserveButton";

export const metadata: Metadata = {
  title: "Noya — Bistrot levantin moderne · Paris 9ᵉ",
  description:
    "Bistrot levantin moderne au 8 rue de Châteaudun. Côtes d'agneau, shakshuka, pain perdu à la rose, fait maison. 5/5 Google sur 140 avis · 9,6/10 TheFork. Réservez à deux pas de l'Opéra.",
  keywords: [
    "bistrot levantin Paris 9",
    "restaurant levantin moderne",
    "côtes d'agneau Paris",
    "shakshuka Paris",
    "restaurant Châteaudun",
    "restaurant près de l'Opéra Paris",
  ],
  alternates: {
    canonical: "https://www.eatnoya.com",
  },
  openGraph: {
    title: "Noya — Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Une cuisine du Levant fait maison, servie comme un bistrot parisien. Inès & Kalam vous accueillent à Paris 9ᵉ.",
    url: "https://www.eatnoya.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noya — Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Une cuisine du Levant fait maison, servie comme un bistrot parisien. Inès & Kalam vous accueillent à Paris 9ᵉ.",
  },
};

const FIGARO_URL =
  "https://www.lefigaro.fr/gastronomie/noya-une-cantine-levantine-pour-les-dejeuners-rapides-a-paris-9e-20250919";

const PHOTO_DISHES = [
  {
    name: "Pita Pizel",
    tag: "Midi",
    price: "13 €",
    desc: "Poulet pané croustillant mariné à la patate douce, aubergines, pickles, sauce tartare.",
    image: "/images/galerie/IMG_9352.jpg",
    alt: "Pita Pizel au poulet pané croustillant",
  },
  {
    name: "Houmous Bilameh",
    tag: "La signature",
    price: "16,50 €",
    desc: "Houmous chaud, bœuf effiloché, tahina. Le plat qu’on commande dès la première visite.",
    image: "/images/galerie/houmous bilameh.jpg",
    alt: "Houmous Bilameh au bœuf effiloché",
  },
  {
    name: "Shakshuka Noya",
    tag: "Soir",
    price: "19 €",
    desc: "Œufs pochés, tomates, poivrons, viande de bœuf mijotée aux épices.",
    image: "/images/galerie/IMG_9357.jpg",
    alt: "Shakshuka Noya dans sa poêle en fonte",
  },
];

// Plats sans photo pour l'instant : présentés comme une ardoise de bistrot.
const ARDOISE = [
  {
    name: "Côte de bœuf à partager",
    price: "78 € pour 2",
    desc: "À la braise, épices levantines, chimichurri. Deux accompagnements.",
  },
  {
    name: "Côtes d’agneau",
    price: "28 €",
    desc: "Marinées aux épices du Levant, grillées à cœur, sauce citron et herbes.",
  },
  {
    name: "Pain perdu à la rose",
    price: "9 €",
    desc: "Challah dorée, crème à la rose, pistaches.",
  },
];

const STRIP = [
  { src: "/images/galerie/IMG_9358.jpg", alt: "Houmous maison, pois chiches et persil", w: "w-[460px]" },
  { src: "/images/galerie/IMG_9118.jpg", alt: "Étagère de la salle, vases verts et céramiques", w: "w-[300px]" },
  { src: "/images/galerie/IMG_9354.jpg", alt: "Houmous et challah grillée", w: "w-[460px]" },
  { src: "/images/galerie/IMG_9120.jpg", alt: "Table dressée devant le mur de zellige", w: "w-[300px]" },
  { src: "/images/galerie/IMG_9353.jpg", alt: "Falafels maison et tahina", w: "w-[460px]" },
];

const THEATRES = [
  { name: "Folies Bergère", time: "4 min à pied" },
  { name: "Opéra Garnier", time: "5 min à pied" },
  { name: "Casino de Paris", time: "7 min à pied" },
  { name: "Galeries Lafayette", time: "7 min à pied" },
  { name: "Théâtre de Paris", time: "8 min à pied" },
];

const QUOTES = [
  { text: "« On s’est régalées du début à la fin. Mention spéciale pour le pain perdu, vraiment un des meilleurs que j’ai mangés. »", source: "Avis Google" },
  { text: "« Un sans-faute pour toute l’équipe. Accueil souriant, shakshouka exceptionnelle. »", source: "Avis Google" },
  { text: "“One of our favourite meals during our two weeks in Paris.”", source: "Google Review", lang: "en" },
];

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const h2 = "font-serif font-medium text-[clamp(38px,4.4vw,60px)] leading-[1.02]";
const pill = "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

function Leader({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex-1 border-b border-dotted -translate-y-1.5 ${light ? "border-paper/45" : "border-[#B9A894]"}`}
    />
  );
}

export default function HomePage() {
  return (
    <>
      {/* ============ HAUT DE PAGE ============ */}
      <section className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24 flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12`}>
        <div className="flex-[1_1_460px] min-w-0">
          <p className={`${kicker} text-brick mb-7`}>Bistrot levantin moderne · Paris 9ᵉ</p>
          <h1 className="font-serif font-medium text-[clamp(52px,6.6vw,98px)] leading-[0.96] tracking-[-0.01em]">
            Le Levant,
            <br />
            servi comme
            <br />
            un bistrot <em className="italic text-brick">parisien.</em>
          </h1>
          <p className="mt-8 max-w-[31em] text-[18px] leading-[1.65] text-muted">
            Une cuisine du Levant faite maison, chaque jour. Le midi on file, le soir on partage. À cinq minutes à pied de l’Opéra et des théâtres.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ReserveButton source="home" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
              Réserver une table
            </ReserveButton>
            <Link href="/menu" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
              Voir la carte
            </Link>
          </div>
          <div className="mt-11 pt-6 border-t border-line flex flex-wrap gap-x-7 gap-y-3 text-[14px] text-muted">
            <span><strong className="text-ink">5/5</strong> · 140 avis Google</span>
            <span><strong className="text-ink">9,6/10</strong> · TheFork, mieux noté du 9ᵉ</span>
            <a href={FIGARO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brick">
              Vu dans <em>Le Figaro</em>
            </a>
          </div>
        </div>
        <figure className="flex-[1_1_440px] min-w-0 relative">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
            <Image
              src="/images/galerie/IMG_9117.jpg"
              alt="La devanture de Noya rue de Châteaudun, auvent terracotta"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute left-5 bottom-5 px-4 py-2.5 rounded-full bg-paper/95 text-[13px] font-medium">
            8 rue de Châteaudun · du mardi au samedi
          </figcaption>
        </figure>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* ============ MIDI / SOIR ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-4 mb-12">
          <h2 className={`${h2} max-w-[12em]`}>Le midi on file, le soir on reste.</h2>
          <p className="max-w-[26em] text-muted">Deux services, deux humeurs, la même cuisine faite maison.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="bg-paper border border-line rounded-3xl overflow-hidden flex flex-col">
            <div className="relative h-[300px] md:h-[340px]">
              <Image src="/images/galerie/IMG_9356.jpg" alt="Assiette composée du midi : falafels, houmous, légumes rôtis" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-8 md:px-9 md:pb-9 flex flex-col gap-3 flex-1">
              <p className={`${kicker} text-brick !tracking-[0.22em]`}>Le midi · {RESTAURANT.hours.lunch.time}</p>
              <h3 className="font-serif font-medium text-[40px] leading-[1.05]">Formule à 16 €</h3>
              <p className="text-muted">Entrée, pita ou assiette, boisson. Servi vite et bien pour les bureaux du quartier, ou à emporter.</p>
              <Link href="/menu" className="mt-auto pt-3 font-bold text-[14px] hover:text-brick">Voir la carte du midi →</Link>
            </div>
          </article>
          <article className="bg-ink text-warm-white rounded-3xl overflow-hidden flex flex-col">
            <div className="relative h-[300px] md:h-[340px]">
              <Image src="/images/galerie/IMG_9119.jpg" alt="Une main trempe la pita dans la shakshuka, mur de zellige en fond" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-[center_60%]" />
            </div>
            <div className="p-8 md:px-9 md:pb-9 flex flex-col gap-3 flex-1">
              <p className={`${kicker} text-terracotta !tracking-[0.22em]`}>Le soir · {RESTAURANT.hours.dinner.time}</p>
              <h3 className="font-serif font-medium text-[40px] leading-[1.05]">La carte bistrot</h3>
              <p className="text-[#D9CBBB]">Côte de bœuf à partager, côtes d’agneau grillées, carpaccio, ceviche de daurade, et des salatim pour commencer. On prend son temps.</p>
              <Link href="/menu" className="mt-auto pt-3 font-bold text-[14px] text-warm-white hover:text-terracotta">Voir la carte du soir →</Link>
            </div>
          </article>
        </div>
      </section>

      {/* ============ PLATS SIGNATURES ============ */}
      <section className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <p className={`${kicker} text-brick mb-3.5`}>La carte en six plats</p>
          <h2 className={`${h2} max-w-[14em] mb-12`}>Ce qu’on vient chercher chez Noya.</h2>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTO_DISHES.map((dish) => (
              <article key={dish.name}>
                <div className="relative h-[360px] md:h-[400px] overflow-hidden rounded-[20px]">
                  <Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="mt-5 flex justify-between items-baseline gap-4">
                  <h3 className="font-serif font-semibold text-[30px] leading-[1.1]">{dish.name}</h3>
                  <span className="font-serif text-[26px] text-brick whitespace-nowrap">{dish.price}</span>
                </div>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-[#76624F]">{dish.tag}</p>
                <p className="mt-2 text-[15px] text-muted">{dish.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-zellige text-warm-white rounded-3xl p-[clamp(28px,4vw,56px)] flex flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-8">
            <div className="flex-[1_1_260px] min-w-0">
              <p className={`${kicker} text-[#BFD5CB] mb-3`}>L’ardoise du soir</p>
              <h3 className="font-serif italic font-medium text-[clamp(34px,3.6vw,48px)] leading-[1.05]">
                Les pièces à partager, et le dessert dont parlent les avis.
              </h3>
            </div>
            <div className="flex-[2_1_420px] min-w-0 flex flex-col gap-6">
              {ARDOISE.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline gap-3.5">
                    <span className="font-serif text-[26px] md:text-[28px] font-semibold">{item.name}</span>
                    <Leader light />
                    <span className="font-serif text-[24px] md:text-[26px] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="mt-1 text-[15px] text-[#CFE0D8]">{item.desc}</p>
                </div>
              ))}
              <Link href="/menu" className="self-start mt-1.5 pb-0.5 font-bold text-[14px] text-warm-white border-b border-warm-white/50 hover:border-warm-white">
                Toute la carte →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANDE PHOTOS ============ */}
      <section aria-label="La maison en images" className="pt-[88px] pb-[72px]">
        <div className="flex gap-3.5 overflow-x-auto px-5 md:px-14 pb-3 snap-x">
          {STRIP.map((photo) => (
            <div key={photo.src} className={`relative h-[300px] md:h-[380px] ${photo.w} max-w-[80vw] flex-none overflow-hidden rounded-[18px] snap-start`}>
              <Image src={photo.src} alt={photo.alt} fill sizes="460px" className="object-cover" />
            </div>
          ))}
        </div>
        <div className={`${wrap} mt-5 flex flex-wrap justify-between gap-x-6 gap-y-2 text-[14px] text-muted`}>
          <span>Zellige, lumière naturelle, terrasse l’été. 28 couverts en salle, 24 dehors.</span>
          <a href={RESTAURANT.links.instagram} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-brick">
            @noya.chateaudun →
          </a>
        </div>
      </section>

      {/* ============ L'ÉQUIPE ============ */}
      <section className="bg-brick text-paper">
        <div className={`${wrap} py-24 md:py-[104px] flex flex-wrap items-center gap-x-[clamp(32px,6vw,96px)] gap-y-14`}>
          <div className="flex-[1_1_480px] min-w-0">
            <p className={`${kicker} text-[#F6D9CC] mb-3.5`}>Ceux qui vous reçoivent</p>
            <h2 className="font-serif font-medium text-[clamp(40px,4.6vw,64px)] leading-[1.02]">
              Inès en salle,
              <br />
              Kalam en cuisine.
            </h2>
            <p className="mt-7 max-w-[32em] text-[17px] text-[#F6E4DB]">
              Inès dirige la salle : elle présente la carte, conseille les plats et passe demander si tout s’est bien passé. Kalam, ancien chef de Soum Soum, signe toutes les recettes.
            </p>
            <figure className="mt-11">
              <blockquote className="font-serif italic text-[clamp(24px,2.4vw,32px)] leading-[1.3]">
                « Nous avons été accueillis par une mère et sa fille, très souriantes et extrêmement gentilles. On reviendra. »
              </blockquote>
              <figcaption className="mt-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-[#F6D9CC]">Avis Google · 5 étoiles</figcaption>
            </figure>
          </div>
          <figure className="flex-[1_1_360px] min-w-0 max-w-[460px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image src="/images/galerie/IMG_9116.jpg" alt="En cuisine chez Noya, dressage d’une assiette" fill sizes="(max-width: 1024px) 100vw, 460px" className="object-cover" />
            </div>
            <figcaption className="mt-3.5 text-[13px] text-[#F6E4DB]">En cuisine, tout est préparé le jour même.</figcaption>
          </figure>
        </div>
      </section>

      {/* ============ PREUVES ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="pt-8 border-t-2 border-ink">
            <p className="font-serif font-medium text-[88px] leading-[0.9]">5/5</p>
            <p className="mt-3.5 font-bold">Google</p>
            <p className="text-muted">140 avis</p>
          </div>
          <div className="pt-8 border-t-2 border-ink">
            <p className="font-serif font-medium text-[88px] leading-[0.9]">9,6</p>
            <p className="mt-3.5 font-bold">TheFork</p>
            <p className="text-muted">193 avis · mieux noté du 9ᵉ</p>
          </div>
          <div className="pt-8 border-t-2 border-ink">
            <p className="font-serif italic font-medium text-[72px] leading-[1.02]">Le Figaro</p>
            <p className="mt-3.5 font-bold">Dans la presse</p>
            <a href={FIGARO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brick">
              Lire l’article, septembre 2025
            </a>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.text} className="bg-paper border border-line rounded-[20px] p-8">
              <blockquote lang={q.lang} className="font-serif text-[24px] leading-[1.35]">{q.text}</blockquote>
              <figcaption className="mt-4 text-[13px] text-muted">{q.source}</figcaption>
            </figure>
          ))}
        </div>
        <a href={RESTAURANT.links.maps} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 font-bold text-[14px] hover:text-brick">
          Tous nos avis Google →
        </a>
      </section>

      {/* ============ AVANT UN SPECTACLE ============ */}
      <section className="bg-ink text-warm-white">
        <div className={`${wrap} py-24 flex flex-wrap gap-x-[clamp(32px,6vw,96px)] gap-y-12`}>
          <div className="flex-[1_1_420px] min-w-0">
            <p className={`${kicker} text-terracotta mb-3.5`}>Quartier des théâtres</p>
            <h2 className="font-serif font-medium text-[clamp(38px,4.4vw,58px)] leading-[1.04]">
              Avant un spectacle, on vous sert en moins d’une heure.
            </h2>
            <p className="mt-6 max-w-[28em] text-[#D9CBBB]">Prévenez-nous au moment de réserver, on s’organise en cuisine.</p>
            <ReserveButton source="home-spectacle" className={`${pill} mt-8 bg-warm-white text-ink hover:bg-terracotta`}>
              Réserver avant le spectacle
            </ReserveButton>
          </div>
          <ul className="flex-[1_1_380px] min-w-0 self-center flex flex-col gap-4">
            {THEATRES.map((t) => (
              <li key={t.name} className="flex items-baseline gap-3.5">
                <span className="font-serif text-[26px]">{t.name}</span>
                <Leader light />
                <span className="text-[#D9CBBB] whitespace-nowrap">{t.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ NOUS TROUVER ============ */}
      <section className={`${wrap} py-24`}>
        <h2 className="font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.04] mb-11">Nous trouver</h2>
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className={`${kicker} text-brick !tracking-[0.22em] mb-2.5`}>Adresse</p>
            <p>{RESTAURANT.address.street}<br />{RESTAURANT.address.postalCode} {RESTAURANT.address.city}</p>
            <p className="mt-2.5 text-[14px] text-muted">Métro Notre-Dame-de-Lorette (12), Cadet et Le Peletier (7)</p>
          </div>
          <div>
            <p className={`${kicker} text-brick !tracking-[0.22em] mb-2.5`}>Horaires</p>
            <p>{RESTAURANT.hours.lunch.days}<br />Midi {RESTAURANT.hours.lunch.time}<br />Soir {RESTAURANT.hours.dinner.time}</p>
            <p className="mt-2.5 text-[14px] text-muted">Fermé {RESTAURANT.hours.closed.toLowerCase()}</p>
          </div>
          <div>
            <p className={`${kicker} text-brick !tracking-[0.22em] mb-2.5`}>Contact</p>
            <p>
              <a href={`tel:${RESTAURANT.telephone}`} className="font-bold hover:text-brick">{RESTAURANT.telephoneDisplay}</a>
              <br />
              <a href={`mailto:${RESTAURANT.email}`} className="hover:text-brick">{RESTAURANT.email}</a>
            </p>
          </div>
          <div>
            <p className={`${kicker} text-brick !tracking-[0.22em] mb-2.5`}>À la maison</p>
            <p className="flex flex-col gap-1">
              <a href={RESTAURANT.links.emporter} target="_blank" rel="noopener noreferrer" className="hover:text-brick">Click &amp; collect, prêt en 20 min →</a>
              <a href={RESTAURANT.links.deliveroo} target="_blank" rel="noopener noreferrer" className="hover:text-brick">Deliveroo →</a>
              <a href={RESTAURANT.links.uberEats} target="_blank" rel="noopener noreferrer" className="hover:text-brick">Uber Eats →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ============ TRAITEUR ============ */}
      <section className={`${wrap} pb-24 md:pb-[104px]`}>
        <div className="bg-terracotta rounded-[28px] overflow-hidden">
          <div aria-hidden="true" className="h-3.5 bg-[repeating-linear-gradient(90deg,#D98A6C_0_28px,#F2C4AE_28px_56px)]" />
          <div className="p-[clamp(32px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-12 gap-y-7">
            <div className="flex-[1_1_420px] min-w-0">
              <p className={`${kicker} text-[#5C2418] mb-3`}>Traiteur &amp; privatisation</p>
              <h2 className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]">Vos événements, façon Noya.</h2>
              <p className="mt-4 max-w-[30em] text-[#3A2317]">
                Salatim, pièces salées et mini pitas pour vos réunions, cocktails et fêtes. Formules de 19 à 42 € par personne, dès 15 personnes.
              </p>
            </div>
            <Link href="/traiteur" className={`${pill} bg-ink text-warm-white hover:bg-brick`}>
              Voir la carte traiteur
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
