import { cn } from "@/lib/utils";

/**
 * Official MLSC logo.
 *
 * Drop the real logo file at `src/assets/mlsc-logo.jpeg`, then:
 *   import mlscLogo from "@/assets/mlsc-logo.jpeg";
 *   export const logoSrc: string | undefined = mlscLogo;
 *
 * Until then a neutral, branded geometric mark is rendered (never a
 * redesigned or AI-generated version of the real logo).
 */
export const logoSrc: string | undefined = undefined;

export function BrandLogo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt="Microsoft Learn Student Community logo"
        width={size}
        height={size}
        className={cn("h-auto w-auto object-contain", className)}
        style={{ maxHeight: size }}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-brand shadow-soft",
        className,
      )}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Microsoft Learn Student Community logo placeholder"
    >
      <svg
        viewBox="0 0 24 24"
        width={size * 0.55}
        height={size * 0.55}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="9" height="9" rx="1.5" fill="oklch(0.62 0.2 32)" />
        <rect x="13" y="2" width="9" height="9" rx="1.5" fill="oklch(0.82 0.16 85)" />
        <rect x="2" y="13" width="9" height="9" rx="1.5" fill="oklch(0.66 0.17 145)" />
        <rect x="13" y="13" width="9" height="9" rx="1.5" fill="oklch(0.99 0 0)" />
      </svg>
    </span>
  );
}
