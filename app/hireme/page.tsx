import Link from "next/link";
import CodeSnippet from "../../components/CodeSnippet";

export default function hireme() {
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
          <div className="text-gray-600 text-xs">November 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Building HireMe
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <div className="space-y-3">
            <h3>This won most complete solution @ Innovate 4 SDSU Hackathon</h3>
            <p>
              HireMe is a one stop platform for job seekers to prep for
              interviews. It’s a consolidation of several tools I previously
              built, now combined into a single interface that understands
              natural-language commands and removes the friction of jumping
              between apps.
            </p>
            <p>
              You upload your résumé, the interviewer’s LinkedIn profile, and
              the job posting. We scrape Reddit, Glassdoor, and other sources to
              surface the most relevant interview insights — including common
              interview questions, company culture notes, salary expectations,
              conversation hooks based on the interviewer’s background, and
              recent company news. The platform also provides a 7-day study
              plan, an overview of the interview process, contact information
              for people currently in the role, and a mock interview simulation
              generated from scraped data and your résumé.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Challenges Encountered
          </h2>

          <div className="space-y-3">
            <p>
              When creating HireMe I realized our parallel api + webscraping
              pipeline was taking up to 45 seconds to process a single request.
              I decided to introduce multithreading to be able to run these
              processes in parallel rather than sequentially. After implementing
              multithreading I cut down pipeline time by 30-45 seconds, a
              massive improvement.
            </p>
          </div>

          {/* Code Snippet Component */}
          {/* YouTube Demo */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Demo Video
            </h3>
            <div
              className="relative w-full overflow-hidden rounded-lg mt-3"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/21IXrUmlsgA?si=s_uR0ze1jw8Y6p3Y"
                title="hire me demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
