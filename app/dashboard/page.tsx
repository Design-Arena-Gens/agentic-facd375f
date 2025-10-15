import { SectionHeading } from "@/components/ui/SectionHeading";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { ChannelPerformanceGrid } from "@/components/dashboard/ChannelPerformanceGrid";
import { ContentPipeline } from "@/components/dashboard/ContentPipeline";
import { TopContentList } from "@/components/dashboard/TopContentList";

export const metadata = {
  title: "PulseFlow Command Center",
  description: "Monitor omnichannel performance, creative velocity, and conversion influence in real time."
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Command Center"
        title="Understand what’s working and orchestrate the next breakthrough campaign"
        description="An interactive HQ for social teams. PulseFlow projects the metrics that matter while keeping your pipeline of creative initiatives on track."
      />

      <MetricsGrid />

      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <ChannelPerformanceGrid />
        <TopContentList />
      </div>

      <ContentPipeline />
    </div>
  );
}
