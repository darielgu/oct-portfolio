import { PageLayout } from "@/components/page-layout";
import { CopyBlock } from "@/components/copy-block";

export const metadata = {
  title: "How to cold DM on LinkedIn · Dariel Gutierrez",
  description:
    "Who to message, the two DMs to send, and how to turn a real conversation into a referral. Copy the templates and make them yours.",
};

const messages = {
  connection: "Hey [name], I’m a [major] student at [school]. Saw your work on [specific project] at [company] and would love to connect.",
  project: "Hey Alex, saw you’re on the Service Cloud team at Salesforce. The Agentforce Help Agent you guys just shipped caught my eye. I’d love to hear what it was like working on it and how you approached some of the technical decisions.",
  projectTemplate: "Hey [name], saw you worked on [specific project] at [company]. [One specific thing] caught my eye. How did you approach [one decision you’re actually curious about]?",
  alumni: "Hey [name], I’m studying [major] at [school]. Saw you went there too and now work at [company]. What helped you most when you were trying to land your first [role] role?",
  noProject: "Hey [name], I’m a [major] student at [school]. Saw you went from [previous role] to [current team] at [company]. What made you want to make that move?",
  chat: "Appreciate the insight! Would you be down for a quick 15 min chat? I’d love to hear more about your work on [project/team]. Happy to work around your schedule.",
  calendar: "Awesome, thank you! Here’s my calendar if that’s easier: [cal link]. Or send me a time that works for you and I’ll make it happen.",
  followUp: "Hey [name], wanted to follow up on my question about [specific topic]. Would still love to hear your take if you have a minute. No worries if you’re busy.",
  referral: "Thanks again for chatting. Your advice about [specific thing] was really helpful. I found this [role] opening at [company]: [job link]. Based on what we talked about, would you feel comfortable referring me? Happy to send my resume and a short blurb to make it easy.",
  packet: "Thank you, really appreciate it!\n\nRole: [exact title]\nJob ID: [ID, if listed]\nLink: [official job posting]\nEmail: [the email you’ll apply with]\nResume: [attach your PDF]\n\nShort blurb, if useful:\n[Name] is a [year/major] at [school] applying for [role]. They built [relevant project] using [skills], with [specific result or concrete scope].\n\nI [haven’t applied yet / applied on date]. Let me know if there’s anything else you need.",
  thanks: "Thanks again for submitting it! I’ll keep you posted on how it goes. Really appreciate you taking the time.",
};

export default function ReferralsPage() {
  return (
    <PageLayout>
      <header>
        <h1>How to actually cold DM on LinkedIn</h1>
        <p>I’ve sent over 1,000 DMs. Here’s the process I’d use if I was starting today.</p>
        <p><strong>Specific opener → real reply → small ask → referral.</strong></p>
        <p>Your first message has one job: give them something easy to respond to. Asking a stranger for a referral immediately gives them work before they even know you.</p>
        <p><a href="#messages">Give me the messages</a> · <a href="#referral">How to ask for the referral</a> · <a href="#checklist">Before you hit send</a></p>
      </header>

      <section>
        <h2>1. Have something worth clicking on</h2>
        <ul>
          <li><strong>Clear headline.</strong> School, major, and what you’re building or looking for. They should understand who you are in five seconds.</li>
          <li><strong>Actual work on your profile.</strong> A project, internship, research, or something you shipped. Give them a reason to take you seriously.</li>
          <li><strong>Resume ready.</strong> One readable PDF. Working links. A role you’re qualified to apply for.</li>
        </ul>
        <p>You don’t need a FAANG internship. You need something real to talk about.</p>
      </section>

      <section>
        <h2>2. Find people you have a reason to message</h2>
        <ol>
          <li>Pick a company with an opening that fits your level. Save the official job link.</li>
          <li>Search LinkedIn for the company + the role or team. Use People results and the current-company filter. Add your school when looking for alumni.</li>
          <li>Start with school alumni, people doing the job you want, or people whose work you can ask about. Early-career engineers can have useful, recent advice.</li>
          <li>Read their profile and recent posts. Write down one specific reason you picked them.</li>
        </ol>
        <p>If you can’t explain why you’re messaging this person, find someone else. Don’t default to the CEO because their title looks impressive.</p>
      </section>

      <section id="messages">
        <h2>3. Get connected, then open the conversation</h2>
        <p><strong>Already connected?</strong> Send the opener below. <strong>Not connected?</strong> Send a connection request. Add a short note if your account gives you that option. Once they accept, send the full message.</p>
        <p>Connection note:</p>
        <CopyBlock text={messages.connection} />
        <p className="muted">Keep the note within the limit LinkedIn shows you. Invitations and DMs are different. Accepting your request doesn’t mean they’ve replied to your question. <a href="https://www.linkedin.com/help/linkedin/answer/a563153">LinkedIn’s note instructions</a>.</p>

        <h3>The opener: show you looked at THEIR work</h3>
        <p>When I say “glaze them,” I mean notice something specific. “Your career is inspiring” could go to literally anyone.</p>
        <p>Example based on the project from my video:</p>
        <CopyBlock text={messages.project} />
        <p>Your version:</p>
        <CopyBlock text={messages.projectTemplate} />
        <p><strong>Same school? Use that.</strong></p>
        <CopyBlock text={messages.alumni} />
        <p><strong>No public project? Ask about their path.</strong> Read their experience first.</p>
        <CopyBlock text={messages.noProject} />
        <p>Pick ONE opener. Replace every bracket. Ask one question. Keep it to a few sentences. Don’t pretend you used a product or understand a project if you didn’t.</p>
      </section>

      <section>
        <h2>4. They replied. Now make the small ask</h2>
        <p>Read their answer and respond to it. Then ask for 15 minutes. Don’t ignore what they said just to paste the next template.</p>
        <CopyBlock text={messages.chat} />
        <p>Send your calendar after they say yes:</p>
        <CopyBlock text={messages.calendar} />
        <p>If they’d rather answer in DMs, do that. A call is useful, but you don’t need to force one. A reply isn’t a promise to refer you.</p>

        <h3>No reply?</h3>
        <p>I’d wait about a week, send one follow-up, then move on. That’s a cadence to try, not a magic rule.</p>
        <CopyBlock text={messages.followUp} />
        <p>One follow-up total on an unanswered ask. No “???” messages. No guilt trip. If they decline, thank them and leave it there.</p>
      </section>

      <section>
        <h2>5. Make the 15 minutes worth their time</h2>
        <p>Read their profile again. Show up on time. Have a 20-second intro and three questions ready.</p>
        <ul>
          <li>“What was the hardest decision on [project], and what made you choose that approach?”</li>
          <li>“What does someone at my level actually work on on your team?”</li>
          <li>“Given my experience with [project/skill], what would you focus on before applying?”</li>
        </ul>
        <p>Listen. Ask a follow-up about what they actually said. Don’t spend twelve minutes reading your resume out loud. At fifteen minutes, offer to wrap up.</p>
      </section>

      <section id="referral">
        <h2>6. Ask for the referral clearly</h2>
        <p>If the conversation went well and the role fits, ask near the end of the call or in your thank-you message. You don’t need to hide why you’re looking to connect.</p>
        <CopyBlock text={messages.referral} />
        <p><strong>Make it easy to say yes and easy to say no.</strong> Ask if they’re comfortable putting their name behind you. Don’t act like they owe you one.</p>
        <p>If the role is closing soon, say so honestly. Don’t wait for a coffee chat just to follow a script. Ask whether they can help or point you to the right person, and keep applying elsewhere.</p>

        <h3>They said yes. Send everything in ONE message</h3>
        <CopyBlock text={messages.packet} />
        <p>Use the official posting. Write the blurb in third person so they can paste it. Give a concrete result if you have one; don’t invent numbers.</p>
        <p><strong>Ask how their process works before applying when possible.</strong> Some companies need the referral first. If you already applied, tell them. Don’t submit duplicate applications or let a deadline pass while waiting.</p>
        <p>Once they confirm it’s submitted:</p>
        <CopyBlock text={messages.thanks} />
        <p>A referral can help. It doesn’t guarantee a recruiter response, an interview, or an offer. You still need to be a fit and pass the interviews.</p>
      </section>

      <section>
        <h2>7. Track it so you’re not guessing</h2>
        <p>A basic spreadsheet is enough:</p>
        <CopyBlock text="Name | Company | Profile link | Why this person | Role link | Date sent | Reply | Follow-up date | Chat date | Referral status | Next action" />
        <p>Start with a small batch of people you can actually research. Check replies, answer thoughtfully, and log the next step. If nobody responds, fix the targeting and the opener before sending more of the same message.</p>
        <p>Don’t blast the same team or ask five people to submit the same referral. Once someone is helping with that role, coordinate with them.</p>
      </section>

      <section id="checklist">
        <h2>Before you hit send</h2>
        <ul>
          <li>Right name. Right company. Current team checked.</li>
          <li>One real detail from their work or background.</li>
          <li>One easy question. A few sentences.</li>
          <li>No brackets left in the message.</li>
          <li>No resume attachment or calendar link in the first DM.</li>
          <li>Sounds like something you’d actually say out loud.</li>
        </ul>
        <p><strong>Open LinkedIn. Find three people. Read their profiles. Send three messages you actually mean.</strong></p>
      </section>
    </PageLayout>
  );
}
