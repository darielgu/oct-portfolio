import { PageLayout } from "@/components/page-layout";

export const metadata = {
  title: "LeetCode Guide · Dariel Gutierrez",
  description:
    "The Python video, NeetCode roadmap, and how I'd actually practice for coding interviews.",
};

export default function LeetCodePage() {
  return (
    <PageLayout>
      <h1>How I&apos;d get good at LeetCode</h1>
      <p>The two links from the video:</p>
      <ol>
        <li>
          <a href="https://www.youtube.com/watch?v=0K_eZGS5NsU">
            Watch: Python for Coding Interviews by NeetCode
          </a>
          <br />
          Get comfortable with the syntax and built-in data structures. Code along.
        </li>
        <li>
          <a href="https://neetcode.io/roadmap">Follow: the NeetCode roadmap</a>
          <br />
          Use the NeetCode 150 list. Work through the topics in order.
        </li>
      </ol>

      <h2>Understand when to use the solution</h2>
      <p>
        You need to understand the different solution types and when to apply
        them. Just knowing how to write the code isn&apos;t enough. If you can
        recreate a solution but can&apos;t explain why it works, you&apos;re going
        to get stuck when the question changes a little.
      </p>
      <p>
        Personally, I&apos;ve never been asked anything insane in a coding
        interview. That&apos;s my experience. I&apos;d get comfortable with the
        fundamentals before spending all my time on obscure hard problems.
      </p>

      <h2>Get these down first</h2>
      <ul>
        <li>
          <strong>Arrays &amp; hashing:</strong> tracking what you&apos;ve seen,
          counting things, or looking something up quickly. Think duplicates,
          frequencies, and finding a matching value.
        </li>
        <li>
          <strong>Two pointers:</strong> moving through an array or string with
          two positions. Think palindrome checks or finding a pair in sorted
          data. Understand why moving a pointer won&apos;t skip the answer.
        </li>
        <li>
          <strong>Sliding window:</strong> working with a contiguous chunk of an
          array or string. Learn what you track, when you expand, and when you
          shrink. A subarray question alone doesn&apos;t guarantee it works.
        </li>
        <li>
          <strong>Trees &amp; graphs:</strong> visiting connected things with DFS
          or BFS. Think grid problems, connected components, and tree traversals.
          Know how you avoid visiting the same node forever.
        </li>
      </ul>
      <p>
        Then keep going through stacks, binary search, linked lists, heaps,
        backtracking, and dynamic programming. They can all show up. Build a
        solid base, then fill in the gaps with the rest of the roadmap.
      </p>

      <h2>How to actually practice</h2>
      <ol>
        <li>
          <strong>Try it yourself.</strong> Work through an example. Start with
          the obvious solution, then ask what work you&apos;re repeating.
        </li>
        <li>
          <strong>Stuck for 20 minutes with no progress? Look at a hint or solution.</strong>{" "}
          Learn why they chose that approach. Staring at the screen for two hours
          doesn&apos;t help if you&apos;ve never learned the pattern.
        </li>
        <li>
          <strong>Close the solution. Write it yourself.</strong> Explain why it
          works, its time and space complexity, and the edge cases. Come back a
          few days later and solve it again without help.
        </li>
        <li>
          <strong>Mix topics once you&apos;re comfortable.</strong> Hide the tags.
          In an interview, nobody tells you which pattern to use. Practice
          figuring that out and explaining your thinking out loud.
        </li>
      </ol>
      <p>
        I&apos;d rather understand 30 problems and be able to explain every
        decision than copy 150 solutions and forget them. Open the roadmap and
        start with arrays &amp; hashing.
      </p>
    </PageLayout>
  );
}
