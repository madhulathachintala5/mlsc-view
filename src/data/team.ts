export type TeamMember = {
  name: string;
  role: string;
  /** Drop a photo in src/assets and put its imported URL here. */
  photo?: string;
  linkedin?: string;
  bio?: string;
};

export type TeamGroup = {
  id: string;
  title: string;
  description?: string;
  members: TeamMember[];
};

export const coordinator: TeamMember = {
  name: "Mrs. N. Tejaswini",
  role: "Club Coordinator",
};

export const ambassadors: TeamGroup = {
  id: "ambassadors",
  title: "Microsoft Learn Student Ambassadors",
  description:
    "Representing MLSC @ VIEW within the Microsoft Learn Student Ambassador programme.",
  members: [
    { name: "Sophiya Tabassum", role: "Lead" },
    { name: "G. Roja", role: "Co-Lead" },
  ],
};

export const teamGroups: TeamGroup[] = [
  {
    id: "technical",
    title: "Technical Team",
    description:
      "Driving the technical activities, tooling and hands-on sessions of the community.",
    members: [
      { name: "Madhu Latha Chintala", role: "Technical Lead" },
      { name: "U. Laasya", role: "Data Analyst" },
      { name: "Simhachalam Bhavya", role: "GitHub Lead" },
      { name: "S. Jyoshna", role: "Azure Lead" },
      { name: "Ch. Harshitha", role: "VS Code Lead" },
      { name: "G. Phani Akshaya", role: "Documentation Lead" },
    ],
  },
  {
    id: "non-technical",
    title: "Non-Technical Team",
    description: "Operations, design, outreach and everything that keeps MLSC running.",
    members: [
      { name: "T. Hasini Venkat", role: "Social Media Manager" },
      { name: "Tamada Mahima", role: "Design Manager" },
      { name: "P. Uma Poojitha", role: "Event Manager" },
      { name: "G. Durga", role: "Design Manager" },
    ],
  },
  {
    id: "junior-core",
    title: "Junior Core Team",
    description: "The next generation of MLSC leadership, learning by doing.",
    members: [
      { name: "K. Kiranmai", role: "Assistant Technical Lead" },
      { name: "Ch. Harshitha", role: "Assistant Technical Lead" },
      { name: "B. Nagamani", role: "Assistant Data Analyst" },
      { name: "P. V. Saranya Lahari", role: "Assistant Design Manager" },
      { name: "V. Hansika", role: "Assistant Social Media Manager" },
    ],
  },
];
