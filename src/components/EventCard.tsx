import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { EventCover } from "@/components/EventCover";
import { Button } from "@/components/ui/button";
import type { MlscEvent } from "@/data/events";

export function EventCard({ event }: { event: MlscEvent }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
    >
      <div className="relative aspect-16/9 w-full overflow-hidden">
        <EventCover event={event} />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {event.organizer}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold tracking-tight">{event.title}</h3>
        {event.context && (
          <p className="mt-0.5 text-sm font-medium text-primary">{event.context}</p>
        )}
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {event.summary}
        </p>

        <div className="mt-5 pt-1">
          <Button asChild variant="secondary" size="sm" className="rounded-full">
            <Link to="/events/$slug" params={{ slug: event.slug }}>
              View Details
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
