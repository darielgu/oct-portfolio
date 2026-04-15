import Link from "next/link";
import { blogs } from "@/lib/site-content";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-base leading-relaxed text-foreground md:px-8">
      <div className="mx-auto w-full max-w-2xl space-y-10">
        <p>
          <Link className="micro-link inline-block" href="/">
            dariel gutierrez
          </Link>
        </p>

        <header className="space-y-2">
          <p className="text-muted-foreground">writing and notes.</p>
        </header>

        <section className="space-y-6">
          {blogs.map((post) => (
            <article key={post.title} className="space-y-1">
              <Link href={post.href} className="micro-link">
                {post.title}
              </Link>
              {post.description ? (
                <p className="text-muted-foreground">{post.description}</p>
              ) : null}
            </article>
          ))}
        </section>

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
