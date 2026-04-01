import type { Metadata } from "next";
import Link from "next/link";
import { RESTAURANT } from "@/data/restaurant";
import { getBreadcrumbSchema } from "@/lib/schema";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Commander en ligne — Click & Collect & Livraison",
  description:
    "Commandez Noya en click & collect ou livraison. Houmous, pitas, falafels & shakshuka livrés chez vous. Deliveroo, Uber Eats ou retrait au restaurant.",
  openGraph: {
    title: "Commander en ligne — Noya Restaurant Levantin Paris 9e",
    description:
      "Click & collect ou livraison : retrouvez la saveur Noya chez vous.",
    url: "https://www.eatnoya.com/commander",
  },
  alternates: { canonical: "https://www.eatnoya.com/commander" },
};

const BESTSELLERS = [
  { name: "Pita Of", desc: "Poulet mariné, aubergine, salade Noya, oignons pickles, tehina & cornichons.", price: "13,00€" },
  { name: "Assiette Falafel", desc: "Falafels maison, houmous, salade Noya, aubergine, chou, pommes de terre & tehina.", price: "16,00€" },
  { name: "The Shakshuka", desc: "Poivrons, tomates, oignons, épices & œuf.", price: "16,00€" },
  { name: "Houmous Bilameh", desc: "Notre houmous signature, sublimé par du parguit mariné & grillé.", price: "16,50€" },
];

export default function CommanderPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Commander", url: "https://www.eatnoya.com/commander" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-14 px-5 text-center bg-gradient-to-br from-[#4A5A3C] via-[#3E4E32] to-[#2E3D24] text-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4A853] mb-4">
            Commander en ligne
          </p>
          <h1 className="font-serif text-[clamp(28px,5vw,46px)] font-normal leading-tight mb-4">
            Commandez en ligne
          </h1>
          <p className="font-accent text-lg text-cream/70 italic max-w-xl mx-auto">
            Retrouvez toute la saveur de Noya chez vous. Click & collect ou livraison.
          </p>
        </div>
      </section>

      {/* Click & Collect */}
      <section className="py-16 md:py-20 px-5 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-2xl border border-[#E5DFD5] p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A5A3C]/10 text-[#4A5A3C] mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-3">Click & Collect</h2>
              <p className="text-dark/60 mb-6 max-w-md mx-auto">
                Commandez en ligne et récupérez votre commande au restaurant. Prête en 20 minutes.
              </p>
              <a
                href={RESTAURANT.links.emporter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4A5A3C] text-cream rounded-lg text-sm font-medium hover:bg-[#3E4E32] transition-colors mb-6"
              >
                Commander en Click & Collect
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <div className="text-sm text-dark/40 space-y-1">
                <p><strong className="text-dark/60">Horaires de retrait :</strong> du mardi au samedi, 11h30–14h30 et 19h–22h30</p>
                <p><strong className="text-dark/60">Adresse :</strong> {RESTAURANT.address.street}, {RESTAURANT.address.postalCode} {RESTAURANT.address.city}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Livraison */}
      <section className="py-16 md:py-20 px-5 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy/60 mb-3">
                Livraison à domicile
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-dark">
                Faites-vous livrer
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal>
              <a
                href={RESTAURANT.links.deliveroo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl border border-[#E5DFD5] p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-[#00CCBC] mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto">
                    <rect width="24" height="24" rx="4" fill="currentColor" />
                    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">D</text>
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dark mb-2 group-hover:text-[#00CCBC] transition-colors">
                  Deliveroo
                </h3>
                <p className="text-sm text-dark/50">Commander sur Deliveroo</p>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={RESTAURANT.links.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl border border-[#E5DFD5] p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-[#06C167] mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto">
                    <rect width="24" height="24" rx="4" fill="#06C167" />
                    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">U</text>
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dark mb-2 group-hover:text-[#06C167] transition-colors">
                  Uber Eats
                </h3>
                <p className="text-sm text-dark/50">Commander sur Uber Eats</p>
              </a>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-center text-sm text-dark/40 mt-6">
              Livraison en ~30 minutes dans le 9e et arrondissements voisins
            </p>
          </Reveal>
        </div>
      </section>

      {/* Best-sellers */}
      <section className="py-16 md:py-20 px-5 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy/60 mb-3">
                Les plus commandés
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-dark">
                Nos best-sellers à emporter
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BESTSELLERS.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-[#E5DFD5] p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-base text-dark">{dish.name}</h3>
                    <span className="font-accent text-lg text-burgundy font-semibold whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="text-sm text-dark/50 leading-relaxed">{dish.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-8">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-sm text-burgundy font-medium hover:text-burgundy/70 transition-colors"
              >
                Voir toute la carte
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust banner */}
      <section className="py-8 px-5 bg-cream border-t border-[#E5DFD5] text-center">
        <p className="text-sm text-dark/60">
          <span className="text-[#D4A853]">&#x2605;</span> 5/5 sur Google &middot; M&ecirc;me qualit&eacute; en salle et &agrave; emporter
        </p>
      </section>
    </>
  );
}
