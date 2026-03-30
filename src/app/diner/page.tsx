import type { Metadata } from "next";
import { MENU_SOIR } from "@/data/menu";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dîner Levantin à Paris — Soirée chez Noya Paris 9e",
  description:
    "Offrez-vous un dîner aux saveurs du Levant. Carte du soir, vins israéliens & libanais, ambiance chaleureuse au 8 rue de Châteaudun.",
  openGraph: {
    title: "Dîner Levantin à Paris — Soirée chez Noya Paris 9e",
    description:
      "Offrez-vous un dîner aux saveurs du Levant. Carte du soir, vins israéliens & libanais, ambiance chaleureuse.",
    url: "https://www.eatnoya.com/diner",
    images: [{ url: "/og/diner.jpg", width: 1200, height: 630, alt: "Dîner levantin chez Noya, Paris 9e" }],
  },
  alternates: { canonical: "https://www.eatnoya.com/diner" },
};

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

      {/* Hero */}
      <section className="pt-16 pb-12 px-5 text-center bg-gradient-to-b from-burgundy-dark to-dark text-cream">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Dîner" }]} />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-light mb-3 mt-8">
            Noya Châteaudun — Paris 9e
          </p>
          <h1 className="font-serif text-[clamp(38px,7vw,60px)] font-normal mb-4">
            Dîner Levantin
          </h1>
          <div className="w-12 h-px bg-gold mx-auto my-6" />
          <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-cream/70 max-w-lg mx-auto leading-[1.85] font-light italic">
            Le soir, Noya se transforme. L&apos;ambiance se fait plus intime, les saveurs plus profondes. Découvrez notre carte du soir, pensée pour le partage et la convivialité.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-dark font-normal mb-6">
            Une expérience culinaire levantine le soir
          </h2>
          <p className="text-sm text-taupe leading-[2] mb-5">
            Depuis mars 2025, Noya ouvre ses portes le soir pour vous offrir une expérience gastronomique unique au cœur du 9e arrondissement. Notre carte du dîner met à l&apos;honneur les grands classiques de la cuisine levantine, réinterprétés avec créativité et des produits frais de saison.
          </p>
          <p className="text-sm text-taupe leading-[2] mb-5">
            Commencez par nos salatim à partager — houmous crémeux, baba ganoush fumé, falafels dorés — puis laissez-vous tenter par nos plats signatures : une côte de bœuf à partager grillée aux épices levantines, des côtes d&apos;agneau marinées ou un filet de daurade saisi à la perfection.
          </p>
          <p className="text-sm text-taupe leading-[2]">
            Accompagnez votre repas de notre sélection de vins israéliens et libanais, choisis pour sublimer chaque plat. L&apos;ambiance chaleureuse de notre salle, entre murs de pierre et lumière tamisée, vous transportera directement au cœur du Levant.
          </p>
        </div>
      </section>

      {/* Menu du soir */}
      <section aria-labelledby="carte-soir-title" className="py-16 px-5 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
              Du mardi au samedi, 19h00 – 23h00
            </p>
            <h2 id="carte-soir-title" className="font-serif text-[clamp(28px,5vw,40px)] text-dark font-normal">
              Carte du Soir
            </h2>
          </div>

          {MENU_SOIR.sections.map((section) => (
            <div key={section.title} className="mb-14">
              <div className="flex items-baseline gap-3 mb-5">
                <h3 className="font-serif text-[clamp(22px,3.5vw,30px)] text-dark font-normal">{section.title}</h3>
                {section.subtitle && (
                  <span className="font-accent text-sm italic text-taupe">— {section.subtitle}</span>
                )}
              </div>
              <div className="border-t-2 border-gold pt-5">
                {section.items.map((item, i) => (
                  <article key={i} className="flex items-start gap-2 py-2.5 border-b border-cream-dark/30">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-dark">{item.name}</span>
                        {item.badge && (
                          <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 bg-sage/10 text-sage uppercase">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.desc && <p className="text-[13px] text-taupe leading-relaxed mt-1">{item.desc}</p>}
                    </div>
                    <span className="font-accent text-[17px] text-gold font-semibold whitespace-nowrap mt-0.5">{item.price}€</span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vins */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3">
            Nos vins
          </p>
          <h2 className="font-serif text-3xl text-dark font-normal mb-6">
            Carte des vins israéliens & libanais
          </h2>
          <p className="font-accent text-lg text-taupe italic leading-relaxed mb-6">
            Nous avons sélectionné des vins d&apos;Israël et du Liban pour accompagner chaque plat. Des cépages méditerranéens, des terroirs d&apos;exception, des accords parfaits avec notre cuisine levantine.
          </p>
          <p className="text-sm text-taupe">
            Demandez notre carte des vins à votre serveur. Nous serons ravis de vous conseiller le vin idéal pour accompagner votre repas.
          </p>
        </div>
      </section>

      {/* Ambiance */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-dark font-normal mb-6">
            L&apos;ambiance du soir
          </h2>
          <p className="text-sm text-taupe leading-[2]">
            Le soir, Noya revêt ses habits de lumière. L&apos;éclairage tamisé, la musique douce et l&apos;atmosphère conviviale créent le cadre idéal pour un dîner en amoureux, une soirée entre amis ou un repas de famille. Notre terrasse, habillée de zellige et de plantes vertes, vous offre un coin de tranquillité en plein cœur du quartier de Châteaudun, à deux pas de l&apos;Opéra et des Grands Boulevards.
          </p>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
