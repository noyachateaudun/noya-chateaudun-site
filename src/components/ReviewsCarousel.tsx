import { REVIEWS } from "@/data/reviews";

export default function ReviewsCarousel() {
  return (
    <div
      className="flex gap-5 overflow-x-auto pb-4 -mx-2 px-2"
      style={{
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {REVIEWS.map((review, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[300px] bg-white rounded-xl border border-[#E5DFD5] p-6 hover:shadow-md transition-shadow"
          style={{ scrollSnapAlign: "start" }}
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
            <span className="text-dark/55">{review.platform}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
