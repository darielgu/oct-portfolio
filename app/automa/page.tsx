import { ProjectPageLayout } from "@/components/project-page-layout";

export default function AutomaPage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">automa</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>April 2026</span>
            <a
              href="https://tryautoma.app"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-link text-foreground"
            >
              view here
            </a>
          </div>
        </header>

        <section className="space-y-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            what it does: orchestrates scraping, ranking, autofill, and
            outreach steps in a desktop pipeline that executes application tasks
            as deterministic agent jobs.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            inspiration: recruiting is mostly repetitive io-bound work, so i
            modeled it as an automatable workflow instead of manual
            browser sessions.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  );
}
