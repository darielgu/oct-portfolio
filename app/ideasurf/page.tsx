import Link from "next/link";
import CodeSnippet from "../../components/CodeSnippet";

export default function Ideasurf() {
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
          Building ideasurf
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              Ideasurf is a platform that helps you generate ideas for your
              startup. The core idea was to eliminate the friction between
              different tools and create a unified interface that understands
              natural language commands and finds all the projects on the
              internet similar to your idea.
            </p>
            <p>
              Honestly had a great time building this project, the basic
              workflow is to scrape YC, A16z, etc - seed database with project
              vector embeddings - query database with your idea - get similar
              ideas!
              <br />
              <ul className="list-disc list-inside">
                <li>Next.js</li>
                <li>FastAPI</li>
                <li>Selenium</li>
                <li>TypeScript</li>
                <li>SupaBase</li>
                <li>Vercel</li>
                <li>OpenAI Embeddings</li>
              </ul>
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Extra</h2>

          <div className="space-y-3">
            <p>
              In the future I plan to scrape more sources like Crunchbase,
              PitchBook, and other startup databases to get a more comprehensive
              list of ideas. I also plan to add user voting & ranking to the
              ideas to help prioritize the most popular ideas.
            </p>
          </div>

          {/* Code Snippet Component */}
          {/* YouTube Demo */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Deployed Website
            </h3>
            <p>
              <a
                href="https://ideasurf.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-all duration-250 hover:bg-gray-200 px-1 py-0.5 rounded text-align-center"
              >
                https://ideasurf.xyz
              </a>
            </p>

            <div className="relative w-full overflow-hidden rounded-lg mt-1">
              <img src="/images/vector.gif"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
