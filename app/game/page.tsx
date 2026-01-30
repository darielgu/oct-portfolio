import { PageLayout } from "@/components/page-layout"

export default function GamePage() {
  return (
    <PageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">what I wish I knew</h1>
          <p className="text-sm text-muted-foreground">free Game</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-medium">1. Jake's Resume Template</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you're not using something similar, use it.{" "}
              <a
                href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:opacity-60"
              >
                [overleaf link]
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">2. LinkedIn Presence</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Get your profile up with a professional headshot, 500+ connections, and all experiences up to date.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">3. Take COMPE561</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              It's a CompE elective you can take as a CS elective and the professor is a full-time SWE. You build a full
              stack app as your one assignment.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">4. Build real projects</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              No one cares about a YouTube tutorial project anymore. If you don't know what to do, build a full
              stack/SaaS project deployed on a personal domain with a logo & landing page that solves something
              (literally anything).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">5. Take a Full Stack Web Dev Course</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Genuinely, school won't teach you what companies actually look for. Get ahead and learn full stack web dev
              through YouTube or Udemy.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">6. COLD APPS ARE DEAD APPS</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Reach out to engineers at companies you want until you get a response. Set up a coffee chat, be genuine,
              and ask for a referral or if they have anyone else you can talk to. Submitting apps with no referral is
              like throwing your resume in the trash unless your resume is cracked.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">7. Get experience early</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Reach out to professors for research, small startups for roles, and stay on the lookout for opportunities
              all the time.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">8. Secret Sauce</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              There are many orgs supporting underrepresented groups in tech. If you are part of one, find your org.
              Look into: Management Leadership for Tomorrow, ColorStack, NSBE, Break Through Tech, Rewriting the Code,
              SHPE, and many more.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">9. Apply to NSF REUs</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Paid summer-long research positions across the country that are often less competitive than internships
              and give great resume bullets and networks. If you haven't had an internship, seriously look into these —
              no one talks about them and it's insane
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">10. Recruiting</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Map the recruiting calendar (Aug–Oct: apps; Sep–Nov: interviews; Dec–Feb: off-cycle). Reverse-plan
              study/projects so you're shipping by August, not starting in August.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">11. Portfolio That Converts</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pin 3 repos with: clear README, short Loom demo, live link, concise tech stack bullets, and a "what I
              learned" section. Make it easy to skim in 30 seconds.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">12. Interview Practice System</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              30–45 min/day. Mix: 2 data structure reps, 1 systems read, 10 min behavioral story (STAR) refinement.
              Consistency beats cramming.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">13. Ship Publicly</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tweet/linkedin post with a 30–60s demo clip, 1 code snippet, and a takeaway. Visibility compounds and
              creates warm inbounds.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">14. Join the Builders</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Go to hackathons/meetups. Aim to leave each event with new linkedin connections. Follow up within 24 hours
              with a concrete next step.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">15. Resume Bullets</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Quantify with numbers and verbs: "reduced X from 120s → 8s (93%) by caching + batching; +18% activation".
              Cut filler; keep impact.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">16. Track The Pipeline</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Simple sheet with company, contact, status, date, next action. If there's no next action, the task isn't
              done.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium">17. Daily 90-Min Block</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              30m code, 30m learn, 30m network. Do it 5x/week for 12 weeks and you will feel the compound effect.
            </p>
          </div>
        </section>
      </article>
    </PageLayout>
  )
}
