import { clsx } from "clsx";

type BadgeTone = "default" | "success" | "warning" | "info" | "neutral";

const tones: Record<BadgeTone, string> = {
  default: "bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-500/40",
  success: "bg-emerald-500/10 text-emerald-200 border border-emerald-500/30",
  warning: "bg-amber-500/10 text-amber-200 border border-amber-500/30",
  info: "bg-sky-500/10 text-sky-200 border border-sky-500/30",
  neutral: "bg-white/5 text-slate-300 border border-white/10"
};

type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
};

export function Badge({ tone = "default", className, children }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
