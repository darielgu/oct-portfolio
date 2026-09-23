import { readFile } from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import { PageLayout } from "@/components/page-layout";
import { ResumeActions } from "./resume-actions";
import styles from "./resume.module.css";

export const metadata = {
  title: "Free Resume Template · Dariel Gutierrez",
  description: "A simple, one-page CS resume template. Open it in Overleaf, copy the LaTeX, and make it yours.",
  alternates: { canonical: "/res" },
};

export default async function ResumePage() {
  const source = await readFile(
    path.join(process.cwd(), "public/resume/darius-resume.tex"),
    "utf8",
  );

  return (
    <PageLayout>
      <h1>Stop overthinking your resume.</h1>
      <p>Use the template. Put your work on it. Start applying.</p>
      <p>
        Same structure as my resume, filled out with a fictional student named
        Darius. One page. Education, skills, experience, projects. Replace his
        details with yours, including the numbers.
      </p>

      <ResumeActions source={source} />

      <h2>Make it yours in Overleaf</h2>
      <ol>
        <li>Hit <strong>Open in Overleaf</strong>. Sign in or make a free account if asked.</li>
        <li>Replace Darius&apos;s name, contact info, school, experience, and projects.</li>
        <li>Hit <strong>Recompile</strong>, check it fits on one page, then download your PDF.</li>
      </ol>
      <p className="muted">
        Already have a project? Copy the LaTeX, replace everything in main.tex,
        and recompile with pdfLaTeX. No extra files needed.
      </p>

      <h2>The template</h2>
      <a href="/resume/darius-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open the resume PDF preview in a new tab">
        <Image
          src="/resume/darius-resume.png"
          alt="One-page resume template for fictional computer science student Darius Morgan, with education, technical skills, experience, and projects."
          width={1224}
          height={1584}
          sizes="(max-width: 900px) 100vw, 65vw"
          className={styles.preview}
        />
      </a>
      <p className="muted">Fictional example. Use your actual work and results.</p>

      <h2>What goes in the bullets?</h2>
      <p>
        What you built, how you built it, and what changed because of it. Be
        specific. If you don&apos;t have internships yet, use projects, research,
        clubs, or jobs. Don&apos;t invent numbers to make a bullet look better.
      </p>
    </PageLayout>
  );
}
