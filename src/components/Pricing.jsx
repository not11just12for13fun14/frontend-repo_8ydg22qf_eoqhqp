import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For early projects and exploration',
    features: ['1 project', 'Basic components', 'Community support'],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    desc: 'Everything you need to launch',
    features: ['Unlimited projects', 'Advanced blocks', 'Email support', 'Analytics'],
    cta: 'Get Pro',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/mo',
    desc: 'Collaborate and scale',
    features: ['Up to 10 seats', 'Priority support', 'SAML SSO', 'Roles & permissions'],
    cta: 'Start Team',
    highlighted: false,
  },
]

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-300">Start free. Upgrade when you need more.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t)=> (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? 'border-blue-400/40 bg-gradient-to-b from-blue-500/10 to-transparent' : 'border-white/10 bg-slate-900/60'} p-6`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                {t.highlighted && <span className="text-xs text-blue-300">Most popular</span>}
              </div>
              <p className="mt-2 text-slate-300">{t.desc}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                {t.period && <span className="text-slate-400">{t.period}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f)=> (
                  <li key={f} className="flex items-center gap-2 text-slate-200"><Check className="h-4 w-4 text-blue-400" /> {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold ring-1 transition ${t.highlighted ? 'bg-white text-slate-900 ring-black/10' : 'bg-white/10 text-white ring-white/20 hover:bg-white/15'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
