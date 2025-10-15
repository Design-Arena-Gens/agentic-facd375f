"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { Route } from "next";

type NavItem = {
  label: string;
  href: Route;
  description: string;
};

const LINKS: NavItem[] = [
  { label: "Overview", href: "/", description: "Landing" },
  { label: "Dashboard", href: "/dashboard", description: "Insights" },
  { label: "Planner", href: "/planner", description: "Content" },
  { label: "Campaigns", href: "/campaigns", description: "Funnels" },
  { label: "Content Lab", href: "/content-lab", description: "AI Studio" }
];

type NavigationProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

function NavigationImpl({ isMenuOpen, onToggleMenu }: NavigationProps) {
  const pathname = usePathname();

  return (
    <header className="relative z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-white">PulseFlow</p>
            <p className="text-xs text-slate-400">AI Social Media Command Center</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative flex flex-col text-sm font-medium transition",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {link.label}
                <span className="text-[11px] font-normal text-slate-500">{link.description}</span>
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" href="/planner">
            Schedule Demo
          </Button>
          <Button size="sm" href="/dashboard">
            Launch App
          </Button>
        </div>

        <button
          type="button"
          onClick={onToggleMenu}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/20 hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}

export const Navigation = Object.assign(NavigationImpl, {
  links: LINKS
});
