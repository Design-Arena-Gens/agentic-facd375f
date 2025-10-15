import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContentPipeline } from "@/components/dashboard/ContentPipeline";
import { PersonaProfiles } from "@/components/campaigns/PersonaProfiles";
import { ExperimentMatrix } from "@/components/campaigns/ExperimentMatrix";

export const metadata = {
  title: "PulseFlow Campaign Studio",
  description: "Design, launch, and optimize multi-channel social campaigns with clarity."
};

export default function CampaignsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Campaign Studio"
        title="Ship bold campaigns with playbooks, personas, and experiments connected end-to-end"
        description="PulseFlow wraps campaign operations in a unified workspace so every launch moves faster and hits harder."
      />

      <ContentPipeline />

      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <PersonaProfiles />
        <ExperimentMatrix />
      </div>
    </div>
  );
}
