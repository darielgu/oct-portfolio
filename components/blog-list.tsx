"use client"

import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  description: string
  route: string
}

const blogPosts: BlogPost[] = [
  { id: "b1", title: "summer 2025", description: "Deep dive into my summer @ salesforce", route: "/salesforce-recap" },
  { id: "b2", title: "philosophy", description: "things to live by", route: "/philosophy" },
  { id: "b3", title: "what I wish I knew", description: "free Game", route: "/game" },
]

interface BlogListProps {
  hoveredItem: string | null
  onHover: (id: string | null) => void
}

export function BlogList({ hoveredItem, onHover }: BlogListProps) {
  return (
    <div className="space-y-4">
      {blogPosts.map((post) => (
        <Link
          href={post.route}
          key={post.id}
          className={`block py-1 cursor-pointer transition-all duration-300 ${
            hoveredItem && hoveredItem !== post.id ? "blur-[2px] opacity-40" : ""
          }`}
          onMouseEnter={() => onHover(post.id)}
          onMouseLeave={() => onHover(null)}
        >
          <span className="text-sm font-medium">{post.title}</span>
          <p className="text-xs text-muted-foreground mt-1">{post.description}</p>
        </Link>
      ))}
    </div>
  )
}
