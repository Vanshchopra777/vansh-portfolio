import { AlertTriangle } from 'lucide-react'

export default function PlaceholderNote({ children }) {
  return (
    <div className="flex items-start gap-2.5 rounded-md border border-moderate/30 bg-moderate/[0.06] px-4 py-3 text-[13px] text-moderate/90 leading-relaxed">
      <AlertTriangle size={15} className="mt-0.5 flex-none" />
      <span>{children}</span>
    </div>
  )
}
