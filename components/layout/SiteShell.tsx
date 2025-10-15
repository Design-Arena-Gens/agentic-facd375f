"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-midnight-500 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600 blur-3xl" />
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-sky-500 blur-3xl" />
      </div>

      <Navigation isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((prev) => !prev)} />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 flex-1"
      >
        {children}
      </motion.main>

      <Footer />

      <AnimatePresence>{isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}</AnimatePresence>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/10 bg-slate-950/90 p-6 backdrop-blur"
    >
      <ul className="space-y-4 text-lg font-medium text-slate-100">
        {Navigation.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl border border-transparent bg-white/5 px-4 py-2 transition hover:border-white/10 hover:bg-white/10"
            >
              <span>{link.label}</span>
              <span className="text-sm text-slate-400">{link.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
