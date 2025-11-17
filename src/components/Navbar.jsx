import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Product', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white font-semibold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow ring-1 ring-white/20">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            NovaFlow
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors ring-1 ring-white/20">
              Get started
            </a>
          </div>

          <button onClick={() => setOpen((v)=>!v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-white hover:bg-white/10 ring-1 ring-white/10">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block px-3 py-2 rounded-md text-slate-200 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#pricing" onClick={()=>setOpen(false)} className="block px-3 py-2 rounded-md bg-white/10 text-white ring-1 ring-white/20">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
