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

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
        >
          <Linkedin className="size-3.5" aria-hidden="true" />
          LinkedIn
        </a>
      )}
    </motion.article>
  );
}
