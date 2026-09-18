import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { EventCard } from "@/components/EventCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import {
  FeaturedUpcomingEvent,
  UpcomingEventCard,
} from "@/components/sections/UpcomingEventsSection";
import {
  eventCategories,
  events,
  matchesFilter,
  type EventFilter,
} from "@/data/events";
import { cn } from "@/lib/utils";
import { featuredUpcomingEvent, otherUpcomingEvents } from "@/data/upcoming-events";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

      <section id="upcoming-events" className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <Reveal>
            <p className="text-sm font-semibold text-primary">Coming next</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Upcoming Events</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Discover upcoming MLSC competitions, hackathons, workshops, and technical activities.
            </p>
          </Reveal>

          {featuredUpcomingEvent && (
            <Reveal className="mt-10">
              <FeaturedUpcomingEvent event={featuredUpcomingEvent} />
            </Reveal>
          )}

          {otherUpcomingEvents.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherUpcomingEvents.map((event, index) => (
                <Reveal key={event.id} delay={index * 0.06} className="h-full">
                  <UpcomingEventCard event={event} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Past Events</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore competitions, workshops, expos, and community activities organized by MLSC @ VIEW.
          </p>
        </Reveal>
        <div
          role="group"
          aria-label="Filter events by category"
          className="mt-8 flex flex-wrap gap-2"
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
