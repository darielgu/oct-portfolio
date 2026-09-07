import { SiteShell } from "@/components/site-shell";
import { books } from "@/lib/site-content";

export const metadata = { title: "Bookshelf · Dariel Gutierrez" };

export default function ReadLogPage() {
  const years = Array.from(new Set(books.map((b) => b.date ?? "")));

  return (
    <SiteShell>
      <h1>Bookshelf</h1>
      {years.map((year) => (
        <div key={year}>
          <h2>{year}</h2>
          <ul>
            {books
              .filter((b) => b.date === year)
              .map((b) => (
                <li key={b.title}>{b.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </SiteShell>
  );
}
