"use client";

import { useRef } from "react";
import { REVIEWS } from "@/data/reviews";

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-[#E5DFD5] shadow-sm flex items-center justify-center text-dark/40 hover:text-dark transition-colors hidden md:flex"
        aria-label="Avis précédents"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-[#E5DFD5] shadow-sm flex items-center justify-center text-dark/40 hover:text-dark transition-colors hidden md:flex"
        aria-label="Avis suivants"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {REVIEWS.map((review, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-[300px] bg-white rounded-xl border border-[#E5DFD5] p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#D4A853" stroke="#D4A853" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-dark/60 leading-relaxed mb-4 italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-dark">{review.author}</span>
              <span className="text-dark/40">{review.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
