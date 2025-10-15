import { bestPerformingContent } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

export function TopContentList() {
  return (
    <Card accent="none" className="border-white/10">
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-lg font-semibold text-white">Breakout Assets</h3>
          <p className="mt-1 text-sm text-slate-400">
            Understand what resonated and instantly repurpose high-performing stories.
          </p>
        </div>

        <div className="space-y-4">
          {bestPerformingContent.map((content) => (
            <div key={content.title} className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4">
              <div>
                <p className="text-sm font-semibold text-white">{content.title}</p>
                <p className="text-xs text-slate-400">{content.platform}</p>
                <p className="mt-2 text-sm text-slate-200">{content.insight}</p>
              </div>
              <div className="flex flex-col items-end gap-3 text-right text-xs text-slate-400">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">{content.stat}</span>
                <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20">
                  Repurpose <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
