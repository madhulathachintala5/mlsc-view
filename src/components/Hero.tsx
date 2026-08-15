import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code2, GitBranch, Sparkles } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const codeLines = [
  { text: "// MLSC @ VIEW", tone: "muted" },
  { text: "const community = {", tone: "base" },
  { text: '  focus: ["Azure", "GitHub", "AI"],', tone: "accent" },
  { text: "  learn: true, build: true,", tone: "base" },
  { text: "};", tone: "base" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-accent/50 to-transparent"
        aria-hidden="true"
      />
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            Microsoft Learn Student Community
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl"
          >
            Learn. Build. <span className="text-brand-gradient">Innovate.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg font-medium text-foreground/85"
          >
            Microsoft Learn Student Community @ {site.college}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 max-w-xl leading-relaxed text-muted-foreground"
          >
            Empowering students through technology, collaboration, hands-on learning, and
            opportunities to build real-world skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/about">
                Explore MLSC
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <Link to="/join">Join Our Community</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-hidden="true"
        >
          <div className="glass-panel relative rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BrandLogo size={46} />
              <div>
                <p className="text-sm font-bold">MLSC @ VIEW</p>
                <p className="text-xs text-muted-foreground">Student Technology Community</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-navy p-5 font-mono text-[13px] leading-relaxed text-navy-foreground/85">
              {codeLines.map((line) => (
                <p
                  key={line.text}
                  className={
                    line.tone === "muted"
                      ? "text-navy-foreground/45"
                      : line.tone === "accent"
                        ? "text-cyan"
                        : ""
                  }
                >
                  {line.text}
                </p>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { icon: Cloud, label: "Azure" },
                { icon: GitBranch, label: "GitHub" },
                { icon: Code2, label: "VS Code" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-card/80 p-3 text-center"
                >
                  <Icon className="mx-auto size-5 text-primary" />
                  <p className="mt-1.5 text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-6 -right-4 hidden size-24 rounded-2xl bg-brand-accent opacity-20 blur-2xl sm:block" />
          <div className="absolute -bottom-8 -left-6 hidden size-32 rounded-full bg-cyan opacity-20 blur-3xl sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
