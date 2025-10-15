import { campaignPipeline } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const stageColors: Record<string, string> = {
  Discover: "bg-amber-500/10 text-amber-200 border-amber-500/20",
  Design: "bg-sky-500/10 text-sky-200 border-sky-500/20",
  Launch: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
  Optimize: "bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/20"
};

export function ContentPipeline() {
  return (
    <Card accent="none" className="border-white/10">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Campaign Pipeline</h3>
          <p className="mt-1 text-sm text-slate-400">
            Track velocity across every initiative. PulseFlow auto-surfaces blockers and recommends fixes.
          </p>
        </div>

        <div className="space-y-4">
          {campaignPipeline.map((campaign) => (
            <div
              key={campaign.id}
              className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 md:grid-cols-[minmax(0,1.8fr),minmax(0,1fr),minmax(0,1fr)] md:items-center"
            >
              <div>
                <p className="font-semibold text-white">{campaign.name}</p>
                <p className="text-xs text-slate-400">{campaign.objective}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${stageColors[campaign.stage]}`}>
                  {campaign.stage}
                </span>
                <Badge tone="info">Owner: {campaign.owner}</Badge>
              </div>
              <div className="flex items-center justify-between gap-3 text-xs text-slate-400 md:justify-end">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">
                  {campaign.conversionLift}% lift
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-white">Budget {campaign.budget}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
