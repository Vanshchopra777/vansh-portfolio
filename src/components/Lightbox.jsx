import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useLightbox } from '../context/LightboxContext'

export default function Lightbox() {
  const { images, index, open, close, next, prev } = useLightbox()
  const [zoomed, setZoomed] = useState(false)

  const current = images[index]

  return (
    <AnimatePresence onExitComplete={() => setZoomed(false)}>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center px-4 py-10"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-graphite-100 hover:text-signal-bright transition-colors z-10"
          >
            <X size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setZoomed(false); prev() }}
                aria-label="Previous image"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-graphite-100 hover:text-signal-bright transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setZoomed(false); next() }}
                aria-label="Next image"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-graphite-100 hover:text-signal-bright transition-colors z-10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.caption || ''}
              onClick={() => setZoomed((z) => !z)}
              className={`rounded-lg shadow-2xl transition-transform duration-300 ${
                zoomed ? 'scale-[1.6] cursor-zoom-out' : 'cursor-zoom-in'
              } max-h-[70vh] w-auto object-contain`}
            />
            <div className="mt-4 flex items-center gap-2 text-graphite-300">
              {!zoomed && <ZoomIn size={13} className="opacity-60" />}
              <span className="font-mono text-[12px]">{current.caption}</span>
              {images.length > 1 && (
                <span className="font-mono text-[11px] text-graphite-500 ml-2">
                  {index + 1} / {images.length}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
