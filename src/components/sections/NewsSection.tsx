import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Megaphone, Sparkles, Trophy, Zap } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  featuredNews,
  otherNews,
  upcomingNews,
  type NewsCategory,
  type NewsItem,
} from "@/data/news";

const categoryIcon: Record<NewsCategory, typeof Sparkles> = {
  "Featured Event": Sparkles,
  "Upcoming Event": Zap,
  Announcement: Megaphone,
  Achievement: Trophy,
};

function StatusBadge({ status }: { status: NewsItem["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {status}
    </span>
  );
}

function Cta({ item }: { item: NewsItem }) {
  const label = item.ctaLabel ?? "View Details";
  const href = item.registrationUrl ?? item.detailsUrl;

  if (href) {
    return (
      <Button asChild variant="secondary" size="sm" className="rounded-full">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowRight className="size-4" />
        </a>
      </Button>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </span>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const Icon = categoryIcon[item.category];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
          <Icon className="size-4.5" aria-hidden="true" />
        </span>
        <StatusBadge status={item.status} />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
      {item.date && (
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          {item.date}
        </p>
      )}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-5">
        <Cta item={item} />
      </div>
    </motion.article>
  );
}

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-3xl bg-brand p-8 text-navy-foreground shadow-lift sm:p-10"
    >
      <div className="grid-backdrop absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Featured Event
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-foreground/25 px-3 py-1 text-xs font-semibold text-navy-foreground">
          <motion.span
            className="size-1.5 rounded-full bg-navy-foreground"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          {item.status}
        </span>
      </div>

      <p className="relative mt-6 text-xs font-semibold tracking-[0.18em] text-navy-foreground/70 uppercase">
        Something big is cooking
      </p>
      <h3 className="relative mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {item.title}
      </h3>
      {item.date && (
        <p className="relative mt-2 text-sm text-navy-foreground/80">{item.date}</p>
      )}
      <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
        {item.description}
      </p>

      <div className="relative mt-7">
        {item.registrationUrl ?? item.detailsUrl ? (
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <a
              href={(item.registrationUrl ?? item.detailsUrl)!}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.ctaLabel ?? "View Details"}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors group-hover:border-navy-foreground/50">
            {item.ctaLabel ?? "View Details"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function NewsSection() {
  return (
    <section className="section-y" id="news">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="News"
          title="News & Updates"
          description="Stay updated with the latest events, activities, announcements, and achievements from MLSC."
        />

        {featuredNews && (
          <Reveal className="mt-12">
            <FeaturedCard item={featuredNews} />
          </Reveal>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {upcomingNews.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="h-full">
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {otherNews.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="h-full">
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
