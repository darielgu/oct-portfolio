"use client"

import { useState } from "react"
import { ProjectList } from "./project-list"
import { BlogList } from "./blog-list"

export default function DeveloperProfile() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleItemHover = (itemId: string | null) => {
    if (itemId) {
      setIsLoading(true)
      setTimeout(() => setIsLoading(false), 300)
    }
    setHoveredItem(itemId)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 lg:px-16">
        <header className="mb-16 flex items-center justify-between">
          <h1 className="text-sm font-normal text-foreground">dariel gutierrez</h1>
          <div className="flex gap-6">
   
            <a
              href="https://linkedin.com/in/dariel-gutierrez"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:opacity-60 transition-all duration-300 ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              linkedin
            </a>
            <a
              href="https://github.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:opacity-60 transition-all duration-300 ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              github
            </a>
            <a
              href="https://x.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:opacity-60 transition-all duration-300 ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              twitter
            </a>
          </div>
        </header>

        <section className="mb-24">
          <div className="max-w-lg">
            <p
              className={`text-sm leading-relaxed transition-all duration-300 ${
                hoveredItem ? "blur-[2px] opacity-40" : ""
              }`}
            >
              {"I'm dariel. I study computer science and I love building software. Currently, I'm running "}
              <a href="https://wco.sdsu.edu" className="text-sm hover:opacity-60 transition-all duration-300">
                WCO@SDSU
              </a>
              {" where I help students @ SDSU break into the tech industry, working as a CS tutor & mentor at the "}
              <a href="https://mslc.sdsu.edu/" className="text-sm hover:opacity-60 transition-all duration-300">
                MSLC
              </a>
              {" and working on my own projects (checkout my "}
              <a href="https://github.com/darielgu" className="text-sm hover:opacity-60 transition-all duration-300">
                github
              </a>
              {" if interested)"}
            </p>
          </div>
        </section>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div>
            <ProjectList hoveredItem={hoveredItem} onHover={handleItemHover} />
          </div>

          <div>
            <BlogList hoveredItem={hoveredItem} onHover={handleItemHover} />
          </div>

          {/* Loading Indicator */}
          <div className="flex items-start justify-start md:justify-center">
            <div
              className={`w-3 h-3 bg-foreground transition-opacity duration-200 ${
                isLoading ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </main>

      </div>
    </div>
  )
}
