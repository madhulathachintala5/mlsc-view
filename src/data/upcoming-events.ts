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
  registrationQr?: string;
  detailsUrl?: string;
  registrationUrl?: string;
  featured?: boolean;
  shortDescription?: string;
  date?: string;
  eventStart?: string;
  organizer?: string;
  collaboration?: string;
  registrationFee?: string;
  prizes?: { place: string; reward: string }[];
  participantBenefit?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "coding-contest-2k26-techritz",
    title: "Coding Contest 2K26 – TechRitz",
    category: "Coding Competition",
    status: "Coming Soon",
    tagline: "Think. Code. Compete. Conquer.",
    highlight: "Something BIG is cooking at MLSC! 🔥",
    shortDescription:
      "Test your programming skills, sharpen your problem-solving abilities, and compete with fellow coders.",
    description:
      "Get ready for Coding Contest 2K26 – TechRitz, organized by MLSC in collaboration with CodeChef. Test your programming skills, sharpen your problem-solving abilities, and compete with fellow coders in an exciting coding competition. Challenge your logic, improve your coding skills, and showcase your programming abilities. Something BIG is cooking at MLSC! 🔥",
    date: "October 15 & 16, 2026",
    eventStart: "2026-10-15T00:00:00+05:30",
    organizer: "Microsoft Learn Student Community (MLSC)",
    collaboration: "CodeChef",
    registrationFee: "₹50",
    prizes: [
      { place: "1st Place", reward: "CodeChef Pro" },
      { place: "2nd Place", reward: "CodeChef Pro" },
      { place: "3rd Place", reward: "CodeChef Pro" },
    ],
    participantBenefit: "50% OFF on CodeChef Pro",
    image: `${import.meta.env.BASE_URL}assets/events/techritz-2k26-poster.jpeg`,
    registrationQr: `${import.meta.env.BASE_URL}assets/events/techritz-2k26-registration-qr.png`,
    detailsUrl: "/events/techritz-2k26",
    registrationUrl: "https://forms.gle/qn5JvYXuiA1GxWee8",
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

export function getUpcomingEvent(id: string): UpcomingEvent | undefined {
  return upcomingEvents.find((event) => event.id === id);
}
