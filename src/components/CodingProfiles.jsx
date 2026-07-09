import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import SectionLabel from './SectionLabel'
import { codingProfiles } from '../data/content'

export default function CodingProfiles() {
  return (
    <section id="coding" className="border-b border-graphite-700 py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="07" name="Coding profiles" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-4 text-balance">
          Where the practice happens
        </h2>
        <p className="text-graphite-400 text-sm max-w-xl mb-12">
          GitHub is connected live. The rest show what's verified from the resume until handles
          are added.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((p, i) => {
            const CardTag = p.live ? 'a' : 'div'
            return (
              <motion.div
                key={p.platform}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CardTag
                  {...(p.live ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {})}
                  className={`block h-full rounded-xl glass p-5 transition-all duration-300 ${
                    p.live ? 'hover:-translate-y-1 hover:border-signal-bright/50 cursor-pointer' : 'opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {p.platform === 'GitHub' && <GithubIcon size={15} className="text-graphite-300" />}
                      <span className="font-mono text-[12px] text-graphite-200">{p.platform}</span>
                    </div>
                    {p.live ? (
                      <ArrowUpRight size={13} className="text-signal-bright" />
                    ) : (
                      <span className="font-mono text-[9px] uppercase tracking-wide text-graphite-600 border border-graphite-700 rounded px-1.5 py-0.5">
                        static
                      </span>
                    )}
                  </div>

                  <div className="font-display text-xl font-semibold text-graphite-50 mb-1">
                    {p.stat ?? '—'}
                  </div>
                  <div className="text-graphite-400 text-[11px] leading-relaxed">{p.statLabel}</div>

                  {p.handle && (
                    <div className="mt-4 pt-3 border-t border-graphite-700 font-mono text-[10px] text-graphite-500">
                      @{p.handle}
                    </div>
                  )}
                </CardTag>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
