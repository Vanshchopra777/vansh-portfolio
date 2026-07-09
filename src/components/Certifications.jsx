import { motion } from 'framer-motion'
import { Download, BadgeCheck, Eye } from 'lucide-react'
import SectionLabel from './SectionLabel'
import EvidenceImage from './EvidenceImage'
import { useLightbox } from '../context/LightboxContext'
import { certifications } from '../data/content'

const imageFiles = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true, import: 'default' })
const resolveImage = (file) => {
  if (!file) return null
  const match = Object.entries(imageFiles).find(([path]) => path.endsWith('/' + file))
  return match ? match[1] : null
}

export default function Certifications() {
  const lightbox = useLightbox()

  return (
    <section id="certifications" className="border-b border-graphite-700 py-24 md:py-32 bg-graphite-900/20">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="06" name="Certifications" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-4 text-balance">
          Coursework I actually finished
        </h2>
        <p className="text-graphite-400 text-sm max-w-xl mb-12">
          Every certificate below is real and verifiable — click any preview to view it full size.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 [&>*:nth-child(7)]:lg:col-start-2 [&>*:nth-child(7)]:md:col-start-1">
          {certifications.map((c, i) => {
            const src = resolveImage(c.image)
            const group = src ? [{ src, caption: c.name }] : []

            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="rounded-xl glass overflow-hidden flex flex-col"
              >
                {src ? (
                  <EvidenceImage
                    src={src}
                    alt={c.name}
                    ratio="certificate"
                    fit="contain"
                    group={group}
                    groupIndex={0}
                    bare
                    className="border-b border-graphite-700"
                  />
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center border-b border-graphite-700 bg-graphite-900/60">
                    <span className="font-mono text-[11px] text-graphite-600">Certificate on file</span>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-[15px] font-semibold text-graphite-50 leading-snug mb-1">
                    {c.name}
                  </h3>
                  <div className="text-graphite-400 text-[12px] mb-0.5">{c.issuer}</div>
                  {(c.instructor || c.platform) && (
                    <div className="text-graphite-500 text-[11px] mb-2">
                      {[c.instructor, c.platform].filter(Boolean).join(' · ')}
                    </div>
                  )}
                  {!c.instructor && !c.platform && <div className="mb-2" />}

                  {c.achievement && (
                    <div className="inline-flex items-center gap-1.5 self-start font-mono text-[10px] text-safe border border-safe/30 bg-safe/[0.07] rounded-full px-2.5 py-1 mb-3">
                      <BadgeCheck size={11} />
                      {c.achievement}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.skills.map((s) => (
                      <span key={s} className="font-mono text-[10px] text-graphite-300 border border-graphite-600 rounded px-1.5 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-t border-graphite-700 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-graphite-500">
                      {c.date || '\u2014'}
                      {c.credentialId && <span className="block text-graphite-600 mt-0.5">{c.credentialId}</span>}
                    </span>
                    {src && (
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => lightbox?.openLightbox(group, 0)}
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] text-graphite-300 hover:text-signal-bright transition-colors"
                        >
                          <Eye size={12} />
                          View certificate
                        </button>
                        <a
                          href={src}
                          download={`${c.name.replace(/\s+/g, '-').toLowerCase()}.jpg`}
                          aria-label="Download certificate"
                          className="inline-flex items-center text-graphite-400 hover:text-signal-bright transition-colors"
                        >
                          <Download size={12} />
                        </a>
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
