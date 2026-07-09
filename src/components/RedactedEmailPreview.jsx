import { Mail } from 'lucide-react'

export default function RedactedEmailPreview() {
  return (
    <div className="relative w-full h-full min-h-[200px] bg-graphite-900 rounded-lg overflow-hidden border border-graphite-700 flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-graphite-700 bg-graphite-950/60">
        <Mail size={13} className="text-graphite-500" />
        <span className="font-mono text-[10px] text-graphite-500">NPTEL Internship — Selection Notice</span>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-graphite-500">To:</span>
          <span className="font-mono text-[11px] text-graphite-300 bg-graphite-700/60 rounded px-1.5 py-0.5 blur-[3px] select-none">
            vanshchopra_23it170@dtu.ac.in
          </span>
        </div>
        <div className="h-px bg-graphite-700 my-1" />
        <div className="text-graphite-300 text-[12px] leading-relaxed">
          "...list of candidates selected for the internship under{' '}
          <span className="text-graphite-100 font-medium">Prof. Sudarshan Iyengar</span> at{' '}
          <span className="text-graphite-100 font-medium">IIT Ropar</span> starting on{' '}
          <span className="text-signal-bright font-medium">22nd January 2026</span>..."
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {['Selected', 'Virtual · 10 weeks', 'NPTEL Internship'].map((t) => (
            <span key={t} className="font-mono text-[10px] text-graphite-300 border border-graphite-600 rounded px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 border-t border-graphite-700 font-mono text-[9px] text-graphite-500">
        Redacted preview — personal email address masked
      </div>
    </div>
  )
}
