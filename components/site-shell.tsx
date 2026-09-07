import Link from "next/link";
import type { ReactNode } from "react";
import { nav } from "@/lib/site-content";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <main>{children}</main>
      <nav className="nav" aria-label="Pages">
        <ul>
          <li>Dariel Gutierrez</li>
          {nav.map((item) =>
            item.external ? (
              <li key={item.title}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ) : (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}
