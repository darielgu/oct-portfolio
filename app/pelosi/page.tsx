import { PageLayout } from "@/components/page-layout"

export default function PelosiPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">pelosi portfolio</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>November 2025</span>
            <a
              href="https://pelosi.vercel.app/"
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
            The Pelosi Portfolio is a web application that tracks the stock trades made by Nancy Pelosi and her husband,
            using publicly available data from the PDRS reports. The application runs a CRON job on this website to
            scrape the latest trades, pings all users via email with the exact trade details, and displays the data in
            an easy-to-read format.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {["SMTS", "Next.js", "FastAPI", "Selenium", "TypeScript", "SupaBase", "Vercel"].map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 border border-border">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">future plans</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            In the future I plan to scrape more congress members so we can see and test other portfolios and potentially
            add an AI model trained on pelosis trading habits and back test it against the real market.
          </p>
        </section>
      </article>
    </PageLayout>
  )
}
