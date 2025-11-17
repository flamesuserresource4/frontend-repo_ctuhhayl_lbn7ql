export default function Showcase() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900 p-6">
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1 space-y-3">
              <div className="h-10 w-32 rounded-md bg-white/10" />
              <div className="h-2 w-40 rounded bg-white/10" />
              <div className="h-2 w-24 rounded bg-white/10" />
              <div className="h-2 w-28 rounded bg-white/10" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-28 rounded-xl border border-white/10 bg-zinc-950/60">
                    <div className="h-full w-full bg-[radial-gradient(closest-side,#fb923c22,transparent)]" />
                  </div>
                ))}
              </div>
              <div className="mt-4 h-16 rounded-xl border border-white/10 bg-zinc-950/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
