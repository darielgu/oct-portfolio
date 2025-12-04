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
              The Pelosi Portfolio is a web application that tracks the stock
              trades made by Nancy Pelosi and her husband, using publicly
              available data from the PDRS reports. The application runs a CRON
              job on this website to scrape the latest trades, pings all users
              via email with the exact trade details, and displays the data in
              an easy-to-read format.
            </p>
            <br />
            <ul className="list-disc list-inside">
              <li>SMTS</li>
              <li>Next.js</li>
              <li>FastAPI</li>
              <li>Selenium</li>
              <li>TypeScript</li>
              <li>SupaBase</li>
              <li>Vercel</li>
            </ul>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">Extra</h2>

          <div className="space-y-3">
            <p>
              In the future I plan to scrape more congress members so we can see
              and test other portfolios and potentially add an AI model trained
              on pelosis trading habits and back test it against the real
              market.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Deployed Website
            </h3>
            <p>
              <a
                href="https://pelosi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-all duration-250 hover:bg-gray-200 px-1 py-0.5 rounded text-align-center"
              >
                https://pelosi.vercel.app/
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
