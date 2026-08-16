import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { EventCard } from "@/components/EventCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import {
  eventCategories,
  events,
  matchesFilter,
  type EventFilter,
} from "@/data/events";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — MLSC @ VIEW" },
      {
        name: "description",
        content:
          "Coding contests, Git & GitHub competitions, Microsoft technology workshops, AI project expos and community events by MLSC @ VIEW.",
      },
      { property: "og:title", content: "Events — MLSC @ VIEW" },
      {
        property: "og:description",
        content: "Explore all events organised by the Microsoft Learn Student Community.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>("All");
  const visible = events.filter((event) => matchesFilter(event, filter));

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="What we organise"
        description="Every MLSC @ VIEW event — competitions, workshops, expos and community activities."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <div
          role="group"
          aria-label="Filter events by category"
          className="flex flex-wrap gap-2"
        >
          {eventCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                filter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((event, i) => (
            <Reveal key={event.slug} delay={i * 0.05} className="h-full">
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No events in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
