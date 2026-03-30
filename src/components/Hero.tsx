"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NoyaLogo from "./NoyaLogo";
import { RESTAURANT } from "@/data/restaurant";

export default function Hero() {
  const [parallax, setParallax] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setParallax(window.scrollY * 0.35);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      aria-label="Bienvenue chez Noya Châteaudun"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6"
      style={{
        background: "linear-gradient(175deg, #F5EDE3 0%, #F0E2D0 25%, #E8D5BF 50%, #DECCA8 75%, #D4B896 100%)",
      }}
    >
      {/* Warm grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow orbs with parallax */}
      <div
        className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,136,58,0.07) 0%, transparent 70%)",
          transform: `translateY(${parallax * 0.5}px)`,
          transition: "transform 0.1s linear",
        }}
      />
      <div
        className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,30,43,0.03) 0%, transparent 60%)",
          transform: `translateY(${parallax * 0.3}px)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Decorative arches with parallax */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: "min(480px, 80vw)",
          height: "min(520px, 75vh)",
          border: "1px solid rgba(196,136,58,0.12)",
          borderRadius: "240px 240px 0 0",
          transform: `translate(-50%, -50%) translateY(${parallax * 0.15}px)`,
          transition: "transform 0.1s linear",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: "min(440px, 72vw)",
          height: "min(480px, 68vh)",
          border: "1px solid rgba(196,136,58,0.07)",
          borderRadius: "220px 220px 0 0",
          transform: `translate(-50%, -50%) translateY(${parallax * 0.1}px)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Animated background shimmer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "linear-gradient(120deg, transparent 30%, rgba(196,136,58,0.08) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 8s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* SEO H1 — visually hidden but present in HTML */}
        <h1 className="sr-only">
          Noya Châteaudun — Restaurant méditerranéen et cuisine levantine, Paris 9e
        </h1>

        {/* Cuisine label */}
        <div
          className={`text-[11px] font-normal tracking-[0.4em] uppercase mb-7 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "#C4883A" }}
        >
          Cuisine Méditerranéenne · Paris 9e
        </div>

        {/* NOYA Logo — large and premium */}
        <div
          className={`mb-4 transition-all duration-[1400ms] ${
            mounted
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-[1.15] blur-[8px]"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          <NoyaLogo
            color="#7B1E2B"
            className="h-[clamp(50px,11vw,110px)] w-auto mx-auto"
          />
        </div>

        {/* Subtitle */}
        <div
          className={`font-accent italic text-[clamp(20px,3.5vw,30px)] tracking-[0.15em] mb-9 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "#A0613A", fontWeight: 300 }}
        >
          Middle Eastern Food
        </div>

        {/* Gold ornament divider */}
        <div
          className={`flex items-center justify-center gap-2.5 max-w-[160px] mx-auto mb-8 transition-all duration-1000 delay-[400ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold" />
          <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold">
            <rect x="4" y="0" width="5.66" height="5.66" transform="rotate(45 4 4)" fill="currentColor" opacity="0.6" />
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Address */}
        <p
          className={`text-[13px] tracking-[0.2em] mb-12 font-light transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "#A0896E" }}
        >
          8 rue de Châteaudun, Paris 9e
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-[600ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/menu"
            className="group px-8 py-3.5 border-[1.5px] border-burgundy/35 text-burgundy text-[11px] font-normal tracking-[0.2em] uppercase bg-transparent hover:bg-burgundy hover:text-cream hover:border-burgundy hover:shadow-lg hover:shadow-burgundy/15 hover:scale-[1.02] transition-all duration-400"
          >
            Découvrir la carte
          </Link>
          <a
            href={RESTAURANT.links.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-burgundy text-cream text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-burgundy-light hover:shadow-lg hover:shadow-burgundy/25 hover:scale-[1.02] transition-all duration-400"
          >
            Réserver une table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-[float_2.5s_ease-in-out_infinite]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0896E" strokeWidth="1.5" opacity="0.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(7px); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 200% 0; }
          50% { background-position: -200% 0; }
        }
      `}} />
    </section>
  );
}
