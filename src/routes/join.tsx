import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { JoinSection } from "@/components/sections/JoinSection";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join MLSC — Microsoft Learn Student Community @ VIEW" },
      {
        name: "description",
        content:
          "Apply to join MLSC at Vignan's Institute of Engineering for Women and build real projects with Microsoft technologies.",
      },
      { property: "og:title", content: "Join MLSC @ VIEW" },
      {
        property: "og:description",
        content: "Recruitment for the Microsoft Learn Student Community at VIEW.",
      },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join us"
        title="Become part of MLSC @ VIEW"
        description="Open to every student of Vignan's Institute of Engineering for Women — no prior experience required."
      />
      <JoinSection />
    </>
  );
}
