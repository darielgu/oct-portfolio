import React from "react";
import Link from "next/link";
export default function game() {
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
          what I wish freshman me knew
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <span className="font-semibold">Jake's Resume Template:</span> If
              you're not using something similar, use it.{" "}
              <a
                href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-all duration-250 hover:bg-black hover:text-white px-1 py-0.5 rounded"
              >
                overleaf link
              </a>
            </li>

            <li>
              <span className="font-semibold">LinkedIn Presence:</span> Get your
              profile up with a professional headshot, 500+ connections, and all
              experiences up to date.
            </li>

            <li>
              <span className="font-semibold">Take COMPE561:</span> it's a CompE
              elective you can take as a CS elective and the professor is a
              full-time SWE. You build a full stack app as your one assignment.
            </li>

            <li>
              <span className="font-semibold">Build real projects:</span> no one
              cares about a YouTube tutorial project anymore. If you don't know
              what to do, build a full stack/SaaS project deployed on a personal
              domain with a logo & landing page that solves something (literally
              anything).
            </li>

            <li>
              <span className="font-semibold">
                Take a Full Stack Web Dev Course:
              </span>{" "}
              genuinely, school won't teach you what companies actually look
              for. Get ahead and learn full stack web dev through YouTube or
              Udemy.
            </li>

            <li>
              <span className="font-semibold">COLD APPS ARE DEAD APPS:</span>{" "}
              reach out to engineers at companies you want until you get a
              response. Set up a coffee chat, be genuine, and ask for a referral
              or if they have anyone else you can talk to. Submitting apps with
              no referral is like throwing your resume in the trash unless your
              resume is cracked.
            </li>

            <li>
              <span className="font-semibold">Get experience early:</span> reach
              out to professors for research, small startups for roles, and stay
              on the lookout for opportunities all the time.
            </li>

            <li>
              <span className="font-semibold">Secret Sauce:</span> there are
              many orgs supporting underrepresented groups in tech. If you are
              part of one, find your org. Look into: Management Leadership for
              Tomorrow, ColorStack, NSBE, Break Through Tech, Rewriting the
              Code, SHPE, and many more.
            </li>

            <li>
              <span className="font-semibold">Apply to NSF REUs:</span> paid
              summer-long research positions across the country that are often
              less competitive than internships and give great resume bullets
              and networks. If you haven't had an internship, seriously look
              into these — no one talks about them and it's insane 🤫
            </li>

            <li>
              <span className="font-semibold">Recruiting</span> map the
              recruiting calendar (Aug–Oct: apps; Sep–Nov: interviews; Dec–Feb:
              off-cycle). Reverse-plan study/projects so you're shipping by
              August, not starting in August.
            </li>

            <li>
              <span className="font-semibold">Portfolio That Converts:</span>
              pin 3 repos with: clear README, short Loom demo, live link,
              concise tech stack bullets, and a "what I learned" section. Make
              it easy to skim in 30 seconds.
            </li>

            <li>
              <span className="font-semibold">Interview Practice System:</span>
              30–45 min/day. Mix: 2 data structure reps, 1 systems read, 10 min
              behavioral story (STAR) refinement. Consistency beats cramming.
            </li>

            <li>
              <span className="font-semibold">Ship Publicly:</span>
              tweet/linkedin post with a 30–60s demo clip, 1 code snippet, and a
              takeaway. Visibility compounds and creates warm inbounds.
            </li>

            <li>
              <span className="font-semibold">Join the Builders:</span>
              go to hackathons/meetups. Aim to leave each event with new
              linkedin connections. Follow up within 24 hours with a concrete
              next step.
            </li>

            <li>
              <span className="font-semibold">Resume Bullets:</span>
              quantify with numbers and verbs: "reduced X from 120s → 8s (93%)
              by caching + batching; +18% activation". Cut filler; keep impact.
            </li>

            <li>
              <span className="font-semibold">Track The Pipeline:</span>
              simple sheet with company, contact, status, date, next action. If
              there's no next action, the task isn't done.
            </li>

            <li>
              <span className="font-semibold">Daily 90-Min Block:</span> 30m
              code, 30m learn, 30m network. Do it 5x/week for 12 weeks and you
              will feel the compound effect.
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
