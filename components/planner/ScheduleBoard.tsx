import { scheduledPosts, contentCadences } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const statusStyles: Record<string, string> = {
  approved: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
  draft: "bg-slate-500/10 text-slate-200 border-slate-500/20",
  "needs-review": "bg-amber-500/10 text-amber-200 border-amber-500/20",
  published: "bg-sky-500/10 text-sky-200 border-sky-500/20"
};

export function ScheduleBoard() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <Card accent="none" className="border-white/10">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Content Calendar</h3>
            <p className="mt-1 text-sm text-slate-400">
              Drag-and-drop posts, assign owners, and PulseFlow will auto-update dependencies for you.
            </p>
          </div>
          <div className="grid gap-4">
            {scheduledPosts.map((post) => (
              <div
                key={post.id}
                className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 sm:grid-cols-[1.1fr,1fr,1fr] sm:items-center"
              >
                <div>
                  <p className="font-semibold text-white">{post.platform}</p>
                  <p className="text-xs text-slate-400">{post.campaign}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{post.time}</span>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[post.status]}`}>
                  {post.status.replace("-", " ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card accent="none" className="border-white/10">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-semibold text-white">Cadence Playbooks</h3>
            <p className="mt-1 text-sm text-slate-400">
              AI suggests channel mix based on objectives, seasonal moments, and target persona.
            </p>
          </div>

          <div className="space-y-4">
            {contentCadences.map((cadence) => (
              <div key={cadence.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-white">{cadence.label}</p>
                  <Badge tone="neutral">{cadence.frequency}</Badge>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  {cadence.mix.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
