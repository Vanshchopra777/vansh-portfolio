import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { useLightbox } from '../context/LightboxContext'

const RATIOS = {
  dashboard: 'aspect-[16/10]',
  certificate: 'aspect-[4/3]',
  slide: 'aspect-[16/9]',
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  auto: '',
}

// Normalizes bright product/certificate screenshots so they sit inside the dark UI
// rather than reading as a pasted-in rectangle.
const NORMALIZE_FILTER = 'brightness(0.93) contrast(1.04) saturate(0.92)'

export default function EvidenceImage({
  src,
  alt,
  caption,
  ratio = 'dashboard',
  fit = 'contain',
  group,
  groupIndex = 0,
  className = '',
  bare = false,
}) {
  const lightbox = useLightbox()
  const ratioClass = RATIOS[ratio] ?? RATIOS.dashboard
  const clickable = Boolean(group && lightbox)

  const handleClick = () => {
    if (!clickable) return
    lightbox.openLightbox(group, groupIndex)
  }

  return (
    <motion.figure
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden ${bare ? '' : 'rounded-xl border border-graphite-700 bg-graphite-950'} ${ratioClass} ${className}`}
    >
      <button
        type="button"
        onClick={handleClick}
        disabled={!clickable}
        className={`group/img absolute inset-0 w-full h-full ${clickable ? 'cursor-zoom-in' : 'cursor-default'}`}
        aria-label={clickable ? `View larger: ${caption || alt}` : undefined}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full transition-transform duration-500 ease-out ${
            clickable ? 'group-hover/img:scale-[1.03]' : ''
          } ${fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
          style={{ filter: NORMALIZE_FILTER }}
        />
        {clickable && (
          <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-md bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
            <Expand size={13} className="text-white" />
          </span>
        )}
      </button>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 py-2 font-mono text-[10px] text-graphite-200 pointer-events-none">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
