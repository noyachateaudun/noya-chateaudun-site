"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

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

export default function GalerieGrid({ photos }: { photos: Photo[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.cat === activeFilter);

  return (
    <>
      {/* Filters */}
      <div className="px-5 pb-8 text-center">
        <Reveal delay={0.2}>
          <div className="flex gap-2.5 justify-center flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 text-[11px] tracking-[0.15em] uppercase cursor-pointer border-[1.5px] transition-all duration-300 ${
                  activeFilter === f.key
                    ? "bg-burgundy border-burgundy text-cream font-bold"
                    : "bg-transparent border-cream-dark text-taupe font-normal hover:border-burgundy hover:text-burgundy"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Grid */}
      <section className="px-5 pb-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo, i) => (
            <Reveal key={photo.id} delay={i * 0.04}>
              <article
                className="relative overflow-hidden border border-cream-dark bg-sand group cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,36,33,0.06)] transition-all duration-500"
                style={{ aspectRatio: "3 / 4" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
