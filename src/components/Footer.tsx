import Link from "next/link";
import { RESTAURANT } from "@/data/restaurant";
import NoyaLogo from "./NoyaLogo";
import ReserveButton from "./ReserveButton";

const NAV = [
  { href: "/menu", label: "La carte" },
  { href: "/a-propos", label: "Notre histoire" },
  { href: "/galerie", label: "Galerie" },
  { href: "/traiteur", label: "Traiteur" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Nous trouver" },
];

const heading = "text-[12px] font-bold uppercase tracking-[0.22em] text-terracotta mb-4";
const link = "hover:text-warm-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#D9CBBB]">
      <div aria-hidden="true" className="zellige-band" />
      <div className="max-w-[1320px] mx-auto px-5 md:px-14 pt-16 pb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Noya, accueil" className="inline-block">
            <NoyaLogo color="#F6EFE5" className="h-[32px] w-auto" />
          </Link>
          <p className="mt-5 max-w-[22em] text-[15px]">Bistrot levantin moderne. Cuisine faite maison chaque jour, à deux pas de l’Opéra.</p>
          <a
            href={RESTAURANT.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-5 text-[14px] ${link}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @noya.chateaudun
          </a>
        </div>

        <nav aria-label="Pied de page">
          <p className={heading}>Le site</p>
          <ul className="space-y-2.5 text-[15px]">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={link}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={heading}>Réserver, commander</p>
          <ul className="space-y-2.5 text-[15px]">
            <li>
              <ReserveButton source="footer" className={link}>Réserver une table</ReserveButton>
            </li>
            <li><a href={RESTAURANT.links.emporter} target="_blank" rel="noopener noreferrer" className={link}>Click &amp; collect</a></li>
            <li><a href={RESTAURANT.links.deliveroo} target="_blank" rel="noopener noreferrer" className={link}>Deliveroo</a></li>
            <li><a href={RESTAURANT.links.uberEats} target="_blank" rel="noopener noreferrer" className={link}>Uber Eats</a></li>
            <li><Link href="/traiteur" className={link}>Devis traiteur</Link></li>
          </ul>
          <p className="mt-5 text-[13px]">★ 5/5 Google · 140 avis · 9,6/10 TheFork</p>
        </div>

        <div>
          <p className={heading}>Nous trouver</p>
          <p className="text-[15px] leading-relaxed">
            {RESTAURANT.address.street}
            <br />
            {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            {RESTAURANT.hours.lunch.days}
            <br />
            Midi {RESTAURANT.hours.lunch.time}
            <br />
            Soir {RESTAURANT.hours.dinner.time}
          </p>
          <p className="mt-2 text-[13px]">Fermé {RESTAURANT.hours.closed.toLowerCase()}</p>
          <p className="mt-4 text-[15px]">
            <a href={`tel:${RESTAURANT.telephone}`} className={`font-bold text-warm-white ${link}`}>{RESTAURANT.telephoneDisplay}</a>
            <br />
            <a href={`mailto:${RESTAURANT.email}`} className={link}>{RESTAURANT.email}</a>
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-5 md:px-14 py-6 border-t border-warm-white/10 flex flex-wrap justify-between gap-3 text-[13px]">
        <p>&copy; {new Date().getFullYear()} {RESTAURANT.name}</p>
        <Link href="/mentions-legales" className={link}>Mentions légales</Link>
      </div>
    </footer>
  );
}
