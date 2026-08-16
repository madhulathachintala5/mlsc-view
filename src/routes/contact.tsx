import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MLSC @ VIEW" },
      {
        name: "description",
        content:
          "Reach the Microsoft Learn Student Community at Vignan's Institute of Engineering for Women by email or social media.",
      },
      { property: "og:title", content: "Contact MLSC @ VIEW" },
      {
        property: "og:description",
        content: "Get in touch with the MLSC core team for collaborations and queries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Questions, collaborations or sponsorship enquiries — the core team is happy to help."
      />
      <ContactSection />
    </>
  );
}
