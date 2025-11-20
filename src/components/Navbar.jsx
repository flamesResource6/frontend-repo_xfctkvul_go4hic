import { useState } from 'react'
import { Menu, X, Cpu, Shield, Phone } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 grid place-items-center shadow-[0_0_30px_rgba(99,102,241,.35)]">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold">NovaTech Consulting</p>
                <p className="text-[11px] uppercase tracking-widest text-slate-400">IT Strategy & Delivery</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition-colors">
                <Phone className="h-4 w-4" />
                Free consultation
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#process">Process</NavLink>
                <NavLink href="#work">Work</NavLink>
                <NavLink href="#about">About</NavLink>
                <a href="#cta" className="inline-flex items-center justify-center gap-2 text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition-colors">
                  <Phone className="h-4 w-4" />
                  Free consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
