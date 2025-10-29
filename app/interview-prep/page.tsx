import Link from "next/link";

export default function InterviewPrepPage() {
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
          <div className="text-gray-600 text-xs">August 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Building Interview Prep
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              Interview Prep is a comprehensive platform that transforms the
              stressful process of interview preparation into a streamlined,
              data-driven experience. The core idea was to eliminate guesswork
              by providing candidates with deep insights into their specific
              interviewer and position requirements.
            </p>
            <p>
              The challenge was building a system that could analyze vast
              amounts of company data, interviewer profiles, and position
              requirements to provide personalized preparation strategies. We
              used Claude SDK for deep search capabilities, allowing candidates
              to paste their resume, job link, and interviewer information to
              receive tailored insights and preparation materials.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Challenges Encountered
          </h2>

          <div className="space-y-3">
            <p>
              The biggest challenge was data aggregation and processing. We
              needed to collect information from multiple sources including
              LinkedIn profiles, company websites, Glassdoor reviews, and
              industry databases. This required building robust web scraping
              systems and API integrations that could handle rate limiting and
              data quality issues.
            </p>
            <p>
              Another major issue was ensuring accuracy and relevance of the
              insights provided. With so much data available, we needed to
              implement sophisticated filtering and ranking algorithms to ensure
              candidates received the most relevant and actionable information.
              This required developing custom NLP models to understand job
              descriptions and match them with candidate profiles.
            </p>
            <p>
              Finally, we faced the challenge of maintaining up-to-date
              information. Company structures, interviewer roles, and job
              requirements change frequently. We implemented automated
              monitoring systems that track changes and update candidate
              profiles accordingly, ensuring the preparation materials remain
              current and relevant.
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
              src="https://www.youtube.com/embed/-11S4wNWblg?si=-QYS1iNu07oPWD4y"
              title="Interview Prep Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
