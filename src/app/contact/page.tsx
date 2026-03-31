import type { Metadata } from "next";
import { RESTAURANT } from "@/data/restaurant";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact & Réservation — Noya Restaurant Paris 9e",
  description:
    "Réservez chez Noya au 8 rue de Châteaudun, Paris 9e. Horaires, plan d'accès, téléphone et livraison Deliveroo & Uber Eats.",
  openGraph: {
    title: "Contact & Réservation — Noya Restaurant Paris 9e",
    description:
      "Réservez chez Noya au 8 rue de Châteaudun, Paris 9e. Horaires, plan d'accès, téléphone et livraison.",
    url: "https://www.eatnoya.com/contact",
    images: [{ url: "/og/contact.jpg", width: 1200, height: 630, alt: "Contact et accès Noya, restaurant levantin Paris 9e" }],
  },
  alternates: { canonical: "https://www.eatnoya.com/contact" },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Contact", url: "https://www.eatnoya.com/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-16 pb-12 px-5 text-center bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold mb-3 mt-8">
            Bienvenue
          </p>
          <h1 className="font-serif text-[clamp(38px,7vw,60px)] text-burgundy font-normal">
            Nous Trouver
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 px-5 bg-warm-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info column */}
          <div className="space-y-8">
            {/* Adresse */}
            <div className="flex items-start gap-4">
              <div className="text-burgundy mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-lg text-dark mb-1">Adresse</h2>
                <p className="text-sm text-taupe leading-relaxed">
                  {RESTAURANT.address.street}
                  <br />
                  {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                </p>
                <a
                  href={RESTAURANT.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-[11px] text-burgundy uppercase tracking-wider hover:underline"
                >
                  Itinéraire →
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="flex items-start gap-4">
              <div className="text-burgundy mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-lg text-dark mb-1">Horaires</h2>
                <p className="text-sm text-taupe leading-relaxed">
                  <strong className="text-dark">Déjeuner :</strong> {RESTAURANT.hours.lunch.days}, {RESTAURANT.hours.lunch.time}
                  <br />
                  <strong className="text-dark">Dîner :</strong> {RESTAURANT.hours.dinner.days}, {RESTAURANT.hours.dinner.time}
                  <br />
                  <span className="text-taupe/60">Fermé {RESTAURANT.hours.closed}</span>
                </p>
              </div>
            </div>

            {/* Téléphone + email */}
            <div className="flex items-start gap-4">
              <div className="text-burgundy mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-lg text-dark mb-1">Contact</h2>
                <p className="text-sm text-taupe leading-relaxed">
                  <a href={`tel:${RESTAURANT.telephone}`} className="text-burgundy hover:underline">
                    {RESTAURANT.telephoneDisplay}
                  </a>
                  <br />
                  <a href={`mailto:${RESTAURANT.email}`} className="text-taupe hover:text-burgundy transition-colors">
                    {RESTAURANT.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4">
              <div className="text-burgundy">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <a
                href={RESTAURANT.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-dark hover:text-burgundy transition-colors"
              >
                @noya.chateaudun
              </a>
            </div>

            {/* Accès transports */}
            <div>
              <h2 className="font-serif text-lg text-dark mb-2">Accès</h2>
              <p className="text-sm text-taupe leading-relaxed">
                <strong className="text-dark">Métro :</strong> {RESTAURANT.access.metro.join(" · ")}
                <br />
                <strong className="text-dark">Bus :</strong> lignes {RESTAURANT.access.bus.join(", ")}
              </p>
            </div>

            {/* Livraison */}
            <div>
              <h2 className="font-serif text-lg text-dark mb-3">Livraison & Click&Collect</h2>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={RESTAURANT.links.deliveroo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider border border-cream-dark text-taupe hover:border-burgundy hover:text-burgundy transition-colors"
                >
                  Deliveroo
                </a>
                <a
                  href={RESTAURANT.links.uberEats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider border border-cream-dark text-taupe hover:border-burgundy hover:text-burgundy transition-colors"
                >
                  Uber Eats
                </a>
                <a
                  href={RESTAURANT.links.emporter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider border border-cream-dark text-taupe hover:border-burgundy hover:text-burgundy transition-colors"
                >
                  Click & Collect
                </a>
              </div>
            </div>
          </div>

          {/* Map column */}
          <div>
            <div className="w-full aspect-[4/3] border border-cream-dark overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2!2d2.3368!3d48.8766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzM1LjgiTiAywrAyMCcxNy4xIkU!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noya Châteaudun — 8 rue de Châteaudun, 75009 Paris"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={RESTAURANT.links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-burgundy text-cream text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy-light transition-colors"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
