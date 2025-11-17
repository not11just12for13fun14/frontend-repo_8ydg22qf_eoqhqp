export default function CTA(){
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Build your next big thing today</h2>
            <p className="mt-3 text-blue-100">Join thousands of teams launching faster with NovaFlow.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow ring-1 ring-black/10">
                Get started free
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
