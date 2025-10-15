import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const frameworks = [
  {
    title: "Demand Design Blueprint",
    overview: "Translate strategic narratives into scroll-stopping creative systems",
    phases: [
      "Clarify the tension your buyer feels weekly",
      "Map the 'a-ha' moment your product delivers",
      "Sequence social-first stories that dramatize the win"
    ],
    artifacts: ["Narrative bank", "Persona heat map", "Motion library"]
  },
  {
    title: "Creator Collaboration Sprint",
    overview: "Co-create with domain experts while protecting brand fidelity",
    phases: [
      "Recruit creators who mirror your ICP",
      "Draft collaborative briefs with AI guardrails",
      "Ship multi-format drops with joint amplification"
    ],
    artifacts: ["Creator CRM", "Review commands", "Performance recap"]
  },
  {
    title: "Lifecycle Story Weaving",
    overview: "Sync lifecycle nudges with social stories for compounding conversion",
    phases: [
      "Instrument journey stages with audience signals",
      "Pair social proof to friction moments",
      "Measure momentum with pipeline influence"
    ],
    artifacts: ["Journey instrumentation", "Asset DNA", "Attribution highlights"]
  }
];

export function FrameworkShowcase() {
  return (
    <Card accent="none" className="border-white/10">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Operational Playbooks</h3>
          <p className="mt-1 text-sm text-slate-400">
            Activate proven frameworks with instructions, templates, and AI copilots baked-in.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {frameworks.map((framework) => (
            <div key={framework.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-white">{framework.title}</h4>
                <Badge tone="neutral">3 phases</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-300">{framework.overview}</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                {framework.phases.map((phase) => (
                  <li key={phase} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{phase}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-slate-400">
                {framework.artifacts.map((artifact) => (
                  <span key={artifact} className="rounded-full bg-white/10 px-3 py-1">
                    {artifact}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
