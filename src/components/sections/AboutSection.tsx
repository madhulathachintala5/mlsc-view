import { Compass, Hammer, Target, Telescope, Users } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { site } from "@/data/site";

const features = [
  {
    icon: Compass,
    title: "Learn",
    text: "Explore technologies, tools, and learning resources.",
  },
  {
    icon: Hammer,
    title: "Build",
    text: "Work on projects, challenges, and practical activities.",
  },
  {
    icon: Users,
    title: "Collaborate",
    text: "Connect with students, leaders, mentors, and the wider technology community.",
  },
];

export function AboutSection() {
  return (
    <section className="section-y" id="about">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who we are"
          title="About MLSC"
          description={`Microsoft Learn Student Community is a student-driven technology community at ${site.college}. MLSC provides students with opportunities to explore modern technologies, participate in technical events, work on projects, collaborate with peers, and develop both technical and leadership skills.`}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <feature.icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-primary/20 bg-linear-to-br from-accent/70 to-card p-7 shadow-soft">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Target className="size-4.5" aria-hidden="true" /> Mission
              </span>
              <p className="mt-3 text-lg leading-relaxed font-medium">
                To create a collaborative learning environment where students can explore
                technology, develop practical skills, and grow together.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-navy p-7 text-navy-foreground shadow-soft">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                <Telescope className="size-4.5" aria-hidden="true" /> Vision
              </span>
              <p className="mt-3 text-lg leading-relaxed font-medium">
                To build a strong student technology community that inspires innovation,
                leadership, collaboration, and continuous learning.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
