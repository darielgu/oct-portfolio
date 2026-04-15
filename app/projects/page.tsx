import Link from "next/link";
import { projects } from "@/lib/site-content";

const hackathonWinners = new Set(["mock ai", "2ndbrain", "hireme", "automa"]);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-base leading-relaxed text-foreground md:px-8">
      <div className="mx-auto w-full max-w-2xl space-y-10 micro-page">
        <p className="micro-reveal reveal-1">
          <Link className="micro-link micro-item inline-block" href="/">
            back home
          </Link>
        </p>

        <header className="space-y-2 micro-reveal reveal-2">
          <h1>projects</h1>
          <p className="text-muted-foreground">things i have built.</p>
        </header>

        <section className="space-y-6 micro-reveal reveal-3">
          {projects.map((project) => {
            return (
              <article key={project.title} className="space-y-1 micro-item">
                <p className="text-muted-foreground">{project.date}</p>
                <Link href={project.href} className="micro-link inline-flex items-center gap-2">
                  <span>{project.title}</span>
                  {hackathonWinners.has(project.title) ? (
                    <span className="text-muted-foreground">*</span>
                  ) : null}
                </Link>
                {project.description ? (
                  <p className="text-muted-foreground">{project.description}</p>
                ) : null}
              </article>
            );
          })}
        </section>

      </div>
    </main>
  );
}
