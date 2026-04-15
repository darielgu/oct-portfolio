import Link from "next/link";
import { projects } from "@/lib/site-content";
import { SanDiegoTime } from "@/components/san-diego-time";
import { SpotifyNowPlaying } from "@/components/spotify-now-playing";

const hackathonWinners = new Set(["mock ai", "2ndbrain", "hireme", "automa"]);

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-base leading-relaxed text-foreground md:px-8">
      <div className="mx-auto w-full max-w-2xl space-y-10 micro-page">
        <section className="space-y-5 micro-reveal reveal-1">
          <div className="space-y-1 text-muted-foreground">
            <div className="flex items-start justify-between gap-4">
              <p>dariel gutierrez</p>
              <SpotifyNowPlaying />
            </div>
          </div>
          <p className="text-muted-foreground">
            i study computer science @ san diego state university and i love
            building software. currently, i'm running{" "}
            <a className="micro-link" href="https://wco.sdsu.edu">
              wco@sdsu
            </a>{" "}
            where i help students break into the tech industry, working as a cs
            tutor & mentor at the{" "}
            <a className="micro-link" href="https://mslc.sdsu.edu/">
              mslc
            </a>
            , and working on my own projects, checkout my{" "}
            <a className="micro-link" href="https://github.com/darielgu">
              github
            </a>{" "}
            if interested or reachout.
          </p>
          <p className="text-muted-foreground">
            <a
              className="micro-link"
              href="https://x.com/darielguu"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>{" "}
            |{" "}
            <a
              className="micro-link"
              href="https://github.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            |{" "}
            <a
              className="micro-link"
              href="https://linkedin.com/in/dariel-gutierrez"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </p>
        </section>

        <section className="space-y-3 micro-reveal reveal-2">
          <div className="flex flex-col items-start gap-1 text-muted-foreground">
            <Link className="micro-link micro-item" href="/readlog">
              books
            </Link>
            <Link className="micro-link micro-item" href="/blogs">
              writings
            </Link>
            <p>projects</p>
          </div>
          <div className="border-y border-border/60">
            {projects.map((entry, index) => {
              const [month = "", year = ""] = (entry.date ?? "").split("/");
              const [, previousYear = ""] = (projects[index - 1]?.date ?? "").split("/");
              const showYear = index === 0 || previousYear !== year;

              return (
                <div
                  key={`${entry.title}-${entry.date ?? index}`}
                  className="grid grid-cols-[72px_1fr_100px] items-center gap-4 border-b border-border/45 px-0 py-2 last:border-b-0"
                >
                  <p className="text-muted-foreground">{showYear ? year : ""}</p>
                  <div className="min-w-0">
                    <Link
                      className="micro-link micro-item inline-flex items-center gap-2 truncate"
                      href={entry.href}
                    >
                      <span className="truncate">{entry.title}</span>
                      {hackathonWinners.has(entry.title) ? (
                        <span className="text-muted-foreground">*</span>
                      ) : null}
                    </Link>
                  </div>
                  <p className="text-right text-muted-foreground">{month}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pt-2 micro-reveal reveal-4">
          <SanDiegoTime />
        </section>
      </div>
    </main>
  );
}
