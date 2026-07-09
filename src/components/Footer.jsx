import { Mail, Phone, ArrowUp, Globe } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/content'
import SectionLabel from './SectionLabel'

const builtWith = ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'MySQL', 'Framer Motion']

export default function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="08" name="Contact" />
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-5 text-balance">
              Building something worth an internship interview? Let's talk.
            </h2>
            <p className="text-graphite-300 text-sm leading-relaxed max-w-md mb-6">
              Open to SDE internship and new-grad opportunities. The fastest way to reach me is
              email — I read everything that lands there.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[12px] text-graphite-400">
              <span>New Delhi, India</span>
              <span className="text-graphite-600">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-safe" />
                Available now
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 hover:border-signal-bright/60 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <Mail size={16} className="text-graphite-400 group-hover:text-signal-bright" />
              <span className="font-mono text-[13px] text-graphite-200">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 hover:border-signal-bright/60 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <Phone size={16} className="text-graphite-400 group-hover:text-signal-bright" />
              <span className="font-mono text-[13px] text-graphite-200">{profile.phone}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 hover:border-signal-bright/60 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <GithubIcon size={16} className="text-graphite-400 group-hover:text-signal-bright" />
              <span className="font-mono text-[13px] text-graphite-200">github.com/Vanshchopra777</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 hover:border-signal-bright/60 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <LinkedinIcon size={16} className="text-graphite-400 group-hover:text-signal-bright" />
              <span className="font-mono text-[13px] text-graphite-200">linkedin.com/in/vansh-chopra</span>
            </a>
            <a
              href={profile.liveProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 hover:border-signal-bright/60 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <Globe size={16} className="text-graphite-400 group-hover:text-signal-bright" />
              <span className="font-mono text-[13px] text-graphite-200">Live: JAC Delhi College Predictor</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-graphite-700">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wide text-graphite-500 mr-1">
                Built with
              </span>
              {builtWith.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-graphite-400 border border-graphite-700 rounded px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-graphite-400 hover:text-signal-bright transition-colors"
            >
              Back to top
              <ArrowUp size={13} />
            </button>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
            <span className="font-mono text-[11px] text-graphite-500">
              © {new Date().getFullYear()} Vansh Chopra. All rights reserved.
            </span>
            <span className="font-mono text-[11px] text-graphite-500">
              Delhi Technological University · CSE '27
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
