import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScheduleBoard } from "@/components/planner/ScheduleBoard";
import { AutomationHighlights } from "@/components/planner/AutomationHighlights";

export const metadata = {
  title: "PulseFlow Planner",
  description: "Align teams on a single calendar, automate approvals, and keep campaigns moving at launch velocity."
};

export default function PlannerPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Content Planner"
        title="Build high-performing content systems around moments that matter"
        description="Layer in AI suggestions, collaborate across teams, and stay ahead of every deadline with intelligent automation."
      />

      <ScheduleBoard />

      <AutomationHighlights />
    </div>
  );
}
