import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT } from "@/data/restaurant";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import ReviewsCarousel from "@/components/ReviewsCarousel";
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

type SignatureDish = {
  name: string;
  tag: string;
  desc: string;
  price: string;
  image?: string;
  alt?: string;
};

const SIGNATURE_DISHES: SignatureDish[] = [
  {
    name: "Pita Pizel",
    tag: "Midi",
    desc: "Poulet pané croustillant mariné à la patate douce, aubergines, cornichons, oignons pickles, chou, sauce tartare.",
    price: "13,00€",
    image: "/images/galerie/pita of.jpg",
    alt: "Pita Pizel signature midi du restaurant Noya",
  },
  {
    name: "Houmous Bilameh",
    tag: "Midi",
    desc: "Houmous maison sublimé par notre tendre bœuf effiloché. Notre signature midi.",
    price: "16,50€",
    image: "/images/galerie/houmous bilameh.jpg",
    alt: "Houmous Bilameh signature midi, bistrot levantin Noya",
  },
  {
    name: "Côtes d'Agneau",
    tag: "Soir",
    desc: "Marinées aux épices du Levant, grillées à cœur. Sauce citron et herbes fraîches. 1 accompagnement inclus.",
    price: "28,00€",
    // TODO: réintégrer image quand cliché disponible (alt: "Côtes d'agneau aux épices du Levant, plat signature soir Noya")
  },
  {
    name: "Côte de Bœuf à Partager",
    tag: "Soir",
    desc: "Pièce noble à la braise, épices levantines, chimichurri. 2 accompagnements inclus. Pour deux.",
    price: "78,00€ /2",
    // TODO: réintégrer image quand cliché disponible (alt: "Côte de bœuf à partager grillée à la braise")
  },
  {
    name: "Shakshuka Noya",
    tag: "Soir",
    desc: "Œufs pochés, sauce tomate-poivrons, viande mijotée aux épices. La recette de référence.",
    price: "19,00€",
    image: "/images/galerie/the shakshuka.jpg",
    alt: "Shakshuka Noya, œufs pochés sauce tomate-poivrons",
  },
  {
    name: "Pain Perdu à la Rose",
    tag: "Soir",
    desc: "Challah dorée au beurre, crème à la rose, pistaches. Le dessert qui fait revenir les habitués.",
    price: "9,00€",
    // TODO: réintégrer image quand cliché disponible (alt: "Pain perdu à la rose, challah crème rose pistaches")
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Notre cuisine */}
      <section aria-labelledby="cuisine-title" className="py-24 px-5 bg-warm-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              Notre cuisine
            </p>
            <h2 id="cuisine-title" className="font-serif text-[clamp(28px,5vw,46px)] text-dark font-normal">
              Le Levant moderne, à la française
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Divider />
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe leading-[1.85] mb-4">
              Chez Noya, on cuisine le Levant comme un bistrot parisien. Houmous chauds aux pois chiches, côtes d&apos;agneau aux épices, shakshuka au feu doux, pain perdu à la rose — chaque plat est préparé chaque jour, à la main, avec des produits frais.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe leading-[1.85]">
              Le midi, formule à 16€ pour les bureaux du quartier. Le soir, on prend son temps : entrées à partager, plats signatures, desserts faits maison. Terrasse l&apos;été. À 5 minutes à pied de l&apos;Opéra et des théâtres du 9ᵉ.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plats signatures */}
      <section aria-labelledby="plats-title" className="py-24 px-5 bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
                Nos incontournables
              </p>
              <h2 id="plats-title" className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal">
                Plats signatures
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {SIGNATURE_DISHES.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 0.08} className="h-full">
                <article className="h-full flex flex-col bg-warm-white border border-cream-dark overflow-hidden group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,36,33,0.06)] transition-all duration-500">
                  {dish.image ? (
                    <div className="relative aspect-[3/4] bg-sand overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.alt ?? dish.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  {dish.image ? (
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-burgundy/60 font-semibold">
                          {dish.tag}
                        </span>
                        <span className="font-accent text-lg text-burgundy font-semibold whitespace-nowrap">{dish.price}</span>
                      </div>
                      <h3 className="font-serif text-lg text-dark min-h-[2.5rem] flex items-start mb-2">{dish.name}</h3>
                      <p className="text-sm text-taupe leading-relaxed flex-grow">{dish.desc}</p>
                    </div>
                  ) : (
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-burgundy/60 font-bold mb-4 self-start">
                        {dish.tag}
                      </span>
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <h3 className="font-serif text-2xl text-dark leading-tight">{dish.name}</h3>
                        <span className="font-accent text-2xl text-burgundy font-semibold whitespace-nowrap">{dish.price}</span>
                      </div>
                      <p className="text-sm text-taupe leading-relaxed flex-grow mt-2">{dish.desc}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-block px-8 py-3 border-[1.5px] border-burgundy/35 text-burgundy text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy hover:text-cream hover:shadow-lg hover:shadow-burgundy/15 hover:scale-[1.02] transition-all duration-400"
              >
                Voir toute la carte
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* L'équipe */}
      <section aria-labelledby="equipe-title" className="py-24 px-5 bg-warm-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
                Ceux qui vous accueillent
              </p>
              <h2 id="equipe-title" className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal">
                L&apos;équipe
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Reveal>
              <article className="bg-cream border border-[#E5DFD5] rounded-xl overflow-hidden h-full flex flex-col">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* TODO: réintégrer ici le portrait quand /images/equipe/ines.jpg sera disponible */}
                  <p className="text-[10px] uppercase tracking-[0.25em] text-burgundy/60 font-semibold mb-2">
                    En salle
                  </p>
                  <h3 className="font-serif text-2xl text-dark mb-3">Inès</h3>
                  <p className="text-sm text-taupe leading-relaxed">
                    Inès dirige la salle. C&apos;est elle que les avis Google citent comme «&nbsp;la restauratrice adorable&nbsp;». Elle présente la carte, conseille les plats, vous demande comment s&apos;est passé le repas.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="bg-cream border border-[#E5DFD5] rounded-xl overflow-hidden h-full flex flex-col">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* TODO: réintégrer ici le portrait quand /images/equipe/kalam.jpg sera disponible */}
                  <p className="text-[10px] uppercase tracking-[0.25em] text-burgundy/60 font-semibold mb-2">
                    En cuisine
                  </p>
                  <h3 className="font-serif text-2xl text-dark mb-3">Kalam</h3>
                  <p className="text-sm text-taupe leading-relaxed">
                    Notre chef, spécialiste de la cuisine du Levant. Avant Noya, il dirigeait la cuisine de Soum Soum. Toutes les recettes sortent de ses mains.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <blockquote className="bg-cream border border-[#E5DFD5] rounded-xl p-8 md:p-10 text-center max-w-3xl mx-auto">
              <p className="font-accent italic text-[clamp(17px,2.2vw,21px)] text-dark leading-[1.7] mb-4">
                «&nbsp;Délicieux et copieux, dans une ambiance chaleureuse et agréable. Nous avons été accueillis par une mère et sa fille, très souriantes et extrêmement gentilles. Merci&nbsp;! On reviendra.&nbsp;»
              </p>
              <footer className="text-xs uppercase tracking-[0.2em] text-burgundy/70 font-semibold">
                — Avis Google ★★★★★
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Comment déguster Noya */}
      <section className="py-24 px-5 bg-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
                3 façons de nous savourer
              </p>
              <h2 className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal">
                Comment déguster Noya
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="bg-warm-white rounded-xl p-8 text-center h-full flex flex-col border border-[#E5DFD5]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-burgundy/5 text-burgundy mb-4 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dark mb-2">Au restaurant</h3>
                <p className="text-sm text-dark/50 leading-relaxed mb-6 flex-grow">
                  Réservez votre table et vivez l&apos;expérience Noya en salle. Du mardi au samedi, midi et soir.
                </p>
                <ReserveButton
                  source="home"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
                >
                  Réserver une table
                </ReserveButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-warm-white rounded-xl p-8 text-center h-full flex flex-col border border-[#E5DFD5]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A5A3C]/5 text-[#4A5A3C] mb-4 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dark mb-2">À emporter</h3>
                <p className="text-sm text-dark/50 leading-relaxed mb-6 flex-grow">
                  Commandez en ligne et récupérez votre commande en 20 minutes au restaurant.
                </p>
                <a
                  href={RESTAURANT.links.emporter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#4A5A3C] text-cream rounded-lg text-sm font-medium hover:bg-[#3E4E32] transition-colors"
                >
                  Commander en Click & Collect
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-warm-white rounded-xl p-8 text-center h-full flex flex-col border border-[#E5DFD5]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4l3 3v5h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dark mb-2">Chez vous</h3>
                <p className="text-sm text-dark/50 leading-relaxed mb-6 flex-grow">
                  Faites-vous livrer via Deliveroo ou Uber Eats dans tout le 9e et les arrondissements voisins.
                </p>
                <Link
                  href="/commander"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-gold/30 text-dark rounded-lg text-sm font-medium hover:bg-gold/5 transition-colors"
                >
                  Se faire livrer
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section aria-labelledby="avis-title" className="py-24 px-5 bg-warm-white relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
                Ce que nos clients disent de nous
              </p>
              <h2 id="avis-title" className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal mb-2">
                Nos avis clients
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-center text-base md:text-lg text-dark/70 mb-10">
              <span className="text-[#D4A853]">&#x2605;</span> 5/5 sur Google &middot; 140 avis &middot; 9,6/10 sur TheFork — mieux noté du 9ᵉ
            </p>
          </Reveal>
          <Reveal>
            <ReviewsCarousel />
          </Reveal>
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a
                href={RESTAURANT.links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#E5DFD5] text-dark/60 rounded-lg text-sm hover:text-dark hover:border-dark/20 transition-colors"
              >
                Voir tous nos avis Google
              </a>
              <ReserveButton
                source="home"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
              >
                Réserver une table
              </ReserveButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Horaires + Infos pratiques */}
      <section aria-labelledby="infos-title" className="py-24 px-5 bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <h2 id="infos-title" className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal">
                Infos pratiques
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch">
            {[
              {
                title: "Adresse",
                content: (
                  <>
                    <p className="text-sm text-taupe leading-relaxed">
                      {RESTAURANT.address.street}<br />{RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                    </p>
                    <p className="text-xs text-taupe/60 mt-3">Métro : {RESTAURANT.access.metro.join(" · ")}</p>
                  </>
                ),
              },
              {
                title: "Horaires",
                content: (
                  <>
                    <p className="text-sm text-taupe leading-relaxed">
                      <strong className="text-dark">Déjeuner</strong> : {RESTAURANT.hours.lunch.time}<br />
                      <strong className="text-dark">Dîner</strong> : {RESTAURANT.hours.dinner.time}<br />
                      <span className="text-xs">{RESTAURANT.hours.lunch.days}</span>
                    </p>
                    <p className="text-xs text-taupe/60 mt-2">Fermé {RESTAURANT.hours.closed}</p>
                  </>
                ),
              },
              {
                title: "Contact",
                content: (
                  <p className="text-sm text-taupe leading-relaxed">
                    <a href={`tel:${RESTAURANT.telephone}`} className="text-burgundy hover:underline">{RESTAURANT.telephoneDisplay}</a><br />
                    <a href={`mailto:${RESTAURANT.email}`} className="text-taupe hover:text-burgundy transition-colors">{RESTAURANT.email}</a>
                  </p>
                ),
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="h-full bg-warm-white p-8 border border-[#E5DFD5] rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-400 flex flex-col items-center">
                  <h3 className="font-serif text-xl text-dark mb-4">{card.title}</h3>
                  <div className="flex-grow flex flex-col justify-start">{card.content}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traiteur & Événements */}
      <section className="py-24 px-5 bg-warm-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <Reveal>
          <div className="max-w-xl mx-auto relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              Service
            </p>
            <h2 className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal mb-4">
              Événements & Traiteur
            </h2>
            <p className="font-accent text-lg text-taupe italic leading-relaxed mb-8">
              Noya se déplace pour vos événements. Buffets levantins de 15 à 100+ personnes, pour vos anniversaires, séminaires et mariages.
            </p>
            <Link
              href="/traiteur"
              className="inline-block px-8 py-3.5 bg-burgundy text-cream text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy/90 hover:shadow-lg transition-all duration-400 mb-6"
            >
              Demander un devis gratuit
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <Link href="/traiteur/entreprise" className="text-burgundy/70 hover:text-burgundy underline underline-offset-4 transition-colors">Entreprises</Link>
              <span className="text-dark/20">|</span>
              <Link href="/traiteur/anniversaire" className="text-burgundy/70 hover:text-burgundy underline underline-offset-4 transition-colors">Anniversaires</Link>
              <span className="text-dark/20">|</span>
              <Link href="/traiteur/mariage" className="text-burgundy/70 hover:text-burgundy underline underline-offset-4 transition-colors">Mariages</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 px-5 bg-cream text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
        <Reveal>
          <div className="relative z-10">
            <Divider />
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe italic mb-6">
              Retrouvez notre univers au quotidien
            </p>
            <a
              href={RESTAURANT.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 border-[1.5px] border-burgundy/30 text-burgundy text-[11px] font-normal tracking-[0.2em] uppercase hover:bg-burgundy hover:text-cream hover:border-burgundy hover:scale-[1.02] transition-all duration-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              @noya.chateaudun
            </a>
          </div>
        </Reveal>
      </section>

      {/* Reservation CTA */}
      <section className="bg-gradient-to-br from-burgundy to-[#4A1F26] text-cream py-16 px-5 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-normal mb-3">
          Réservez votre table
        </h2>
        <p className="font-accent text-lg text-cream/80 italic mb-8 max-w-md mx-auto">
          Nous avons hâte de vous accueillir chez Noya, au cœur du 9e arrondissement.
        </p>
        <ReserveButton
          source="home"
          className="inline-block px-8 py-3.5 border-[1.5px] border-cream text-cream text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-burgundy transition-all"
        >
          Réserver une table
        </ReserveButton>
      </section>
    </>
  );
}
