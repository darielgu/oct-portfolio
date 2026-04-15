"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans page-presence-root">
      <div className="max-w-4xl mx-auto px-6 py-8 md:px-12 lg:px-16">
        <header className="mb-12 page-presence page-presence-1">
          <Link
            href="/"
            className="text-sm font-normal text-foreground hover:opacity-60 transition-opacity micro-link"
          >
            dariel gutierrez
          </Link>
        </header>
        <main className="page-presence page-presence-2 page-content-stagger">
          {children}
        </main>
        <footer className="mt-24 pt-8 border-t border-border page-presence page-presence-3">
          <p className="text-sm">
            <a
              href="https://x.com/darielguu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity micro-link"
            >
              x
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity micro-link"
            >
              github
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/dariel-gutierrez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity micro-link"
            >
              linkedin
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
