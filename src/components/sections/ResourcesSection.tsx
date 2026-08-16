import { Bot, Brain, Cloud, Code2, ExternalLink, GitBranch, GraduationCap } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { resources, type Resource } from "@/data/resources";

const icons: Record<Resource["icon"], typeof Cloud> = {
  learn: GraduationCap,
  azure: Cloud,
  github: GitBranch,
  vscode: Code2,
  copilot: Bot,
  ai: Brain,
};

export function ResourcesSection() {
  return (
    <section className="section-y bg-surface" id="resources">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Learning resources"
          title="Explore & Learn"
          description="Official platforms and tools our community uses to learn, build and collaborate."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => {
            const Icon = icons[resource.icon];
            return (
              <Reveal key={resource.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{resource.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  {resource.href && (
                    <div className="mt-5">
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        <a href={resource.href} target="_blank" rel="noreferrer noopener">
                          Explore
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
