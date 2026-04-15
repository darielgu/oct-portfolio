import { ProjectPageLayout } from "@/components/project-page-layout";

export default function AITutorPage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">ai tutor</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>October 2025</span>
          </div>
        </header>

        <section className="space-y-2">
          <a
            href="https://www.youtube.com/watch?v=ihNwD7CMXH0"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link micro-item inline-block text-sm text-foreground"
          >
            view here
          </a>
        </section>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            AI Tutor is an intelligent learning companion that connects to your Google Drive using an MCP server I
            built, turning notes into engaging educational content. The core idea was to eliminate the monotony of
            traditional studying by creating smart AI agents who know everything about your notes & to create
            personalized "brainrot" style videos that make learning addictive and memorable.
          </p>
          <p className="text-sm leading-relaxed">
            The challenge was building a system that could understand complex academic material and repackage it into
            digestible, entertaining content while maintaining educational accuracy. But with advanced NLP tools and
            adaptive learning algorithms, AI Tutor creates a unique study experience tailored to each student's needs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">challenges encountered</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The biggest challenge was creating content that was both educational and entertaining. Traditional AI tutors
            are often dry and boring, but we wanted to create something that students would actually want to watch. This
            required developing sophisticated content generation algorithms that could balance humor with accuracy.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Another major issue was processing large amounts of Google Drive content efficiently. Students often have
            hundreds of documents, and we needed to intelligently prioritize which content to focus on based on upcoming
            exams, assignment deadlines, and learning patterns. This required implementing smart content prioritization
            algorithms.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  )
}
