import Link from "next/link";

export default function AITutorPage() {
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
          <div className="text-gray-600 text-xs">October 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Building AI Tutor
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              AI Tutor is an intelligent learning companion that connects to
              your Google Drive using an MCP server I built, turning notes into
              engaging educational content. The core idea was to eliminate the
              monotony of traditional studying by creating smart AI agents who
              know everthing about your notes & to create personalized
              "brainrot" style videos that make learning addictive and
              memorable.
            </p>
            <p>
              The challenge was building a system that could understand complex
              academic material and repackage it into digestible, entertaining
              content while maintaining educational accuracy. But with advanced
              NLP tools and adaptive learning algorithms, AI Tutor creates a
              unique study experience tailored to each student's needs.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Challenges Encountered
          </h2>

          <div className="space-y-3">
            <p>
              The biggest challenge was creating content that was both
              educational and entertaining. Traditional AI tutors are often dry
              and boring, but we wanted to create something that students would
              actually want to watch. This required developing sophisticated
              content generation algorithms that could balance humor with
              accuracy.
            </p>
            <p>
              Another major issue was processing large amounts of Google Drive
              content efficiently. Students often have hundreds of documents,
              and we needed to intelligently prioritize which content to focus
              on based on upcoming exams, assignment deadlines, and learning
              patterns. This required implementing smart content prioritization
              algorithms.
            </p>
          </div>

          {/* YouTube Demo */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Demo Video
            </h3>
            <iframe
              className="mx-auto block mt-3 rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ihNwD7CMXH0?si=fz7Y1i2TFRue1f7h"
              title="AI Tutor Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
