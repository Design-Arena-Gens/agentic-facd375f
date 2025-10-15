import { SectionHeading } from "@/components/ui/SectionHeading";
import { IdeaGenerator } from "@/components/contentlab/IdeaGenerator";
import { FrameworkShowcase } from "@/components/contentlab/FrameworkShowcase";

export const metadata = {
  title: "PulseFlow Content Lab",
  description: "Generate scroll-stopping creative, codify your voice, and launch experiments in minutes."
};

export default function ContentLabPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Content Lab"
        title="Give every marketer an AI creative partner tuned to your voice"
        description="Blend strategic insights with AI assistance to transform campaign objectives into powerful stories."
      />

      <IdeaGenerator />

      <FrameworkShowcase />
    </div>
  );
}
