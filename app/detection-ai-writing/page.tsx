import { ProjectPageLayout } from "@/components/project-page-layout";

export default function DetectionAiWritingPage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">detection of ai in writing</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>April 2026</span>
            <a
              href="https://561final.aboutdariel.me/"
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
            what it does: runs a transformer classification pipeline over token
            distributions and style entropy features to detect ai-generated
            prose vs human-written text.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            inspiration: i wanted a measurable way to audit authenticity in
            writing-heavy workflows where llm-assisted content is becoming the
            default path.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  );
}
