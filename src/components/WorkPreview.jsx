import { Link } from 'react-router-dom'
import { ArrowUpRight, Database, GitBranch } from 'lucide-react'
import SectionLabel from './SectionLabel'
import { jacProject, internshipTrackerProject, presencePulseProject } from '../data/content'
import jacDesktop from '../assets/images/jac-desktop.jpeg'

export default function WorkPreview() {
  return (
    <section id="work" className="border-b border-graphite-700 py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="00" name="Engineering projects" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite-50 mb-4 text-balance">
          What I've actually built and shipped
        </h2>
        <p className="text-graphite-400 text-sm max-w-xl mb-12">
          Full engineering case studies, not project cards — the problem, the architecture, and
          the decisions behind each one.
        </p>

        {/* Flagship — case study preview, not a card */}
        <Link
          to={`/projects/${jacProject.slug}`}
          className="group relative block rounded-2xl glass overflow-hidden hover:border-signal/60 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="absolute top-5 -right-9 rotate-45 bg-signal text-graphite-950 font-mono text-[10px] font-semibold uppercase tracking-wide px-10 py-1 z-10 shadow-lg">
            Flagship project
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-11 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-safe" />
                  <span className="font-mono text-[11px] uppercase tracking-wide text-safe">
                    {jacProject.status}
                  </span>
                  <span className="font-mono text-[11px] text-graphite-500">· {jacProject.timeline}</span>
                </div>
                <h3 className="font-display text-2xl md:text-[2rem] font-semibold text-graphite-50 mb-1">
                  {jacProject.name}
                </h3>
                <p className="font-mono text-signal-bright text-[13px] mb-4">{jacProject.tagline}</p>
                <p className="text-graphite-300 text-sm leading-relaxed max-w-md">
                  {jacProject.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['React', 'FastAPI', 'MySQL', 'ETL Pipeline', 'Rules-based Prediction'].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-graphite-300 border border-graphite-600 rounded px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-9 pt-7 border-t border-graphite-700">
                {jacProject.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-lg font-semibold text-graphite-50">{m.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wide text-graphite-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 font-mono text-[13px] text-signal-bright">
                Read the full engineering case study
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div className="relative border-t lg:border-t-0 lg:border-l border-graphite-700 bg-graphite-950 overflow-hidden min-h-[280px]">
              <img
                src={jacDesktop}
                alt="JAC Delhi College Predictor — live product screenshot"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                style={{ filter: 'brightness(0.93) contrast(1.04) saturate(0.92)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/50 to-transparent" />
            </div>
          </div>
        </Link>

        {/* Secondary projects — richer previews, real metrics, honest about depth */}
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="rounded-xl glass p-7 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3 text-graphite-400">
              <Database size={15} />
              <span className="font-mono text-[11px] uppercase tracking-wide">
                {internshipTrackerProject.period}
              </span>
            </div>
            <h4 className="font-display text-lg font-semibold text-graphite-50 mb-1">
              {internshipTrackerProject.name}
            </h4>
            <p className="font-mono text-graphite-500 text-[12px] mb-3">{internshipTrackerProject.tagline}</p>
            <p className="text-graphite-300 text-sm leading-relaxed mb-5">
              {internshipTrackerProject.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-5">
              {internshipTrackerProject.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-base font-semibold text-graphite-50">{m.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wide text-graphite-500 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {internshipTrackerProject.stack.map((t) => (
                <span key={t} className="font-mono text-[11px] text-graphite-300 border border-graphite-600 rounded px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
            <div className="font-mono text-[11px] text-graphite-500 pt-3 border-t border-graphite-700">
              Full case study — in progress
            </div>
          </div>

          <div className="rounded-xl glass p-7 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3 text-graphite-400">
              <GitBranch size={15} />
              <span className="font-mono text-[11px] uppercase tracking-wide">
                {presencePulseProject.period}
              </span>
            </div>
            <h4 className="font-display text-lg font-semibold text-graphite-50 mb-1">
              {presencePulseProject.name}
            </h4>
            <p className="font-mono text-graphite-500 text-[12px] mb-3">{presencePulseProject.tagline}</p>
            <p className="text-graphite-300 text-sm leading-relaxed mb-5">
              {presencePulseProject.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-5">
              {presencePulseProject.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-base font-semibold text-graphite-50">{m.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wide text-graphite-500 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {presencePulseProject.stack.map((t) => (
                <span key={t} className="font-mono text-[11px] text-graphite-300 border border-graphite-600 rounded px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
            <div className="font-mono text-[11px] text-graphite-500 pt-3 border-t border-graphite-700">
              Full case study — in progress
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
