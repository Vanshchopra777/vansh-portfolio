import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import { timelineData } from '../data/content'

export default function Timeline() {
  return (
    <section id="timeline" className="border-b border-graphite-700 py-24 md:py-32 bg-graphite-900/20">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="04" name="Verified timeline" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-4 text-balance">
          Every date on this page, in order
        </h2>
        <p className="text-graphite-400 text-sm max-w-xl mb-14">
          No invented milestones — each entry traces back to a resume line, certificate, or
          selection email shown elsewhere on this site.
        </p>

        <div className="relative max-w-2xl mx-auto md:mx-0">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-bright/60 via-graphite-600 to-transparent" />
          <div className="space-y-7">
            {timelineData.map((t, i) => (
              <motion.div
                key={`${t.date}-${t.text}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-graphite-950 border-2 border-signal-bright flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-bright" />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-mono text-[12px] text-signal-bright sm:w-24 flex-none">
                    {t.date}
                  </span>
                  <span className="text-graphite-200 text-[14px] leading-relaxed">{t.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
