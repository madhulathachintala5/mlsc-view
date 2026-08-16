import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { timeline } from "@/data/events";
import { impactHighlights } from "@/data/resources";

export function ImpactTimeline() {
  return (
    <section className="section-y" id="impact">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Impact"
          title="What MLSC has been doing"
          description="A record of the activities our community has run — competitions, workshops, expos and recognition."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ol className="relative border-l border-border pl-6">
            {timeline.map((item, i) => (
              <Reveal key={`${item.period}-${item.title}`} delay={i * 0.07}>
                <li className="relative pb-8 last:pb-0">
                  <span
                    className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-brand-accent ring-4 ring-background"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {item.period}
                  </p>
                  <Link
                    to="/events/$slug"
                    params={{ slug: item.slug }}
                    className="mt-1 inline-block text-lg font-semibold transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="text-lg font-semibold">Activities & focus areas</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {impactHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
