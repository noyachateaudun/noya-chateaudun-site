import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MENU_SOIR } from "@/data/menu";
import ReservationCTA from "@/components/ReservationCTA";
import ReserveButton from "@/components/ReserveButton";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dîner Levantin à Paris — Soirée chez Noya Paris 9e",
  description:
    "Côte de bœuf à partager, côtes d'agneau, salatim et vins israéliens & libanais. Bistrot levantin moderne au 8 rue de Châteaudun, Paris 9e.",
  openGraph: {
    title: "Dîner Levantin à Paris — Soirée chez Noya Paris 9e",
    description:
      "Côte de bœuf à partager, côtes d'agneau, salatim et vins israéliens & libanais. Bistrot levantin moderne au cœur du 9e.",
    url: "https://www.eatnoya.com/diner",
    images: [{ url: "/og/diner.jpg", width: 1200, height: 630, alt: "Dîner levantin chez Noya, Paris 9e" }],
  },
  alternates: { canonical: "https://www.eatnoya.com/diner" },
};

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const h2 = "font-serif font-medium text-[clamp(38px,4.4vw,60px)] leading-[1.02]";
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

function Leader({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex-1 min-w-[24px] border-b border-dotted -translate-y-1.5 ${light ? "border-paper/45" : "border-[#B9A894]"}`}
    />
  );
}

export default function DinerPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Dîner", url: "https://www.eatnoya.com/diner" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* En-tête */}
      <section className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-brick">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">Dîner</span>
        </nav>
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Noya Châteaudun · Paris 9ᵉ</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              Dîner <em className="italic text-brick">levantin</em>
            </h1>
            <p className="mt-7 max-w-[31em] text-[18px] leading-[1.65] text-muted">
              Le soir, Noya se transforme. L’ambiance se fait plus intime, les saveurs plus profondes. Découvrez notre carte du soir, pensée pour le partage et la convivialité.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ReserveButton source="diner" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
                Réserver une table
              </ReserveButton>
              <a href="#carte-soir" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}>
                Voir la carte du soir
              </a>
            </div>
          </div>
          <div className="flex-[1_1_380px] min-w-0 max-w-[520px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/IMG_9119.jpg"
                alt="Une main trempe la pita dans la shakshuka, mur de zellige en fond"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-[center_60%]"
              />
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* Description */}
      <section className={`${wrap} py-24 md:py-[104px] flex flex-wrap gap-x-[clamp(32px,6vw,96px)] gap-y-10`}>
        <div className="flex-[1_1_380px] min-w-0">
          <p className={`${kicker} text-brick mb-3.5`}>Le soir</p>
          <h2 className={`${h2} max-w-[12em]`}>Une expérience culinaire levantine le soir</h2>
        </div>
        <div className="flex-[1_1_460px] min-w-0 flex flex-col gap-5 text-[17px] leading-[1.7] text-muted">
          <p>
            Depuis mars 2025, Noya ouvre ses portes le soir pour vous offrir une expérience gastronomique unique au cœur du 9e arrondissement. Notre carte du dîner met à l’honneur les grands classiques de la cuisine levantine, réinterprétés avec créativité et des produits frais de saison.
          </p>
          <p>
            Commencez par nos salatim à partager — houmous crémeux, baba ganoush fumé, falafels dorés — puis laissez-vous tenter par nos plats signatures : une côte de bœuf à partager grillée aux épices levantines, des côtes d’agneau marinées ou un filet de daurade saisi à la perfection.
          </p>
          <p>
            Accompagnez votre repas de notre sélection de vins israéliens et libanais, choisis pour sublimer chaque plat. L’ambiance chaleureuse de notre salle, entre murs de pierre et lumière tamisée, prolonge naturellement le moment.
          </p>
        </div>
      </section>

      {/* Carte du soir */}
      <section id="carte-soir" aria-labelledby="carte-soir-title" className="bg-ink text-warm-white scroll-mt-24">
        <div className={`${wrap} py-24 md:py-[104px]`}>
          <div className="flex flex-wrap justify-between items-end gap-x-12 gap-y-4 mb-14">
            <div>
              <p className={`${kicker} text-terracotta mb-3.5`}>Du mardi au samedi, 19h00 – 23h00</p>
              <h2 id="carte-soir-title" className={h2}>Carte du Soir</h2>
            </div>
            <Link href="/menu" className="font-bold text-[14px] text-warm-white hover:text-terracotta">
              Toutes nos cartes →
            </Link>
          </div>

          <div className="grid gap-x-[clamp(40px,6vw,96px)] gap-y-16 lg:grid-cols-2">
            {MENU_SOIR.sections.map((section) => (
              <div key={section.title} className="min-w-0">
                <div className="pb-4 mb-6 border-b border-warm-white/25">
                  <h3 className="font-serif font-semibold text-[34px] leading-[1.1]">{section.title}</h3>
                  {section.subtitle && (
                    <p className="mt-1 text-[14px] text-[#D9CBBB]">{section.subtitle}</p>
                  )}
                </div>
                <ul className="flex flex-col gap-4">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-bold">
                          {item.name}
                          {item.badge && (
                            <span className="ml-2 px-2 py-0.5 rounded-full bg-zellige text-warm-white text-[11px] font-bold tracking-[0.08em] uppercase align-[2px] whitespace-nowrap">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <Leader light />
                        <span className="font-serif text-[22px] text-terracotta whitespace-nowrap">{item.price} €</span>
                      </div>
                      {item.desc && <p className="mt-0.5 text-[14px] text-[#D9CBBB]">{item.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vins */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] p-[clamp(28px,5vw,64px)] flex flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-8">
          <div className="flex-[1_1_320px] min-w-0">
            <p className={`${kicker} text-[#BFD5CB] mb-3.5`}>Nos vins</p>
            <h2 className="font-serif italic font-medium text-[clamp(34px,3.8vw,50px)] leading-[1.05]">
              Carte des vins israéliens &amp; libanais
            </h2>
          </div>
          <div className="flex-[1_1_420px] min-w-0 flex flex-col gap-5">
            <p className="font-serif text-[clamp(22px,2.2vw,28px)] leading-[1.35]">
              Nous avons sélectionné des vins d’Israël et du Liban pour accompagner chaque plat. Des cépages méditerranéens, des terroirs d’exception, des accords parfaits avec notre cuisine levantine.
            </p>
            <p className="text-[#CFE0D8]">
              Demandez notre carte des vins à votre serveur. Nous serons ravis de vous conseiller le vin idéal pour accompagner votre repas.
            </p>
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px] flex flex-wrap items-center gap-x-[clamp(32px,6vw,96px)] gap-y-12`}>
          <div className="flex-[1_1_360px] min-w-0 max-w-[460px]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/IMG_9120.jpg"
                alt="Table dressée devant le mur de zellige"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-3.5`}>Ambiance</p>
            <h2 className={h2}>L’ambiance du soir</h2>
            <p className="mt-7 max-w-[34em] text-[17px] leading-[1.7] text-muted">
              Le soir, Noya revêt ses habits de lumière. L’éclairage tamisé, la musique douce et l’atmosphère conviviale créent le cadre idéal pour un dîner en amoureux, une soirée entre amis ou un repas de famille. Notre terrasse, habillée de zellige et de plantes vertes, vous offre un coin de tranquillité en plein cœur du quartier de Châteaudun, à deux pas de l’Opéra et des Grands Boulevards.
            </p>
            <ReserveButton source="diner" className={`${pill} mt-9 bg-ink text-warm-white hover:bg-brick`}>
              Réserver pour le dîner
            </ReserveButton>
          </div>
        </div>
      </section>

      <ReservationCTA source="diner" />
    </>
  );
}
