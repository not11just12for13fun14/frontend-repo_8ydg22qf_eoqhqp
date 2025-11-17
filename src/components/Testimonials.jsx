import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Founder, Loomly Labs',
    quote: 'We went from idea to a polished MVP in a weekend. The speed is unreal.',
  },
  {
    name: 'Noah Patel',
    role: 'Engineering Manager, Northwind',
    quote: 'The best developer experience I have seen in years. Our team ships faster.',
  },
  {
    name: 'Mia Chen',
    role: 'Product Lead, Acme Cloud',
    quote: 'Design quality and performance are top-notch. Customers notice the difference.',
  },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Loved by builders</h2>
          <p className="mt-4 text-slate-300">From solo founders to enterprise teams</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t)=> (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-1 text-blue-400">
                {Array.from({length:5}).map((_,i)=> <Star key={i} className="h-4 w-4 fill-blue-400" />)}
              </div>
              <p className="mt-4 text-slate-200">“{t.quote}”</p>
              <div className="mt-6 text-sm text-slate-400">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
