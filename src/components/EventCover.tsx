import { BrandLogo } from "@/components/BrandLogo";
import type { MlscEvent } from "@/data/events";

/**
 * Renders the event poster/cover when a real image is available, otherwise a
 * clean MLSC-branded graphic (never a fabricated photograph).
 */
export function EventCover({ event }: { event: MlscEvent }) {
  const src = event.cover ?? event.poster ?? event.gallery[0]?.src;

  if (src) {
    return (
      <img
        src={src}
        alt={`${event.title} — MLSC @ VIEW`}
        loading="lazy"
        className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-brand text-center">
      <div className="grid-backdrop absolute inset-0 opacity-40" aria-hidden="true" />
      <BrandLogo size={44} className="relative" />
      <p className="relative mt-3 px-6 text-sm font-semibold text-navy-foreground">
        {event.title}
      </p>
      <p className="relative mt-1 text-xs text-navy-foreground/70">MLSC @ VIEW</p>
    </div>
  );
}
