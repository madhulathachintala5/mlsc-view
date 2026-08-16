import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { EventCover } from "@/components/EventCover";
import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { events } from "@/data/events";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — MLSC @ VIEW" },
      {
        name: "description",
        content:
          "Moments from MLSC @ VIEW workshops, coding contests, expos and badge distribution ceremonies.",
      },
      { property: "og:title", content: "Gallery — MLSC @ VIEW" },
      {
        property: "og:description",
        content: "A visual look at the Microsoft Learn Student Community at VIEW.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const photos: LightboxImage[] = events.flatMap((event) =>
    event.gallery.map((photo) => ({ ...photo, label: event.title })),
  );
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from our community"
        description="Photographs and branded artwork from MLSC @ VIEW events."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        {photos.length > 0 && (
          <div className="mb-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {photos.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>
            ))}
          </div>
        )}

        <h2 className="text-xl font-semibold">Event artwork</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Until official event photographs are added, each event is represented by its
          branded MLSC cover graphic.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.slug} delay={i * 0.05}>
              <figure className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <div className="aspect-4/3 w-full">
                  <EventCover event={event} />
                </div>
                <figcaption className="border-t border-border bg-card px-4 py-3">
                  <p className="text-sm font-semibold">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={photos}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
