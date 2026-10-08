import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Resume · Dariel Gutierrez",
  description: "Dariel Gutierrez’s experience, education, skills, and projects.",
};

export default function ResumePage() {
  return (
    <PageLayout>
      <header>
        <h1>Resume</h1>
        <p>
          <a href="/images/resume-redacted.png" target="_blank" rel="noopener noreferrer">
            Open full-size resume
          </a>
          {" · "}
          <a href="/images/resume-redacted.png" download="dariel-gutierrez-resume.png">
            Download
          </a>
        </p>
      </header>
      <Image
        src="/images/resume-redacted.png"
        alt="Dariel Gutierrez’s resume with education, technical skills, experience, and projects. Contact information is blurred for privacy."
        width={1206}
        height={1502}
        sizes="(max-width: 700px) 100vw, 832px"
        priority
        unoptimized
      />
    </PageLayout>
  );
}
