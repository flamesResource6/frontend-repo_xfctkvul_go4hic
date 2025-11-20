import { motion } from 'framer-motion'

const steps = [
  {
    k: '01',
    t: 'Assess & Align',
    d: 'We start with a crisp problem statement, desired outcomes, and constraints. Then we map opportunities with stakeholders.'
  },
  { k: '02', t: 'Architect', d: 'Target architecture, platform choices, and security posture that fit both today and your next 3 years.' },
  { k: '03', t: 'Deliver', d: 'High-cadence execution with telemetry, demos, and ruthless prioritization to ship value quickly.' },
  { k: '04', t: 'Scale', d: 'Knowledge transfer, automation, and playbooks so your teams can run and grow the system with confidence.' }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A process built for outcomes</h2>
          <p className="mt-2 text-slate-300">Clear checkpoints. Tangible artifacts. No fluff.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-slate-400 text-xs tracking-widest">{s.k}</div>
              <h3 className="mt-2 text-white font-semibold">{s.t}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
