import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { blogs } from "@/lib/site-content";

export const metadata = { title: "Writing · Dariel Gutierrez" };

export default function BlogsPage() {
  return (
    <SiteShell>
      <h1>Writing</h1>
      <ul>
        {blogs.map((post) => (
          <li key={post.title}>
            <Link href={post.href}>{post.title}</Link>
            {post.description ? <> — {post.description}</> : null}
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
