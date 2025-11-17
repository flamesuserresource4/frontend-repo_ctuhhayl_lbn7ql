import { Folder, Wrench, Sparkles } from 'lucide-react'

export default function Features(){
  const items = [
    {
      icon: Folder,
      title: 'Start your own asset-sharing platform',
      desc: 'Launch secure spaces for files, media, and documents with granular control.',
      img: '/feature1.png'
    },
    {
      icon: Wrench,
      title: 'Maximize your productivity with integrated tools',
      desc: 'Automations, quick actions, and real‑time collaboration built in.',
      img: '/feature2.png'
    },
    {
      icon: Sparkles,
      title: 'Customize your platform with unique branding',
      desc: 'Themes, domains, and components tailored to your identity.',
      img: '/feature3.png'
    }
  ]
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-zinc-200 text-sm tracking-[0.2em] mb-6">STRONG TOOLS, ENDLESS OPPORTUNITIES</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(251,146,60,0.25)] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-b from-orange-500 to-amber-600 text-white shadow-[0_0_24px_rgba(251,146,60,0.55)]">
                  {it.icon && <it.icon size={20} />}
                </div>
                <h3 className="text-white font-semibold">{it.title}</h3>
              </div>
              <p className="text-zinc-400 mt-3 text-sm">{it.desc}</p>
              <div className="mt-5 h-28 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,#fb923c33,transparent)] opacity-40" />
                <div className="absolute bottom-2 right-2 h-8 w-20 rounded-md bg-black/40 border border-white/10" />
                <div className="absolute top-2 left-2 h-3 w-28 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
