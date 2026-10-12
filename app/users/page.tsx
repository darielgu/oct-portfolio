import { PageLayout } from "@/components/page-layout";
import { CopyBlock } from "@/components/copy-block";

export const metadata = {
  title: "Get your first 10 users · Dariel Gutierrez",
  description:
    "A straight-to-the-point guide for student side projects. Find people who need it, send the message, watch them use it, and fix what matters.",
};

const messages = {
  friend: "Yo, I built [thing] to help with [problem]. You mentioned dealing with that in [class/club/etc.]. Could you try [one specific task] with it? Takes about [honest time estimate]. Be honest if it sucks: [link]",
  stranger: "Hey [name], saw your [post/comment] about [specific problem]. I’m a student building [simple explanation] for that. Would you be up for trying it next time you [relevant task]? Here’s what it does: [link]. Curious whether it actually helps.",
  post: "I kept running into [specific problem], so I built [thing].\n\nIt lets you [one useful action]. Here’s it doing that: [short demo or screenshot].\n\nLooking for [specific type of person] to try it on [real task]. If that’s you: [link]. Tell me where you get stuck.",
  followUp: "Hey, did you get a chance to use [thing] for [task]? If you didn’t, what got in the way? Even ‘I don’t really need this’ helps.",
  update: "[What someone tried] wasn’t working because [actual problem]. I changed [specific thing].\n\nHere’s the before/after: [demo].\n\nIf you’re dealing with [problem], try it here: [link].",
  tracker: "Person | Problem they have | Where I found them | Messaged | Tried the main task? | Where they got stuck | Came back? | Next step",
};

export default function UsersPage() {
  return (
    <PageLayout>
      <header>
        <h1>Get your first 10 users</h1>
        <p>You shipped the project. Cool. Now get someone to actually use it.</p>
        <p>A signup isn’t the finish line. Count someone when they use the main feature for a real task. Then see whether they come back.</p>
        <p><a href="#messages">Copy the messages</a> · <a href="#feedback">Ask better questions</a> · <a href="#checklist">The checklist</a></p>
      </header>

      <section>
        <h2>1. Pick ONE person you’re building for</h2>
        <p>“Students” is too broad. “Students in my chemistry class turning lecture notes into practice questions” gives you people to find and a task to test.</p>
        <CopyBlock text="I’m building [thing] for [specific people] who struggle with [specific problem]. It helps them [one useful outcome]." />
        <p>If you can’t fill that in, talk to a few people with the problem before adding more features.</p>
      </section>

      <section>
        <h2>2. Make it easy to try</h2>
        <ul>
          <li>A working link. Test it on your phone and in a signed-out browser.</li>
          <li>One sentence explaining what it does. One obvious next step.</li>
          <li>A small, useful task: “make a quiz from one lecture,” not “check out my platform.”</li>
          <li>Skip account creation if the task doesn’t need it. If it does, make sure signup works.</li>
        </ul>
        <p>You don’t need a perfect landing page. You do need the thing you promised to work.</p>
      </section>

      <section>
        <h2>3. Find people who already have the problem</h2>
        <p>Start with people you can reach directly. Friends count if they actually need it. A pity signup tells you nothing.</p>
        <ul>
          <li><strong>Study tool:</strong> classmates, study groups, a course Discord. Ask around one upcoming exam.</li>
          <li><strong>Club tool:</strong> the person running events, collecting dues, or managing the spreadsheet. Offer to try it on their next real task.</li>
          <li><strong>Job-search tool:</strong> students currently applying, career clubs, people posting about the specific problem it solves.</li>
          <li><strong>Anything else:</strong> search X, Reddit, or LinkedIn for how someone would complain about the problem. “I keep losing track of applications” is more useful than “startup users.”</li>
        </ul>
        <p>Write down 15–20 people or relevant places to start. Work through that list before hunting for another platform. In communities, read the rules and ask before posting a promo. Answer the actual question before dropping your link.</p>
      </section>

      <section id="messages">
        <h2>4. Send a small ask</h2>
        <p>Tell them why you picked them and what to try. Replace the brackets. Cut anything you wouldn’t say out loud.</p>
        <h3>Someone you know</h3>
        <CopyBlock text={messages.friend} />
        <h3>Someone talking about the problem</h3>
        <CopyBlock text={messages.stranger} />
        <p>Send a few thoughtful messages, then pay attention to the replies. If nobody cares, check whether you’re talking to the right people and whether the problem matters. More DMs won’t fix that.</p>

        <h3>Post it publicly too</h3>
        <CopyBlock text={messages.post} />
        <p>Pick a place where your users already hang out. Show the product doing something useful. A screen recording, screenshot, or quick phone video is enough. End with the link and a specific ask.</p>
        <p>You don’t need to announce “day 1 of building my startup.” Show someone why they’d use it.</p>
      </section>

      <section id="feedback">
        <h2>5. Watch someone use it. Then ask these three questions</h2>
        <p>Ask one person for five minutes on a call or next to you. Give them the task. Let them try it without narrating every click. Where they hesitate is useful.</p>
        <ol>
          <li>“What were you trying to get done, and how do you usually do it?”</li>
          <li>“Where did you get stuck, or what made this more work than it should’ve been?”</li>
          <li>“Have you used it again since the first try? What made you come back, or what stopped you?”</li>
        </ol>
        <p>Ask the third question after they’ve had another chance to need it. “Would you use this?” gets you nice answers. What they actually did gives you something to work with.</p>
        <h3>They signed up but never tried it?</h3>
        <CopyBlock text={messages.followUp} />
        <p>Follow up once after they’ve had time to try it. If they don’t reply, move on. Don’t turn your side project into homework for your friends.</p>
      </section>

      <section>
        <h2>6. Fix the thing stopping them from getting value</h2>
        <ul>
          <li><strong>Main task broken?</strong> Fix that first. A quiz tool producing wrong answers needs that fixed before dark mode.</li>
          <li><strong>People keep getting stuck in the same place?</strong> Simplify that step. Watch the next person try it.</li>
          <li><strong>One person asks for a huge feature?</strong> Ask what they’re trying to do. There might be a smaller fix.</li>
          <li><strong>They try it once and don’t return?</strong> Check whether the problem happens often enough, and whether your tool beats what they already use.</li>
        </ul>
        <p>Use AI to help ship the fix. Test it yourself, then send it back to the person who hit the problem: “Fixed the upload issue you showed me. Can you try that same file again?”</p>
        <p>Keep a tiny log. You don’t need a dashboard:</p>
        <CopyBlock text={messages.tracker} />
      </section>

      <section>
        <h2>7. Post what changed</h2>
        <CopyBlock text={messages.update} />
        <p>Now you have something real to talk about: a problem, someone using your app, feedback, and a decision you made. Keep the demo and the link on your profile so someone looking you up can find it.</p>
        <p>Ask before sharing someone’s messages or details. Use your actual numbers. Ten people completing a useful task gives you a better project story than pretending ten signups are ten daily users.</p>
      </section>

      <section id="checklist">
        <h2>Your first 10 users checklist</h2>
        <ul>
          <li>Name one specific group and one problem.</li>
          <li>Test the link and the main task yourself.</li>
          <li>Find a first batch of people with that problem.</li>
          <li>Send the relevant message. Publish one useful demo.</li>
          <li>Watch one person try it without coaching every click.</li>
          <li>Ask the three questions. Write down what happened.</li>
          <li>Fix the biggest blocker. Ask them to retry.</li>
          <li>Count completed tasks. Check who comes back.</li>
          <li>Post the improvement and repeat until ten people have actually used it.</li>
        </ul>
        <p><strong>Your next move: pick three people who need this and send them the link today.</strong></p>
      </section>
    </PageLayout>
  );
}
