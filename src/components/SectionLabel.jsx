export default function SectionLabel({ index, name, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <span className="font-mono text-[12px] text-signal-bright">/{index}</span>
      <span className="h-px flex-none w-8 bg-graphite-600" />
      <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-graphite-300">
        {name}
      </span>
    </div>
  )
}
