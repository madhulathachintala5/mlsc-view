export type Resource = {
  title: string;
  description: string;
  icon: "learn" | "azure" | "github" | "vscode" | "copilot" | "ai";
  href?: string;
};

/**
 * Only official, well-known links are used here. Add or edit links freely —
 * cards without an href render without an Explore button.
 */
export const resources: Resource[] = [
  {
    title: "Microsoft Learn",
    description: "Learn through Microsoft's official learning platform.",
    icon: "learn",
    href: "https://learn.microsoft.com/",
  },
  {
    title: "Azure",
    description: "Explore cloud computing and Microsoft Azure.",
    icon: "azure",
    href: "https://azure.microsoft.com/",
  },
  {
    title: "GitHub",
    description:
      "Learn version control, collaboration, repositories and open-source development.",
    icon: "github",
    href: "https://github.com/",
  },
  {
    title: "Visual Studio Code",
    description: "Explore coding and development using VS Code.",
    icon: "vscode",
    href: "https://code.visualstudio.com/",
  },
  {
    title: "GitHub Copilot",
    description: "Explore AI-assisted coding and development.",
    icon: "copilot",
    href: "https://github.com/features/copilot",
  },
  {
    title: "Artificial Intelligence",
    description: "Explore AI concepts, tools and practical applications.",
    icon: "ai",
    href: "https://learn.microsoft.com/en-us/training/browse/?terms=artificial%20intelligence",
  },
];

export const impactHighlights = [
  "Coding competitions",
  "Git & GitHub activities",
  "Microsoft technology workshops",
  "AI project exhibitions",
  "Student collaboration",
  "Technical leadership",
  "Community recognition",
  "Badge distribution",
  "Hands-on learning",
];
