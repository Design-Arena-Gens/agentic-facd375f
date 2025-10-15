"use client";

import { CalendarRange, Compass, PenTool, Presentation } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const workflowStages = [
  {
    label: "Strategize",
    icon: Compass,
    description: "Lock campaign objectives, guardrails, and success metrics with your leadership team.",
    outcomes: [
      "Aligned OKRs mapped to social programs",
      "Personalized audience heatmaps",
      "Budget pacing scenarios"
    ]
  },
  {
    label: "Design",
    icon: PenTool,
    description: "Craft scroll-stopping creative that mirrors your brand voice across every channel.",
    outcomes: [
      "AI-assisted creative briefs",
      "Voice-consistent copy variations",
      "Collaborative feedback loops"
    ]
  },
  {
    label: "Orchestrate",
    icon: CalendarRange,
    description: "Sequence launches, automate approvals, and publish with precision timing.",
    outcomes: [
      "Drag-and-drop multi-channel calendar",
      "Auto-sync asset library",
      "Dynamic routing based on timezone"
    ]
  },
  {
    label: "Learn",
    icon: Presentation,
    description: "Measure what moved the needle and redeploy your next wave of creative instantly.",
    outcomes: [
      "Attribution stories built for the CMO",
      "Experiment retros with auto insights",
      "Playbooks tagged by performance"
    ]
  }
];

export function WorkflowShowcase() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="PulseFlow flowstate"
          title="Map every stage of your social lifecycle in one adaptive workspace"
          description="Turn complex social ops into a repeatable operating rhythm. PulseFlow keeps teams aligned from strategic intent through post-launch learnings."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workflowStages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Card accent="none" className="h-full border-white/10">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <stage.icon className="h-9 w-9 rounded-xl bg-white/10 p-2 text-sky-300" />
                    <span className="text-sm font-medium uppercase tracking-widest text-slate-400">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{stage.label}</h3>
                    <p className="mt-2 text-sm text-slate-300">{stage.description}</p>
                  </div>
                  <ul className="mt-auto space-y-2 text-sm text-slate-300">
                    {stage.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
