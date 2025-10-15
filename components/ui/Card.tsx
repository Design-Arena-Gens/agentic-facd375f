import { clsx } from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "blue" | "purple" | "pink" | "emerald" | "none";
};

const accentStyles: Record<Exclude<CardProps["accent"], undefined>, string> = {
  blue: "border-sky-500/20 bg-sky-500/5 shadow-[0_10px_40px_-20px_rgba(56,189,248,0.6)]",
  purple: "border-violet-500/20 bg-violet-500/5 shadow-[0_10px_40px_-20px_rgba(139,92,246,0.6)]",
  pink: "border-fuchsia-500/20 bg-fuchsia-500/5 shadow-[0_10px_40px_-20px_rgba(232,121,249,0.6)]",
  emerald: "border-emerald-500/20 bg-emerald-500/5 shadow-[0_10px_40px_-20px_rgba(16,185,129,0.5)]",
  none: "border-white/5 bg-white/[0.02]"
};

export function Card({ children, className, accent = "none" }: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border p-6 backdrop-blur transition hover:border-white/20",
        accentStyles[accent],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
