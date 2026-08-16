import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase backdrop-blur"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-4 max-w-2xl leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
