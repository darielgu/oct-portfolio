import Link from "next/link";

export default function MockAIPage() {
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
          Building Mock AI
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              Mock AI is an advanced interview simulation platform that provides
              comprehensive feedback on candidates' performance across multiple
              dimensions. The core idea was to create a realistic interview
              environment that could evaluate not just answers, but also tone,
              body language, and facial expressions.
            </p>
            <p>
              The challenge was building a system that could accurately assess
              both verbal and non-verbal communication cues while providing
              constructive feedback. We integrated computer vision for facial
              expression analysis, natural language processing for answer
              evaluation, and audio processing for tone analysis, creating a
              holistic assessment platform.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Challenges Encountered
          </h2>

          <div className="space-y-3">
            <p>
              The biggest challenge was achieving accurate facial expression
              recognition across different lighting conditions, camera angles,
              and user setups. We needed to develop robust computer vision
              models that could work reliably in various environments while
              maintaining user privacy and data security.
            </p>
            <p>
              Another major issue was creating realistic interview scenarios
              that could adapt to different industries and roles. We implemented
              dynamic question generation based on job descriptions and company
              culture, ensuring that each mock interview felt authentic and
              relevant to the candidate's target position.
            </p>
            <p>
              Finally, we faced the challenge of providing actionable feedback
              that candidates could actually use to improve. Rather than just
              scoring performance, we developed detailed analysis systems that
              provide specific recommendations for improvement, including
              practice exercises and targeted coaching suggestions.
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
              src="https://www.youtube.com/embed/AXmoAowGulk?si=DNfxZModykBQx97Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
