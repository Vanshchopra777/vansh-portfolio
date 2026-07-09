import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import SectionLabel from './SectionLabel'
import { leadership } from '../data/content'

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-graphite-700 py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="05" name="Leadership" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-4 text-balance">
          Positions of responsibility
        </h2>
        <p className="text-graphite-400 text-sm max-w-xl mb-12">
          What each role actually involved, not just the title.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {leadership.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl glass p-6 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg border border-graphite-600 flex items-center justify-center text-signal-bright flex-none">
                    <Users size={14} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-graphite-50 leading-snug">
                    {l.title}
                  </h3>
                </div>
                {l.metric && (
                  <span className="font-mono text-[10px] text-signal-bright border border-signal-dim rounded-full px-2.5 py-1 whitespace-nowrap">
                    {l.metric}
                  </span>
                )}
              </div>
              {l.period && (
                <div className="font-mono text-[11px] text-graphite-500 mb-3">{l.period}</div>
              )}
              <ul className="space-y-1.5">
                {l.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-graphite-300 text-[13px] leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-graphite-500 flex-none" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
