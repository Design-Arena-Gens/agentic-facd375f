import { Card } from "@/components/ui/Card";

const experimentTracks = [
  {
    label: "Creative Velocity",
    focus: "Ship 10 variations across 3 hero narratives",
    levers: ["Hook testing", "Visual pacing", "Call-to-action"],
    signal: "Winner: Founders-as-creators narrative"
  },
  {
    label: "Channel Mix",
    focus: "Shift budget toward breakout placements",
    levers: ["Emerging channels", "Retargeting cadence", "Influencer cuts"],
    signal: "TikTok + LinkedIn combo delivered 2.3x lift"
  },
  {
    label: "Lifecycle Nudges",
    focus: "Pair social touchpoints with lifecycle moments",
    levers: ["Onboarding sequences", "Expansion triggers", "Community loops"],
    signal: "Trial-to-demo conversion up 19%"
  }
];

export function ExperimentMatrix() {
  return (
    <Card accent="none" className="border-white/10">
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-lg font-semibold text-white">Experiment Control Room</h3>
          <p className="mt-1 text-sm text-slate-400">
            Align every test with measurable outcomes and translate wins into reusable playbooks.
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-200">
          {experimentTracks.map((track) => (
            <div key={track.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{track.label}</p>
                  <p className="text-xs text-slate-400">{track.focus}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{track.signal}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {track.levers.map((lever) => (
                  <span key={lever} className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-fuchsia-200">
                    {lever}
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
