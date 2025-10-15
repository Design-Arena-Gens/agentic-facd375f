import Link from "next/link";
import type { Route } from "next";
import { Logo } from "@/components/ui/Logo";

type FooterLink = {
  label: string;
  href: Route;
};

const footerLinks: Array<{ label: string; links: FooterLink[] }> = [
  {
    label: "Platform",
    links: [
      { label: "Command Center", href: "/dashboard" },
      { label: "Campaign Studio", href: "/campaigns" },
      { label: "Content Lab", href: "/content-lab" }
    ]
  },
  {
    label: "Resources",
    links: [
      { label: "Planner Templates", href: "/planner" },
      { label: "Playbooks", href: "/content-lab" },
      { label: "Metrics Glossary", href: "/dashboard" }
    ]
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Privacy", href: "/" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="font-display text-lg font-semibold text-white">PulseFlow</p>
              <p className="text-xs text-slate-400">Operationalize your social media growth</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            PulseFlow unifies planning, creation, and analytics across every social channel with AI copilots that feel like an extension of your team.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{section.label}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} PulseFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/">Security</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
