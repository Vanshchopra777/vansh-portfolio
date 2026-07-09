import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Globe } from 'lucide-react'
import { profile, heroStats } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'
import { GithubIcon, LinkedinIcon } from './icons'
import StatBlock from './StatBlock'
import portrait from '../assets/images/portrait.jpg'

export default function Hero() {
  const role = useTypewriter(profile.rolesRotating, { typeSpeed: 32, deleteSpeed: 14, pause: 1900 })
  const sectionRef = useRef(null)

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springX = useSpring(tiltX, { stiffness: 120, damping: 16 })
  const springY = useSpring(tiltY, { stiffness: 120, damping: 16 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

  const handlePhotoMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5)
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handlePhotoLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  const handleMouseMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-graphite-700 noise"
      style={{ '--mx': '70%', '--my': '10%' }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background:
            'radial-gradient(560px circle at var(--mx) var(--my), rgba(76,141,255,0.09), transparent 70%)',
        }}
      />
      <div className="absolute -top-24 right-[-10%] w-[560px] h-[560px] rounded-full bg-signal/10 blur-[120px]" />
      <div className="absolute top-1/3 -left-24 w-[380px] h-[380px] rounded-full bg-signal/5 blur-[100px]" />

      <div className="relative max-w-content mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-[12px] text-graphite-300 glass rounded-full px-3 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse" />
              Open to SDE internships &amp; new-grad roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display font-semibold text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.04] text-balance text-graphite-50"
            >
              {profile.name}
            </motion.h1>

            <div className="mt-4 h-9 flex items-center">
              <span className="font-mono text-[14px] md:text-[17px] text-signal-bright">
                {role}
                <span className="inline-block w-[2px] h-[1em] bg-signal-bright ml-0.5 align-middle animate-pulse" />
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-xl text-graphite-300 text-[15px] md:text-base leading-relaxed"
            >
              {profile.education}, Class of {profile.gradYear}. I build full-stack systems and
              document the engineering decisions behind them — schema, pipeline, and interface.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-signal hover:bg-signal-bright transition-all duration-200 hover:-translate-y-0.5 text-graphite-950 font-medium text-sm px-5 py-3 rounded-xl shadow-[0_8px_24px_-8px_rgba(76,141,255,0.55)]"
              >
                View case studies
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 glass hover:border-graphite-400 transition-all duration-200 hover:-translate-y-0.5 text-graphite-100 text-sm px-5 py-3 rounded-xl"
              >
                Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-11 h-11 glass rounded-xl text-graphite-200 hover:text-signal-bright transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 glass rounded-xl text-graphite-200 hover:text-signal-bright transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={profile.liveProjectUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live project — JAC Delhi College Predictor"
                title="Live: JAC Delhi College Predictor"
                className="inline-flex items-center justify-center w-11 h-11 glass rounded-xl text-graphite-200 hover:text-signal-bright transition-all duration-200 hover:-translate-y-0.5"
              >
                <Globe size={17} />
              </a>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {heroStats.map((s, i) => (
                <StatBlock key={s.label} value={s.value} label={s.label} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto md:mx-0 w-full max-w-[420px] aspect-[4/5]"
            style={{ perspective: 1000 }}
            onMouseMove={handlePhotoMove}
            onMouseLeave={handlePhotoLeave}
          >
            {/* soft ambient glow — much softer, not a border */}
            <div className="absolute -inset-4 rounded-[3rem] bg-signal/[0.06] blur-[100px]" />
            <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-white/[0.05] blur-[55px]" />

            {/* layered glass panels behind, for depth — continuous-corner squircle, gentle offset */}
            <motion.div
              className="absolute inset-0 glass"
              style={{ borderRadius: '26%', rotate: -3, x: -6, y: 5 }}
              animate={{ rotate: [-3, -2.2, -3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 glass"
              style={{ borderRadius: '26%', rotate: 2.5, x: 5, y: -4 }}
              animate={{ rotate: [2.5, 3.5, 2.5] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />

            <motion.div
              className="animate-float relative w-full h-full"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
              <div
                className="relative w-full h-full glass-strong overflow-hidden"
                style={{ borderRadius: '26%' }}
              >
                <img
                  src={portrait}
                  alt="Portrait of Vansh Chopra"
                  className="w-full h-full object-cover"
                />
                {/* subtle top-left highlight, like glass catching light — not a color wash */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(140deg, rgba(255,255,255,0.10), transparent 42%)' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.16)' }}
                />
              </div>
            </motion.div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2">
              <div className="font-mono text-[11px] text-graphite-100 whitespace-nowrap">
                DTU · CSE · Class of 2027
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
