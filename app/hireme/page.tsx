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
          <div className="text-gray-600 text-xs">August 2025</div>
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
              HireMe is the one-stop shop for job seekers to prepare for
              interviews, its a combination of similar individual produces i've
              made before but combined into one platform. The core idea was to
              eliminate the friction between different tools and create a
              unified interface that understands natural language commands.
            </p>
            <p>
              You upload your resume, interviewers linkedin, and job posting. We
              scrape reddit, glass door, etc to provide you with the most
              relevant interview resources. You can see things like: most asked
              questions, company culture, salary expectations, things to speak
              to your interviewer about based on their linkedin, and company
              news. Additionally we have a 7 day study plan, interview process
              overview, the emails & linkedin of people in the current role
              you're applying to, and a simulated mock interview based on
              scraped data and your resume!
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
              I decided to build introudce multithrreading to be able to run
              these process in parallel rather than sequentially. After
              implementing multithreading I cut down pipeline time by 30-45
              seconds a massive improvement
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
