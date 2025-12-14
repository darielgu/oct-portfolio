import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-black mb-4">
            Dariel Gutierrez
          </h1>
          <div className="space-y-3 text-black leading-relaxed text-sm">
            <p>
              I'm dariel. I study computer science and I love building software
            </p>
            <p>
              Currently, I'm running{" "}
              <a
                href="https://sdsu.worldcomputing.org/"
                className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
              >
                WCO@SDSU
              </a>{" "}
              where I help students @ SDSU break into the tech industry, working
              as a CS tutor & mentor at the {""}
              <a
                href="https://mslc.sdsu.edu/"
                className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
              >
                MSLC
              </a>
              {""} and working on my own projects (checkout my github if
              interested)
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <div className="flex space-x-3 text-black text-sm">
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
          <h2 className="text-lg font-semibold text-black mb-4">
            technical
          </h2>
          {/* Project 1` */}
          <div className="space-y-3">
            <a href="/pelosi" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/pelosi.png"
                    alt="Pelosi project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    pelosi portfolio
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    Get email alerts every time Nancy Pelosi trades
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">December 2025</div>
              </div>
            </a>

            <a href="/hireme" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/hireme.png"
                    alt="HireMe project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    hireme
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    Interview prep platform: everything you need to ace your
                    next interview
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">November 2025</div>
              </div>
            </a>
            <a href="/ideasurf" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/IdeaSurf-removebg.png"
                    alt="Ideasurf project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    ideasurf
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    The search browser for startups
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">November 2025</div>
              </div>
            </a>

            <a href="/mock-ai" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/mock.png"
                    alt="Mock AI project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    mock ai
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    Upload your resume & job description, get into a simulated
                    mock interviewer rating your answers, tone, & body/facial
                    expressions
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">October 2025</div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="/ai-tutor" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/ai-tutor.png"
                    alt="AI Tutor project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    ai tutor
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    AI tutor for your google drive notes using a googledrive mcp
                    server, create brainrot videos teaching you the material
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">October 2025</div>
              </div>
            </a>

            {/* Project 3 */}
            <a href="/interview-prep" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/interview-prep.png"
                    alt="Interview Prep project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    interview prep
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    Paste your resume, job link, and interviewer, parallel &
                    claude sdk deep search your interviewer & position
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">August 2025</div>
              </div>
            </a>
            <a href="/goatforce" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/goatforce.png"
                    alt="Goatforce project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    goatforce
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    MCP powered CRM dashboard, one stop shop for sales reps to
                    manage their deals
                  </p>
                </div>
                <div className="text-black group-hover:text-white text-xs">August 2025</div>
              </div>
            </a>
          </div>
        </div>
        {/* ETC  / ideas section */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4 mt-6">
            random
          </h2>
          <div className="space-y-3">
            <a href="/salesforce-recap" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/recap.jpeg"
                    alt="Summer 2025 Recap"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    summer 2025
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">
                    Deep dive into my summer @ salesforce
                  </p>
                </div>
                {/* <div className="text-black group-hover:text-white text-xs">Summer 2025</div> */}
              </div>
            </a>
            <a href="/philosophy" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/life.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    philosophy
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">things to live by</p>
                </div>
                <div className="text-black group-hover:text-white text-xs"></div>
              </div>
            </a>
            <a href="/game" className="block">
              <div className="rounded-lg p-3 flex items-center space-x-3 hover:bg-black transition-colors duration-250 group">
                <div className="w-12 h-12 bg-white border border-black rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/game.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-white text-sm">
                    what I wish I knew
                  </h3>
                  <p className="text-black group-hover:text-white text-xs">free Game</p>
                </div>
                <div className="text-black group-hover:text-white text-xs"></div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
