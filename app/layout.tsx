import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TranslateToggle from "../components/TranslateToggle";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "about me",
  description:
    "Computer Science student at San Diego State University who enjoys building things",
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
    <html lang="en" style={{ backgroundColor: "#ffffff" }}>
      <body
        className={`${inter.variable} antialiased`}
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <SpeedInsights />
        {/* <TranslateToggle /> */}
        {children}
      </body>
    </html>
  );
}
