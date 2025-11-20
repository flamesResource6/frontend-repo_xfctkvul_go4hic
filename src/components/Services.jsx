import { motion } from 'framer-motion'
import { Brain, Cloud, ShieldCheck, LineChart, Rocket, Code2 } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Copilots',
    desc: 'Identify high-impact AI use cases, build secure copilots, and establish responsible AI governance.'
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    desc: 'Design and implement scalable architectures on AWS, Azure, and GCP with cost and reliability in mind.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Embed security from day zero. Threat modeling, zero-trust, SOC2/ISO readiness, and DevSecOps pipelines.'
  },
  {
    icon: LineChart,
    title: 'Data & Analytics',
    desc: 'Modern data stacks, governance, and real-time analytics that turn telemetry into decisions.'
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Cross-functional delivery teams to ship modern web, mobile, and platform products fast.'
  },
  {
    icon: Rocket,
    title: 'Transformation',
    desc: 'Operate like a top-tier tech org—agile at scale, platform teams, and engineering excellence.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Where we create leverage</h2>
            <p className="mt-2 text-slate-300">A focused set of capabilities to move critical initiatives forward.</p>
          </div>
          <div className="hidden sm:block text-slate-400 text-sm">End-to-end delivery</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 grid place-items-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
