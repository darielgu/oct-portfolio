import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { hackathonWinners, projects } from "@/lib/site-content";

export const metadata = { title: "Projects · Dariel Gutierrez" };

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date = "") {
  const [month = "", year = ""] = date.split("/");
  const name = monthNames[Number(month) - 1] ?? "";
  return `${name} ${year}`.trim();
}

export default function ProjectsPage() {
  return (
    <SiteShell>
      <h1>Projects</h1>
      <p>Things I have built, newest first. An asterisk marks a hackathon win.</p>
      <ul>
        {projects.map((p) => (
          <li key={p.title}>
            <Link href={p.href}>{p.title}</Link>
            {hackathonWinners.has(p.title) ? " *" : ""}
            {" "}
            <span className="muted">({formatDate(p.date)})</span>
            {p.description ? <> — {p.description}</> : null}
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
