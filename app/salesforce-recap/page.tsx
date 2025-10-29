import Link from "next/link";

export default function SalesforceRecapPage() {
  return (
    <div className="min-h-screen bg-white font-mono">
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-250 text-sm"
          >
            ← back to home
          </Link>
          <div className="text-gray-600 text-xs">Summer 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Summer 2025 Recap: My Journey at Salesforce
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              This summer was transformative. Landing an internship at
              Salesforce felt like a dream come true, but I had no idea just how
              much it would shape my perspective on the tech industry
            </p>
            <p>
              Coming from a first gen background I had 0 idea what an enterprise
              company would look/feel like. The scale was unlike anything I'd
              experienced before, it's crazy to imagine changes to the platform
              would affect millions of users
            </p>
            <p>
              It was a great experience to feel SF's ai/builder culture. I was
              able to visit Roblox for their open house, Reddit for a Colorstack
              event, & learn so much from my mangaer/mentor
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Takeaways
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Performance matters at scale:</strong> What seems like a
              minor optimization can have massive impact when multiplied across
              millions of users.
            </p>
            <p>
              <strong>Documentation is everything:</strong> In a large
              organization, clear documentation is essential.
            </p>
            <p>
              <strong>Customer feedback drives innovation:</strong> Real user
              pain points are the foundation for new features.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
