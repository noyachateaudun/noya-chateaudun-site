import Link from "next/link";
import Image from "next/image";
import { RESTAURANT } from "@/data/restaurant";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const SIGNATURE_DISHES = [
  {
    name: "Pita Of",
    desc: "Poulet mariné, aubergine, salade Noya, oignons pickles, tehina & cornichons.",
    price: "13,00\u20ac",
    image: "/images/galerie/pita of.jpg",
    alt: "Pita Of signature du restaurant Noya, poulet mariné et aubergine",
  },
  {
    name: "Assiette Falafel",
    desc: "Falafels maison, houmous, salade Noya, aubergine, chou, pommes de terre & tehina.",
    price: "16,00\u20ac",
    image: "/images/galerie/assiete falafel.jpg",
    alt: "Assiette falafel avec houmous et tehina, cuisine levantine Noya",
  },
  {
    name: "The Shakshuka",
    desc: "Poivrons, tomates, oignons, \u00e9pices & \u0153uf. La recette qui r\u00e9chauffe l\u2019\u00e2me.",
    price: "16,00\u20ac",
    image: "/images/galerie/the shakshuka.jpg",
    alt: "Shakshuka aux poivrons et tomates, plat levantin fait maison chez Noya",
  },
  {
    name: "Houmous Bilameh",
    desc: "Notre houmous signature, sublim\u00e9 par du parguit marin\u00e9 & grill\u00e9.",
    price: "16,50\u20ac",
    image: "/images/galerie/houmous bilameh.jpg",
    alt: "Houmous Bilameh au poulet grillé, spécialité levantine Noya Paris 9e",
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
              Notre Cuisine
            </p>
            <h2 id="cuisine-title" className="font-serif text-[clamp(28px,5vw,46px)] text-dark font-normal">
              La convivialité levantine
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Divider />
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe leading-[1.85] mb-4">
              Née d&apos;une passion pour la cuisine méditerranéenne et les saveurs du Levant, Noya est un lieu où chaque plat raconte une histoire. Des falafels croustillants aux houmous onctueux, en passant par nos pitas généreusement garnies — tout est préparé chaque jour, à la main, avec des produits frais.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe leading-[1.85]">
              Au cœur du 9e arrondissement de Paris, entre Opéra et les Grands Boulevards, notre restaurant vous invite à un voyage culinaire au cœur du Levant et de la Méditerranée. Que vous veniez pour un déjeuner entre collègues ou un dîner aux chandelles, notre équipe vous accueille avec la chaleur qui fait l&apos;identité de Noya.
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
                  <div className="relative aspect-[3/4] bg-sand overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg text-dark min-h-[2.5rem] flex items-start">{dish.name}</h3>
                      <span className="font-accent text-lg text-burgundy font-semibold whitespace-nowrap">{dish.price}</span>
                    </div>
                    <p className="text-sm text-taupe leading-relaxed flex-grow">{dish.desc}</p>
                  </div>
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

      {/* Comment déguster Noya */}
      <section className="py-24 px-5 bg-warm-white relative overflow-hidden">
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
              <div className="bg-cream rounded-xl p-8 text-center h-full flex flex-col border border-[#E5DFD5]">
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
                <a
                  href={RESTAURANT.links.reservation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
                >
                  Réserver une table
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-cream rounded-xl p-8 text-center h-full flex flex-col border border-[#E5DFD5]">
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
              <div className="bg-cream rounded-xl p-8 text-center h-full flex flex-col border border-[#E5DFD5]">
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
      <section aria-labelledby="avis-title" className="py-24 px-5 bg-cream relative">
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
            <p className="text-center text-lg md:text-xl text-dark/70 mb-10">
              <span className="text-[#D4A853]">&#x2605;</span> 5/5 sur Google &middot; 9.6/10 sur TheFork &middot; 220+ avis
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
              <a
                href={RESTAURANT.links.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
              >
                Réserver une table
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Horaires + Infos pratiques */}
      <section aria-labelledby="infos-title" className="py-24 px-5 bg-warm-white relative overflow-hidden">
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
                <div className="h-full bg-cream p-8 border border-[#E5DFD5] rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-400 flex flex-col items-center">
                  <h3 className="font-serif text-xl text-dark mb-4">{card.title}</h3>
                  <div className="flex-grow flex flex-col justify-start">{card.content}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traiteur & Événements */}
      <section className="py-24 px-5 bg-cream text-center relative overflow-hidden">
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
      <section className="py-20 px-5 bg-warm-white text-center relative overflow-hidden">
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
        <p className="font-accent text-lg text-cream/60 italic mb-8 max-w-md mx-auto">
          Nous avons hâte de vous accueillir chez Noya, au cœur du 9e arrondissement.
        </p>
        <a
          href={RESTAURANT.links.reservation}
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
