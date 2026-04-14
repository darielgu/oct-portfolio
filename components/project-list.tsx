"use client";

import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
  date: string;
  route: string;
}

const projects: Project[] = [
  {
    id: "12",
    name: "ai vs human writing detection",
    description:
      "BERT text classification model that detects whether writing is AI-generated or human-written",
    date: "April 2026",
    route: "https://561final.aboutdariel.me/",
  },
  {
    id: "11",
    name: "2ndbrain",
    description:
      "Solves the \"I forgot who this is and what I promised\" problem with facial recognition, memory indexing, and Nia-powered retrieval; reposted by Nozomio on Twitter and judged by a founder",
    date: "April 2026",
    route: "https://secondbrain.aboutdariel.me",
  },
  {
    id: "10",
    name: "Automa",
    description:
      "Desktop app automating job search discovery, applications, and outreach in one workflow",
    date: "April 2026",
    route: "https://tryautoma.app",
  },
  {
    id: "8",
    name: "careermax",
    description:
      "AI-driven resume optimization to help candidates beat ATS filters and land interviews",
    date: "January 2026",
    route: "/careermax",
  },
  {
    id: "1",
    name: "pelosi portfolio",
    description: "Get email alerts every time Nancy Pelosi trades",
    date: "November 2025",
    route: "/pelosi",
  },
  {
    id: "2",
    name: "hireme",
    description:
      "Interview prep platform: everything you need to ace your next interview",
    date: "November 2025",
    route: "/hireme",
  },
  {
    id: "3",
    name: "ideasurf",
    description: "The search browser for startups",
    date: "November 2025",
    route: "/ideasurf",
  },
  {
    id: "4",
    name: "mock ai",
    description:
      "Upload your resume & job description, get into a simulated mock interviewer rating your answers, tone, & body/facial expressions",
    date: "October 2025",
    route: "/mock-ai",
  },
  {
    id: "5",
    name: "ai tutor",
    description:
      "AI tutor for your google drive notes using a googledrive mcp server, create brainrot videos teaching you the material",
    date: "October 2025",
    route: "/ai-tutor",
  },
  {
    id: "6",
    name: "interview prep",
    description:
      "Paste your resume, job link, and interviewer, parallel & claude sdk deep search your interviewer & position",
    date: "October 2025",
    route: "/interview-prep",
  },
  {
    id: "7",
    name: "goatforce",
    description:
      "MCP powered CRM dashboard, one stop shop for sales reps to manage their deals",
    date: "August 2025",
    route: "/goatforce",
  },
];

interface ProjectListProps {
  hoveredItem: string | null;
  onHover: (id: string | null) => void;
}

export function ProjectList({ hoveredItem, onHover }: ProjectListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Link
          href={project.route}
          key={project.id}
          className={`block py-1 cursor-pointer transition-all duration-300 micro-item ${
            hoveredItem && hoveredItem !== project.id
              ? "blur-[2px] opacity-40"
              : ""
          }`}
          onMouseEnter={() => onHover(project.id)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(project.id)}
          onBlur={() => onHover(null)}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium">{project.name}</span>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
              {project.date}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
