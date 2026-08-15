import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size={44} />
            <div>
              <p className="text-lg font-bold">MLSC @ VIEW</p>
              <p className="text-sm text-navy-foreground/70">
                Microsoft Learn Student Community
              </p>
            </div>
          </div>
          <p className="mt-5 text-xl font-semibold tracking-tight">{site.tagline}</p>
          <p className="mt-2 max-w-sm text-sm text-navy-foreground/70">{site.college}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Connect</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="MLSC on LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-navy-foreground/20 transition-colors hover:bg-navy-foreground/10"
            >
              <Linkedin className="size-4.5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="MLSC on Instagram"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-navy-foreground/20 transition-colors hover:bg-navy-foreground/10"
            >
              <Instagram className="size-4.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email MLSC"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-navy-foreground/20 transition-colors hover:bg-navy-foreground/10"
            >
              <Mail className="size-4.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto w-full max-w-7xl px-4 py-5 text-center text-xs text-navy-foreground/60 sm:px-6">
          © 2026 MLSC @ VIEW. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
