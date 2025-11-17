import { motion } from 'framer-motion'
import { Bolt, ShieldCheck, LineChart, Globe, Puzzle, Rocket } from 'lucide-react'

const features = [
  {
    icon: Bolt,
    title: 'AI-native speed',
    desc: 'Generate production-quality sections, pages, and flows in minutes — not weeks.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'Auth, RBAC, rate limits, and audit trails baked in from day one.'
  },
  {
    icon: LineChart,
    title: 'Growth built-in',
    desc: 'SEO, analytics, and A/B testing integrated to help you scale faster.'
  },
  {
    icon: Globe,
    title: 'Global by default',
    desc: 'Edge-ready, lightning fast performance across regions.'
  },
  {
    icon: Puzzle,
    title: 'Composable',
    desc: 'Plug-and-play components, clean APIs, and modern primitives.'
  },
  {
    icon: Rocket,
    title: 'Launch-ready',
    desc: 'From landing to billing — go live with confidence.'
  },
]

export default function Features(){
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Made for modern SaaS</h2>
          <p className="mt-4 text-slate-300">Everything you need to move from zero to one — and beyond.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({icon:Icon, title, desc}) => (
            <motion.div
              key={title}
              initial={{opacity:0, y: 12}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.4}}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-blue-400/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
