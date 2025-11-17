export default function Testimonials(){
  const data = [
    {
      quote: 'Authority transformed how our team collaborates. Secure, fast, and beautifully designed.',
      name: 'Avery Quinn',
      role: 'Head of Ops'
    },
    {
      quote: 'We launched our client portal in days. The tooling is powerful and intuitive.',
      name: 'Jordan Lee',
      role: 'Product Lead'
    }
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-zinc-200 text-sm tracking-[0.2em] mb-10">HEAR FROM OUR SATISFIED CLIENTS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="text-zinc-300">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_24px_rgba(251,146,60,0.55)]" />
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-zinc-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
