import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Dariel Gutierrez
          </h1>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hi! I'm Dariel. I study computer science at San Diego State
              University and I love building software.
            </p>
            <p>
              Currently, I'm running{" "}
              <a
                href="#"
                className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
              >
                WCO@SDSU,
              </a>
              working as a CS tutor & mentor @ the{" "}
              <a
                href="#"
                className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
              >
                MSLC,
              </a>
              and working on my own projects. On the side catch me enjoying
              cars, music, and soccer.
            </p>
          </div>
        </div>

        {/* Recent Work Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            I recently:
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              • built a full stack app to manage CRM deals using MCP servers @{" "}
              <a
                href="#"
                className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
              >
                Salesforce
              </a>{" "}
            </li>
            <li>
              • built an ai tutor to manage your google drive notes using a
              googledrive mcp server
            </li>
            <li>
              • got hundreds of students @ SDSU locked in on their careers
              through my career, resume, & technical workshops
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <div className="flex space-x-4 text-gray-700">
            <a
              href="mailto:darielgutierrez332@gmail.com"
              className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
            >
              [email]
            </a>
            <a
              href="https://www.linkedin.com/in/dariel-gutierrez/"
              className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
            >
              [linkedin]
            </a>
            <a
              href="https://github.com/darielgu"
              className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
            >
              [github]
            </a>
            <a
              href="https://x.com/darielguu"
              className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
            >
              [twitter]
            </a>
          </div>
        </div>

        {/* Technical Projects Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            technical
          </h2>
          {/* Project 1` */}
          <div className="space-y-4">
            <a href="/goatforce" className="block">
              <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4 hover:border-gray-400 transition-colors duration-250">
                <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Goatforce</h3>
                  <p className="text-gray-600">
                    MCP powered CRM dashboard, one stop shop for sales reps to
                    manage their deals
                  </p>
                </div>
                <div className="text-gray-500 text-sm">August 2025</div>
              </div>
            </a>

            {/* Project 2 */}
            <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">AI Tutor</h3>
                <p className="text-gray-600">
                  AI tutor for your google drive notes using a googledrive mcp
                  server, create brainrot videos teaching you the material
                </p>
              </div>
              <div className="text-gray-500 text-sm">October 2025</div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                  <div className="text-white text-xs font-mono">code</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Interview Prep</h3>
                <p className="text-gray-600">
                  Paste your resume, job link, and interviewer, parallel &
                  claude sdk deep search that companies most asked questions,
                  core values, and your interviewer
                </p>
              </div>
              <div className="text-gray-500 text-sm">August 2025</div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                  <div className="text-white text-xs font-mono">code</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Mock Ai</h3>
                <p className="text-gray-600">
                  Upload your resume & job description, get into a simulated
                  mock interviewer rating your answers, tone, & body/facial
                  expressions
                </p>
              </div>
              <div className="text-gray-500 text-sm">October 2025</div>
            </div>
          </div>
        </div>
        {/* ETC projects / ideas section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6 mt-6">
            random
          </h2>
          <div className="space-y-4">
            {/* Salesforce Recap */}
            <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  Summer 2025 Recap
                </h3>
                <p className="text-gray-600">
                  Deep dive into my summer @ salesforce
                </p>
              </div>
              <div className="text-gray-500 text-sm">Summer 2025</div>
            </div>

            {/* Random thoughts */}
            {/* <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">AI Tutor</h3>
                <p className="text-gray-600">
                  AI tutor for your google drive notes using a googledrive mcp
                  server, create brainrot videos teaching you the material
                </p>
              </div>
              <div className="text-gray-500 text-sm">October 2025</div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
