import Link from "next/link";
import { RESTAURANT } from "@/data/restaurant";
import NoyaLogo from "./NoyaLogo";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/70 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" aria-label="Noya — Restaurant Levantin Paris 9e">
            <NoyaLogo
              color="#F5F0E8"
              className="h-[22px] md:h-[26px] w-auto opacity-90"
            />
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            {RESTAURANT.address.street}
            <br />
            {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
          </p>
          <a
            href={RESTAURANT.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-cream/50 hover:text-gold transition-colors"
            aria-label="Suivez Noya sur Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @noya.chateaudun
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light mb-4">Navigation</h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Accueil" },
              { href: "/menu", label: "La Carte" },
              { href: "/galerie", label: "Galerie" },
              { href: "/a-propos", label: "Notre Histoire" },
              { href: "/traiteur", label: "Traiteur" },
              { href: "/contact", label: "Nous Trouver" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-cream transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Commander */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light mb-4">Commander</h3>
          <ul className="space-y-2">
            <li>
              <a href={RESTAURANT.links.reservation} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream transition-colors">
                Réserver (TheFork)
              </a>
            </li>
            <li>
              <a href={RESTAURANT.links.deliveroo} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream transition-colors">
                Deliveroo
              </a>
            </li>
            <li>
              <a href={RESTAURANT.links.uberEats} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream transition-colors">
                Uber Eats
              </a>
            </li>
            <li>
              <a href={RESTAURANT.links.emporter} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream transition-colors">
                Click & Collect
              </a>
            </li>
          </ul>
        </div>

        {/* Horaires */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light mb-4">Horaires</h3>
          <p className="text-sm leading-relaxed">
            <strong className="text-cream/90">Déjeuner</strong>
            <br />
            {RESTAURANT.hours.lunch.days}
            <br />
            {RESTAURANT.hours.lunch.time}
          </p>
          <p className="text-sm leading-relaxed mt-3">
            <strong className="text-cream/90">Dîner</strong>
            <br />
            {RESTAURANT.hours.dinner.days}
            <br />
            {RESTAURANT.hours.dinner.time}
          </p>
          <p className="text-sm mt-3 text-cream/40">
            Fermé {RESTAURANT.hours.closed}
          </p>
          <a
            href={`tel:${RESTAURANT.telephone}`}
            className="inline-block mt-4 text-sm text-gold hover:text-gold-light transition-colors"
          >
            {RESTAURANT.telephoneDisplay}
          </a>
          <br />
          <a
            href={`mailto:${RESTAURANT.email}`}
            className="inline-block mt-1 text-sm text-cream/50 hover:text-gold transition-colors"
          >
            {RESTAURANT.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-5 mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-cream/30">
          &copy; {new Date().getFullYear()} {RESTAURANT.name}. Tous droits réservés.
        </p>
        <Link href="/mentions-legales" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
