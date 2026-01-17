import { PageLayout } from "@/components/page-layout"

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">philosophy</h1>
          <p className="text-sm text-muted-foreground">things to live by</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-medium">1. Comparison is the thief of joy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              There will always be someone richer, with a better paying job, in a better position. Be happy with your
              life and all you have accomplished
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">2. Be nice</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You never know what people are going through, try to spread kindness and be a positive impact on others
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">3. You can just do things</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whatever it is you can do it. Do not wait for the perfect circumstance seize what is in front of you &
              prove your work by action
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">4. Momento Mori</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              No mean to be cringe but remember that you will die. This awareness will help you live a meaningful life
              and prioritize what truly matters (family, goals, etc).
            </p>
          </div>
        </section>
      </article>
    </PageLayout>
  )
}
