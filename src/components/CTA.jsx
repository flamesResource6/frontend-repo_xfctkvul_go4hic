import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/20 to-cyan-500/20 p-8 sm:p-12">
          <div className="absolute -inset-40 bg-[conic-gradient(from_45deg,rgba(99,102,241,0.15),rgba(236,72,153,0.15),rgba(34,211,238,0.15),rgba(99,102,241,0.15))] blur-3xl" />
          <div className="relative">
            <h3 className="text-white text-2xl sm:text-3xl font-bold">Ready to accelerate your roadmap?</h3>
            <p className="mt-2 text-slate-200/90">Tell us about your goals and we’ll respond within one business day.</p>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Full name" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" />
              <input type="email" placeholder="Work email" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" />
              <input type="text" placeholder="Company" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 sm:col-span-2" />
              <textarea placeholder="What are you trying to achieve?" rows={4} className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 sm:col-span-2" />

              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors sm:col-span-2">
                Request consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
