import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";

export function ProjectPageLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
