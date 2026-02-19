import { PageLayout } from "@/components/page-layout";

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">log post 2026</h1>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-medium">Meditations</h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">Deep Work</h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">
              Designing Data Intensive Applications
            </h2>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
