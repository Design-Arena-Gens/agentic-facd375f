import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SignalBanner() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-transparent to-sky-500/20 p-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Marketing signal report</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
              Sync your team to the only social media command center that ships at the speed of culture.
            </h2>
            <p className="mt-4 text-sm text-slate-200">
              Get a personalized rollout plan that maps PulseFlow to your programs, metrics, and tools in under 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-400">What you’ll receive</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Channel benchmark audit mapped to your goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>AI assistant configuration tailored to your brand voice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <span>Experiment roadmap for next-quarter growth initiatives</span>
              </li>
            </ul>
            <Button size="lg" variant="gradient" className="mt-4" href="/planner">
              Activate rollout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
