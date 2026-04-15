import Link from "next/link";
import type { ReactNode } from "react";

interface ProjectPageLayoutProps {
  children: ReactNode;
}

export function ProjectPageLayout({ children }: ProjectPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-base leading-relaxed text-foreground md:px-8">
      <div className="mx-auto w-full max-w-2xl space-y-10">
        <p>
          <Link className="micro-link micro-item inline-block" href="/">
            dariel gutierrez
          </Link>
        </p>

        <div>{children}</div>

        <footer className="mt-24 border-t border-border pt-8 text-muted-foreground">
          <p>
            <a
              href="https://x.com/darielguu"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-link"
            >
              x
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-link"
            >
              github
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/dariel-gutierrez"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-link"
            >
              linkedin
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
