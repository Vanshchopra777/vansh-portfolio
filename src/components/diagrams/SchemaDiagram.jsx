export default function SchemaDiagram({ entities }) {
  const fact = entities[entities.length - 1]
  const lookups = entities.slice(0, -1)

  return (
    <div className="rounded-xl border border-graphite-700 bg-graphite-950 p-6 md:p-8">
      <div className="flex flex-col items-center gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {lookups.map((l) => (
            <div
              key={l}
              className="rounded-lg border border-graphite-600 bg-graphite-900 px-3 py-2.5 text-center"
            >
              <span className="font-mono text-[11px] text-graphite-200">{l}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-px h-6 bg-graphite-600" />
          <div className="rounded-lg border border-signal-bright bg-signal/10 px-6 py-3.5 text-center">
            <span className="font-mono text-[10px] uppercase tracking-wide text-signal-bright block mb-1">
              Fact table
            </span>
            <span className="font-mono text-[13px] text-graphite-50">{fact}</span>
          </div>
        </div>
      </div>
      <p className="mt-6 font-mono text-[11px] text-graphite-500 text-center">
        Lookup tables referenced by foreign key — normalized to avoid repeating branch, category
        and region text across thousands of cutoff rows.
      </p>
    </div>
  )
}
