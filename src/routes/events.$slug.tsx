import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react";
import { useState } from "react";

import { EventCover } from "@/components/EventCover";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { getEvent } from "@/data/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Event not found — MLSC @ VIEW" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — MLSC @ VIEW` },
        { name: "description", content: event.summary },
        { property: "og:title", content: `${event.title} — MLSC @ VIEW` },
        { property: "og:description", content: event.summary },
      ],
    };
  },
  notFoundComponent: EventNotFound,
  component: EventDetails,
});

function EventNotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold">Event not found</h1>
      <p className="mt-3 text-muted-foreground">
        This event doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-6 rounded-full">
        <Link to="/events">Back to events</Link>
      </Button>
    </div>
  );
}

function EventDetails() {
  const { event } = Route.useLoaderData();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <Link
        to="/events"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All events
      </Link>

      <Reveal className="mt-6">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <div className="aspect-16/9 w-full">
            <EventCover event={event} />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
          {event.category}
        </span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{event.title}</h1>
        {event.context && (
          <p className="mt-2 text-sm text-muted-foreground">Part of {event.context}</p>
        )}
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          {event.description}
        </p>
      </Reveal>

      <Reveal className="mt-8">
        <dl className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-3">
          <InfoItem icon={CalendarDays} label="Date" value={event.date} />
          <InfoItem icon={MapPin} label="Venue" value={event.venue} />
          <InfoItem icon={Users} label="Organized by" value={event.organizer} />
        </dl>
      </Reveal>

      {event.facts && event.facts.length > 0 && (
        <Reveal className="mt-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {event.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {fact.label}
                </p>
                <p className="mt-1 text-lg font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {event.details?.map((section, i) => (
        <Reveal key={section.heading} delay={i * 0.05} className="mt-8">
          <section>
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      ))}

      <Reveal className="mt-12">
        <h2 className="text-xl font-semibold">Gallery</h2>
        {event.gallery.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-4 rounded-2xl border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground">
            {event.galleryNote ?? "No photographs are available for this event."}
          </p>
        )}
      </Reveal>

      <Lightbox
        images={event.gallery.map((p) => ({ ...p, label: event.title }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </article>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
        <Icon className="size-4.5" aria-hidden="true" />
      </span>
      <div>
        <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm font-medium">{value}</dd>
      </div>
    </div>
  );
}
