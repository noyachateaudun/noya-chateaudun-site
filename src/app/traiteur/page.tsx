import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema, getCateringSchema } from "@/lib/schema";
import TraiteurForm from "./TraiteurForm";

export const metadata: Metadata = {
  title: "Traiteur Levantin Paris — Buffets & Événements | Noya",
  description:
    "Buffets levantins pour vos événements : cocktails, anniversaires, séminaires. Houmous, falafels, pitas & mezze. Devis sur mesure.",
  openGraph: {
    title: "Traiteur Levantin Paris — Buffets & Événements | Noya",
    description:
      "Buffets levantins pour vos événements. Houmous, falafels, pitas & mezze. Devis sur mesure.",
    url: "https://www.eatnoya.com/traiteur",
    images: [{ url: "/og/traiteur.jpg", width: 1200, height: 630, alt: "Service traiteur levantin Noya, Paris" }],
  },
  alternates: { canonical: "https://www.eatnoya.com/traiteur" },
};

const EVENT_TYPES = [
  {
    title: "Événements Privés",
    desc: "Anniversaires, mariages, fêtes de famille. On s'adapte à vos envies pour créer un buffet levantin inoubliable.",
  },
  {
    title: "Corporate",
    desc: "Déjeuners d'entreprise, séminaires, team building. Impressionnez vos collaborateurs avec des saveurs authentiques du Levant.",
  },
  {
    title: "Sur Mesure",
    desc: "Chaque événement est unique. Créons ensemble le menu parfait, adapté à vos goûts et à votre budget.",
  },
];

export default function TraiteurPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Traiteur", url: "https://www.eatnoya.com/traiteur" },
  ]);
  const cateringSchema = getCateringSchema();

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

      {/* Hero */}
      <section className="pt-16 pb-12 px-5 text-center bg-gradient-to-br from-burgundy to-burgundy-dark text-cream">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Traiteur" }]} />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-light mb-3 mt-8">
            Service
          </p>
          <h1 className="font-serif text-[clamp(38px,7vw,60px)] font-normal mb-3">
            Traiteur Levantin
          </h1>
          <p className="font-accent text-xl text-cream/70 italic">
            La convivialité levantine, chez vous.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-accent text-xl text-dark leading-[1.85] font-light mb-6">
            Envie de faire voyager vos invités ? Noya s&apos;invite à votre table pour tous vos événements, avec des plateaux généreux et savoureux.
          </p>
          <p className="text-sm text-taupe leading-[2]">
            Notre service traiteur levantin à Paris vous propose des buffets méditerranéens composés de mezze authentiques, de pitas fraîches, de falafels croustillants et d&apos;houmous onctueux. Du cocktail dînatoire au buffet complet pour 50 personnes, nous adaptons nos formules à chaque événement. Tous nos plats sont préparés le jour même avec des produits frais, comme au restaurant.
          </p>
        </div>
      </section>

      {/* Photos traiteur */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { src: "/images/galerie/houmous bilameh.jpg", alt: "Houmous Bilameh, spécialité levantine pour buffet traiteur Noya Paris" },
            { src: "/images/galerie/IMG_9352.jpg", alt: "Salatim et mezze levantins, service traiteur Noya" },
            { src: "/images/galerie/IMG_9356.jpg", alt: "Assiette composée levantine pour événement privé, Noya Paris" },
          ].map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-dark font-normal">
              Nos prestations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENT_TYPES.map((item) => (
              <article key={item.title} className="bg-warm-white p-7 border border-cream-dark border-t-[3px] border-t-terracotta">
                <h3 className="font-serif text-xl text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-taupe leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formules indicatives */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-dark font-normal mb-6">
            Exemples de formules
          </h2>
          <div className="space-y-6">
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-2">Formule Cocktail</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Sélection de 6 salatim, mini pitas farcies, falafels, crudités & dips, boissons.
                <br />Idéal pour 20 à 50 personnes.
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-2">Formule Buffet Complet</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Houmous, baba ganoush, falafels, pitas, assiettes composées (parguit, falafel, shakshuka), salades fraîches, desserts levantins.
                <br />Idéal pour 30 à 100 personnes.
              </p>
            </div>
            <div className="bg-cream p-6 border border-cream-dark">
              <h3 className="font-serif text-lg text-burgundy mb-2">Formule Sur Mesure</h3>
              <p className="text-sm text-taupe leading-relaxed">
                Composez votre propre menu à partir de notre carte. Options vegan, végétariennes et sans gluten disponibles. Devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 px-5 bg-cream">
        <div className="max-w-2xl mx-auto">
          <TraiteurForm />
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
