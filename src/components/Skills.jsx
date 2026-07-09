import { skills } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Skills() {
  const entries = Object.entries(skills)
  return (
    <section id="skills" className="border-b border-graphite-700 py-24 md:py-32 bg-graphite-900/30">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="02" name="Stack" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-12 text-balance">
          Tools I reach for, by role
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map(([category, items]) => (
            <div
              key={category}
              className="rounded-lg glass p-5 hover:-translate-y-1 hover:border-signal-bright/40 transition-all duration-300"
            >
              <div className="font-mono text-[11px] uppercase tracking-wide text-graphite-400 mb-4">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] text-graphite-200 border border-graphite-600 rounded px-2 py-1 hover:border-signal-bright hover:text-signal-bright hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
