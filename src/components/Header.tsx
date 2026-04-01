"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RESTAURANT } from "@/data/restaurant";
import NoyaLogo from "./NoyaLogo";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La Carte" },
  { href: "/galerie", label: "Galerie" },
  { href: "/a-propos", label: "Notre Histoire" },
  { href: "/traiteur", label: "Traiteur" },
  { href: "/contact", label: "Nous Trouver" },
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

  return (
    <header
      className={`sticky z-50 transition-all duration-500 border-b border-[#E5DFD5] ${
        scrolled
          ? "bg-[#FAFAF5]/95 backdrop-blur-xl saturate-[1.2] shadow-sm"
          : "bg-[#FAFAF5] shadow-sm"
      }`}
      style={{ top: "var(--announcement-bar-h, 0px)" }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Noya — Restaurant Levantin Paris 9e">
          <NoyaLogo
            color="#7B1E2B"
            className="h-[24px] md:h-[30px] w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative text-[11px] font-normal uppercase tracking-[0.2em] transition-colors duration-300 pb-1 group ${
                  pathname === item.href ? "text-burgundy" : "text-taupe hover:text-burgundy"
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-burgundy transition-all duration-300 ease-out ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESTAURANT.links.emporter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 border border-[#4A5A3C]/30 text-[#4A5A3C] hover:bg-[#4A5A3C] hover:text-cream transition-all duration-300"
          >
            Commander
          </a>
          <a
            href={RESTAURANT.links.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 bg-burgundy text-cream hover:bg-burgundy-light hover:shadow-lg hover:shadow-burgundy/20 hover:scale-[1.02] transition-all duration-300"
          >
            Réserver
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-dark"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-white/95 backdrop-blur-xl border-t border-cream-dark/30 px-5 pb-6 pt-4 animate-[slideDown_0.3s_ease]">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm uppercase tracking-[0.15em] transition-colors ${
                    pathname === item.href ? "text-burgundy font-bold" : "text-taupe"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={RESTAURANT.links.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-3 bg-burgundy text-cream hover:bg-burgundy-light transition-colors"
            >
              Réserver
            </a>
            <a
              href={`tel:${RESTAURANT.telephone}`}
              className="flex-1 text-center text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-3 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-all"
            >
              Appeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
