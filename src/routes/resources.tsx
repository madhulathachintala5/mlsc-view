import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { ResourcesSection } from "@/components/sections/ResourcesSection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — MLSC @ VIEW" },
      {
        name: "description",
        content:
          "Microsoft Learn paths, Azure for Students, GitHub Student Pack and other free learning resources curated by MLSC @ VIEW.",
      },
      { property: "og:title", content: "Resources — MLSC @ VIEW" },
      {
        property: "og:description",
        content: "Curated Microsoft and open-source learning resources for students.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Learn with Microsoft, for free"
        description="Curated platforms, learning paths and student benefits we recommend to every member."
      />
      <ResourcesSection />
    </>
  );
}
