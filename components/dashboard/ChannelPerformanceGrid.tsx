import { ArrowUpRight } from "lucide-react";
import { channelPerformance } from "@/data/mockData";
import { Card } from "@/components/ui/Card";

export function ChannelPerformanceGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {channelPerformance.map((channel) => (
        <Card key={channel.id} accent="none" className="border-white/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">{channel.platform}</p>
                <p className="text-xs text-slate-400">{channel.handle}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                Cadence: {channel.postingCadence}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Growth</p>
                <p className="mt-1 text-lg font-semibold text-white">{channel.growth}%</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Engagement</p>
                <p className="mt-1 text-lg font-semibold text-white">{channel.engagementRate}%</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Influenced</p>
                <p className="mt-1 text-lg font-semibold text-white">{channel.conversions}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <p>See creative insights powering this lift</p>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
