import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBreadcrumbSchema, getCateringSchema } from "@/lib/schema";
import Reveal from "@/components/Reveal";
import TraiteurForm from "./TraiteurForm";
import { FAQ_ITEMS } from "@/data/faq";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Traiteur Levantin Paris — Buffets & Événements sur mesure",
  description:
    "Traiteur levantin à Paris : buffets mezze, houmous, pitas & plats du Levant pour vos événements. Cocktails, anniversaires, séminaires, mariages. Devis gratuit.",
  keywords: [
    "traiteur levantin Paris",
    "buffet mezze événement",
    "traiteur méditerranéen Paris",
    "traiteur entreprise Paris",
    "buffet levantin mariage",
  ],
  openGraph: {
    title: "Traiteur Levantin Paris — Buffets & Événements sur mesure | Noya",
    description:
      "Buffets mezze, houmous, pitas & plats du Levant pour vos réceptions, séminaires et fêtes privées. Devis gratuit.",
    url: "https://www.eatnoya.com/traiteur",
    images: [
      {
        url: "/og/traiteur.jpg",
        width: 1200,
        height: 630,
        alt: "Service traiteur levantin Noya, Paris",
      },
    ],
  },
  alternates: { canonical: "https://www.eatnoya.com/traiteur" },
};

const FORMULES = [
  {
    name: "Formule Mezze",
    ideal: "Cocktails, afterworks, pots de départ",
    includes: [
      "6 mezze à partager (houmous, baba ghanoush, falafel, taboulé…)",
      "Pitas fraîches",
      "Boissons soft",
    ],
    minimum: "15 personnes",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-burgundy/60">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    name: "Formule Festin",
    ideal: "Anniversaires, fêtes privées, dîners d'entreprise",
    includes: [
      "8 mezze variés",
      "2 plats chauds (shakshuka, poulet mariné aux épices)",
      "Pitas fraîches",
      "Desserts orientaux",
      "Boissons",
    ],
    minimum: "20 personnes",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-burgundy/60">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    name: "Formule Sur Mesure",
    ideal: "Mariages, lancements, grands événements",
    includes: [
      "Carte entièrement personnalisée",
      "Service sur place possible",
      "Accord mets & vins israéliens & libanais",
    ],
    minimum: "30 personnes",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-burgundy/60">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

const AVANTAGES = [
  {
    title: "Tout est fait maison",
    desc: "Chaque matin, nos cuisiniers préparent tous les plats avec des produits frais. Aucun industriel, aucun raccourci.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Options pour tous",
    desc: "Vegan, végétarien, sans gluten — la cuisine levantine est naturellement inclusive. Tous vos invités se régaleront.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Livraison Paris & IDF",
    desc: "Nous livrons dans tout Paris et en Île-de-France. Frais de livraison inclus dans le devis.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Format convivial",
    desc: "Le mezzé, c'est le partage. Un format coloré et généreux qui fait de chaque événement un moment inoubliable.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const TEMOIGNAGES = [
  {
    quote:
      "Noya a assuré le buffet de notre séminaire annuel pour 40 personnes. Le houmous, les falafels, les pitas — tout était incroyablement frais. Nos collaborateurs en parlent encore. On refera appel à eux sans hésiter.",
    author: "Sophie M.",
    context: "Séminaire d'entreprise, 40 personnes",
  },
  {
    quote:
      "Pour les 30 ans de mon mari, j'ai commandé la formule Festin. Le buffet était magnifique, coloré, et tout le monde a adoré — même ma belle-mère qui est difficile ! Le service était au top du début à la fin.",
    author: "Camille R.",
    context: "Anniversaire privé, 30 personnes",
  },
  {
    quote:
      "On a fait appel à Noya pour le cocktail de lancement de notre nouveau produit. 60 personnes, un format mezzé parfait pour un cocktail debout. Original, gourmand, et les options vegan ont été très appréciées.",
    author: "Thomas D.",
    context: "Cocktail professionnel, 60 personnes",
  },
];

export default function TraiteurPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
  ]);
  const cateringSchema = getCateringSchema();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 px-5 text-center bg-gradient-to-br from-burgundy via-[#5E2830] to-[#4A1F26] text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hero-diamonds" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#hero-diamonds)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-light mb-4">
            Service Traiteur
          </p>
          <h1 className="font-serif text-[clamp(30px,6vw,52px)] font-normal leading-tight mb-4">
            Traiteur Levantin à Paris
          </h1>
          <p className="font-accent text-lg md:text-xl text-cream/70 italic mb-8 max-w-xl mx-auto">
            Mezze, houmous, pitas & plats du Levant pour vos réceptions, séminaires et fêtes privées
          </p>
          <a
            href="#devis"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-cream text-burgundy rounded-lg text-sm font-medium hover:bg-white transition-colors"
          >
            Demander un devis gratuit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Trust banner */}
      <div className="text-center py-4 bg-cream/50 border-b border-[#E5DFD5]">
        <p className="text-sm text-dark/50">
          <span className="text-[#D4A853]">&#x2605;</span> 5/5 sur Google &middot; 9.6/10 sur TheFork &middot; La qualité restaurant pour vos événements
        </p>
      </div>

      {/* Photos */}
      <section className="py-12 px-5 bg-warm-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { src: "/images/galerie/houmous bilameh.jpg", alt: "Houmous Bilameh, spécialité levantine pour buffet traiteur Noya Paris" },
            { src: "/images/galerie/IMG_9352.jpg", alt: "Salatim et mezze levantins, service traiteur Noya" },
            { src: "/images/galerie/IMG_9356.jpg", alt: "Assiette composée levantine pour événement privé, Noya Paris" },
          ].map((photo) => (
            <Reveal key={photo.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 md:py-20 px-5 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy/60 mb-3">
                Nos offres
              </p>
              <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-dark mb-4">
                Nos formules traiteur
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="font-accent text-center text-dark/50 italic text-[15px] mb-12 max-w-xl mx-auto">
              Budget moyen&nbsp;: 20 à 50€ par personne selon la formule, le nombre d&apos;invités et les options choisies. Demandez votre devis personnalisé.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMULES.map((formule, i) => (
              <Reveal key={formule.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#E5DFD5] p-7 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="mb-4">{formule.icon}</div>
                  <h3 className="font-serif text-xl text-dark mb-2">
                    {formule.name}
                  </h3>
                  <p className="text-[12px] uppercase tracking-wider text-burgundy/60 font-medium mb-4">
                    {formule.ideal}
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {formule.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-dark/60 leading-relaxed"
                      >
                        <span className="text-burgundy/40 mt-0.5 flex-shrink-0">
                          &#x2713;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-dark/40 mb-4">
                    Minimum&nbsp;: {formule.minimum}
                  </p>
                  <a
                    href="#devis"
                    className="inline-flex items-center justify-center w-full py-2.5 border border-burgundy/20 text-burgundy rounded-lg text-sm font-medium hover:bg-burgundy/5 transition-colors"
                  >
                    Demander un devis
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Noya */}
      <section className="py-16 md:py-20 px-5 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-dark">
                Pourquoi choisir Noya
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AVANTAGES.map((av, i) => (
              <Reveal key={av.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-burgundy/5 text-burgundy mb-4">
                    {av.icon}
                  </div>
                  <h3 className="font-serif text-base text-dark mb-2">
                    {av.title}
                  </h3>
                  <p className="text-sm text-dark/50 leading-relaxed">
                    {av.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 md:py-20 px-5 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy/60 mb-3">
                Témoignages
              </p>
              <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-dark">
                Ils nous ont fait confiance
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEMOIGNAGES.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#E5DFD5] p-7 h-full flex flex-col">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-burgundy/20 mb-4 flex-shrink-0">
                    <path
                      fill="currentColor"
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"
                    />
                  </svg>
                  <p className="text-sm text-dark/60 leading-relaxed italic flex-grow mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-dark">
                      {t.author}
                    </p>
                    <p className="text-xs text-dark/40">{t.context}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-5 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy/60 mb-3">
                Questions fréquentes
              </p>
              <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-dark">
                Tout savoir sur notre service traiteur
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 md:py-20 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <TraiteurForm />
          </Reveal>
        </div>
      </section>

      {/* Sous-pages / Prestations */}
      <section className="py-12 px-5 bg-cream border-t border-[#E5DFD5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/30 mb-4">
            Nos prestations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <Link
              href="/traiteur/entreprise"
              className="text-sm text-burgundy hover:text-burgundy/70 underline underline-offset-4 transition-colors"
            >
              Entreprise
            </Link>
            <span className="text-dark/20">|</span>
            <Link
              href="/traiteur/anniversaire"
              className="text-sm text-burgundy hover:text-burgundy/70 underline underline-offset-4 transition-colors"
            >
              Anniversaire
            </Link>
            <span className="text-dark/20">|</span>
            <Link
              href="/traiteur/mariage"
              className="text-sm text-burgundy hover:text-burgundy/70 underline underline-offset-4 transition-colors"
            >
              Mariage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
