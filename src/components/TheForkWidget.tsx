"use client";

import { useEffect, useState } from "react";
import { RESTAURANT } from "@/data/restaurant";

/**
 * Widget de réservation TheFork.
 * - Intercepte tous les clics sur un lien widget.thefork.com du site et ouvre
 *   la réservation dans une fenêtre par-dessus la page (iframe), comme le
 *   faisait l'ancien widget Zenchef. Les UTM du lien cliqué sont conservés.
 * - Ctrl/Cmd/Maj-clic ou clic molette : comportement normal (nouvel onglet).
 * - Sans JavaScript, les liens ouvrent simplement TheFork dans un nouvel onglet.
 * - Ajoute un bouton flottant "Réserver" sur desktop (sur mobile, la barre
 *   du bas contient déjà "Réserver").
 */
export default function TheForkWidget() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      // Mobile : on laisse le lien ouvrir TheFork directement (plus fiable
      // qu'une iframe sur Safari iOS, et équivalent en plein écran).
      if (window.innerWidth < 768) return;
      const link = (e.target as Element | null)?.closest?.(
        'a[href*="widget.thefork.com"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      e.preventDefault();
      setUrl(link.href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!url) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setUrl(null);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [url]);

  return (
    <>
      {/* Bouton flottant (desktop) */}
      <a
        href={`${RESTAURANT.links.reservation}?utm_source=website&utm_medium=floating&utm_campaign=reservation`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-6 py-3.5 bg-burgundy text-cream text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_8px_24px_rgba(114,47,55,0.35)] hover:bg-burgundy-light hover:scale-[1.03] transition-all duration-300"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Réserver une table
      </a>

      {/* Fenêtre de réservation */}
      {url && (
        <div
          className="fixed inset-0 z-[100] flex justify-end bg-black/25 md:p-4"
          onClick={() => setUrl(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Réserver une table chez Noya"
        >
          <div
            className="relative w-full h-full md:w-[460px] bg-cream md:rounded-2xl overflow-hidden shadow-2xl animate-[tfSlideIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setUrl(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-dark shadow hover:bg-white transition-colors"
              aria-label="Fermer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <p className="absolute inset-0 flex items-center justify-center font-accent italic text-dark/50">
              Chargement de la réservation…
            </p>
            <div className="relative flex flex-col h-full">
              <iframe
                src={url}
                title="Réservation Noya"
                className="w-full flex-1 border-0"
                allow="payment"
              />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setUrl(null)}
                className="block text-center text-[11px] text-dark/55 hover:text-burgundy py-2.5 border-t border-[#E5DFD5] bg-cream transition-colors"
              >
                Problème d&apos;affichage&nbsp;? Ouvrir la réservation dans un nouvel onglet →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
