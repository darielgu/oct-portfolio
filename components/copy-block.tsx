"use client";

import { useState } from "react";

export function CopyBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="prompt">
      <button type="button" onClick={copy}>
        {copied ? "copied" : "copy"}
      </button>
      <pre>{text}</pre>
    </div>
  );
}
