import { ProjectPageLayout } from "@/components/project-page-layout";

export default function GoatforcePage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">goatforce</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>August 2025</span>
          </div>
        </header>

        <section className="space-y-2">
          <a
            href="https://www.youtube.com/watch?v=9l9JOlBjG-s"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link micro-item inline-block text-sm text-foreground"
          >
            view here
          </a>
        </section>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            Goatforce is a CRM dashboard powered by MCP servers, designed to be the one-stop shop for sales reps to
            manage their deals efficiently. The core idea was to eliminate the friction between different tools and
            create a unified interface that understands natural language commands. Goatforce has a sales reps Slack &
            Gmail logs and interactions with both all in one platform.
          </p>
          <p className="text-sm leading-relaxed">
            The challenge was building a lightweight interface that could handle complex sales workflows & monitor all
            communication channels while maintaining speed and reliability. We used MCP servers to bridge the gap
            between natural language processing and CRM operations, allowing sales reps to simply type what they want to
            accomplish rather than navigating through multiple screens and forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">challenges encountered</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            When creating goatforce I realized our Gmail MCP server was bottlenecking our whole pipeline, I decided to
            build our own server using fast mcp and created a data dashboard where I could upload our time logs and
            graph out where our bottleneck could be fixed. After implementing our own MCP server I cut down pipeline
            time by 30-45 seconds a massive improvement.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Since our pipeline would take up to 60 seconds depending on how much new conversation data was added, I
            needed a way for our users to be able to navigate away from the loading screen / refresh without allowing
            them access to click into the deal. This is when I implemented websockets using socket.io to emit a message
            when our pipeline had started and emit when done, keeping the loading state monitored perfectly.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Another issue encountered was a delay in data getting to our web server, everytime the dashboard was
            refreshed the get request would take 1-2 seconds to load in our assets which is honestly not that bad but
            not the ideal user experience. To reduce this I implemented smart redis caching that would cache all of our
            deal information and monitor if the user had ran a pipeline on a specific deal which would then run a
            background task to refresh the cache giving us an immensely fast load in time.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  )
}
