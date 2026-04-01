import Link from "next/link";
import NoyaLogo from "./NoyaLogo";
import { RESTAURANT } from "@/data/restaurant";

export default function Hero() {
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

      {/* Ambient glow orbs — static, no parallax */}
      <div
        className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,136,58,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,30,43,0.03) 0%, transparent 60%)" }}
      />

      {/* Decorative arches — static */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "min(480px, 80vw)",
          height: "min(520px, 75vh)",
          border: "1px solid rgba(196,136,58,0.12)",
          borderRadius: "240px 240px 0 0",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "min(440px, 72vw)",
          height: "min(480px, 68vh)",
          border: "1px solid rgba(196,136,58,0.07)",
          borderRadius: "220px 220px 0 0",
        }}
      />

      {/* Animated background shimmer — CSS only */}
      <div className="absolute inset-0 pointer-events-none opacity-30 hero-shimmer" />

      {/* Content — CSS entrance animations */}
      <div className="relative z-10">
        <h1 className="sr-only">
          Noya Châteaudun — Restaurant méditerranéen et cuisine levantine, Paris 9e
        </h1>

        <div
          className="text-[11px] font-normal tracking-[0.4em] uppercase mb-7 hero-fade-in"
          style={{ color: "#C4883A", animationDelay: "0.1s" }}
        >
          Cuisine Méditerranéenne · Paris 9e
        </div>

        <div
          className="mb-4 hero-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <NoyaLogo
            color="#7B1E2B"
            className="h-[clamp(50px,11vw,110px)] w-auto mx-auto"
          />
        </div>

        <div
          className="font-accent italic text-[clamp(20px,3.5vw,30px)] tracking-[0.15em] mb-9 hero-fade-in"
          style={{ color: "#A0613A", fontWeight: 300, animationDelay: "0.5s" }}
        >
          Middle Eastern Food
        </div>

        <div
          className="flex items-center justify-center gap-2.5 max-w-[160px] mx-auto mb-8 hero-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold" />
          <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold">
            <rect x="4" y="0" width="5.66" height="5.66" transform="rotate(45 4 4)" fill="currentColor" opacity="0.6" />
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        <p
          className="text-[13px] tracking-[0.2em] mb-12 font-light hero-fade-in"
          style={{ color: "#A0896E", animationDelay: "0.7s" }}
        >
          8 rue de Châteaudun, Paris 9e
        </p>

        <div
          className="flex gap-4 justify-center flex-wrap hero-fade-in"
          style={{ animationDelay: "0.8s" }}
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
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hero-float">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0896E" strokeWidth="1.5" opacity="0.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
