"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { RESTAURANT } from "@/data/restaurant";

type TabId = "midi" | "soir";

const TABS: { id: TabId; label: string; hint: string }[] = [
  { id: "midi", label: "Carte du Midi", hint: RESTAURANT.hours.lunch.time },
  { id: "soir", label: "Carte du Soir", hint: RESTAURANT.hours.dinner.time },
];

function SunIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/*
 * Onglets midi / soir. Les deux cartes sont rendues côté serveur (SEO) ;
 * l'onglet inactif est simplement masqué avec l'attribut `hidden`.
 */
export default function MenuTabs({
  midiContent,
  soirContent,
}: {
  midiContent: ReactNode;
  soirContent: ReactNode;
}) {
  const [active, setActive] = useState<TabId>("midi");
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ midi: null, soir: null });

  // Lien direct /menu#soir
  useEffect(() => {
    if (window.location.hash === "#soir") setActive("soir");
  }, []);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next: TabId =
      e.key === "Home" ? "midi" : e.key === "End" ? "soir" : active === "midi" ? "soir" : "midi";
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <div className="max-w-[1320px] mx-auto px-5 md:px-14 pt-16 md:pt-20 pb-4 flex flex-col items-center gap-4">
        <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-brick">Choisissez votre service</p>
        <div
          role="tablist"
          aria-label="Cartes du restaurant"
          onKeyDown={onKeyDown}
          className="w-full max-w-[560px] grid grid-cols-2 gap-1.5 p-1.5 rounded-full bg-paper border border-line"
        >
          {TABS.map((tab) => {
            const selected = active === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                className={`min-h-[56px] px-3 sm:px-6 rounded-full flex items-center justify-center gap-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick ${
                  selected ? "bg-ink text-warm-white" : "text-muted hover:text-ink hover:bg-cream"
                }`}
              >
                <span className={selected ? "text-terracotta" : ""}>{tab.id === "midi" ? <SunIcon /> : <MoonIcon />}</span>
                <span className="flex flex-col items-start leading-none">
                  <span className="font-serif text-[clamp(19px,2.4vw,24px)] font-medium">{tab.label}</span>
                  <span className={`hidden sm:block mt-1 text-[11px] font-bold uppercase tracking-[0.16em] ${selected ? "text-[#D9CBBB]" : "text-muted"}`}>
                    {tab.hint}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" id="panel-midi" aria-labelledby="tab-midi" hidden={active !== "midi"}>
        {midiContent}
      </div>
      <div role="tabpanel" id="panel-soir" aria-labelledby="tab-soir" hidden={active !== "soir"}>
        {soirContent}
      </div>
    </>
  );
}
