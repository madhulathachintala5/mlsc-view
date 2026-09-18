import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { TeamSection } from "@/components/sections/TeamSection";
import { ambassadors, coordinator, teamGroups } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Core Team — MLSC @ VIEW" },
      {
        name: "description",
        content:
          "Meet the MLSC @ VIEW core team: club coordinator, Microsoft Learn Student Ambassadors, technical, non-technical and junior core members.",
      },
      { property: "og:title", content: "Core Team — MLSC @ VIEW" },
      {
        property: "og:description",
        content: "The students and faculty leading the Microsoft Learn Student Community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Core team"
        title="The people behind MLSC @ VIEW"
        description="A structured team of coordinators, ambassadors, technical and non-technical leads working together."
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 md:py-20">
        <section aria-labelledby="coordinator">
          <Reveal>
            <h2 id="coordinator" className="text-2xl font-bold sm:text-3xl">
              Club Coordinator
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 max-w-sm">
            <TeamCard member={coordinator} featured />
          </Reveal>
        </section>

        <TeamSection group={ambassadors} featured />

        {teamGroups.map((group) => (
          <TeamSection key={group.id} group={group} />
        ))}
      </div>
    </>
  );
}
