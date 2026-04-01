"use client";

import { useState } from "react";
import Link from "next/link";
import { RESTAURANT } from "@/data/restaurant";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-[60] bg-[#722F37] text-cream overflow-hidden h-10">
      {/* CSS-only rotating messages */}
      <div className="announcement-track flex h-full">
        {/* Message 1 */}
        <a
          href={RESTAURANT.links.reservation}
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-slide flex items-center justify-center min-w-full px-12 text-[12px] md:text-[13px] font-medium hover:text-white transition-colors text-center"
        >
          <span className="mr-1.5">⭐</span>
          5/5 sur Google · 110+ avis · Réservez votre table →
        </a>
        {/* Message 2 */}
        <a
          href={RESTAURANT.links.emporter}
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-slide flex items-center justify-center min-w-full px-12 text-[12px] md:text-[13px] font-medium hover:text-white transition-colors text-center"
        >
          <span className="mr-1.5">🥡</span>
          Click &amp; Collect disponible · Commandez en ligne →
        </a>
        {/* Message 3 */}
        <Link
          href="/traiteur"
          className="announcement-slide flex items-center justify-center min-w-full px-12 text-[12px] md:text-[13px] font-medium hover:text-white transition-colors text-center"
        >
          <span className="mr-1.5">🎉</span>
          Traiteur levantin · Devis gratuit en 24h →
        </Link>
      </div>

      {/* Close button */}
      <button
        onClick={() => {
          setVisible(false);
          document.documentElement.style.setProperty("--announcement-bar-h", "0px");
        }}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-cream/90 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Fermer la barre d'annonce"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .announcement-track {
          animation: announcement-rotate 12s steps(1) infinite;
          width: 300%;
        }
        .announcement-slide {
          width: calc(100% / 3);
        }
        @keyframes announcement-rotate {
          0%, 30%    { transform: translateX(0); }
          33%, 63%   { transform: translateX(-33.333%); }
          66%, 96%   { transform: translateX(-66.666%); }
          100%       { transform: translateX(0); }
        }
      `}} />
    </div>
  );
}
