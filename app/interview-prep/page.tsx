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
              interviewer, company and position requirements.
            </p>
            <p>
              Using the parralel api as a Claude sdk tool we were able to scrape
              the interviewers linkedin, the company & positions most asked
              questions, core values, and any other data on the internet that
              could give you a better chance at getting hired. On generation we
              provide the user a comprehensive study guide on how to ace their
              interview.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Challenges Encountered
          </h2>

          <div className="space-y-3">
            <p>
              This was built in 5 hours @ the UCSD x SDx hackathon, which was
              honestly our biggest challenge. That 5 hour time crunch meant no
              going back on our original plan and pushing out code every couple
              of minutes. All in all it was a great experience getting to meet
              some of the UCSD students.
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
