import { Layers, Rocket, Sparkles, Workflow } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Adaptive campaign intelligence",
    description:
      "Fuse channel signals, audience sentiment, and creative performance into a single source of marketing truth.",
    icon: Workflow,
    bullets: [
      "Unified ROI dashboards for every stakeholder",
      "Predictive pacing alerts and recommendations",
      "Budget guardrails that auto-adjust by performance"
    ]
  },
  {
    title: "AI-assisted content studio",
    description:
      "Generate platform-native content, version creative for every persona, and preserve your brand's signature voice.",
    icon: Sparkles,
    bullets: [
      "Voice DNA trained on your top-performing assets",
      "Instant repackaging for threads, reels, shorts, carousels",
      "Compliance-aware reviews and collaborative markups"
    ]
  },
  {
    title: "Execution without drag",
    description:
      "Sequence multi-channel launches, automate approvals, and sync deliverables across teams without manual check-ins.",
    icon: Layers,
    bullets: [
      "Channel-specific playbooks with AI nudges",
      "Dynamic content calendar and asset hub",
      "Slack, Figma, and Notion-first integrations"
    ]
  },
  {
    title: "Experiment at launch velocity",
    description:
      "Spin up creative experiments, see what resonates, and redeploy budget toward breakaway hits in hours, not weeks.",
    icon: Rocket,
    bullets: [
      "Hypothesis builder tied to measurable outcomes",
      "Auto-tag experiments to campaigns and goals",
      "Feedback loops that convert learnings into playbooks"
    ]
  }
];

export function FeatureHighlights() {
  return (
    <section className="relative py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Why teams choose PulseFlow"
          title="Orchestrate social across every channel with clarity, speed, and confidence"
          description="From quarterly planning to daily execution, PulseFlow wraps strategy, creative, and attribution into one collaborative workspace."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} accent="none" className="h-full border-white/10">
              <div className="flex h-full flex-col gap-4">
                <feature.icon className="h-10 w-10 rounded-xl bg-white/10 p-2 text-fuchsia-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
