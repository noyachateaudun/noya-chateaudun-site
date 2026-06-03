import type { ReactNode } from "react";
import { RESTAURANT } from "@/data/restaurant";

export default function ReserveButton({
  className,
  children,
  ariaLabel,
  source,
}: {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  source?: string;
}) {
  const baseUrl = RESTAURANT.links.reservation;
  const href = source
    ? `${baseUrl}&utm_source=website&utm_medium=${source}&utm_campaign=reservation`
    : baseUrl;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
