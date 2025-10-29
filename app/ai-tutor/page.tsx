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
              AI Tutor is an intelligent learning companion that transforms your
              Google Drive notes into engaging educational content. The core
              idea was to eliminate the monotony of traditional studying by
              creating personalized "brainrot" style videos that make learning
              addictive and memorable.
            </p>
            <p>
              The challenge was building a system that could understand complex
              academic material and repackage it into digestible, entertaining
              content while maintaining educational accuracy. We used MCP
              servers to seamlessly integrate with Google Drive, allowing
              students to simply upload their notes and receive personalized
              video lessons tailored to their learning style.
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
            <p>
              Finally, we faced the challenge of maintaining engagement over
              time. Students would initially be excited about the "brainrot"
              style videos, but we needed to ensure the novelty didn't wear off.
              We implemented adaptive content generation that learns from user
              preferences and continuously evolves the video style to keep
              students engaged.
            </p>
          </div>

          {/* YouTube Demo */}
          {/* <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Demo Video
            </h3>
            <iframe
              className="mx-auto block mt-3 rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AI Tutor Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </main>
    </div>
  );
}
