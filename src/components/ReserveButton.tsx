import type { ReactNode } from "react";
import { RESTAURANT } from "@/data/restaurant";

/**
 * Bouton de réservation.
 * Pointe vers l'URL de réservation Zenchef. Le SDK Zenchef chargé dans le
 * layout intercepte les liens vers bookings.zenchef.com et les ouvre en
 * modale. Sans JS (ou si le SDK ne charge pas), le lien ouvre simplement la
 * page de réservation Zenchef dans un nouvel onglet (progressive enhancement).
 */
export default function ReserveButton({
  className,
  children,
  ariaLabel,
}: {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={RESTAURANT.links.reservation}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
