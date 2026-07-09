import { motion } from 'framer-motion'

export default function StatBlock({ value, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-l border-graphite-700 pl-4"
    >
      <div className="font-display text-2xl md:text-3xl font-semibold text-graphite-50 tabular-nums">
        {value}
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-graphite-400 leading-snug">
        {label}
      </div>
    </motion.div>
  )
}
