export type NewsStatus = "Coming Soon" | "Registration Open" | "Completed";

export type NewsCategory =
  | "Featured Event"
  | "Upcoming Event"
  | "Announcement"
  | "Achievement";

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  description: string;
  /** Optional — leave undefined until the date is officially confirmed. */
  date?: string;
  /** Optional banner/image URL. */
  image?: string;
  status: NewsStatus;
  /** Only set when a real registration link exists. */
  registrationUrl?: string;
  /** Internal route or external link with more details. */
  detailsUrl?: string;
  ctaLabel?: string;
  /** Marks the single visual centerpiece of the section. */
  featured?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: "techritz-2k26",
    category: "Featured Event",
    title: "TechRitz 2K26",
    description:
      "A big technology event is cooking at MLSC. Stay tuned for an exciting experience packed with technology, innovation, challenges, learning, and collaboration.",
    status: "Coming Soon",
    ctaLabel: "Explore TechRitz 2K26",
    featured: true,
  },
  {
    id: "24-hour-hackathon",
    category: "Upcoming Event",
    title: "24-Hour Hackathon",
    description:
      "Build. Innovate. Collaborate. Compete. Join MLSC for an intense 24-hour hackathon where ideas turn into innovative solutions.",
    status: "Coming Soon",
    ctaLabel: "Stay Tuned",
  },
  {
    id: "upcoming-mlsc-event",
    category: "Upcoming Event",
    title: "Upcoming MLSC Event",
    description:
      "Something exciting is coming soon. Stay tuned for more details.",
    status: "Coming Soon",
    ctaLabel: "Learn More",
  },
  {
    id: "new-mlsc-activities",
    category: "Announcement",
    title: "New MLSC Activities",
    description:
      "New activities and initiatives are coming soon. Stay connected with MLSC for the latest updates.",
    status: "Coming Soon",
    ctaLabel: "View Details",
  },
  {
    id: "mlsc-community-achievement",
    category: "Achievement",
    title: "MLSC Community Achievement",
    description:
      "Congratulations to our members for their latest achievements and contributions to the MLSC community.",
    status: "Coming Soon",
    ctaLabel: "View Details",
  },
];

export const featuredNews = newsItems.find((item) => item.featured);
export const upcomingNews = newsItems.filter(
  (item) => !item.featured && item.category === "Upcoming Event",
);
export const otherNews = newsItems.filter(
  (item) => item.category === "Announcement" || item.category === "Achievement",
);
