import Link from "next/link";
import Image from "next/image";
import { RESTAURANT } from "@/data/restaurant";
import { REVIEWS } from "@/data/reviews";
import ReservationCTA from "@/components/ReservationCTA";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";

const SIGNATURE_DISHES = [
  {
    name: "Pita Of",
    desc: "Poulet mariné, aubergine, salade Noya, oignons pickles, tehina & cornichons.",
    price: "13,00€",
    image: "/images/galerie/pita of.jpg",
    alt: "Pita Of signature du restaurant Noya, poulet mariné et aubergine",
  },
  {
    name: "Assiette Falafel",
    desc: "Falafels maison, houmous, salade Noya, aubergine, chou, pommes de terre & tehina.",
    price: "16,00€",
    image: "/images/galerie/assiete falafel.jpg",
    alt: "Assiette falafel avec houmous et tehina, cuisine levantine Noya",
  },
  {
    name: "The Shakshuka",
    desc: "Poivrons, tomates, oignons, épices & œuf. La recette qui réchauffe l\u2019âme.",
    price: "16,00€",
    image: "/images/galerie/the shakshuka.jpg",
    alt: "Shakshuka aux poivrons et tomates, plat levantin fait maison chez Noya",
  },
  {
    name: "Houmous Bilameh",
    desc: "Notre houmous signature, sublimé par du parguit mariné & grillé.",
    price: "16,50€",
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
        {/* Warm grain */}
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

      {/* Avis clients */}
      <section aria-labelledby="avis-title" className="py-24 px-5 bg-warm-white relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
                Ce que disent nos clients
              </p>
              <h2 id="avis-title" className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal mb-3">
                Note {RESTAURANT.rating.value}/10 sur TheFork
              </h2>
              <p className="font-accent text-lg text-taupe italic">
                {RESTAURANT.rating.count}+ avis vérifiés
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="bg-cream p-6 border border-cream-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(44,36,33,0.05)] transition-all duration-400">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill={j < Math.round(review.rating / 2) ? "#C4883A" : "none"} stroke="#C4883A" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gold font-semibold">{review.rating}/10</span>
                  </div>
                  <p className="text-sm text-taupe leading-relaxed mb-3">{review.text}</p>
                  <div className="flex items-center justify-between text-xs text-taupe/70">
                    <span className="font-semibold text-dark">{review.author}</span>
                    <span>{review.platform}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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
                <div className="h-full bg-warm-white p-8 border border-cream-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(44,36,33,0.05)] transition-all duration-400 flex flex-col items-center">
                  <h3 className="font-serif text-xl text-dark mb-4">{card.title}</h3>
                  <div className="flex-grow flex flex-col justify-start">{card.content}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traiteur teaser */}
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
              Traiteur & Événements
            </h2>
            <p className="font-accent text-lg text-taupe italic leading-relaxed mb-8">
              Envie de faire voyager vos invités ? Noya s&apos;invite chez vous pour tous vos événements : anniversaires, mariages, séminaires, cocktails.
            </p>
            <Link
              href="/traiteur"
              className="inline-block px-8 py-3.5 border-[1.5px] border-burgundy/35 text-burgundy text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy hover:text-cream hover:shadow-lg hover:shadow-burgundy/15 hover:scale-[1.02] transition-all duration-400"
            >
              Demander un devis
            </Link>
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
              @eatnoya
            </a>
          </div>
        </Reveal>
      </section>

      <ReservationCTA />
    </>
  );
}
