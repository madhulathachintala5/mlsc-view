import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { EventCard } from "@/components/EventCard";
import { Hero } from "@/components/Hero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactTimeline } from "@/components/sections/ImpactTimeline";
import { Button } from "@/components/ui/button";
import { recentEvents } from "@/data/events";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MLSC @ VIEW — Learn. Build. Innovate." },
      {
        name: "description",
        content:
          "Official website of the Microsoft Learn Student Community at Vignan's Institute of Engineering for Women — events, team, resources and gallery.",
      },
      { property: "og:title", content: "MLSC @ VIEW — Learn. Build. Innovate." },
      {
        property: "og:description",
        content:
          "A student-driven technology community running coding contests, workshops and AI project expos.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />

      <section className="section-y bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Events"
            title="Our Recent Activities"
            description="Competitions, workshops and expos organised by MLSC @ VIEW."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentEvents.map((event, i) => (
              <Reveal key={event.slug} delay={i * 0.06} className="h-full">
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link to="/events">
                View All Events
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <ImpactTimeline />
    </>
  );
}
