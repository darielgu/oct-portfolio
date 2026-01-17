import { PageLayout } from "@/components/page-layout"

export default function HiremePage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">hireme</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>November 2025</span>
            <span className="font-medium text-foreground">Most complete solution @ Innovate 4 SDSU Hackathon</span>
          </div>
        </header>

        <section className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/21IXrUmlsgA?si=s_uR0ze1jw8Y6p3Y"
            title="HireMe Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border border-border"
          />
        </section>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            HireMe is a one stop platform for job seekers to prep for interviews. It's a consolidation of several tools
            I previously built, now combined into a single interface that understands natural-language commands and
            removes the friction of jumping between apps.
          </p>
          <p className="text-sm leading-relaxed">
            You upload your résumé, the interviewer's LinkedIn profile, and the job posting. We scrape Reddit,
            Glassdoor, and other sources to surface the most relevant interview insights — including common interview
            questions, company culture notes, salary expectations, conversation hooks based on the interviewer's
            background, and recent company news. The platform also provides a 7-day study plan, an overview of the
            interview process, contact information for people currently in the role, and a mock interview simulation
            generated from scraped data and your résumé.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">challenges encountered</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            When creating HireMe I realized our parallel api + webscraping pipeline was taking up to 45 seconds to
            process a single request. I decided to introduce multithreading to be able to run these processes in
            parallel rather than sequentially. After implementing multithreading I cut down pipeline time by 30-45
            seconds, a massive improvement.
          </p>
        </section>
      </article>
    </PageLayout>
  )
}
