import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "PulseFlow | AI Social Media Manager",
  description:
    "PulseFlow empowers marketing teams with AI-driven insights, planning, and automation for modern social media strategies.",
  keywords: [
    "social media manager",
    "marketing automation",
    "content planning",
    "ai marketing",
    "campaign analytics"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
