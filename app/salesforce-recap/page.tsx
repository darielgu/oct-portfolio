import Link from "next/link";

export default function SalesforceRecapPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="text-black hover:bg-black hover:text-white transition-colors duration-250 text-sm px-1 py-0.5 rounded"
          >
            ← back to home
          </Link>
          <div className="text-black text-xs">Summer 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-black mb-6">
          Summer 2025 Recap: My Journey at Salesforce
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-black leading-relaxed text-sm">
          <div className="space-y-3">
            <p>This summer was awesome.</p>
            <p>
              Coming from a first gen background I had 0 idea what an enterprise
              company would look/feel like. The scale was unlike anything I'd
              experienced before, it's crazy to imagine the software begin
              Salesforce powers millions of users
            </p>
            <p>
              It was a great experience to feel SF's ai/builder culture and
              explore the city. I was able to visit Roblox for their open house,
              Reddit for a Colorstack event, & learn so much from my
              manager/mentor
            </p>
          </div>
          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-black mt-6 mb-3">
            takeaways
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
          <h1 className="text-lg font-bold text-black mb-2">recs</h1>
          <ul>
            <li>Lous Cafe</li>
            <li>Bottega in the mission</li>
            <li>Golden Gate Park ping pong table </li>
            <li>2nd street for clothes</li>
            <li>Go touch grass theres so much in the city</li>
            <li>Mission playground soccer field</li>
            <li></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
