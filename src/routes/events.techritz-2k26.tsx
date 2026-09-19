import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  Gift,
  Handshake,
  IndianRupee,
  Medal,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { getUpcomingEvent } from "@/data/upcoming-events";

const event = getUpcomingEvent("coding-contest-2k26-techritz");

export const Route = createFileRoute("/events/techritz-2k26")({
  head: () => ({
    meta: [
      { title: "Coding Contest 2K26 – TechRitz — MLSC @ VIEW" },
      {
        name: "description",
        content:
          "Coding Contest 2K26 – TechRitz by MLSC in collaboration with CodeChef, October 15 and 16, 2026.",
      },
      { property: "og:title", content: "Coding Contest 2K26 – TechRitz — MLSC @ VIEW" },
      {
        property: "og:description",
        content: "Think. Code. Compete. Conquer. Join MLSC and CodeChef for TechRitz 2K26.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechRitzDetailsPage,
});

type CountdownValue = { days: number; hours: number; minutes: number; seconds: number; started: boolean };

function getCountdown(target: string): CountdownValue {
  const difference = new Date(target).getTime() - Date.now();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    started: false,
  };
}

function TechRitzDetailsPage() {
  if (!event) return null;
  const prizes = event.prizes ?? [];

  return (
    <main>
      <section className="relative overflow-hidden bg-brand text-navy-foreground">
        <div className="grid-backdrop absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-foreground/75 transition-colors hover:text-navy-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All events
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" aria-hidden="true" /> Upcoming Event
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-3 py-1 text-xs font-semibold">
                  <span className="size-1.5 rounded-full bg-ms-yellow" aria-hidden="true" /> {event.status}
                </span>
              </div>
              <p className="mt-7 text-sm font-semibold text-navy-foreground/75">{event.highlight}</p>
              <h1 className="mt-2 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">{event.title}</h1>
              <p className="mt-4 text-lg font-semibold sm:text-xl">{event.tagline}</p>
              <p className="mt-6 max-w-3xl leading-relaxed text-navy-foreground/80">{event.description}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-navy-foreground/15 bg-navy-foreground/8 shadow-glass"
              >
                <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
                <div className="relative text-center">
                  <div className="mx-auto flex size-28 items-center justify-center rounded-full border border-navy-foreground/20 bg-navy-foreground/10">
                    <Code2 className="size-14" strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase">MLSC × CodeChef</p>
                  <p className="mt-2 text-2xl font-bold">Think. Code. Compete.</p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <Fact icon={CalendarDays} label="Event dates" value={event.date ?? "To be announced"} />
          <Fact icon={Handshake} label="Collaboration" value={event.collaboration ?? "—"} />
          <Fact icon={IndianRupee} label="Registration fee" value={event.registrationFee ?? "—"} />
          <Fact icon={Users} label="Organized by" value="MLSC" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <p className="text-sm font-semibold text-primary">Event countdown</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The challenge begins soon</h2>
          {event.eventStart && <Countdown target={event.eventStart} />}
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-primary">Event overview</p>
              <h2 className="mt-2 text-3xl font-bold">Built for coders who want to grow</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>{event.description}</p>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 text-foreground">
                <Handshake className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p><strong>In collaboration with CodeChef.</strong> A focused competition designed to challenge logic, problem-solving, and programming ability.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <p className="text-sm font-semibold text-primary">Rewards</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Prizes &amp; Exclusive Benefits</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {prizes.map((prize, index) => (
              <motion.article
                key={prize.place}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  {index === 0 ? <Trophy className="size-5" /> : <Medal className="size-5" />}
                </span>
                <p className="mt-5 text-sm font-semibold text-muted-foreground">{prize.place}</p>
                <h3 className="mt-1 text-2xl font-bold">{prize.reward}</h3>
              </motion.article>
            ))}
          </div>
          <motion.div
            whileHover={{ y: -3 }}
            className="mt-5 flex flex-col gap-5 rounded-2xl border border-primary/20 bg-accent p-6 sm:flex-row sm:items-center"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Gift className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-primary">All participants</p>
              <h3 className="mt-1 text-2xl font-bold">{event.participantBenefit}</h3>
              <p className="mt-1 text-sm text-muted-foreground">An exclusive CodeChef Pro benefit for every participant.</p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="mt-16">
          <section className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-primary">Registration</p>
                <h2 className="mt-2 text-3xl font-bold">Register for TechRitz 2K26</h2>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                  <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-primary" /> {event.date}</span>
                  <span className="inline-flex items-center gap-2"><IndianRupee className="size-4 text-primary" /> Fee: {event.registrationFee}</span>
                  <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-primary" /> {event.status}</span>
                </div>
              </div>
              <div className="text-left lg:text-right">
                <Button disabled size="lg" className="rounded-full px-7">Register Now</Button>
                <p className="mt-3 text-sm font-medium text-muted-foreground">Registration Opening Soon</p>
              </div>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}

function Countdown({ target }: { target: string }) {
  const [countdown, setCountdown] = useState<CountdownValue | null>(null);

  useEffect(() => {
    const update = () => setCountdown(getCountdown(target));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);

  if (!countdown) {
    return <div className="mt-7 h-24 animate-pulse rounded-2xl bg-muted" aria-label="Loading event countdown" />;
  }

  if (countdown.started) {
    return (
      <div className="mt-7 flex items-center gap-3 rounded-2xl border border-primary/20 bg-accent p-5 font-semibold text-primary">
        <CheckCircle2 className="size-5" aria-hidden="true" /> The event has begun.
      </div>
    );
  }

  return (
    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Countdown to Coding Contest 2K26 – TechRitz">
      {([
        ["Days", countdown.days],
        ["Hours", countdown.hours],
        ["Minutes", countdown.minutes],
        ["Seconds", countdown.seconds],
      ] as const).map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
          <p className="text-3xl font-bold tabular-nums sm:text-4xl">{String(value).padStart(2, "0")}</p>
          <p className="mt-1 text-xs font-semibold uppercase text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  );
}

function Fact({ icon: Icon, label, value }: { icon: typeof CalendarDays; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}