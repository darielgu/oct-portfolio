import { PageLayout } from "@/components/page-layout";
import { CopyBlock } from "@/components/copy-block";

export const metadata = { title: "Referrals · Dariel Gutierrez" };

const setupPrompt = `I want to set up a job referral workflow with you. Before we build anything, interview me one question at a time and save my answers to a file called referral-profile.md in this folder:

1. My full name
2. My school, and what alumni from it call themselves (example: Aztecs)
3. My year and major
4. The role type I'm targeting (example: SWE intern, new grad SWE)
5. The job repo I want to watch. Default: https://github.com/SimplifyJobs/Summer2027-Internships
6. Companies I care about most, or "any"
7. Where my resume lives (file path or link)
8. My calendar booking link for coffee chats (Calendly, Cal.com, etc.)

When you're done, show me the file and wait.`;

const watcherPrompt = `Read referral-profile.md. Build me a small job watcher.

What it does:
- Checks the job repo in my profile once a day
- Finds roles that are new since the last check and match my role type and companies
- Appends each new role to new-roles.md with: company, role title, link, date found
- Saves what it has already seen in seen-roles.json so it never logs the same role twice

Rules:
- Use the simplest setup that works on my machine. Explain your choice in two sentences before building.
- Pick a way to run it daily (a Claude Code routine with /schedule, cron, or a GitHub Action) and tell me the tradeoff.
- Run it once now so I can see real output.
- Don't touch any files outside this folder.`;

const alumniPrompt = `Read referral-profile.md and new-roles.md. For each new company that hasn't been searched yet:

1. Open LinkedIn in my signed-in Chrome with Claude in Chrome.
2. Search people at that company who went to my school. Use the company's People tab and filter by my school.
3. Prefer people on the team or in the role type I'm targeting. Then engineers in general. Then recruiters.
4. Pick up to 5 people per company.
5. Add each person to alumni.csv with: name, company, current role, profile URL, why you picked them, status = "to contact".
6. Mark the company as searched in new-roles.md.

Don't send anything in this step. Only read and log. Stop and show me the list when you're done.`;

const skillPrompt = `Create a Claude Code skill at .claude/skills/linkedin-coffee-chat/SKILL.md with exactly the content below. Fill the "About me" section from referral-profile.md. Then show me the finished file.

---
name: linkedin-coffee-chat
description: Send a school alum a short LinkedIn intro note, then ask for a 15 minute coffee chat once they reply. Use when given a LinkedIn profile or a list of profiles to reach out to.
---

Reach out on LinkedIn to someone I don't know yet. This takes two messages. Message 1 opens the conversation. Message 2 asks for the coffee chat, and only goes out after they reply.

## About me

- Name: [YOUR NAME]
- School: [YOUR SCHOOL]
- Major: [YOUR MAJOR]
- Calendar link: [YOUR CAL LINK]

## Message 1: the intro

Use this template. Only fill in the brackets. Keep the rest word for word.

Hey [name], I'm majoring in [major] and go to [school]. I saw you were at [company] and was hoping to see if I could learn more about your journey navigating tech.

## Message 2: the ask

Send this only after they reply to message 1. Use it word for word with my calendar link.

awesome! would you be down for a 15 min coffee chat? [calendar link]

## Steps

Repeat for each profile. A profile is done when message 1 is sent or it is logged as skipped.

1. **Read the profile.** Open their LinkedIn profile in my signed-in Chrome session with Claude in Chrome. Pull their first name, school, and current company. If they didn't go to my school, skip them and log why.
2. **Write message 1.** Fill in the template with their details.
3. **Send it.** Click Connect, then Add a note. Paste the note and send. If they're already a connection, send it as a message instead. If the note is over the character limit, tell me instead of cutting words.
4. **Log it.** Update their row in alumni.csv with the date and status = sent or skipped.

## Rules

- Use their first name only.
- Don't ask for a referral in either message.
- Don't add compliments, emojis, or extra sentences to the templates.
- Never send message 2 before they reply.`;

const sendPrompt = `Use the linkedin-coffee-chat skill on the next 5 people in alumni.csv with status = "to contact". Write and send each note, then show me what you sent.`;

const followUpPrompt = `Read alumni.csv. For everyone with status = "sent":
- Open our LinkedIn conversation in Chrome and check if they replied.
- If they replied, send message 2 from the linkedin-coffee-chat skill, set status = "asked for chat", and show me their reply.
- If not, and message 1 went out 7 or more days ago, set status = "no reply" and move on. Don't follow up more than once.

For every company where someone got "no reply", run the linkedin-coffee-chat skill on the next person at that company so the loop keeps going.`;

const chatPrompt = `I have a 15 minute coffee chat with [NAME] at [COMPANY] for the [ROLE] role. Read their row in alumni.csv and their LinkedIn profile. Give me:

1. Three specific questions about their path and their team, based on their profile
2. A 20 second version of who I am and what I'm going for
3. One natural way to ask for a referral near the end, if the chat goes well`;

const referralPrompt = `I just finished a coffee chat with [NAME]. Here are my notes: [PASTE NOTES].

Draft a short LinkedIn thank you message that:
- Thanks them for one specific thing they said
- Asks if they'd be open to referring me for [ROLE] (link: [JOB LINK])
- Offers to send my resume and a two line blurb they can paste into the referral form
- Sounds like me, casual and plain. No em dashes.

Also write the two line blurb. Update their row in alumni.csv to status = "asked for referral".`;

export default function ReferralsPage() {
  return (
    <PageLayout>
      <h1>Getting referrals with Claude</h1>
      <p className="muted">Copy the prompts below into Claude Code, in order.</p>

      <p>
        Cold applying mostly doesn&apos;t work. A referral gets your resume in front
        of a real person. This is the workflow I use: a bot watches a job repo, finds
        alumni at the company, Claude sends a short intro note, you ask for a 15 minute coffee chat when they
        reply, and the referral ask happens after you actually talk.
      </p>

      <img src="/images/referral-workflow-transparent.png" alt="Workflow: bot watches the job repo, find alumni on LinkedIn, Claude writes and sends the note, reply leads to a coffee chat, ask for the referral, resume actually seen." width={400} />

      <h2>What you need</h2>
      <ul>
        <li>
          <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">
            Claude Code
          </a>{" "}
          installed
        </li>
        <li>
          The{" "}
          <a href="https://claude.com/chrome" target="_blank" rel="noopener noreferrer">
            Claude in Chrome
          </a>{" "}
          extension, signed into your LinkedIn
        </li>
        <li>An empty folder for this workflow. Open Claude Code inside it.</li>
        <li>
          A job repo to watch. I use{" "}
          <a href="https://github.com/SimplifyJobs/Summer2027-Internships" target="_blank" rel="noopener noreferrer">
            SimplifyJobs/Summer2027-Internships
          </a>
        </li>
      </ul>

      <h2>The human part</h2>
      <p>Claude does the busywork. You still do the parts that get you the referral:</p>
      <ol>
        <li>Read what Claude sent after each run. Your name is on every message.</li>
        <li>Show up to the coffee chat and be curious about them, not only the job.</li>
        <li>Ask for the referral yourself, only after a good chat.</li>
        <li>Keep volume sane. Around 5 notes a day. Spamming gets your account flagged.</li>
      </ol>

      <h2>Step 0. Tell Claude who you are</h2>
      <p>One time. Everything else reads from this file.</p>
      <CopyBlock text={setupPrompt} />

      <h2>Step 1. Bot watches the job repo</h2>
      <p>One time setup. After this it runs on its own and logs new roles.</p>
      <CopyBlock text={watcherPrompt} />

      <h2>Step 2. Find alumni on LinkedIn</h2>
      <p>Run when new roles show up. Read only, nothing gets sent.</p>
      <CopyBlock text={alumniPrompt} />

      <h2>Step 3. Claude writes and sends the note</h2>
      <p>
        These are the two messages I actually send. The first one just opens the
        conversation. The second one asks for the chat, only after they reply.
      </p>
      <p>First, install the skill. One time.</p>
      <CopyBlock text={skillPrompt} />
      <p>Then run this each day.</p>
      <CopyBlock text={sendPrompt} />

      <h2>Reply? Ask for the chat. No reply? Next person</h2>
      <p>Run every couple of days.</p>
      <CopyBlock text={followUpPrompt} />

      <h2>Step 4. The 15 minute coffee chat</h2>
      <p>Before the call:</p>
      <CopyBlock text={chatPrompt} />

      <h2>Ask for the referral</h2>
      <p>After the call, fill in the brackets:</p>
      <CopyBlock text={referralPrompt} />

      <p className="muted">
        Your resume actually gets seen. That&apos;s the whole point.
      </p>
    </PageLayout>
  );
}
