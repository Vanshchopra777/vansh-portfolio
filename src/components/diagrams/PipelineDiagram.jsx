import { motion } from 'framer-motion'

export default function PipelineDiagram({ stages }) {
  return (
    <div className="rounded-xl border border-graphite-700 bg-graphite-950 p-6 md:p-8 overflow-x-auto">
      <div className="flex md:flex-row flex-col items-stretch md:items-center gap-0 min-w-max md:min-w-0">
        {stages.map((s, i) => (
          <div key={s} className="flex md:flex-row flex-col items-center">
            <motion.div
              initial={{ opacity: 0.35, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: '-45% 0px -45% 0px' }}
              transition={{ duration: 0.35 }}
              className="rounded-lg border border-graphite-600 bg-graphite-900 px-4 py-3 min-w-[168px] text-center [&.active]:border-signal-bright"
              whileHover={{ y: -2 }}
            >
              <span className="font-mono text-[10px] text-signal-bright block mb-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[12px] text-graphite-100 leading-snug">{s}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <div className="flex items-center justify-center text-graphite-500 md:px-2 py-2 md:py-0 relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="md:rotate-0 rotate-90"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-dash"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
