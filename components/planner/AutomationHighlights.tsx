import { Clock, Link2, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

const highlights = [
  {
    title: "Adaptive publishing windows",
    description: "PulseFlow auto-selects posting times based on momentum curves, audience overlap, and brand guardrails.",
    icon: Clock
  },
  {
    title: "Workflow routing",
    description: "Advanced rules route content to the right reviewers, legal teams, and localization pods instantly.",
    icon: Link2
  },
  {
    title: "Governance that scales",
    description: "Compliance frameworks keep every asset on brand with audit trails and automated policy checks.",
    icon: ShieldCheck
  }
];

export function AutomationHighlights() {
  return (
    <Card accent="none" className="border-white/10">
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <highlight.icon className="h-8 w-8 rounded-xl bg-white/10 p-2 text-sky-300" />
            <p className="mt-4 text-base font-semibold text-white">{highlight.title}</p>
            <p className="mt-2 text-sm text-slate-300">{highlight.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
