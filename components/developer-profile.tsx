"use client";

import { useState } from "react";
import { ProjectList } from "./project-list";
import { BlogList } from "./blog-list";
import { SpotifyWidget } from "./spotify-widget";
import { ReadingLogList } from "./reading-log-list";

export default function DeveloperProfile() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleItemHover = (itemId: string | null) => {
    setHoveredItem(itemId);
  };

  const handleCopyEmail = async () => {
    const email = ["darielgutierrez332", "gmail.com"].join("@");

    try {
      await navigator.clipboard.writeText(email);
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 1400);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 lg:px-16 ">
        <header className="mb-16 flex items-center justify-between calm-intro calm-intro-1">
          <h1 className="text-sm font-normal text-foreground">
            dariel gutierrez
          </h1>
          <div className="flex gap-6 ">
            <a
              href="https://linkedin.com/in/dariel-gutierrez"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:opacity-60 transition-all duration-300 micro-link ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              linkedin
            </a>
            <a
              href="https://github.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:opacity-60 transition-all duration-300 micro-link ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              github
            </a>
            <a
              href="https://x.com/darielguu"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:opacity-60 transition-all duration-300 micro-link ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              twitter
            </a>
          </div>
        </header>

        <section className="mb-24 calm-intro calm-intro-2">
          <div className="max-w-lg">
            <p
              className={`text-sm leading-relaxed transition-all duration-300 ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              {
                "I'm dariel. I study computer science and I love building software. Currently, I'm running "
              }
              <a
                href="https://wco.sdsu.edu"
                className="text-sm hover:opacity-60 transition-all duration-300 micro-link"
              >
                WCO@SDSU
              </a>
              {
                " where I help students @ SDSU break into the tech industry, working as a CS tutor & mentor at the "
              }
              <a
                href="https://mslc.sdsu.edu/"
                className="text-sm hover:opacity-60 transition-all duration-300 micro-link"
              >
                MSLC
              </a>
              {" and working on my own projects, checkout my "}
              <a
                href="https://github.com/darielgu"
                className="text-sm hover:opacity-60 transition-all duration-300 micro-link"
              >
                github
              </a>
              {" if interested or reachout ->"}
              <button
                type="button"
                onClick={handleCopyEmail}
                className=" ml-2 group inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wide hover:opacity-60 transition-all duration-300 micro-link cursor-pointer align-baseline"
              >
                <span className="relative inline-flex h-4 min-w-[88px] items-center overflow-hidden leading-none">
                  <span
                    className={`transition-all duration-300 ${
                      isEmailCopied
                        ? "-translate-y-4 opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    copy email
                  </span>
                  <span
                    className={`absolute transition-all duration-300 ${
                      isEmailCopied
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    email copied
                  </span>
                </span>
              </button>
            </p>
            <div className="mt-5 flex flex-wrap items-start gap-3 ">
              <SpotifyWidget dimmed={Boolean(hoveredItem)} />
            </div>
          </div>
        </section>

        <main className="mb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-8 calm-intro calm-intro-3">
            <div
              className={`hover-sigil ${
                hoveredItem ? "hover-sigil-active" : ""
              }`}
            />
          </div>

          <div className="space-y-12">
            <section className="calm-intro calm-intro-3">
              <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground mb-3">
                projects
              </h2>
              <ProjectList
                hoveredItem={hoveredItem}
                onHover={handleItemHover}
              />
            </section>

            <section className="calm-intro calm-intro-4">
              <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground mb-3">
                blogs
              </h2>
              <BlogList hoveredItem={hoveredItem} onHover={handleItemHover} />
            </section>

            <section className="calm-intro calm-intro-5">
              <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground mb-3">
                reading log
              </h2>
              <ReadingLogList
                hoveredItem={hoveredItem}
                onHover={handleItemHover}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
