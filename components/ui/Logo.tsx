export function Logo() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 via-fuchsia-500 to-violet-500 opacity-80 blur" />
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-fuchsia-500/30">
        PF
      </span>
    </div>
  );
}
