import badge1Asset from "@/assets/events/photo1-2.jpeg.asset.json";
import badge2Asset from "@/assets/events/photo2-2.jpeg.asset.json";
import badge3Asset from "@/assets/events/photo3-2.jpeg.asset.json";
import badge4Asset from "@/assets/events/photo4-2.jpeg.asset.json";
import gitgo1Asset from "@/assets/events/photo1.jpeg.asset.json";
import gitgo2Asset from "@/assets/events/photo2.jpeg.asset.json";
import gitgo3Asset from "@/assets/events/photo3.jpeg.asset.json";
import gitgo4Asset from "@/assets/events/photo4.jpeg.asset.json";
import gitgo5Asset from "@/assets/events/photo5.jpeg.asset.json";
import gitgoPosterAsset from "@/assets/events/poster.jpeg.asset.json";

export type EventCategory =
  | "Coding"
  | "Competition"
  | "Workshop"
  | "Project Expo"
  | "Community";

export type EventPhoto = {
  /** Image URL. Leave the list empty until real photographs are added. */
  src: string;
  alt: string;
};

export type EventSection = {
  heading: string;
  items: string[];
};

export type MlscEvent = {
  slug: string;
  title: string;
  category: EventCategory;
  date: string;
  /** Sortable ISO-ish key, newest first. */
  sortKey: string;
  venue: string;
  organizer: string;
  context?: string;
  summary: string;
  description: string;
  /** Poster / cover image URL. When absent a branded cover is rendered. */
  cover?: string;
  poster?: string;
  details?: EventSection[];
  facts?: { label: string; value: string }[];
  gallery: EventPhoto[];
  galleryNote?: string;
};

export const events: MlscEvent[] = [
  {
    slug: "ai-project-expo",
    title: "AI Project Expo",
    category: "Project Expo",
    date: "7–8 August 2026",
    sortKey: "2026-08-08",
    venue: "Vignan's Institute of Engineering for Women",
    organizer: "MLSC",
    summary:
      "A two-round project showcase where student projects were evaluated in the qualifying round and selected teams advanced to the final expo.",
    description:
      "A two-round project showcase where student projects were evaluated in the qualifying round and selected teams advanced to the final project expo.",
    details: [
      {
        heading: "Round 1 — Qualifying Round (7 August 2026)",
        items: [
          "Projects were examined by judges.",
          "Selected projects qualified for Round 2.",
        ],
      },
      {
        heading: "Round 2 — Project Expo Round (8 August 2026)",
        items: [
          "Qualified teams presented their projects in an expo.",
          "Projects were examined by the evaluators.",
          "Top 2–3 teams were announced.",
        ],
      },
      {
        heading: "Certificates & Awards",
        items: [
          "Participation certificate for students participating in Round 1.",
          "Merit certificate for students qualifying for Round 2.",
          "Prizes for winning teams.",
        ],
      },
      {
        heading: "Contest Rule",
        items: [
          "Projects could be working projects, including AI-generated or vibe-coded projects.",
          "Participants were required to use Microsoft Copilot for research, development or debugging.",
        ],
      },
    ],
    facts: [
      { label: "Team size", value: "3–5 members" },
      { label: "Participation fee", value: "₹20 per head" },
    ],
    gallery: [],
    galleryNote:
      "The official AI Project Expo poster and 8 event photographs will appear here once the image files are added to the project.",
  },
  {
    slug: "club-members-badge-distribution",
    title: "Club Members Badge Distribution",
    category: "Community",
    date: "August 2026",
    sortKey: "2026-08-20",
    venue: "Seminar Hall, Vignan's Institute of Engineering for Women",
    organizer: "MLSC",
    summary:
      "An official MLSC recognition event where club members received their community badges.",
    description:
      "An official MLSC recognition event where club members received their community badges.",
    cover: badge1Asset.url,
    gallery: [
      { src: badge1Asset.url, alt: "MLSC @ VIEW club members and faculty group photo at the badge distribution ceremony" },
      { src: badge2Asset.url, alt: "Faculty pinning an MLSC badge on a club member on stage" },
      { src: badge3Asset.url, alt: "MLSC members applauding on stage during the badge distribution ceremony" },
      { src: badge4Asset.url, alt: "A club member receiving her MLSC badge from faculty" },
    ],
  },
  {
    slug: "first-year-workshop",
    title: "Workshop for First-Year Students",
    category: "Workshop",
    date: "July 2026",
    sortKey: "2026-07-15",
    venue: "Vignan's Institute of Engineering for Women",
    organizer: "MLSC",
    summary:
      "An introductory workshop helping first-year students begin exploring Microsoft tools and the wider technology ecosystem.",
    description:
      "An introductory workshop designed to introduce first-year students to various Microsoft tools and technologies and help them begin exploring the technology ecosystem.",
    gallery: [],
    galleryNote:
      "The 5 workshop photographs will appear here once the image files are added to the project.",
  },
  {
    slug: "git-and-go-contest",
    title: "Git & Go Contest",
    category: "Competition",
    date: "16–17 June 2026",
    sortKey: "2026-06-17",
    venue: "Vignan's Institute of Engineering for Women",
    organizer: "MLSC",
    summary:
      "A contest on using Git and GitHub effectively — collaborating through version control and deploying projects.",
    description:
      "A competition among participants to effectively use Git and GitHub, collaborate through version control, and deploy their projects.",
    details: [
      {
        heading: "Themes",
        items: ["Code", "Collaborate", "Commit", "Conquer"],
      },
      {
        heading: "Certificates & Prizes",
        items: [
          "Certificates provided to all participants.",
          "Prizes for the top 3 teams.",
        ],
      },
    ],
    facts: [
      { label: "Team size", value: "2–4 members" },
      { label: "Participation fee", value: "₹20 per head" },
    ],
    poster: gitgoPosterAsset.url,
    cover: gitgoPosterAsset.url,
    gallery: [
      { src: gitgoPosterAsset.url, alt: "Official Git & Go contest poster" },
      { src: gitgo5Asset.url, alt: "Session on GitHub fundamentals and collaborative development during Git & Go" },
      { src: gitgo1Asset.url, alt: "Ribbon-cutting inauguration of the Git & Go contest" },
      { src: gitgo2Asset.url, alt: "Participants working at the computer lab during the Git & Go contest" },
      { src: gitgo3Asset.url, alt: "Team collaborating around a workstation during the Git & Go contest" },
      { src: gitgo4Asset.url, alt: "Wide view of the lab filled with Git & Go contest participants" },
    ],
  },
  {
    slug: "coding-contest-techritz-2k25",
    title: "Coding Contest — Techritz 2K25",
    category: "Coding",
    date: "Techritz 2K25",
    sortKey: "2025-01-01",
    venue: "Vignan's Institute of Engineering for Women",
    organizer: "MLSC",
    context: "Techritz 2K25",
    summary:
      "A three-round coding competition designed to evaluate participants across different levels of programming ability.",
    description:
      "A three-round coding competition designed to evaluate participants across different levels of programming ability.",
    details: [
      {
        heading: "Rounds",
        items: [
          "Round 1 — focused on understanding skills and basic programming.",
          "Round 2 — focused on problem-solving skills.",
          "Round 3 — focused on time, accuracy and problem-solving ability.",
        ],
      },
    ],
    gallery: [],
    galleryNote: "No photographs were captured for this event.",
  },
];

export const eventCategories = [
  "All",
  "Competitions",
  "Workshops",
  "Expo",
  "Community",
] as const;

export type EventFilter = (typeof eventCategories)[number];

export function matchesFilter(event: MlscEvent, filter: EventFilter): boolean {
  switch (filter) {
    case "All":
      return true;
    case "Competitions":
      return event.category === "Competition" || event.category === "Coding";
    case "Workshops":
      return event.category === "Workshop";
    case "Expo":
      return event.category === "Project Expo";
    case "Community":
      return event.category === "Community";
    default:
      return true;
  }
}

export function getEvent(slug: string): MlscEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export const recentEvents = events.slice(0, 4);

export const timeline = [
  { period: "Techritz 2K25", title: "Coding Contest", slug: "coding-contest-techritz-2k25" },
  { period: "June 2026", title: "Git & Go Contest", slug: "git-and-go-contest" },
  { period: "July 2026", title: "First-Year Workshop", slug: "first-year-workshop" },
  { period: "August 2026", title: "AI Project Expo", slug: "ai-project-expo" },
  {
    period: "August 2026",
    title: "Club Members Badge Distribution",
    slug: "club-members-badge-distribution",
  },
];
