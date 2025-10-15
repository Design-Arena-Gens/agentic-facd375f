import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { HeroSection } from "@/components/sections/HeroSection";
import { SignalBanner } from "@/components/sections/SignalBanner";
import { WorkflowShowcase } from "@/components/sections/WorkflowShowcase";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <FeatureHighlights />
      <WorkflowShowcase />
      <SignalBanner />
    </div>
  );
}
