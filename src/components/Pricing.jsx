import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic Plan',
    price: '$9',
    highlight: false,
    features: ['5 GB storage', 'Community support', 'Single workspace']
  },
  {
    name: 'Professional Plan',
    price: '$29',
    highlight: true,
    features: ['200 GB storage', 'Priority support', 'Unlimited workspaces', 'Advanced automations']
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    highlight: false,
    features: ['SAML SSO', 'Dedicated success manager', 'Custom SLAs']
  }
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-zinc-200 text-sm tracking-[0.2em] mb-10">PRICING</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.highlight ? 'border-orange-500/60 shadow-[0_0_40px_rgba(251,146,60,0.35)]' : 'border-white/10'} bg-white/[0.04] p-6 backdrop-blur-xl`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <span className="text-zinc-300">{p.price}<span className="text-xs text-zinc-500 ml-1">{p.price !== 'Custom' ? '/mo' : ''}</span></span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              {p.highlight && (
                <div className="mt-6">
                  <a href="#" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-b from-orange-500 to-amber-600 px-5 py-2.5 font-semibold text-white shadow-[0_0_36px_rgba(251,146,60,0.55)] hover:shadow-[0_0_56px_rgba(251,146,60,0.75)] transition">Get Started</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
