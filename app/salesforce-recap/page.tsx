import { PageLayout } from "@/components/page-layout"

export default function SalesforceRecapPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">summer 2025</h1>
          <p className="text-sm text-muted-foreground">Deep dive into my summer @ salesforce</p>
        </header>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">This summer was awesome.</p>
          <p className="text-sm leading-relaxed">
            Coming from a first gen background I had 0 idea what an enterprise company would look/feel like. The scale
            was unlike anything I'd experienced before, it's crazy to imagine the software behind Salesforce powers
            millions of users.
          </p>
          <p className="text-sm leading-relaxed">
            It was a great experience to feel SF's ai/builder culture and explore the city. I was able to visit Roblox
            for their open house, Reddit for a Colorstack event, & learn so much from my manager/mentor.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">takeaways</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Performance matters at scale:</span> What seems like a minor
              optimization can have massive impact when multiplied across millions of users.
            </li>
            <li>
              <span className="font-medium text-foreground">Documentation is everything:</span> In a large organization,
              clear documentation is essential.
            </li>
            <li>
              <span className="font-medium text-foreground">Customer feedback drives innovation:</span> Real user pain
              points are the foundation for new features.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">recommendations</h2>
          <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Lous Cafe</li>
            <li>Bottega in the mission</li>
            <li>Golden Gate Park ping pong table</li>
            <li>2nd street for clothes</li>
            <li>Go touch grass theres so much in the city</li>
            <li>Mission playground soccer field</li>
          </ul>
        </section>
      </article>
    </PageLayout>
  )
}
