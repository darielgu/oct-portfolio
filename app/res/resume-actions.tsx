"use client";

import { useRef, useState } from "react";
import styles from "./resume.module.css";

export function ResumeActions({ source }: { source: string }) {
  const [status, setStatus] = useState("");
  const details = useRef<HTMLDetailsElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  async function copySource() {
    try {
      await navigator.clipboard.writeText(source);
      setStatus("Copied. Paste into main.tex in Overleaf.");
    } catch {
      if (details.current) details.current.open = true;
      textarea.current?.focus();
      textarea.current?.select();
      setStatus("Automatic copy is blocked. The source is selected below; copy it manually, or download the .tex file.");
    }
  }

  return (
    <div>
      <div className={styles.actions}>
        <form action="https://www.overleaf.com/docs" method="post" target="_blank" rel="noopener noreferrer">
          <input type="hidden" name="snip" value={source} />
          <button type="submit" className={styles.primary}>Open in Overleaf ↗</button>
        </form>
        <button type="button" onClick={copySource} className={styles.button}>Copy LaTeX</button>
        <a href="/resume/darius-resume.tex" download>Download .tex</a>
        <a href="/resume/darius-resume.pdf" download>Download PDF</a>
      </div>
      <p role="status" className={styles.status}>{status}</p>
      <details ref={details} className={styles.source}>
        <summary>View LaTeX source</summary>
        <label htmlFor="resume-source" className="muted">Copy this entire file into main.tex.</label>
        <textarea id="resume-source" ref={textarea} readOnly value={source} spellCheck={false} rows={16} />
      </details>
    </div>
  );
}
