import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ images: [], index: 0, open: false })

  const openLightbox = useCallback((images, index = 0) => {
    setState({ images, index, open: true })
  }, [])
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), [])
  const next = useCallback(
    () => setState((s) => ({ ...s, index: (s.index + 1) % s.images.length })),
    []
  )
  const prev = useCallback(
    () => setState((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length })),
    []
  )

  useEffect(() => {
    if (!state.open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [state.open, close, next, prev])

  return (
    <LightboxContext.Provider value={{ ...state, openLightbox, close, next, prev }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}
