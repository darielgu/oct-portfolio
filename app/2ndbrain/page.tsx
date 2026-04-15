import { ProjectPageLayout } from "@/components/project-page-layout";

export default function SecondBrainPage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">2ndbrain</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>April 2026</span>

            <span>
              won 1st @ SDxUCSD hackathon & 2nd in Nozomio (YC S25) track
            </span>
          </div>

            <a
              href="https://secondbrain.aboutdariel.me"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-link text-foreground"
            >
              view here
            </a>
        </header>

        <section className="space-y-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            what it does: fuses face embeddings, semantic memory indexing, and
            retrieval-augmented recall to reconstruct who someone is and what
            commitments are still open.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            inspiration: i kept losing conversational state across contexts, so
            i built an external memory layer optimized for human relationship
            continuity.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  );
}
