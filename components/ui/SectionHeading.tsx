import { Badge } from "@/components/ui/Badge";
import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-3", align === "center" && "text-center")}>
      {eyebrow && (
        <Badge tone="info" className={clsx("inline-flex", align === "center" && "mx-auto")}>
          {eyebrow}
        </Badge>
      )}
      <h2
        className={clsx(
          "font-display text-3xl font-semibold text-white md:text-4xl",
          align === "center" && "mx-auto max-w-2xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("text-base text-slate-300", align === "center" && "mx-auto max-w-2xl")}>{description}</p>
      )}
    </div>
  );
}
