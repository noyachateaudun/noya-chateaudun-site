function ZelligeMosaic() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="zellige" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="white" strokeWidth="0.5" />
          <polygon points="10,5 15,7.5 15,12.5 10,15 5,12.5 5,7.5" fill="none" stroke="white" strokeWidth="0.3" />
          <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#zellige)" />
    </svg>
  );
}

function HoumousCircles() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.10]" viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice">
      <circle cx="100" cy="56" r="50" fill="none" stroke="#722F37" strokeWidth="0.5" />
      <circle cx="100" cy="56" r="40" fill="none" stroke="#722F37" strokeWidth="0.5" />
      <circle cx="100" cy="56" r="30" fill="none" stroke="#722F37" strokeWidth="0.8" />
      <circle cx="100" cy="56" r="20" fill="none" stroke="#722F37" strokeWidth="0.5" />
      <circle cx="100" cy="56" r="10" fill="none" stroke="#722F37" strokeWidth="0.5" />
      <circle cx="100" cy="56" r="4" fill="#722F37" opacity="0.3" />
      {/* swirl lines */}
      <path d="M80,56 Q90,46 100,56 Q110,66 120,56" fill="none" stroke="#722F37" strokeWidth="0.4" opacity="0.6" />
      <path d="M75,56 Q87,40 100,56 Q113,72 125,56" fill="none" stroke="#722F37" strokeWidth="0.3" opacity="0.4" />
    </svg>
  );
}

function HerbLeaves() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="herbs" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M10,20 Q15,10 20,20 Q15,30 10,20Z" fill="none" stroke="#E5DFD5" strokeWidth="0.5" />
          <path d="M15,15 L20,20" fill="none" stroke="#E5DFD5" strokeWidth="0.3" />
          <path d="M30,10 Q35,2 38,10 Q35,18 30,10Z" fill="none" stroke="#E5DFD5" strokeWidth="0.5" />
          <path d="M33,5 L38,10" fill="none" stroke="#E5DFD5" strokeWidth="0.3" />
          <path d="M5,35 Q10,28 14,35 Q10,42 5,35Z" fill="none" stroke="#E5DFD5" strokeWidth="0.5" />
          <path d="M8,30 L14,35" fill="none" stroke="#E5DFD5" strokeWidth="0.3" />
          <circle cx="25" cy="30" r="0.8" fill="#E5DFD5" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="200" height="112" fill="url(#herbs)" />
    </svg>
  );
}

function DiamondPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="diamonds" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke="#D4A853" strokeWidth="0.5" />
          <polygon points="12,6 18,12 12,18 6,12" fill="none" stroke="#D4A853" strokeWidth="0.3" />
          <circle cx="12" cy="12" r="1" fill="#D4A853" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="200" height="112" fill="url(#diamonds)" />
    </svg>
  );
}

function ShakshukaOvals() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice">
      {/* organic shapes like eggs in sauce */}
      <ellipse cx="60" cy="40" rx="14" ry="12" fill="white" opacity="0.15" />
      <ellipse cx="60" cy="40" rx="5" ry="5" fill="#F5C040" opacity="0.25" />
      <ellipse cx="130" cy="55" rx="13" ry="11" fill="white" opacity="0.15" />
      <ellipse cx="130" cy="55" rx="5" ry="5" fill="#F5C040" opacity="0.25" />
      <ellipse cx="95" cy="75" rx="12" ry="10" fill="white" opacity="0.15" />
      <ellipse cx="95" cy="75" rx="4.5" ry="4.5" fill="#F5C040" opacity="0.25" />
      <ellipse cx="160" cy="30" rx="11" ry="9" fill="white" opacity="0.1" />
      <ellipse cx="160" cy="30" rx="4" ry="4" fill="#F5C040" opacity="0.2" />
      <ellipse cx="35" cy="80" rx="10" ry="9" fill="white" opacity="0.1" />
      <ellipse cx="35" cy="80" rx="4" ry="4" fill="#F5C040" opacity="0.2" />
      {/* bubbles */}
      <circle cx="80" cy="20" r="2" fill="white" opacity="0.08" />
      <circle cx="150" cy="90" r="3" fill="white" opacity="0.06" />
    </svg>
  );
}

function FalafelDots() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.14]" viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="falafels" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="6" fill="none" stroke="#F5F0E8" strokeWidth="0.5" />
          <circle cx="14" cy="14" r="3.5" fill="none" stroke="#F5F0E8" strokeWidth="0.3" />
          <circle cx="14" cy="14" r="1.5" fill="#F5F0E8" opacity="0.3" />
          {/* little herb specks */}
          <circle cx="11" cy="12" r="0.4" fill="#8FA" opacity="0.4" />
          <circle cx="16" cy="15" r="0.4" fill="#8FA" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="200" height="112" fill="url(#falafels)" />
    </svg>
  );
}

function WineCurves() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice">
      <path d="M0,80 Q30,60 60,70 Q90,80 120,50 Q150,20 180,40 Q200,50 200,45" fill="none" stroke="#D4A853" strokeWidth="0.6" opacity="0.6" />
      <path d="M0,90 Q40,70 80,80 Q120,90 160,60 Q180,45 200,55" fill="none" stroke="#D4A853" strokeWidth="0.4" opacity="0.4" />
      <path d="M0,70 Q25,55 50,60 Q75,65 100,45 Q130,20 160,35 Q185,48 200,35" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.5" />
      <path d="M0,100 Q50,85 100,90 Q150,95 200,70" fill="none" stroke="#D4A853" strokeWidth="0.3" opacity="0.3" />
      {/* droplets */}
      <circle cx="90" cy="35" r="2" fill="#D4A853" opacity="0.15" />
      <circle cx="140" cy="25" r="1.5" fill="#D4A853" opacity="0.12" />
      <circle cx="50" cy="55" r="1.8" fill="#D4A853" opacity="0.1" />
    </svg>
  );
}

const ILLUSTRATIONS: Record<
  string,
  { bg: string; hover: string; pattern: React.ReactNode }
> = {
  "cuisine-levantine-origines-plats-traditions": {
    bg: "bg-gradient-to-br from-[#E8D5B7] via-[#C8956C] to-[#B5654A]",
    hover: "group-hover:from-[#E0CBa7] group-hover:via-[#C08A60] group-hover:to-[#A85A40]",
    pattern: <ZelligeMosaic />,
  },
  "recette-houmous-maison-authentique": {
    bg: "bg-gradient-to-br from-[#F5EDE0] via-[#EDE2D0] to-[#E5D5B8]",
    hover: "group-hover:from-[#F0E5D5] group-hover:via-[#E8DAC5] group-hover:to-[#DDCBAA]",
    pattern: <HoumousCircles />,
  },
  "meilleurs-plats-restaurant-levantin": {
    bg: "bg-gradient-to-br from-[#4A5A3C] via-[#3E4E32] to-[#2E3D24]",
    hover: "group-hover:from-[#526344] group-hover:via-[#455638] group-hover:to-[#354529]",
    pattern: <HerbLeaves />,
  },
  "organiser-buffet-levantin-evenement": {
    bg: "bg-gradient-to-br from-[#722F37] via-[#5E2830] to-[#4A1F26]",
    hover: "group-hover:from-[#7D3440] group-hover:via-[#662D35] group-hover:to-[#52232B]",
    pattern: <DiamondPattern />,
  },
  "shakshuka-histoire-recette": {
    bg: "bg-gradient-to-br from-[#C94C30] via-[#B5402A] to-[#8B3020]",
    hover: "group-hover:from-[#D15438] group-hover:via-[#BD4830] group-hover:to-[#933626]",
    pattern: <ShakshukaOvals />,
  },
  "falafel-origines-recette-paris": {
    bg: "bg-gradient-to-br from-[#5A6E3A] via-[#7A8E4A] to-[#A89540]",
    hover: "group-hover:from-[#627842] group-hover:via-[#829852] group-hover:to-[#B09E48]",
    pattern: <FalafelDots />,
  },
  "vins-israeliens-libanais-mediterranee": {
    bg: "bg-gradient-to-br from-[#722F37] via-[#5C2240] to-[#3E1A3A]",
    hover: "group-hover:from-[#7D3440] group-hover:via-[#652848] group-hover:to-[#461F42]",
    pattern: <WineCurves />,
  },
  "click-collect-commander-emporter-noya": {
    bg: "bg-gradient-to-br from-[#4A5A3C] via-[#5A6E3A] to-[#D4A853]",
    hover: "group-hover:from-[#526344] group-hover:via-[#627842] group-hover:to-[#DCB25B]",
    pattern: <FalafelDots />,
  },
};

function getTextColor(slug: string): string {
  if (slug === "recette-houmous-maison-authentique") return "text-dark";
  return "text-white";
}

function getCategoryColor(slug: string): string {
  if (slug === "recette-houmous-maison-authentique")
    return "bg-dark/10 text-dark/60";
  return "bg-white/15 text-white/80";
}

export default function BlogIllustration({
  slug,
  title,
  category,
  size = "card",
}: {
  slug: string;
  title: string;
  category: string;
  size?: "card" | "hero";
}) {
  const illus = ILLUSTRATIONS[slug];
  if (!illus) return null;

  const isHero = size === "hero";
  const textColor = getTextColor(slug);
  const catColor = getCategoryColor(slug);

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isHero ? "aspect-[21/9] md:aspect-[3/1]" : "aspect-video"
      } ${illus.bg} ${illus.hover} transition-all duration-500`}
    >
      {illus.pattern}

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center ${
          isHero ? "px-8 md:px-16" : "px-5"
        }`}
      >
        <span
          className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] ${catColor} px-3 py-1 rounded-full mb-3`}
        >
          {category}
        </span>
        <h2
          className={`font-accent ${textColor} text-center leading-snug ${
            isHero
              ? "text-[clamp(22px,4vw,42px)]"
              : "text-[clamp(15px,2.5vw,20px)]"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
