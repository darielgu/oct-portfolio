"use client"

import Link from "next/link"

interface Project {
  id: string
  name: string
  description: string
  date: string
  route: string
}

const projects: Project[] = [
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
    description: "Interview prep platform: everything you need to ace your next interview",
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
    description: "MCP powered CRM dashboard, one stop shop for sales reps to manage their deals",
    date: "August 2025",
    route: "/goatforce",
  },
]

interface ProjectListProps {
  hoveredItem: string | null
  onHover: (id: string | null) => void
}

export function ProjectList({ hoveredItem, onHover }: ProjectListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Link
          href={project.route}
          key={project.id}
          className={`block py-1 cursor-pointer transition-all duration-300 ${
            hoveredItem && hoveredItem !== project.id ? "blur-[2px] opacity-40" : ""
          }`}
          onMouseEnter={() => onHover(project.id)}
          onMouseLeave={() => onHover(null)}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium">{project.name}</span>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">{project.date}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{project.description}</p>
        </Link>
      ))}
    </div>
  )
}
