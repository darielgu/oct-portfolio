import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dariel Gutierrez",
  description:
    "Product engineer in San Francisco. Builds AI agents and the products around them.",
  metadataBase: new URL("https://aboutdariel.me"),
  icons: {
    icon: "/images/newlogo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
