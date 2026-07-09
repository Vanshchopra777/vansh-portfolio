import { motion } from 'framer-motion'

const nodes = [
  { layer: 'Client', title: 'React + Vite', detail: 'Frontend · Render Static Site' },
  { layer: 'API', title: 'FastAPI', detail: 'Python backend · Render' },
  { layer: 'Data', title: 'MySQL', detail: 'Normalized cutoff database · Railway' },
]

function TravellingRequest({ delay = 0 }) {
  return (
    <motion.span
      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-signal-bright shadow-[0_0_10px_2px_rgba(125,170,255,0.7)]"
      initial={{ left: '0%', opacity: 0 }}
      animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, delay, ease: 'easeInOut' }}
    />
  )
}

export default function ArchitectureDiagram() {
  return (
    <div className="rounded-xl border border-graphite-700 bg-graphite-950 p-6 md:p-8">
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
        {nodes.map((n, i) => (
          <div key={n.title} className="contents">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-lg border border-graphite-600 bg-graphite-900 p-5 text-center hover:border-signal-bright/50 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-wide text-signal-bright mb-2">
                {n.layer}
              </div>
              <div className="font-display text-base font-semibold text-graphite-50">{n.title}</div>
              <div className="font-mono text-[11px] text-graphite-400 mt-1.5">{n.detail}</div>
            </motion.div>
            {i < nodes.length - 1 && (
              <div className="relative flex md:flex-col items-center justify-center gap-1 text-graphite-500 md:h-10 md:w-16">
                <span className="relative hidden md:block w-full h-px bg-graphite-600 overflow-visible">
                  <TravellingRequest delay={i * 0.5} />
                </span>
                <span className="md:hidden relative h-8 w-px bg-graphite-600 overflow-visible" />
                <span className="font-mono text-[10px] absolute -bottom-4 md:static">REST</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        {['jac-delhi-college-predictor.onrender.com', 'Render Web Service', 'Railway MySQL instance'].map(
          (t) => (
            <div key={t} className="font-mono text-[10px] text-graphite-500 truncate">
              {t}
            </div>
          )
        )}
      </div>
    </div>
  )
}
