"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-4xl mx-auto px-6 py-8 md:px-12 lg:px-16">
        <header className="mb-12">
          <Link
            href="/"
            className="text-sm font-normal text-foreground hover:opacity-60 transition-opacity"
          >
            dariel gutierrez
          </Link>
        </header>
        <main>{children}</main>
        <footer className="mt-24 pt-8 border-t border-border flex gap-6">
          <a
            href="mailto:darielgutierrez332@gmail.com"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            email
          </a>
          <a
            href="https://linkedin.com/in/dariel-gutierrez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            linkedin
          </a>
          <a
            href="https://github.com/darielgu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            github
          </a>
          <a
            href="https://x.com/darielguu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            twitter
          </a>
        </footer>
      </div>
    </div>
  );
}
