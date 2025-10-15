import { personas } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function PersonaProfiles() {
  return (
    <Card accent="none" className="border-white/10">
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-lg font-semibold text-white">Persona Intelligence</h3>
          <p className="mt-1 text-sm text-slate-400">
            Activate creators, copy, and offers that resonate with your highest intent audiences.
          </p>
        </div>

        <div className="space-y-5">
          {personas.map((persona) => (
            <div key={persona.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-white">{persona.name}</p>
                  <p className="text-xs text-slate-400">{persona.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {persona.channels.map((channel) => (
                    <Badge key={channel} tone="info">
                      {channel}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 text-xs text-slate-300 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Motivations</p>
                  <ul className="mt-2 space-y-2">
                    {persona.motivations.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Pain Points</p>
                  <ul className="mt-2 space-y-2">
                    {persona.painPoints.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
