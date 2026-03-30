"use client";

import { useState } from "react";

export default function MenuTabs({
  midiContent,
  soirContent,
}: {
  midiContent: React.ReactNode;
  soirContent: React.ReactNode;
}) {
  const [active, setActive] = useState<"midi" | "soir">("midi");

  return (
    <>
      {/* Tab buttons — underline style */}
      <div className="flex items-center justify-center mt-10 mb-2" role="tablist">
        <button
          onClick={() => setActive("midi")}
          role="tab"
          aria-selected={active === "midi"}
          className="group relative flex items-center gap-2.5 px-10 py-4 cursor-pointer bg-transparent border-none transition-colors duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className={`transition-colors duration-300 ${active === "midi" ? "text-burgundy" : "text-[#999] group-hover:text-[#666]"}`}
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <span
            className={`font-serif text-[clamp(18px,2.5vw,24px)] tracking-[0.03em] transition-colors duration-300 ${
              active === "midi" ? "text-burgundy" : "text-[#999] group-hover:text-[#666]"
            }`}
          >
            Carte du Midi
          </span>
          {/* Animated underline */}
          <span
            className={`absolute bottom-2 left-10 right-10 h-[2px] bg-burgundy transition-all duration-300 ease-out origin-center ${
              active === "midi" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </button>

        {/* Vertical separator */}
        <div className="w-px h-8 bg-[#ddd]" />

        <button
          onClick={() => setActive("soir")}
          role="tab"
          aria-selected={active === "soir"}
          className="group relative flex items-center gap-2.5 px-10 py-4 cursor-pointer bg-transparent border-none transition-colors duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className={`transition-colors duration-300 ${active === "soir" ? "text-burgundy" : "text-[#999] group-hover:text-[#666]"}`}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span
            className={`font-serif text-[clamp(18px,2.5vw,24px)] tracking-[0.03em] transition-colors duration-300 ${
              active === "soir" ? "text-burgundy" : "text-[#999] group-hover:text-[#666]"
            }`}
          >
            Carte du Soir
          </span>
          {/* Animated underline */}
          <span
            className={`absolute bottom-2 left-10 right-10 h-[2px] bg-burgundy transition-all duration-300 ease-out origin-center ${
              active === "soir" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </button>
      </div>

      {/* Both menus rendered in HTML — toggled via CSS for SEO */}
      <div
        role="tabpanel"
        className={`transition-opacity duration-400 ${
          active === "midi" ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
        aria-hidden={active !== "midi"}
      >
        {midiContent}
      </div>
      <div
        role="tabpanel"
        className={`transition-opacity duration-400 ${
          active === "soir" ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
        aria-hidden={active !== "soir"}
      >
        {soirContent}
      </div>
    </>
  );
}
