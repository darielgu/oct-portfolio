import { PageLayout } from "@/components/page-layout"

export default function MockAIPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">mock ai</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>October 2025</span>
            <span className="font-medium text-foreground">Won the SDSU x AWS AI hackathon</span>
          </div>
        </header>

        <section className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/AXmoAowGulk?si=DNfxZModykBQx97Y"
            title="Mock AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border border-border"
          />
        </section>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            Mock AI won the SDSU x AWS AI hackathon! It is an interview simulation platform that provides comprehensive
            feedback on candidates' performance across multiple dimensions. The core idea was to create a realistic
            interview environment that could evaluate not just answers, but also tone, body language, and facial
            expressions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "FastAPI", "Base64", "Amazon Bedrock", "DynamoDB", "Lambda", "Transcribe"].map(
              (tech) => (
                <span key={tech} className="text-xs px-2 py-1 border border-border">
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">challenges encountered</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The biggest challenge was creating realistic interview scenarios that could adapt to different industries
            and roles. We implemented dynamic question generation based on job descriptions, resume, and company
            culture, ensuring that each mock interview felt authentic and relevant to the candidate's target position.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Finally, we faced the challenge of providing actionable feedback that candidates could actually use to
            improve. Rather than just scoring performance, we developed detailed analysis systems that provide specific
            recommendations for improvement, including practice exercises and targeted coaching suggestions.
          </p>
        </section>
      </article>
    </PageLayout>
  )
}
