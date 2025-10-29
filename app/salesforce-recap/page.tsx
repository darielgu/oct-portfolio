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
              much it would shape my perspective on technology, teamwork, and
              what it means to build products that impact millions of users
              worldwide.
            </p>
            <p>
              From day one, I was thrown into the deep end of enterprise
              software development. The scale was unlike anything I'd
              experienced before - we weren't just building features, we were
              architecting systems that needed to handle massive data loads
              while maintaining 99.9% uptime for customers who depend on our
              platform for their daily operations.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Key Learnings
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Performance matters at scale:</strong> What seems like a
              minor optimization can have massive impact when multiplied across
              millions of users. The Redis caching implementation I built
              reduced load times from 1-2 seconds to near-instantaneous,
              dramatically improving user experience.
            </p>
            <p>
              <strong>Documentation is everything:</strong> In a large
              organization, clear documentation isn't just helpful - it's
              essential. I spent significant time improving our internal docs,
              and the positive feedback from other teams reinforced how
              important this work is.
            </p>
            <p>
              <strong>Customer feedback drives innovation:</strong> Sitting in
              on customer calls and reading support tickets gave me insights
              that no amount of technical analysis could provide. Real user pain
              points became the foundation for feature prioritization.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
