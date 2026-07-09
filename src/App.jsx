import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import JacCaseStudy from './pages/JacCaseStudy'
import { LightboxProvider } from './context/LightboxContext'
import Lightbox from './components/Lightbox'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LightboxProvider>
        <div className="relative min-h-screen bg-graphite-950 selection:bg-signal-dim">
          <div className="pointer-events-none fixed inset-0 z-0 bg-blueprint opacity-[0.4]" />
          <div className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(76,141,255,0.06),transparent)]" />
          <div className="relative z-10">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/jac-delhi-college-predictor" element={<JacCaseStudy />} />
            </Routes>
          </div>
          <Lightbox />
        </div>
      </LightboxProvider>
    </BrowserRouter>
  )
}
