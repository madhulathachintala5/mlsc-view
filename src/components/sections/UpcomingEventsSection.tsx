import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  Cpu,
  Gift,
  Handshake,
  IndianRupee,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  featuredUpcomingEvent,
  otherUpcomingEvents,
  type UpcomingEvent,
} from "@/data/upcoming-events";
import { cn } from "@/lib/utils";

function StatusBadge({ status, inverted = false }: { status: UpcomingEvent["status"]; inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        inverted
          ? "border-navy-foreground/25 text-navy-foreground"
          : "border-primary/20 bg-accent text-primary",
      )}
    >
      <motion.span
        className={cn("size-1.5 rounded-full", inverted ? "bg-navy-foreground" : "bg-primary")}
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

function EventAction({ event, featured = false }: { event: UpcomingEvent; featured?: boolean }) {
  const detailsUrl = event.detailsUrl;

  if (detailsUrl === "/events/techritz-2k26") {
    return (
      <Button asChild variant={featured ? "secondary" : "outline"} className="rounded-full">
        <Link to="/events/techritz-2k26">
          {featured ? "Explore TechRitz 2K26" : "View Details"}
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    );
  }

  if (detailsUrl) {
    return (
      <Button asChild variant={featured ? "secondary" : "outline"} className="rounded-full">
        <a href={detailsUrl} target="_blank" rel="noopener noreferrer">
          {featured ? "Explore Event" : "View Details"}
          <ArrowRight className="size-4" />
        </a>
      </Button>
    );
  }

  if (featured) {
    return (
      <Button asChild variant="secondary" size="lg" className="rounded-full px-6">
        <Link to="/events" hash="upcoming-events">
          Explore Event
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" size="sm" className="rounded-full">
      <Link to="/events" hash={event.id}>
        View Details
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}

function RegistrationAction({ event }: { event: UpcomingEvent }) {
  if (!event.registrationUrl) return null;

  return (
    <Button asChild size="sm" className="rounded-full">
      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
        Register
        <ArrowRight className="size-4" />
      </a>
    </Button>
  );
}

export function FeaturedUpcomingEvent({ event }: { event: UpcomingEvent }) {
  return (
    <motion.article
      id={event.id}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-3xl bg-brand text-navy-foreground shadow-lift"
    >
      <div className="grid-backdrop absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative grid min-h-105 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Featured Event
            </span>
            <StatusBadge status={event.status} inverted />
          </div>

          {event.highlight && (
            <p className="mt-7 text-sm font-semibold text-navy-foreground/80">{event.highlight}</p>
          )}
          <h3 className="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">{event.title}</h3>
          {event.tagline && (
            <p className="mt-3 text-base font-semibold text-navy-foreground sm:text-lg">{event.tagline}</p>
          )}
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
            {event.shortDescription ?? event.description}
          </p>
          {(event.date || event.collaboration || event.registrationFee) && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {event.date && <EventFact icon={CalendarDays} label="Date" value={event.date} />}
              {event.collaboration && <EventFact icon={Handshake} label="In collaboration with" value={event.collaboration} />}
              {event.registrationFee && <EventFact icon={IndianRupee} label="Registration fee" value={event.registrationFee} />}
            </div>
          )}
          {(event.prizes || event.participantBenefit) && (
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy-foreground">
              {event.prizes && (
                <span className="inline-flex items-center gap-2">
                  <Trophy className="size-4 text-ms-yellow" aria-hidden="true" />
                  Top 3 Winners: CodeChef Pro
                </span>
              )}
              {event.participantBenefit && (
                <span className="inline-flex items-center gap-2">
                  <Gift className="size-4 text-ms-green" aria-hidden="true" />
                  All Participants: {event.participantBenefit}
                </span>
              )}
            </div>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <EventAction event={event} featured />
            <RegistrationAction event={event} />
          </div>
        </div>

        <div className="relative hidden min-h-105 items-center justify-center overflow-hidden border-l border-navy-foreground/15 lg:flex" aria-hidden="true">
          <div className="absolute inset-10 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5" />
          <div className="relative flex size-52 items-center justify-center rounded-full border border-navy-foreground/20 bg-navy-foreground/10 shadow-glass">
            <Code2 className="size-24" strokeWidth={1.35} />
          </div>
          <Terminal className="absolute top-16 right-14 size-9 text-navy-foreground/45" />
          <Cpu className="absolute bottom-16 left-14 size-9 text-navy-foreground/45" />
        </div>
      </div>
    </motion.article>
  );
}

function EventFact({ icon: Icon, label, value }: { icon: typeof CalendarDays; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-navy-foreground/15 bg-navy-foreground/8 p-3">
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <div>
        <p className="text-xs text-navy-foreground/65">{label}</p>
        <p className="mt-0.5 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

export function UpcomingEventCard({ event }: { event: UpcomingEvent }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
          <Cpu className="size-5" aria-hidden="true" />
        </span>
        <StatusBadge status={event.status} />
      </div>
      <p className="mt-5 text-xs font-semibold text-primary uppercase">{event.category}</p>
      <h3 className="mt-1 text-xl font-semibold">{event.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <EventAction event={event} />
        <RegistrationAction event={event} />
      </div>
    </motion.article>
  );
}

export function UpcomingEventsSection() {
  return (
    <section className="section-y" id="upcoming-events">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Coming next"
          title="Upcoming Events"
          description="Discover what's coming next at MLSC. Get ready for exciting competitions, workshops, hackathons, and technical activities."
        />

        {featuredUpcomingEvent && (
          <Reveal className="mt-12">
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
  );
}
