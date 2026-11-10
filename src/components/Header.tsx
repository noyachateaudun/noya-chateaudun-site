"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RESTAURANT } from "@/data/restaurant";
import NoyaLogo from "./NoyaLogo";
import ReserveButton from "./ReserveButton";

const NAV_ITEMS = [
  { href: "/menu", label: "La carte" },
  { href: "/a-propos", label: "Notre histoire" },
  { href: "/galerie", label: "Galerie" },
  { href: "/traiteur", label: "Traiteur" },
  { href: "/contact", label: "Nous trouver" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky z-50 transition-colors duration-500 ${
        scrolled ? "bg-warm-white/95 backdrop-blur-xl border-b border-line" : "bg-warm-white border-b border-transparent"
      }`}
      style={{ top: "var(--announcement-bar-h, 0px)" }}
    >
      <nav aria-label="Navigation principale" className="max-w-[1320px] mx-auto flex items-center justify-between gap-6 px-5 md:px-14 py-4">
        <Link href="/" className="flex items-center shrink-0" aria-label="Noya, accueil">
          <NoyaLogo color="#B82F25" className="h-[26px] md:h-[30px] w-auto" />
        </Link>

        {/* Menu complet à partir de 1024 px : en dessous, il passait sur deux lignes */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.16em] pb-1 border-b transition-colors ${
                  isActive(item.href)
                    ? "text-brick border-brick"
                    : "text-ink border-transparent hover:text-brick"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href={RESTAURANT.links.emporter}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.14em] px-4 py-3 text-ink hover:text-brick transition-colors"
          >
            Commander
          </a>
          <ReserveButton
            source="header"
            className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.14em] px-6 py-3 rounded-full bg-brick text-paper hover:bg-burgundy-dark transition-colors"
          >
            Réserver
          </ReserveButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center text-ink"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-warm-white border-t border-line px-5 md:px-14 pb-6 pt-2 animate-[slideDown_0.3s_ease]">
          <ul className="flex flex-col">
            {[{ href: "/", label: "Accueil" }, ...NAV_ITEMS].map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-4 font-serif text-2xl ${
                    (item.href === "/" ? pathname === "/" : isActive(item.href)) ? "text-brick" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <ReserveButton
              source="header"
              className="flex-1 text-center text-[12px] font-bold uppercase tracking-[0.14em] px-4 py-4 rounded-full bg-brick text-paper"
            >
              Réserver
            </ReserveButton>
            <a
              href={`tel:${RESTAURANT.telephone}`}
              className="flex-1 text-center text-[12px] font-bold uppercase tracking-[0.14em] px-4 py-4 rounded-full border border-ink text-ink"
            >
              Appeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
