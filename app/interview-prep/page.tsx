import { ProjectPageLayout } from "@/components/project-page-layout";

export default function InterviewPrepPage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">interview prep</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>October 2025</span>
            <span className="font-medium text-foreground">Built @ UCSD x SDx hackathon (5 hours)</span>
          </div>
        </header>

        <section className="space-y-2">
          <a
            href="https://www.youtube.com/watch?v=-11S4wNWblg"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link micro-item inline-block text-sm text-foreground"
          >
            view here
          </a>
        </section>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            Interview Prep is a comprehensive platform that transforms the stressful process of interview preparation
            into a streamlined, data-driven experience. The core idea was to eliminate guesswork by providing candidates
            with deep insights into their specific interviewer, company and position requirements.
          </p>
          <p className="text-sm leading-relaxed">
            Using the parallel API as a Claude SDK tool we were able to scrape the interviewers LinkedIn, the company &
            positions most asked questions, core values, and any other data on the internet that could give you a better
            chance at getting hired. On generation we provide the user a comprehensive study guide on how to ace their
            interview.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">challenges encountered</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This was built in 5 hours @ the UCSD x SDx hackathon, which was honestly our biggest challenge. That 5 hour
            time crunch meant no going back on our original plan and pushing out code every couple of minutes. All in
            all it was a great experience getting to meet some of the UCSD students.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  )
}
