"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    ZenchefWidget?: { open: () => void };
  }
}

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
    <button
      type="button"
      onClick={() => window.ZenchefWidget?.open()}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
