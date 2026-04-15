export type SiteLink = {
  title: string;
  description?: string;
  href: string;
  date?: string;
  external?: boolean;
};

export const projects: SiteLink[] = [
  {
    title: "detection of ai in writing",
    description:
      "BERT text classification model that detects whether writing is AI-generated or human-written.",
    date: "04/2026",
    href: "/detection-ai-writing",
  },
  {
    title: "2ndbrain",
    description:
      'Solves the "I forgot who this is and what I promised" problem with facial recognition and memory indexing.',
    date: "04/2026",
    href: "/2ndbrain",
  },
  {
    title: "automa",
    description:
      "Desktop app automating job search discovery, applications, and outreach in one workflow.",
    date: "04/2026",
    href: "/automa",
  },
  {
    title: "careermax",
    description: "AI-driven resume optimization to help candidates beat ATS filters.",
    date: "01/2026",
    href: "/careermax",
  },
  {
    title: "pelosi portfolio",
    description: "Get email alerts every time Nancy Pelosi trades.",
    date: "11/2025",
    href: "/pelosi",
  },
  {
    title: "hireme",
    description: "Interview prep platform for technical interviews.",
    date: "11/2025",
    href: "/hireme",
  },
  {
    title: "ideasurf",
    description: "The search browser for startups.",
    date: "11/2025",
    href: "/ideasurf",
  },
  {
    title: "mock ai",
    description: "Simulated interviewer with feedback on answers and delivery.",
    date: "10/2025",
    href: "/mock-ai",
  },
  {
    title: "ai tutor",
    description: "Tutor assistant for notes with retrieval over your study material.",
    date: "10/2025",
    href: "/ai-tutor",
  },
  {
    title: "interview prep",
    description:
      "Resume + role research workflow with deep search support.",
    date: "10/2025",
    href: "/interview-prep",
  },
  {
    title: "goatforce",
    description: "MCP-powered CRM dashboard for sales reps.",
    date: "08/2025",
    href: "/goatforce",
  },
];

export const blogs: SiteLink[] = [
  {
    title: "summer 2025",
    description: "summer @ salesforce",
    href: "/salesforce-recap",
  },
  {
    title: "philosophy",
    description: "Things to live by.",
    href: "/philosophy",
  },
  {
    title: "what I wish I knew",
    description: "Free game.",
    href: "/game",
  },
];

export const books: SiteLink[] = [
  {
    title: "Meditations",
    href: "/readlog",
  },
  {
    title: "Deep Work",
    href: "/readlog",
  },
  {
    title: "Designing Data-Intensive Applications",
    href: "/readlog",
  },
];
