const faqs = [
  {
    q: 'How does the free plan work?',
    a: 'You can build unlimited pages and components. Upgrade anytime for advanced blocks and collaboration.'
  },
  {
    q: 'Can I use it with my existing stack?',
    a: 'Yes. It works with any modern framework and connects to your APIs securely.'
  },
  {
    q: 'Do you offer refunds?',
    a: 'Absolutely. If it’s not a fit within 14 days, we’ll refund your subscription.'
  },
  {
    q: 'Is my data secure?',
    a: 'We use industry best practices, encryption at rest and in transit, with regular security audits.'
  },
]

export default function FAQ(){
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/60">
          {faqs.map(({q,a}) => (
            <details key={q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-white">
                <span className="text-lg font-medium">{q}</span>
                <span className="ml-6 h-5 w-5 rounded-full bg-white/10 text-white inline-flex items-center justify-center">+</span>
              </summary>
              <p className="mt-3 text-slate-300">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
