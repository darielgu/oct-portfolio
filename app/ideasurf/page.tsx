import { PageLayout } from "@/components/page-layout"

export default function IdeasurfPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">ideasurf</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>November 2025</span>
            <a
              href="https://ideasurf.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:opacity-60"
            >
              [live site]
            </a>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            Ideasurf is a platform that helps you generate ideas for your startup. The core idea was to eliminate the
            friction between different tools and create a unified interface that understands natural language commands
            and finds all the projects on the internet similar to your idea.
          </p>
          <p className="text-sm leading-relaxed">
            Honestly had a great time building this project, the basic workflow is to scrape YC, A16z, etc - seed
            database with project vector embeddings - query database with your idea - get similar ideas!
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "FastAPI", "Selenium", "TypeScript", "SupaBase", "Vercel", "OpenAI Embeddings"].map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 border border-border">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">future plans</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            In the future I plan to scrape more sources like Crunchbase, PitchBook, and other startup databases to get a
            more comprehensive list of ideas. I also plan to add user voting & ranking to the ideas to help prioritize
            the most popular ideas.
          </p>
        </section>

        <section className="space-y-3">
          <div className="relative w-full overflow-hidden">
            <img src="/images/vector.gif" alt="IdeaSurf demo" className="w-full h-auto" />
          </div>
        </section>
      </article>
    </PageLayout>
  )
}
