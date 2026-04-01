"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT } from "@/data/restaurant";

const ANNOUNCEMENTS = [
  {
    text: "5/5 sur Google \u00b7 110+ avis \u00b7 R\u00e9servez votre table \u2192",
    href: RESTAURANT.links.reservation,
    external: true,
    icon: "\u2b50",
  },
  {
    text: "Click & Collect disponible \u00b7 Commandez en ligne \u2192",
    href: RESTAURANT.links.emporter,
    external: true,
    icon: "\ud83e\udd61",
  },
  {
    text: "Traiteur levantin \u00b7 Devis gratuit en 24h \u2192",
    href: "/traiteur",
    external: false,
    icon: "\ud83c\udf89",
  },
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % ANNOUNCEMENTS.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Communicate bar height to CSS custom property for Header positioning
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--announcement-bar-h",
      visible ? "40px" : "0px"
    );
  }, [visible]);

  if (!visible) return null;

  const ann = ANNOUNCEMENTS[current];

  const content = (
    <span
      className={`transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="mr-1.5">{ann.icon}</span>
      {ann.text}
    </span>
  );

  return (
    <div className="sticky top-0 z-[60] bg-[#722F37] text-cream">
      <div className="max-w-6xl mx-auto flex items-center justify-center px-12 h-10">
        {ann.external ? (
          <a
            href={ann.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] md:text-[13px] font-medium hover:text-white transition-colors text-center"
          >
            {content}
          </a>
        ) : (
          <Link
            href={ann.href}
            className="text-[12px] md:text-[13px] font-medium hover:text-white transition-colors text-center"
          >
            {content}
          </Link>
        )}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-cream/90 hover:text-white transition-colors rounded-full hover:bg-white/10"
          aria-label="Fermer la barre d'annonce"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
