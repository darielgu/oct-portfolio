"use client";

import Link from "next/link";

interface ReadingEntry {
  id: string;
  title: string;
  description: string;
  route: string;
}

const readingEntries: ReadingEntry[] = [
  {
    id: "r1",
    title: "readings log",
    description: "books 2026 >",
    route: "/readlog",
  },
];

interface ReadingLogListProps {
  hoveredItem: string | null;
  onHover: (id: string | null) => void;
}

export function ReadingLogList({ hoveredItem, onHover }: ReadingLogListProps) {
  return (
    <div className="space-y-4">
      {readingEntries.map((entry) => (
        <Link
          href={entry.route}
          key={entry.id}
          className={`block py-1 cursor-pointer transition-all duration-300 micro-item ${
            hoveredItem && hoveredItem !== entry.id ? "blur-[2px] opacity-40" : ""
          }`}
          onMouseEnter={() => onHover(entry.id)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(entry.id)}
          onBlur={() => onHover(null)}
        >
          <span className="text-sm font-medium">{entry.title}</span>
          <p className="text-xs text-muted-foreground mt-1">{entry.description}</p>
        </Link>
      ))}
    </div>
  );
}
