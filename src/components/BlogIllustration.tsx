/*
 * Illustrations décoratives des articles du blog. Chaque article a son motif
 * (zellige, cercles de houmous, herbes, losanges...) posé sur un dégradé tiré
 * de la palette du lieu : brique, terracotta, zellige, café, crème.
 * Le composant remplit son parent : c'est le parent qui fixe la forme
 * (arche, carte arrondie) et le ratio. Purement décoratif (aria-hidden).
 */

type PatternProps = { color: string };

function ZelligeMosaic({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bi-zellige" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke={color} strokeWidth="0.5" />
          <polygon points="10,5 15,7.5 15,12.5 10,15 5,12.5 5,7.5" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="10" cy="10" r="1.5" fill={color} opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#bi-zellige)" />
    </svg>
  );
}

function HoumousCircles({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      {[78, 64, 50, 36, 22].map((r, i) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke={color} strokeWidth={i === 2 ? 1 : 0.6} />
      ))}
      <circle cx="100" cy="100" r="7" fill={color} opacity="0.35" />
      <path d="M66,100 Q83,82 100,100 Q117,118 134,100" fill="none" stroke={color} strokeWidth="0.6" opacity="0.7" />
      <path d="M58,100 Q79,72 100,100 Q121,128 142,100" fill="none" stroke={color} strokeWidth="0.45" opacity="0.5" />
      <circle cx="92" cy="86" r="2" fill={color} opacity="0.4" />
      <circle cx="112" cy="110" r="1.6" fill={color} opacity="0.4" />
      <circle cx="104" cy="80" r="1.3" fill={color} opacity="0.35" />
    </svg>
  );
}

function HerbLeaves({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bi-herbs" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M10,20 Q15,10 20,20 Q15,30 10,20Z" fill="none" stroke={color} strokeWidth="0.6" />
          <path d="M15,15 L20,20" fill="none" stroke={color} strokeWidth="0.4" />
          <path d="M30,10 Q35,2 38,10 Q35,18 30,10Z" fill="none" stroke={color} strokeWidth="0.6" />
          <path d="M33,5 L38,10" fill="none" stroke={color} strokeWidth="0.4" />
          <path d="M5,35 Q10,28 14,35 Q10,42 5,35Z" fill="none" stroke={color} strokeWidth="0.6" />
          <path d="M8,30 L14,35" fill="none" stroke={color} strokeWidth="0.4" />
          <circle cx="25" cy="30" r="0.9" fill={color} opacity="0.6" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#bi-herbs)" />
    </svg>
  );
}

function DiamondPattern({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bi-diamonds" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke={color} strokeWidth="0.6" />
          <polygon points="12,6 18,12 12,18 6,12" fill="none" stroke={color} strokeWidth="0.35" />
          <circle cx="12" cy="12" r="1.1" fill={color} opacity="0.6" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#bi-diamonds)" />
    </svg>
  );
}

function ShakshukaOvals({ color }: PatternProps) {
  const eggs = [
    { cx: 60, cy: 62, rx: 22, ry: 19 },
    { cx: 138, cy: 84, rx: 20, ry: 17 },
    { cx: 92, cy: 128, rx: 19, ry: 16 },
    { cx: 158, cy: 150, rx: 16, ry: 14 },
    { cx: 40, cy: 150, rx: 15, ry: 13 },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      {eggs.map((e) => (
        <g key={`${e.cx}-${e.cy}`}>
          <ellipse cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} fill={color} opacity="0.35" />
          <ellipse cx={e.cx} cy={e.cy} rx={e.rx * 0.36} ry={e.rx * 0.36} fill="#F2C4AE" opacity="0.85" />
        </g>
      ))}
      <circle cx="110" cy="40" r="3" fill={color} opacity="0.3" />
      <circle cx="176" cy="40" r="2" fill={color} opacity="0.3" />
      <circle cx="20" cy="96" r="2.5" fill={color} opacity="0.3" />
    </svg>
  );
}

function FalafelDots({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bi-falafels" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="7" fill="none" stroke={color} strokeWidth="0.6" />
          <circle cx="14" cy="14" r="4" fill="none" stroke={color} strokeWidth="0.35" />
          <circle cx="14" cy="14" r="1.6" fill={color} opacity="0.5" />
          <circle cx="11" cy="12" r="0.5" fill="#BFD5CB" />
          <circle cx="16.5" cy="15.5" r="0.5" fill="#BFD5CB" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#bi-falafels)" />
    </svg>
  );
}

function LevantineStars({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bi-stars" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          {/* Étoile à huit branches : deux carrés superposés */}
          <rect x="10" y="10" width="12" height="12" fill="none" stroke={color} strokeWidth="0.6" />
          <rect x="10" y="10" width="12" height="12" fill="none" stroke={color} strokeWidth="0.6" transform="rotate(45 16 16)" />
          <circle cx="16" cy="16" r="1.2" fill={color} opacity="0.7" />
          <line x1="0" y1="16" x2="32" y2="16" stroke={color} strokeWidth="0.25" opacity="0.45" />
          <line x1="16" y1="0" x2="16" y2="32" stroke={color} strokeWidth="0.25" opacity="0.45" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#bi-stars)" />
    </svg>
  );
}

function WineCurves({ color }: PatternProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      {[0, 22, 44, 66, 88, 110, 132].map((dy, i) => (
        <path
          key={dy}
          d={`M0,${40 + dy} Q30,${20 + dy} 60,${30 + dy} T120,${20 + dy} T200,${26 + dy}`}
          fill="none"
          stroke={color}
          strokeWidth={i % 2 ? 0.45 : 0.8}
          opacity={i % 2 ? 0.6 : 1}
        />
      ))}
      <circle cx="90" cy="34" r="2.6" fill={color} opacity="0.5" />
      <circle cx="146" cy="24" r="1.8" fill={color} opacity="0.45" />
      <circle cx="44" cy="52" r="2.1" fill={color} opacity="0.4" />
    </svg>
  );
}

function AwningStripes({ color }: PatternProps) {
  // Auvent de la devanture : rayures verticales et bord festonné.
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bi-awning" x="0" y="0" width="28" height="200" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="14" height="200" fill={color} opacity="0.55" />
        </pattern>
        <clipPath id="bi-awning-clip">
          <path d="M0,0 H200 V70 Q193,84 186,70 Q179,84 172,70 Q165,84 158,70 Q151,84 144,70 Q137,84 130,70 Q123,84 116,70 Q109,84 102,70 Q95,84 88,70 Q81,84 74,70 Q67,84 60,70 Q53,84 46,70 Q39,84 32,70 Q25,84 18,70 Q11,84 4,70 Q-3,84 -10,70 V0Z" />
        </clipPath>
      </defs>
      <rect width="200" height="200" fill="url(#bi-awning)" clipPath="url(#bi-awning-clip)" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 32 + (row % 2) * 16}
            cy={112 + row * 30}
            r="5"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
            opacity="0.7"
          />
        ))
      )}
    </svg>
  );
}

type Illustration = {
  /** Dégradé de fond (palette Noya) */
  bg: string;
  /** Motif et opacité du motif */
  pattern: React.ReactNode;
  patternOpacity: string;
  /** Fond clair : ornement et étiquette en encre plutôt qu'en papier */
  light?: boolean;
};

const ILLUSTRATIONS: Record<string, Illustration> = {
  // Café profond, mosaïque zellige terracotta
  "cuisine-levantine-origines-plats-traditions": {
    bg: "bg-gradient-to-br from-[#5E4E42] via-[#3E2E22] to-[#24180F]",
    pattern: <ZelligeMosaic color="#E7A487" />,
    patternOpacity: "opacity-[0.32]",
  },
  // Crème du houmous, cercles brique
  "recette-houmous-maison-authentique": {
    bg: "bg-gradient-to-br from-[#FBF7F0] via-[#EFE4D4] to-[#E3D6C5]",
    pattern: <HoumousCircles color="#B82F25" />,
    patternOpacity: "opacity-[0.3]",
    light: true,
  },
  // Vert zellige, herbes fraîches
  "meilleurs-plats-restaurant-levantin": {
    bg: "bg-gradient-to-br from-[#3F7363] via-[#2E5A4E] to-[#1E3E35]",
    pattern: <HerbLeaves color="#F6EFE5" />,
    patternOpacity: "opacity-[0.3]",
  },
  // Brique, losanges terracotta clair
  "organiser-buffet-levantin-evenement": {
    bg: "bg-gradient-to-br from-[#C94A3E] via-[#B82F25] to-[#8E2219]",
    pattern: <DiamondPattern color="#F2C4AE" />,
    patternOpacity: "opacity-[0.38]",
  },
  // Terracotta vers brique, œufs pochés
  "shakshuka-histoire-recette": {
    bg: "bg-gradient-to-br from-[#E7A487] via-[#D06A4C] to-[#B82F25]",
    pattern: <ShakshukaOvals color="#FBF7F0" />,
    patternOpacity: "opacity-[0.55]",
  },
  // Terre cuite et café, falafels dorés
  "falafel-origines-recette-paris": {
    bg: "bg-gradient-to-br from-[#C9A27E] via-[#A0613A] to-[#5E4E42]",
    pattern: <FalafelDots color="#FBF7F0" />,
    patternOpacity: "opacity-[0.34]",
  },
  // Brique sombre vers encre, courbes de vin
  "vins-israeliens-libanais-mediterranee": {
    bg: "bg-gradient-to-br from-[#8E2219] via-[#5A1E16] to-[#24180F]",
    pattern: <WineCurves color="#E7A487" />,
    patternOpacity: "opacity-[0.4]",
  },
  // Crème et terracotta, l'auvent de la devanture
  "click-collect-commander-emporter-noya": {
    bg: "bg-gradient-to-b from-[#F6EFE5] via-[#EFE4D4] to-[#E7A487]",
    pattern: <AwningStripes color="#D98A6C" />,
    patternOpacity: "opacity-[0.7]",
    light: true,
  },
  // Zellige vers terracotta, étoiles levantines
  "cuisine-levantine-libanaise-israelienne-differences": {
    bg: "bg-gradient-to-br from-[#2E5A4E] via-[#A0613A] to-[#E7A487]",
    pattern: <LevantineStars color="#FBF7F0" />,
    patternOpacity: "opacity-[0.3]",
  },
};

const FALLBACK: Illustration = {
  bg: "bg-gradient-to-br from-[#EFE4D4] via-[#E7A487] to-[#B82F25]",
  pattern: <ZelligeMosaic color="#FBF7F0" />,
  patternOpacity: "opacity-[0.3]",
};

export default function BlogIllustration({
  slug,
  category,
  ornament = false,
  className = "",
}: {
  slug: string;
  /** Affiche l'étiquette de catégorie en bas à gauche */
  category?: string;
  /** Dessine une arche au centre (rappel des photos en arche du site) */
  ornament?: boolean;
  className?: string;
}) {
  const illus = ILLUSTRATIONS[slug] ?? FALLBACK;
  const ornamentCls = illus.light ? "border-ink/25" : "border-paper/45";

  return (
    <div aria-hidden="true" className={`relative w-full h-full overflow-hidden ${illus.bg} ${className}`}>
      <div
        className={`absolute inset-0 ${illus.patternOpacity} transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      >
        {illus.pattern}
      </div>

      {ornament && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`h-[62%] aspect-[3/4] rounded-t-full border-2 ${ornamentCls}`} />
        </div>
      )}

      {category && (
        <span className="absolute left-4 bottom-4 md:left-5 md:bottom-5 px-3.5 py-2 rounded-full bg-paper/95 text-ink text-[11px] font-bold uppercase tracking-[0.18em]">
          {category}
        </span>
      )}
    </div>
  );
}
