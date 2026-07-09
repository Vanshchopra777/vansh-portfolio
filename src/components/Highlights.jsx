import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import PlaceholderNote from './PlaceholderNote'
import EvidenceImage from './EvidenceImage'
import RedactedEmailPreview from './RedactedEmailPreview'
import { highlights } from '../data/content'

const imageFiles = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true, import: 'default' })

function resolveImage(file) {
  const match = Object.entries(imageFiles).find(([path]) => path.endsWith('/' + file))
  return match ? match[1] : null
}

export default function Highlights() {
  return (
    <section id="recognition" className="border-b border-graphite-700 py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="01" name="Engineering recognition" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-4 text-balance">
          Selected, and put to the test
        </h2>
        <p className="text-graphite-400 text-sm max-w-xl mb-12">
          Three things I've been selected for or won, each backed by real evidence rather than a line on a resume.
          Click any image to view it larger.
        </p>

        <div className="grid gap-6">
          {highlights.map((h, i) => {
            const group = h.evidence
              .map((e) => ({ src: resolveImage(e.file), caption: e.caption }))
              .filter((e) => e.src)

            return (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl glass overflow-hidden"
              >
                <div className="grid md:grid-cols-[1.3fr_1fr]">
                  <div className="p-7 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl leading-none">{h.badge}</span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-graphite-50">
                          {h.title}
                        </h3>
                        <div className="font-mono text-[11px] text-signal-bright mt-0.5">{h.result}</div>
                      </div>
                      <span className="ml-auto font-mono text-[11px] text-graphite-500">{h.period}</span>
                    </div>

                    <p className="text-graphite-300 text-sm leading-relaxed mb-5">{h.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-5">
                      {h.facts.map((f) => (
                        <div key={f.label} className="rounded-lg border border-graphite-700 bg-graphite-900/50 px-3 py-2">
                          <div className="font-mono text-[10px] uppercase tracking-wide text-graphite-500">
                            {f.label}
                          </div>
                          <div className="text-graphite-200 text-[13px] mt-0.5">{f.value}</div>
                        </div>
                      ))}
                    </div>

                    {h.caseHighlights && (
                      <div className="mb-5">
                        <div className="font-mono text-[10px] uppercase tracking-wide text-graphite-500 mb-2">
                          Key strategic decisions
                        </div>
                        <ul className="space-y-1.5">
                          {h.caseHighlights.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-graphite-300 text-[13px] leading-relaxed">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-signal-bright flex-none" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {h.reflectionPlaceholder && (
                      <PlaceholderNote>
                        Personal reflection — add your own account of what you learned from this one.
                      </PlaceholderNote>
                    )}
                  </div>

                  <div className="bg-graphite-950 p-3 border-t md:border-t-0 md:border-l border-graphite-700 flex flex-col gap-3">
                    {h.evidence.length > 0 ? (
                      h.evidence.map((e, ei) => {
                        const src = resolveImage(e.file)
                        if (!src) return null
                        return (
                          <EvidenceImage
                            key={e.file}
                            src={src}
                            alt={e.caption}
                            caption={e.caption}
                            ratio={e.ratio}
                            fit={e.fit}
                            group={group}
                            groupIndex={ei}
                          />
                        )
                      })
                    ) : h.id === 'iit-ropar' ? (
                      <RedactedEmailPreview />
                    ) : (
                      <div className="flex-1 min-h-[180px] flex items-center justify-center text-graphite-600 font-mono text-[11px] text-center px-6">
                        Replace with actual evidence
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
