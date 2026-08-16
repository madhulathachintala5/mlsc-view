import { Instagram, Linkedin, Mail } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { site } from "@/data/site";

export function ContactSection() {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "MLSC @ VIEW",
      href: site.linkedin,
      external: true,
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: site.instagramHandle,
      href: site.instagram,
      external: true,
    },
  ];

  return (
    <section className="section-y bg-surface" id="contact">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with MLSC"
          description="Reach out for collaborations, event participation, or anything you would like to know about the community."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.07}>
              <a
                href={card.href}
                {...(card.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <card.icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm break-all text-muted-foreground">{card.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
