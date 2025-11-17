import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,#fb923c33,transparent)] opacity-60" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              YOUR FILES, YOUR AUTHORITY.
            </h1>
            <p className="text-zinc-300 max-w-xl">
              Secure file coordination that keeps your team aligned and your data protected. Work faster with integrated tools crafted for modern productivity.
            </p>
            <div className="pt-2">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-orange-500 to-amber-600 px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(251,146,60,0.55)] hover:shadow-[0_0_56px_rgba(251,146,60,0.75)] transition">
                Start 7-Day Trial
              </a>
            </div>
          </div>
          <div className="h-[420px] w-full rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
