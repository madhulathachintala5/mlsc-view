import akshayaAsset from "@/assets/team/akshaya.jpeg.asset.json";
import bhavyaAsset from "@/assets/team/bhavya.jpeg.asset.json";
import durgaAsset from "@/assets/team/durga.jpeg.asset.json";
import hansikaAsset from "@/assets/team/hansika.jpeg.asset.json";
import harshithaCAsset from "@/assets/team/harshitha-c.jpeg.asset.json";
import harshithaAsset from "@/assets/team/harshitha.jpeg.asset.json";
import hasiniAsset from "@/assets/team/hasini-2.jpeg.asset.json";
import jyoshnaAsset from "@/assets/team/jyoshna.jpeg.asset.json";
import kiranmaiAsset from "@/assets/team/kiranmai.jpeg.asset.json";
import laasyaAsset from "@/assets/team/laasya.jpeg.asset.json";
import madhuLathaAsset from "@/assets/team/madhu-latha-3.jpeg.asset.json";
import mahimaAsset from "@/assets/team/mahima.jpeg.asset.json";
import nagamaniAsset from "@/assets/team/nagamani-2.jpeg.asset.json";
import poojithaAsset from "@/assets/team/poojitha.jpeg.asset.json";
import rojaAsset from "@/assets/team/roja.jpeg.asset.json";
import saranyaAsset from "@/assets/team/saranya-lahari-2.jpeg.asset.json";
import sophiyaAsset from "@/assets/team/sophiya-tabassum.jpeg.asset.json";
import tanushkaAsset from "@/assets/team/tanushka.jpeg.asset.json";
import tejaswiniAsset from "@/assets/team/Tejaswini.jpeg.asset.json";

export type TeamMember = {
  name: string;
  role: string;
  /** Photo URL. Omitted when no real photograph is available. */
  photo?: string;
  email?: string;
  linkedin?: string;
  github?: string;
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
  photo: tejaswiniAsset.url,
};

export const ambassadors: TeamGroup = {
  id: "ambassadors",
  title: "Microsoft Learn Student Ambassadors",
  description:
    "Representing MLSC @ VIEW within the Microsoft Learn Student Ambassador programme.",
  members: [
    {
      name: "Sophiya Tabassum",
      role: "Lead",
      photo: sophiyaAsset.url,
      email: "sophieeee1910@gmail.com",
      linkedin: "https://www.linkedin.com/in/sophiya-tabassum-a8372833a/",
      github: "https://github.com/Sophiya-swiftie",
    },
    {
      name: "Roja G",
      role: "Co-Lead",
      photo: rojaAsset.url,
      email: "roja0902.2007@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/roja-gorakala-a8b87a33a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/roja09022007-pixel",
    },
  ],
};

export const teamGroups: TeamGroup[] = [
  {
    id: "technical",
    title: "Technical Team",
    description:
      "Driving the technical activities, tooling and hands-on sessions of the community.",
    members: [
      {
        name: "Chintala Madhu Latha",
        role: "Technical Lead",
        photo: madhuLathaAsset.url,
        email: "madhulathachintala5@gmail.com",
        linkedin: "https://www.linkedin.com/in/madhu-latha-chintala-4a7813340",
        github: "https://github.com/madhulathachintala5",
      },
      {
        name: "U. Laasya",
        role: "Data Analyst",
        photo: laasyaAsset.url,
        email: "laasyaunkili@gmail.com",
        linkedin: "https://www.linkedin.com/in/laasya-unkili-91041b340",
        github: "https://github.com/laasya2006unkili-del",
      },
      {
        name: "S. Bhavya",
        role: "GitHub Lead",
        photo: bhavyaAsset.url,
        email: "Bhavyasimhachalam3004@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/bhavya-simhachalam-5157bb340?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/Simhachalambhavya",
      },
      {
        name: "S. Jyoshna",
        role: "Azure Lead",
        photo: jyoshnaAsset.url,
        email: "jyoshnasilaparasitti@gmail.com",
        linkedin: "https://www.linkedin.com/in/silaparasitti-jyoshna-3a227133a",
        github: "https://github.com/jyoshnas059",
      },
      {
        name: "Ch. Harshitha",
        role: "VS Code Lead",
        photo: harshithaAsset.url,
        email: "harshitha012007@gmail.com",
        linkedin: "https://www.linkedin.com/in/harshitha-chikkala-582818325",
        github: "https://github.com/harshitha0539",
      },
      {
        name: "G. Phani Akshaya",
        role: "Documentation Lead",
        photo: akshayaAsset.url,
        email: "ganthakuraakshaya@gmail.com",
      },
    ],
  },
  {
    id: "non-technical",
    title: "Non-Technical Team",
    description: "Operations, design, outreach and everything that keeps MLSC running.",
    members: [
      {
        name: "T. Hasini Venkat",
        role: "Social Media Manager",
        photo: hasiniAsset.url,
        email: "hasinivenkat1925@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/hasini-venkat-b417bb340?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/hasinivenkat1925-ctrl",
      },
      {
        name: "Tamada Mahima",
        role: "Design Manager",
        photo: mahimaAsset.url,
        email: "tamadamahima44@gmail.com",
        linkedin: "https://www.linkedin.com/in/mahima-tamada-671801340",
        github: "https://github.com/mahima44-svg",
      },
      {
        name: "G. Durga",
        role: "Design Manager",
        photo: durgaAsset.url,
        email: "gurujadurga@gmail.com",
        linkedin: "https://www.linkedin.com/in/durga-guruja-702242341",
        github: "https://github.com/gurujadurga-creator",
      },
      {
        name: "P. Uma Poojitha",
        role: "Event Manager",
        photo: poojithaAsset.url,
        email: "umapoojitha1009@gmail.com",
        linkedin: "https://www.linkedin.com/in/uma-poojitha-pericherla-9a2239421",
        github: "https://github.com/umapoojitha1009",
      },
    ],
  },
  {
    id: "junior-core",
    title: "Junior Core Team",
    description: "The next generation of MLSC leadership, learning by doing.",
    members: [
      {
        name: "K. Kiranmai",
        role: "Assistant Technical Lead",
        photo: kiranmaiAsset.url,
        email: "koradakiranmai08@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/korada-kiranmai-b6b695388?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/koradakiranmai08-prog",
      },
      {
        name: "Ch. Harshitha Chirla",
        role: "Assistant Technical Lead",
        photo: harshithaCAsset.url,
        email: "chirlaharshitha@gmail.com",
        github: "https://github.com/harshitha-innovate",
      },
      {
        name: "Boda Nagamani",
        role: "Assistant Data Analyst",
        photo: nagamaniAsset.url,
        email: "nagamaniboda08@gmail.com",
      },
      {
        name: "P. V. Saranya Lahari",
        role: "Assistant Design Manager",
        photo: saranyaAsset.url,
        email: "saranyalaharipuvvala@gmail.com",
        linkedin: "https://www.linkedin.com/in/saranya-puvvala-39352542a",
        github: "https://github.com/saranyalaharipuvvala07",
      },
      {
        name: "Varre Hansika",
        role: "Assistant Social Media Manager",
        photo: hansikaAsset.url,
        email: "hansikanaidu10@gmail.com",
        linkedin: "https://www.linkedin.com/in/varre-hansika-156a52381",
        github: "https://github.com/hansikanaidu10-ctrl",
      },
      {
        name: "Tanushka Dannina",
        role: "LinkedIn Lead",
        photo: tanushkaAsset.url,
        email: "tanushkadannina542@gmail.com",
        linkedin: "https://www.linkedin.com/in/tanushka-dannina-54a54142a/",
      },
    ],
  },
];
