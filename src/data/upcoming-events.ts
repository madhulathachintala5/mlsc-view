export type UpcomingEventStatus = "Coming Soon" | "Registration Open";

export type UpcomingEvent = {
  id: string;
  title: string;
  category: string;
  status: UpcomingEventStatus;
  description: string;
  tagline?: string;
  highlight?: string;
  image?: string;
  detailsUrl?: string;
  registrationUrl?: string;
  featured?: boolean;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "coding-contest-2k26-techritz",
    title: "Coding Contest 2K26 – TechRitz",
    category: "Coding Competition",
    status: "Coming Soon",
    tagline: "Think. Code. Compete. Conquer.",
    highlight: "Something BIG is cooking at MLSC! 🔥",
    description:
      "Get ready for Coding Contest 2K26 – TechRitz, an exciting coding competition organized by MLSC. Challenge your problem-solving skills, compete with fellow coders, and showcase your programming abilities.",
    featured: true,
  },
  {
    id: "24-hour-hackathon",
    title: "24-Hour Hackathon",
    category: "Hackathon",
    status: "Coming Soon",
    description: "Build. Innovate. Collaborate. Compete.",
  },
];

export const featuredUpcomingEvent = upcomingEvents.find((event) => event.featured);
export const otherUpcomingEvents = upcomingEvents.filter((event) => !event.featured);
