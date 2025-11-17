import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Ship beautiful SaaS faster with NovaFlow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-lg leading-8 text-slate-300"
            >
              The AI-native launchpad that turns ideas into polished products. From landing pages to auth, billing, and dashboards — all in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 ring-1 ring-black/10 hover:translate-y-[-1px] transition">
                Start free <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15">
                Explore features
              </a>
            </motion.div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              {["No credit card", "Open-source starter", "Production-ready", "24/7 support"].map((f)=> (
                <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-4 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXNoYm9hcmQlMjBwcmV2aWV3fGVufDB8MHx8fDE3NjM0MjIyOTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dashboard preview" className="rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
