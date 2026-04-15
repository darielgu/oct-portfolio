import { ProjectPageLayout } from "@/components/project-page-layout";

export default function CareermaxPage() {
  return (
    <ProjectPageLayout>
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium">careermax</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>January 2026</span>
            <a
              href="https://careermax.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:opacity-60"
            >
              [live site]
            </a>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-sm leading-relaxed">
            CareerMax is an AI-driven resume optimization platform for students
            and early-career professionals. It helps generate ATS-ready resumes,
            tailor applications to specific roles, optimize LinkedIn profiles,
            and find relevant recruiters.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The landing page sets the tone with the promise to "Stop getting
            ghosted & Start getting interviews" and highlights that CareerMax
            automatically generates ATS-passing resumes, fixes LinkedIn
            profiles, and tailors each application to the target role.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">why I built it</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Job hunting can be demoralizing when applications never get past the
            Applicant Tracking System (ATS). As a student applying to
            internships, I felt the pain of getting ghosted. CareerMax was built
            to solve that problem and help candidates get seen by hiring
            managers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">core features</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">
                AI-powered resume analysis.
              </span>{" "}
              Scores resumes the way an ATS would across formatting, content
              quality, writing style, and job match, then provides actionable
              recommendations and one-click improvements.
            </li>
            <li>
              <span className="font-medium text-foreground">
                LinkedIn and job-matching ecosystem.
              </span>{" "}
              Includes LinkedIn profile optimization, AI resume generation and
              editing, application-based tailoring with keyword matching,
              recruiter database access, job alerts, and interview prep
              resources.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">how it works</h2>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Create an account and keep your profile details up to date.</li>
            <li>
              Upload or build a resume using the manual builder and AI tools.
            </li>
            <li>
              Paste a job description to tailor your resume or optimize your
              LinkedIn profile.
            </li>
            <li>
              Use job alerts and recruiter resources to target the right
              opportunities.
            </li>
            <li>
              Iterate quickly and export unlimited ATS-ready resumes as PDF or
              Word.
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">final thoughts</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            CareerMax aims to democratize access to AI-driven career tools. By
            combining resume analytics, automated tailoring, LinkedIn
            optimization, and recruiter insights, it helps students and job
            seekers stand out and land more interviews.
          </p>
        </section>
      </article>
    </ProjectPageLayout>
  );
}
