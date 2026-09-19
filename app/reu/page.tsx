import { PageLayout } from "@/components/page-layout";
import { CopyBlock } from "@/components/copy-block";

export const metadata = {
  title: "REU Guide · Dariel Gutierrez",
  description:
    "No internship yet? How to find summer research programs, apply through NSF ETAP, and get your applications out.",
};

const recommendationAsk = `Hi Professor [NAME],

I'm applying to summer research programs and wanted to ask if you'd be comfortable writing me a strong recommendation letter. I took your [CLASS] and worked on [PROJECT / SOMETHING THEY KNOW YOU FROM].

I can send my resume, transcript, and a short description of the programs. My first deadline is [DATE]. The application system will send you the submission instructions.

Thank you,
[YOUR NAME]`;

export default function ReuPage() {
  return (
    <PageLayout>
      <h1>No internship? Apply to research programs.</h1>
      <p className="muted">The REU guide. Get your stuff together and apply.</p>

      <p>
        I applied to around 50 summer research programs and got into 5. I had no
        experience on my resume and went to a non-target. I literally got into
        Carnegie Mellon&apos;s HCII summer research program. Stop rejecting
        yourself because of the school you go to.
      </p>
      <p>
        REU stands for Research Experiences for Undergraduates. You work with
        researchers, get paid, and leave with actual work to talk about next
        recruiting season. Housing, meals, and travel support depend on the
        program. A published paper is possible, not guaranteed.
      </p>

      <h2>What you need</h2>
      <ul>
        <li>
          <strong>A resume.</strong> Classes, projects, clubs, jobs. Put down what
          you actually have. You don&apos;t need a previous internship to make one.
        </li>
        <li>
          <strong>Two recommenders lined up.</strong> These are people who write
          recommendation letters, not employee referrals. Ask professors or
          mentors who know your work. The exact number and who can write them
          depend on the program.
        </li>
        <li>
          <strong>Your transcript.</strong> Some programs accept an unofficial
          copy. Check before uploading.
        </li>
        <li>
          <strong>A short statement of interest.</strong> What you want to work
          on, what you&apos;ve done, and why that program. Answer their prompt.
        </li>
      </ul>

      <h2>1. Ask for the letters now</h2>
      <p>
        This is the part you can&apos;t finish by yourself at midnight. Give people
        a few weeks. Ask first, then enter their contact info in the application.
        Send your resume and deadlines so they have something to work with.
      </p>
      <CopyBlock text={recommendationAsk} />

      <h2>2. Make an ETAP account</h2>
      <p>
        Go to <a href="https://etap.nsf.gov/">NSF ETAP</a>, create an applicant
        account, and fill out your profile. Find opportunities in areas you care
        about. For CS, start with computing, AI, cybersecurity, robotics, and HCI.
      </p>

      <h2>3. Open the program. Read the requirements. Apply.</h2>
      <ol>
        <li>Check eligibility, dates, deadline, and whether you can actually attend.</li>
        <li>Complete the application and upload the documents it asks for.</li>
        <li>
          Add your recommenders where requested. Follow the program&apos;s letter
          instructions and check that the letters arrive by its deadline.
        </li>
        <li>
          Answer any program-specific questions. Reuse your base statement, but
          explain why this particular research interests you.
        </li>
        <li>
          Submit. Check the confirmation and application status. A saved draft
          isn&apos;t an application.
        </li>
      </ol>
      <p>
        ETAP isn&apos;t the whole list. Use the{" "}
        <a href="https://www.nsf.gov/funding/initiatives/reu/search">
          NSF REU directory
        </a>{" "}
        too, and follow each program&apos;s application link. Some use their own
        system. Look for other university summer research programs as well.
      </p>

      <h2>4. Mass apply</h2>
      <p>
        I sent around 50. Don&apos;t send 3 and call it a recruiting season. Apply
        broadly to programs you&apos;re eligible for and would actually attend.
        Reuse the boring stuff. Fix the school name. Answer the actual questions.
        Keep going.
      </p>
      <p>
        Keep a simple sheet: program, link, deadline, submitted, letters received,
        decision. Your goal is a stack of complete applications. My results
        aren&apos;t a guarantee, but you get zero chances from the ones you never
        send.
      </p>

      <h2>Before you close this tab</h2>
      <p>
        Ask two people for letters. Update your resume. Find your first 10
        programs. Start the applications that are open and track the next cycle
        for the ones that aren&apos;t.
      </p>
      <p className="muted">
        Per <a href="https://www.nsf.gov/funding/initiatives/reu/students">NSF&apos;s student guide</a>,
        most summer deadlines fall in January through March. NSF-funded REU
        participants must be undergraduates who are U.S. citizens, U.S. nationals,
        or permanent residents. Individual programs can add requirements; other
        summer research programs may have different eligibility.
      </p>
      <p><a href="https://etap.nsf.gov/">Open ETAP and get started →</a></p>
    </PageLayout>
  );
}
