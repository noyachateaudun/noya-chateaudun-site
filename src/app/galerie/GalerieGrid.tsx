"use client";

import { useState } from "react";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  cat: string;
  label: string;
  alt: string;
}

const FILTERS = [
  { key: "all", label: "Tout" },
  { key: "plats", label: "Nos Plats" },
  { key: "interieur", label: "Le Restaurant" },
  { key: "equipe", label: "L'Équipe" },
];

/*
 * Mosaïque éditoriale : un motif de 12 formats qui se répète. Sur 4 colonnes
 * (tablette et plus), chaque bloc de 12 remplit la grille sans trou ;
 * `grid-flow-dense` comble les vides quand un filtre réduit la sélection.
 */
type Tile = { span: string; shape: string; big?: boolean };

const BIG: Tile = { span: "col-span-2 row-span-2", shape: "rounded-[20px]", big: true };
const ARCH: Tile = { span: "col-span-1 row-span-2", shape: "rounded-t-full rounded-b-[20px]" };
const TALL: Tile = { span: "col-span-1 row-span-2", shape: "rounded-[20px]" };
const WIDE: Tile = { span: "col-span-2 row-span-1", shape: "rounded-[20px]", big: true };

const PATTERN: Tile[] = [BIG, ARCH, TALL, TALL, WIDE, TALL, WIDE, ARCH, BIG, TALL, WIDE, WIDE];

export default function GalerieGrid({ photos }: { photos: Photo[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.cat === activeFilter);

  return (
    <section aria-label="Photos" className="max-w-[1320px] mx-auto px-5 md:px-14 py-20 md:py-24">
      {/* Filtres */}
      <div className="mb-10 md:mb-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <div role="group" aria-label="Filtrer les photos" className="flex flex-wrap gap-2.5">
          {FILTERS.map((f) => {
            const active = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                aria-pressed={active}
                className={`inline-flex items-center min-h-[44px] px-5 rounded-full text-[12px] font-bold uppercase tracking-[0.16em] border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick ${
                  active
                    ? "bg-ink border-ink text-warm-white"
                    : "bg-transparent border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="text-[14px] text-muted">
          {filtered.length} photo{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Mosaïque */}
      <ul className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[190px] lg:auto-rows-[230px] gap-3 md:gap-4">
        {filtered.map((photo, i) => {
          const tile = PATTERN[i % PATTERN.length];
          return (
            <li key={photo.id} className={`${tile.span} min-w-0`}>
              <div className={`group relative h-full w-full overflow-hidden bg-cream ${tile.shape}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    tile.big
                      ? "(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 640px"
                      : "(max-width: 768px) 50vw, (max-width: 1320px) 25vw, 320px"
                  }
                  className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
