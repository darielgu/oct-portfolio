import { PageLayout } from "@/components/page-layout";

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">
            philosophy sayings whatever you'd like
          </h1>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              Comparison is the thief of joy
            </h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              There are no guarantees, get to work, be intentional, why be
              defined by what you don't know
            </h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              If we only wanted to be happy, it would be easy; but we want to be
              happier than others
            </h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">To dust you will return</h2>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              There is nothing to escape except our own ideas of who we are
            </h2>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              To win any battle you must fight as you are already dead
            </h2>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              There is no audience to perform for. there is just you
            </h2>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-medium">Okay, lets try again</h2>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
