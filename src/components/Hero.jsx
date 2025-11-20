import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,.25)]"
            >
              Elite IT Consulting for bold, modern organizations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
            >
              Strategy, architecture, and delivery from a senior team that ships. We accelerate cloud, AI, and platform initiatives with measurable outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex justify-center items-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-sm font-medium shadow-[0_10px_40px_rgba(99,102,241,.35)] transition-colors">
                Book a Discovery Call
              </a>
              <a href="#work" className="inline-flex justify-center items-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 text-sm font-medium border border-white/15">
                See our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
            >
              {[
                ['Fortune 500', 'experience'],
                ['99.99%', 'uptime'],
                ['$50M+', 'value delivered'],
                ['24/7', 'support'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xl sm:text-2xl font-semibold text-white">{k}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-400">{v}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative lg:ml-8 mt-10 lg:mt-0">
              <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <p className="text-white font-semibold">What we do</p>
                <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                  <li>• Cloud-native platform engineering</li>
                  <li>• AI strategy, MLOps, and copilots</li>
                  <li>• Enterprise architecture & roadmaps</li>
                  <li>• Secure DevOps & automation</li>
                  <li>• Fractional CTO & staff augmentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
