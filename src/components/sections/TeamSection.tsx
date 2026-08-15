import { Award } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import type { TeamGroup } from "@/data/team";

export function TeamSection({
  group,
  featured = false,
}: {
  group: TeamGroup;
  featured?: boolean;
}) {
  return (
    <section
      aria-labelledby={`team-${group.id}`}
      className={
        featured
          ? "rounded-3xl border border-primary/20 bg-linear-to-b from-accent/60 to-transparent p-6 sm:p-10"
          : ""
      }
    >
      <Reveal>
        <div className="flex items-center gap-3">
          {featured && (
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand text-navy-foreground">
              <Award className="size-5" aria-hidden="true" />
            </span>
          )}
          <h2 id={`team-${group.id}`} className="text-2xl font-bold sm:text-3xl">
            {group.title}
          </h2>
        </div>
        {group.description && (
          <p className="mt-2 max-w-2xl text-muted-foreground">{group.description}</p>
        )}
      </Reveal>

      <div
        className={
          featured
            ? "mt-8 grid gap-5 sm:grid-cols-2"
            : "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {group.members.map((member, i) => (
          <Reveal key={`${member.name}-${member.role}`} delay={i * 0.05}>
            <TeamCard member={member} featured={featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
