export type SiteLink = {
  title: string;
  description?: string;
  href: string;
  date?: string;
  external?: boolean;
};

/* -------------------------------------------------------------------------
   home
   ------------------------------------------------------------------------- */

/** shown top-left. swap for a real headshot; this is the salesforce photo. */
export const photo = { src: "/images/recap.jpeg", alt: "Dariel Gutierrez" };

/** leave empty to hide the email line */
export const email = "";

/** right-hand page list, in order */
export const nav: SiteLink[] = [
  { title: "About", href: "/" },
  { title: "Bookshelf", href: "/readlog" },
  { title: "Philosophy", href: "/philosophy" },
  { title: "GitHub", href: "https://github.com/darielgu", external: true },
  { title: "LinkedIn", href: "https://linkedin.com/in/dariel-gutierrez", external: true },
  { title: "X", href: "https://x.com/darielguu", external: true },
];

export const hackathonWinners = new Set(["mock ai", "2ndbrain", "hireme", "automa"]);

/* -------------------------------------------------------------------------
   projects
   ------------------------------------------------------------------------- */

export const projects: SiteLink[] = [
  {
    title: "detection of ai in writing",
    description: "BERT classifier that tells human writing from AI writing.",
    date: "04/2026",
    href: "/detection-ai-writing",
  },
  {
    title: "2ndbrain",
    description: "Remember who someone is and what you promised them.",
    date: "04/2026",
    href: "/2ndbrain",
  },
  {
    title: "automa",
    description: "Desktop app that runs your job search end to end.",
    date: "04/2026",
    href: "/automa",
  },
  {
    title: "careermax",
    description: "Resume optimization that gets past ATS filters.",
    date: "01/2026",
    href: "/careermax",
  },
  {
    title: "pelosi portfolio",
    description: "Email alerts every time Nancy Pelosi trades.",
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
    description: "Tutor over your own notes with retrieval.",
    date: "10/2025",
    href: "/ai-tutor",
  },
  {
    title: "interview prep",
    description: "Resume and role research workflow with deep search.",
    date: "10/2025",
    href: "/interview-prep",
  },
  {
    title: "goatforce",
    description: "MCP-powered CRM for sales reps.",
    date: "08/2025",
    href: "/goatforce",
  },
];

/* -------------------------------------------------------------------------
   writing and reading
   ------------------------------------------------------------------------- */

export const blogs: SiteLink[] = [
  {
    title: "Summer 2025",
    description: "Summer at Salesforce.",
    href: "/salesforce-recap",
  },
  {
    title: "Philosophy",
    description: "Things to live by.",
    href: "/philosophy",
  },
];

export const books: SiteLink[] = [
  { title: "Meditations", href: "/readlog", date: "2026" },
  { title: "Deep Work", href: "/readlog", date: "2026" },
  { title: "Designing Data-Intensive Applications", href: "/readlog", date: "2026" },
];
