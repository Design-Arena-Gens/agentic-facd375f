"use client";

import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const highlightStats = [
  {
    label: "Creative cycle time",
    value: "-43%",
    detail: "from brief to go-live with automated routing"
  },
  {
    label: "Campaign ROI",
    value: "+3.2x",
    detail: "average lift after activating AI optimization"
  },
  {
    label: "Team velocity",
    value: "5x",
    detail: "more experiments launched per quarter"
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="space-y-8">
          <Badge tone="info" className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Introducing the AI Social Media Operating System
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            Craft high-impact social campaigns with a command center built for modern marketing orgs.
          </motion.h1>
          <p className="max-w-xl text-lg text-slate-300">
            PulseFlow aligns strategy, creative, and analytics into one orchestrated workspace. Plan omnichannel campaigns, generate standout content, and prove impact with real-time intelligence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" href="/dashboard">
              Launch the Command Center
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg" href="/planner">
              Explore the Planner
            </Button>
          </div>

          <div className="flex items-center gap-5 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <span>15M+ impressions orchestrated last quarter</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <span className="hidden sm:block">Trusted by 180+ growth teams</span>
          </div>
        </div>

        <div className="relative">
          <Card accent="purple" className="relative overflow-hidden border-white/10 p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-sky-500/10" />
            <div className="relative grid gap-6 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Live Control Surface</p>
                <p className="mt-2 text-lg font-semibold text-white">Campaign Orchestration</p>
                <p className="mt-3 text-sm text-slate-300">
                  Monitor campaign velocity, coordinate cross-channel drops, and ship bold creative with AI copilots embedded at every stage.
                </p>
              </div>

              <div className="grid gap-3">
                {highlightStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    <p className="mt-2 flex items-baseline gap-2 text-2xl font-semibold text-white">
                      {stat.value}
                      <span className="text-xs font-medium text-slate-400">{stat.detail}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 text-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI Co-Pilot</p>
                <p className="mt-2 text-slate-200">
                  “PulseFlow is the nerve center for our social team. We iterate faster, collaborate tighter, and run playbooks that were impossible before.”
                </p>
                <p className="mt-4 text-xs text-slate-500">— Riley Brooks, Director of Integrated Marketing</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
