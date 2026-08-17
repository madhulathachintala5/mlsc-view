import { motion } from "framer-motion";
import { Github, Linkedin, Mail, User } from "lucide-react";


import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

export function TeamCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className={cn(
        "flex h-full flex-col items-center rounded-2xl border p-6 text-center shadow-soft transition-shadow hover:shadow-lift",
        featured
          ? "border-primary/25 bg-linear-to-b from-accent/60 to-card"
          : "border-border bg-card",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-full border bg-secondary",
          featured ? "size-24 border-primary/30" : "size-20 border-border",
        )}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <User className="size-8 text-muted-foreground" aria-hidden="true" />
        )}
      </div>

      <h3 className={cn("mt-4 font-semibold", featured ? "text-lg" : "text-base")}>
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
      {member.bio && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
      )}

      {(member.linkedin || member.github || member.email) && (
        <div className="mt-4 flex items-center gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              title="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on GitHub`}
              title="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Github className="size-4" aria-hidden="true" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              title={member.email}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      )}

    </motion.article>
  );
}
