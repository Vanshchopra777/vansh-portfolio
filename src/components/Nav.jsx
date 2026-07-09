import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

const links = [
  { href: '/#work', label: 'Projects' },
  { href: '/#recognition', label: 'Recognition' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div
        className={`max-w-content mx-auto rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="px-4 lg:px-7 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg border border-graphite-600 flex items-center justify-center font-mono text-[13px] text-signal-bright group-hover:border-signal-bright transition-colors">
              VC
            </span>
            <span className="font-mono text-[13px] text-graphite-300 hidden sm:inline">
              vansh.chopra
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[13px] text-graphite-300 hover:text-graphite-50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-graphite-300 hover:text-signal-bright hover:bg-white/5 transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-graphite-300 hover:text-signal-bright hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] px-4 py-2 ml-1 rounded-lg border border-graphite-600 text-graphite-100 hover:border-signal-bright hover:text-signal-bright transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-graphite-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-graphite-700 px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-sm text-graphite-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-graphite-300">
                <GithubIcon size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-graphite-300">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:vanshchopra4122@gmail.com" className="font-mono text-sm text-signal-bright">
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
