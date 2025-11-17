import { Plus } from 'lucide-react'
import { useState } from 'react'

const items = [
  { q: 'Are there limits on features?', a: 'All plans include core features. Advanced automations and SSO are available on Professional and Enterprise.' },
  { q: 'Can my team collaborate in real time?', a: 'Yes. Collaborate instantly with presence, comments, and version history across workspaces.' },
  { q: 'How much file capacity do I get?', a: 'Storage scales with your plan. Upgrade anytime without downtime.' },
]

function Item({q, a}){
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl border ${open ? 'border-orange-500/60 shadow-[0_0_32px_rgba(251,146,60,0.25)]' : 'border-white/10'} bg-white/[0.04] p-5 transition`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="text-white font-medium">{q}</span>
        <span className={`rounded-full border ${open ? 'border-orange-500 text-orange-400' : 'border-white/20 text-zinc-300'} p-1`}>
          <Plus size={18} />
        </span>
      </button>
      {open && <p className="text-zinc-400 mt-3 text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ(){
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-zinc-200 text-sm tracking-[0.2em] mb-8">FAQ</h2>
        <div className="space-y-4">
          {items.map((it, i) => <Item key={i} q={it.q} a={it.a} />)}
        </div>
      </div>
    </section>
  )
}
