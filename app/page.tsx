import { SiteShell } from "@/components/site-shell";
import { asciiArt, email, photo } from "@/lib/site-content";

export default function Home() {
  return (
    <SiteShell>
      <img className="photo" src={photo.src} alt={photo.alt} width={208} />

      <p>
        I live in San Francisco and am building @{" "}
        <a href="https://www.nowadays.ai" target="_blank" rel="noopener noreferrer">
          Nowadays
        </a>{" "}
        (YC S23), where I am wearing lots of hats and contributing in all aspects
        of the overall product. I study computer science at{" "}
        <a href="https://www.sdsu.edu" target="_blank" rel="noopener noreferrer">
          San Diego State
        </a>{" "}
        and am currently on leave. I grew up in Chula Vista, California,
        and previously worked at{" "}
        <a href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer">
          Salesforce
        </a>{" "}
        on the Agentforce Help Agent.
      </p>

      {email ? (
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>.
        </p>
      ) : null}

      <pre className="ascii" aria-hidden="true">
        {asciiArt}
      </pre>
    </SiteShell>
  );
}
