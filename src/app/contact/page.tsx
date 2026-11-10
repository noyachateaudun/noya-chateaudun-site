import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT } from "@/data/restaurant";
import ReserveButton from "@/components/ReserveButton";
import ReservationCTA from "@/components/ReservationCTA";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nous Trouver — Noya · Bistrot levantin moderne · Paris 9ᵉ",
  description:
    "Noya, bistrot levantin moderne au 8 rue de Châteaudun, Paris 9ᵉ. À 5 minutes de l'Opéra. Téléphone, horaires, accès, livraison.",
  openGraph: {
    title: "Nous Trouver — Noya · Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Noya, bistrot levantin moderne au 8 rue de Châteaudun, Paris 9ᵉ. À 5 minutes de l'Opéra. Téléphone, horaires, accès, livraison.",
    url: "https://www.eatnoya.com/contact",
    images: [{ url: "/og/contact.jpg", width: 1200, height: 630, alt: "Contact et accès Noya, bistrot levantin moderne Paris 9ᵉ" }],
  },
  twitter: {
    title: "Nous Trouver — Noya · Bistrot levantin moderne · Paris 9ᵉ",
    description:
      "Noya, bistrot levantin moderne au 8 rue de Châteaudun, Paris 9ᵉ. À 5 minutes de l'Opéra. Téléphone, horaires, accès, livraison.",
  },
  alternates: { canonical: "https://www.eatnoya.com/contact" },
};

const NEARBY = [
  { name: "Folies Bergère", time: "4 min à pied" },
  { name: "Opéra Garnier", time: "5 min à pied" },
  { name: "Casino de Paris", time: "7 min à pied" },
  { name: "Galeries Lafayette", time: "7 min à pied" },
  { name: "Théâtre de Paris", time: "8 min à pied" },
];

const DELIVERY = [
  { label: "Click & Collect", href: RESTAURANT.links.emporter },
  { label: "Deliveroo", href: RESTAURANT.links.deliveroo },
  { label: "Uber Eats", href: RESTAURANT.links.uberEats },
];

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const kicker = "text-[12px] font-bold uppercase tracking-[0.28em]";
const label = `${kicker} !tracking-[0.22em] text-brick mb-3`;
const pill =
  "inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors";

function Leader() {
  return (
    <span
      aria-hidden="true"
      className="flex-1 min-w-[24px] border-b border-dotted border-[#B9A894] -translate-y-1.5"
    />
  );
}

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

      {/* ============ EN-TÊTE ============ */}
      <section className={`${wrap} pt-6 md:pt-10 pb-20 md:pb-24`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 text-[13px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brick">Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="text-ink">Contact</span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12">
          <div className="flex-[1_1_460px] min-w-0">
            <p className={`${kicker} text-brick mb-6`}>Bienvenue</p>
            <h1 className="font-serif font-medium text-[clamp(44px,5.6vw,84px)] leading-[0.98] tracking-[-0.01em]">
              Nous <em className="italic text-brick">trouver</em>
            </h1>
            <p className="mt-7 max-w-[31em] text-[18px] leading-[1.65] text-muted">
              {RESTAURANT.address.street}, {RESTAURANT.address.postalCode} {RESTAURANT.address.city}. À 5 minutes à pied de l’Opéra.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ReserveButton source="contact" className={`${pill} bg-brick text-paper hover:bg-burgundy-dark`}>
                Réserver une table
              </ReserveButton>
              <a
                href={RESTAURANT.links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pill} border border-ink text-ink hover:bg-ink hover:text-paper`}
              >
                Itinéraire
              </a>
            </div>
            <p className="mt-8 text-[15px] text-muted">
              Une question ? Appelez-nous au{" "}
              <a href={`tel:${RESTAURANT.telephone}`} className="font-bold text-ink underline underline-offset-4 hover:text-brick">
                {RESTAURANT.telephoneDisplay}
              </a>
            </p>
          </div>
          <figure className="flex-[1_1_380px] min-w-0 max-w-[520px] relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20px]">
              <Image
                src="/images/galerie/IMG_9117.jpg"
                alt="La devanture de Noya rue de Châteaudun, auvent terracotta"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute left-5 bottom-5 px-4 py-2.5 rounded-full bg-paper/95 text-[13px] font-medium">
              {RESTAURANT.address.street}
            </figcaption>
          </figure>
        </div>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      {/* ============ INFOS PRATIQUES ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <h2 className="font-serif font-medium text-[clamp(38px,4.4vw,60px)] leading-[1.02] mb-12">Infos pratiques</h2>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pt-6 border-t-2 border-ink min-w-0">
            <h3 className={label}>Adresse</h3>
            <address className="not-italic font-serif text-[26px] leading-[1.2]">
              {RESTAURANT.address.street}
              <br />
              {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
            </address>
            <a
              href={RESTAURANT.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] mt-2 font-bold text-[14px] hover:text-brick"
            >
              Itinéraire →
            </a>
          </div>

          <div className="pt-6 border-t-2 border-ink min-w-0">
            <h3 className={label}>Horaires</h3>
            <dl className="flex flex-col gap-3">
              <div>
                <dt className="font-bold">Déjeuner</dt>
                <dd className="text-muted">
                  {RESTAURANT.hours.lunch.days}, {RESTAURANT.hours.lunch.time}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Dîner</dt>
                <dd className="text-muted">
                  {RESTAURANT.hours.dinner.days}, {RESTAURANT.hours.dinner.time}
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-[14px] text-muted">Fermé {RESTAURANT.hours.closed.toLowerCase()}</p>
          </div>

          <div className="pt-6 border-t-2 border-ink min-w-0">
            <h3 className={label}>Contact</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href={`tel:${RESTAURANT.telephone}`}
                  className="inline-flex items-center min-h-[44px] font-serif text-[26px] hover:text-brick"
                >
                  {RESTAURANT.telephoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="inline-flex items-center min-h-[44px] break-all hover:text-brick"
                >
                  {RESTAURANT.email}
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] hover:text-brick"
                >
                  @noya.chateaudun sur Instagram →
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t-2 border-ink min-w-0">
            <h3 className={label}>Accès</h3>
            <p className="font-bold">Métro</p>
            <ul className="text-muted">
              {RESTAURANT.access.metro.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-3 font-bold">Bus</p>
            <p className="text-muted">Lignes {RESTAURANT.access.bus.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* ============ CARTE + À PROXIMITÉ ============ */}
      <section className="bg-cream">
        <div className={`${wrap} py-24 md:py-[104px] grid gap-x-[clamp(40px,6vw,96px)] gap-y-14 lg:grid-cols-2 items-start`}>
          <div className="min-w-0">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-[20px] border border-line bg-paper">
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
            <a
              href={RESTAURANT.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} mt-6 bg-ink text-warm-white hover:bg-brick`}
            >
              Ouvrir dans Google Maps
            </a>
          </div>
          <div className="min-w-0">
            <p className={`${kicker} text-brick mb-3.5`}>Quartier des théâtres</p>
            <h2 className="font-serif font-medium text-[clamp(38px,4.4vw,58px)] leading-[1.04] mb-10">À proximité</h2>
            <ul className="flex flex-col gap-5">
              {NEARBY.map((place) => (
                <li key={place.name} className="flex items-baseline gap-3.5">
                  <span className="font-serif text-[24px] md:text-[28px]">{place.name}</span>
                  <Leader />
                  <span className="text-muted whitespace-nowrap">{place.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ LIVRAISON ============ */}
      <section className={`${wrap} py-24 md:py-[104px]`}>
        <div className="bg-zellige text-warm-white rounded-[28px] p-[clamp(32px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
          <div className="flex-[1_1_360px] min-w-0">
            <p className={`${kicker} text-[#BFD5CB] mb-3`}>À la maison</p>
            <h2 className="font-serif italic font-medium text-[clamp(34px,3.8vw,52px)] leading-[1.05]">
              Livraison &amp; Click &amp; Collect
            </h2>
          </div>
          <ul className="flex flex-wrap gap-3">
            {DELIVERY.map((d) => (
              <li key={d.label}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pill} border border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-zellige`}
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReservationCTA source="contact" />
    </>
  );
}
