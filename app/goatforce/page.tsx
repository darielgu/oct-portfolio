import Link from "next/link";
import CodeSnippet from "../../components/CodeSnippet";

export default function GoatforcePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="text-black hover:bg-black hover:text-white transition-colors duration-250 text-sm px-1 py-0.5 rounded"
          >
            ← back to home
          </Link>
          <div className="text-black text-xs">August 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-black mb-6">
          Building Goatforce
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-black leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              Goatforce is a CRM dashboard powered by MCP servers, designed to
              be the one-stop shop for sales reps to manage their deals
              efficiently. The core idea was to eliminate the friction between
              different tools and create a unified interface that understands
              natural language commands. Goatforce has a sales reps Slack &
              Gmail logs and interactions with both all in one platform
            </p>
            <p>
              The challenge was building a lightweight interface that could
              handle complex sales workflows & monitor all communication
              channels while maintaining speed and reliability. We used MCP
              servers to bridge the gap between natural language processing and
              CRM operations, allowing sales reps to simply type what they want
              to accomplish rather than navigating through multiple screens and
              forms.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-xl font-bold text-black mt-6 mb-3">
            Challenges Encountered
          </h2>

          <div className="space-y-3">
            <p>
              When creating goatforce I realized our Gmail MCP server was
              bottlenecking our whole pipeline, I decided to build our own
              server using fast mcp and created a data dashboard where I could
              upload our time logs and graph out where our bottleneck could be
              fixed. After implementing our own MCP server I cut down pipeline
              time by 30-45 seconds a massive improvement
            </p>
            <p>
              Since our pipeline would take up to 60 seconds depending on how
              much new conversation data was added, I needed a way for our users
              to be able to navigate away from the loading screen / refresh
              without allowing them access to click into the deal. This is when
              I implememnted websockets using socket.io to emit a message when
              our pipeline had started and emit when done, keeping the loading
              state monitored perfectly
            </p>
            <p>
              Another issue encountered was a delay in data getting to our web
              server, everytime the dashboard was refreshed the get request
              would take 1-2 seconds to load in our assets which is hoestly not
              that bad but not the ideal user experience. To reduce this I
              implemented smart redis caching that would cache all of our deal
              information and monitor if the user had ran a pipeline on a
              specific deal which would then run a background task to refresh
              the cache giving us a immensely fast load in time
            </p>
          </div>

          {/* Code Snippet Component */}
          {/* YouTube Demo */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-black mb-3">
              Demo Video
            </h3>
            <div
              className="relative w-full overflow-hidden rounded-lg mt-3"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/9l9JOlBjG-s?si=sMYZKYGKABTwhqf1"
                title="Interview Prep Demo"
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
