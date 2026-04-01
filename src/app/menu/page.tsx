import type { Metadata } from "next";
import { MENU_MIDI, MENU_SOIR, type MenuSection as MenuSectionType, type MenuItem } from "@/data/menu";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema, getMenuSchema } from "@/lib/schema";
import MenuTabs from "./MenuTabs";

export const metadata: Metadata = {
  title: "Carte & Menu — Noya Restaurant Levantin Paris 9",
  description:
    "Découvrez notre carte : entrées à partager, pitas signature, assiettes composées, houmous maison & desserts. Options vegan et sans gluten.",
  openGraph: {
    title: "Carte & Menu — Noya Restaurant Levantin Paris 9",
    description:
      "Découvrez notre carte : entrées à partager, pitas signature, assiettes composées, houmous maison & desserts.",
    url: "https://www.eatnoya.com/menu",
    images: [{ url: "/og/menu.jpg", width: 1200, height: 630, alt: "Carte du restaurant Noya, cuisine levantine, Paris 9e" }],
  },
  alternates: { canonical: "https://www.eatnoya.com/menu" },
};

function MenuSectionComponent({ section }: { section: MenuSectionType }) {
  return (
    <div className="mb-14">
      <div className="flex items-baseline gap-3 mb-5">
        <h3 className="font-serif text-[clamp(22px,3.5vw,30px)] text-dark font-normal">{section.title}</h3>
        {section.subtitle && (
          <span className="font-accent text-sm italic text-taupe">— {section.subtitle}</span>
        )}
      </div>
      <div className="border-t-2 border-gold pt-5">
        {section.items.map((item, i) => (
          <DishItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function DishItem({ item }: { item: MenuItem }) {
  return (
    <article className="flex items-start gap-2 py-2.5 border-b border-cream-dark/30">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-sm text-dark">{item.name}</span>
          {item.tag && <span className="text-[10px] text-taupe italic">{item.tag}</span>}
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
  );
}

export default function MenuPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "La Carte", url: "https://www.eatnoya.com/menu" },
  ]);
  const menuSchema = getMenuSchema();

  const midiContent = (
    <section aria-labelledby="midi-title" className="py-12 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Formule du midi banner */}
        <div className="bg-[#722F37] text-cream px-8 text-center mb-14 rounded-lg shadow-lg min-h-[280px] flex flex-col items-center justify-center py-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-light mb-3">
            Formule du Midi
          </p>
          <p className="font-serif text-[clamp(32px,6vw,46px)] font-normal leading-none">
            16<span className="text-[clamp(18px,3vw,24px)]">€</span>
          </p>
          <p className="font-accent text-[clamp(15px,2vw,18px)] text-cream/70 italic mt-4 leading-relaxed">
            {MENU_MIDI.formule.desc}
          </p>
          <div className="flex justify-center gap-6 mt-5 flex-wrap">
            {["Entrée", "Pita", "Boisson"].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border border-gold-light/40 flex items-center justify-center text-xs font-bold text-gold-light">
                  {i + 1}
                </div>
                <span className="text-xs uppercase tracking-wider text-cream">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 id="midi-title" className="font-serif text-3xl text-dark font-normal mb-10 text-center">
          Carte du Midi
        </h2>

        {MENU_MIDI.sections.map((section) => (
          <MenuSectionComponent key={section.title} section={section} />
        ))}

        <p className="text-center font-accent text-sm text-taupe italic mt-5">
          Tous nos plats sont préparés maison avec des produits frais de saison.
        </p>
      </div>
    </section>
  );

  const soirContent = (
    <section aria-labelledby="soir-title" className="py-12 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Bannière dîner */}
        <div className="bg-[#722F37] text-cream px-8 text-center mb-14 rounded-lg shadow-lg min-h-[280px] flex flex-col items-center justify-center py-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-light mb-3">
            Dîner · Paris 9e
          </p>
          <p className="font-serif text-[clamp(32px,6vw,46px)] font-normal leading-none">
            Carte du Soir
          </p>
          <p className="font-accent text-[clamp(15px,2vw,18px)] text-cream/70 italic mt-4 leading-relaxed">
            Tout est fait maison · Produits frais & de saison
          </p>
        </div>

        <h2 id="soir-title" className="font-serif text-3xl text-dark font-normal mb-10 text-center">
          Carte du Soir
        </h2>

        {MENU_SOIR.sections.map((section) => (
          <MenuSectionComponent key={`soir-${section.title}`} section={section} />
        ))}

        <p className="text-center font-accent text-sm text-taupe italic mt-5">
          Produits frais & de saison · Merci de nous informer de toute allergie.
        </p>
      </div>
    </section>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      {/* Header section */}
      <section className="pt-16 pb-2 px-5 text-center bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "La Carte" }]} />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3 mt-8">
            Noya Châteaudun
          </p>
          <h1 className="font-serif text-[clamp(38px,7vw,60px)] text-burgundy font-normal">
            La Carte
          </h1>
          <div className="w-12 h-px bg-gold mx-auto my-6" />
          <p className="font-accent text-[clamp(17px,2.2vw,21px)] text-taupe max-w-lg mx-auto leading-[1.85] font-light">
            De l&apos;authenticité dans chaque bouchée. Nos recettes sont inspirées des traditions levantines, préparées chaque jour avec des produits frais et beaucoup de passion.
          </p>
          <div className="flex gap-2 justify-center mt-6 flex-wrap">
            {["Fait maison", "Produits frais", "Végétarien", "Végan", "Sans gluten"].map((t) => (
              <span key={t} className="px-3 py-1 text-[10px] tracking-wider uppercase border border-sage/20 text-sage">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <div className="text-center py-4 bg-cream/50 border-b border-[#E5DFD5]">
        <p className="text-sm text-dark/50">
          <span className="text-[#D4A853]">&#x2605;</span> 5/5 sur Google &middot; 9.6/10 sur TheFork &middot; Plus de 220 clients conquis
        </p>
      </div>

      {/* Tabs + both menus (SSR for SEO) */}
      <div className="max-w-3xl mx-auto px-5">
        <MenuTabs midiContent={midiContent} soirContent={soirContent} />
      </div>

      <ReservationCTA />
    </>
  );
}
