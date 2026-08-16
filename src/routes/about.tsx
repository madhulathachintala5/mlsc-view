import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactTimeline } from "@/components/sections/ImpactTimeline";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MLSC — Microsoft Learn Student Community @ VIEW" },
      {
        name: "description",
        content:
          "MLSC is a student-driven technology community at Vignan's Institute of Engineering for Women, focused on learning, building and collaboration.",
      },
      { property: "og:title", content: "About MLSC @ VIEW" },
      {
        property: "og:description",
        content:
          "Our mission, vision and the way MLSC helps students explore technology and leadership.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A student technology community"
        description="Microsoft Learn Student Community @ Vignan's Institute of Engineering for Women."
      />
      <AboutSection />
      <ImpactTimeline />
    </>
  );
}
