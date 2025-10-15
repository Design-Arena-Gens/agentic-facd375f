import { kpiMetrics } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { Sparkline } from "@/components/ui/Sparkline";
import { TrendingUp } from "lucide-react";

export function MetricsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {kpiMetrics.map((metric) => (
        <Card key={metric.id} accent="none" className="border-white/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-300">{metric.label}</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                <TrendingUp className="h-3.5 w-3.5" />
                {metric.delta}%
              </span>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
            </div>
            <Sparkline values={metric.trend} />
          </div>
        </Card>
      ))}
    </div>
  );
}
