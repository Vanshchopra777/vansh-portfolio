import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/icons'
import { jacProject, jacScreenshots } from '../data/content'
import CaseStudySection from '../components/CaseStudySection'
import EvidenceImage from '../components/EvidenceImage'
import PlaceholderNote from '../components/PlaceholderNote'
import ArchitectureDiagram from '../components/diagrams/ArchitectureDiagram'
import PipelineDiagram from '../components/diagrams/PipelineDiagram'
import SchemaDiagram from '../components/diagrams/SchemaDiagram'
import Footer from '../components/Footer'
import jacDesktop from '../assets/images/jac-desktop.jpeg'
import jacMobile from '../assets/images/jac-mobile.jpg'

const screenshotFiles = { 'jac-desktop.jpeg': jacDesktop, 'jac-mobile.jpg': jacMobile }
const jacGallery = jacScreenshots.map((s) => ({ src: screenshotFiles[s.file], caption: s.caption }))

export default function JacCaseStudy() {
  return (
    <main>
      {/* Case study hero */}
      <section className="relative border-b border-graphite-700 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative max-w-content mx-auto px-6 lg:px-10 pt-12 pb-16 md:pt-16 md:pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-graphite-400 hover:text-graphite-100 transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-graphite-950 bg-signal-bright rounded-full px-2.5 py-1">
              ★ Flagship project
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-safe" />
            <span className="font-mono text-[11px] uppercase tracking-wide text-safe">
              {jacProject.status}
            </span>
            <span className="font-mono text-[11px] text-graphite-500">· {jacProject.timeline}</span>
          </div>

          <h1 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold text-graphite-50 leading-[1.05] max-w-3xl text-balance">
            {jacProject.name}
          </h1>
          <p className="mt-4 font-mono text-signal-bright text-sm md:text-base">
            {jacProject.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-graphite-300 text-[15px] leading-relaxed">
            {jacProject.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={jacProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signal-bright transition-all duration-200 hover:-translate-y-0.5 text-graphite-950 font-medium text-sm px-5 py-3 rounded-xl shadow-[0_8px_24px_-8px_rgba(76,141,255,0.55)]"
            >
              View live product
              <ExternalLink size={15} />
            </a>
            <a
              href={jacProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 glass hover:border-graphite-400 transition-all duration-200 hover:-translate-y-0.5 text-graphite-100 text-sm px-5 py-3 rounded-xl"
            >
              <GithubIcon size={15} />
              View source
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
            {jacProject.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-graphite-50 tabular-nums">
                  {m.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wide text-graphite-400 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <CaseStudySection index="00" name="Tech stack">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(jacProject.stack).map(([layer, items]) => (
            <div key={layer} className="rounded-lg border border-graphite-700 bg-graphite-900/60 p-5">
              <div className="font-mono text-[11px] uppercase tracking-wide text-graphite-400 mb-3">
                {layer}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="font-mono text-[12px] text-graphite-200 border border-graphite-600 rounded px-2 py-1">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Problem */}
      <CaseStudySection index="01" name="Problem statement" title={jacProject.problem.heading}>
        <div className="grid md:grid-cols-[1fr_1fr] gap-10">
          <div className="space-y-4 text-graphite-300 text-[15px] leading-relaxed">
            {jacProject.problem.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="rounded-xl border border-graphite-700 bg-graphite-900/50 p-6">
            <div className="font-mono text-[11px] uppercase tracking-wide text-graphite-400 mb-4">
              Dataset covers
            </div>
            <div className="grid grid-cols-2 gap-3">
              {jacProject.universities.map((u) => (
                <div key={u} className="rounded border border-graphite-600 px-3 py-2 text-center font-mono text-[12px] text-graphite-100">
                  {u}
                </div>
              ))}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-graphite-400 mt-6 mb-3">
              Filtered across
            </div>
            <div className="flex flex-wrap gap-2">
              {jacProject.datasetDimensions.map((d) => (
                <span key={d} className="font-mono text-[11px] text-graphite-300 border border-graphite-600 rounded px-2 py-1">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* How it works */}
      <CaseStudySection index="02" name="How it works" title={jacProject.howItWorks.heading}>
        <p className="max-w-3xl text-graphite-300 text-[15px] leading-relaxed">
          {jacProject.howItWorks.body}
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <CaseStudySection index="03" name="System architecture" title="Three services, one pipeline">
        <ArchitectureDiagram />
        <p className="mt-5 max-w-2xl text-graphite-400 text-sm leading-relaxed">
          The frontend, backend and database are deployed independently — React on a Render
          static site, FastAPI on a Render web service, and MySQL on Railway — communicating
          over REST with environment-based configuration.
        </p>
      </CaseStudySection>

      {/* ETL pipeline */}
      <CaseStudySection index="04" name="ETL pipeline" title={jacProject.etlPipeline.heading}>
        <p className="max-w-2xl text-graphite-300 text-[15px] leading-relaxed mb-8">
          {jacProject.etlPipeline.body}
        </p>
        <PipelineDiagram stages={jacProject.etlPipeline.stages} />
      </CaseStudySection>

      {/* Database */}
      <CaseStudySection index="05" name="Database design" title={jacProject.database.heading}>
        <p className="max-w-2xl text-graphite-300 text-[15px] leading-relaxed mb-8">
          {jacProject.database.body}
        </p>
        <SchemaDiagram entities={jacProject.database.entities} />
        <div className="mt-5">
          <PlaceholderNote>
            Entity-level overview reflecting the described schema. Swap in the exported ER
            diagram (with column-level detail) once available.
          </PlaceholderNote>
        </div>
      </CaseStudySection>

      {/* API design */}
      <CaseStudySection index="06" name="API design" title={jacProject.api.heading}>
        <p className="max-w-2xl text-graphite-300 text-[15px] leading-relaxed mb-8">
          {jacProject.api.body}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {jacProject.api.endpoints.map((e) => (
            <div key={e} className="rounded-lg border border-graphite-700 bg-graphite-900/60 px-4 py-3 text-center">
              <span className="font-mono text-[12px] text-graphite-100">{e}</span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <PlaceholderNote>
            Endpoint names summarize functionality described by Vansh. Swap in real route paths
            and the Swagger/OpenAPI screenshot once shared.
          </PlaceholderNote>
        </div>
      </CaseStudySection>

      {/* Prediction logic */}
      <CaseStudySection index="07" name="Prediction logic" title={jacProject.predictionLogic.heading}>
        <div className="inline-block font-mono text-[12px] text-signal-bright border border-signal-dim bg-signal/10 rounded px-3 py-1.5 mb-6">
          {jacProject.predictionLogic.approach}
        </div>
        <div className="space-y-4 max-w-2xl text-graphite-300 text-[15px] leading-relaxed mb-8">
          {jacProject.predictionLogic.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Safe', color: 'safe' },
            { label: 'Moderate', color: 'moderate' },
            { label: 'Tough', color: 'tough' },
          ].map((c) => (
            <span
              key={c.label}
              className="font-mono text-[12px] rounded px-3 py-1.5 border border-graphite-600 inline-flex items-center"
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ background: c.color === 'safe' ? '#3ECF8E' : c.color === 'moderate' ? '#E8A33D' : '#E85D5D' }}
              />
              <span
                style={{ color: c.color === 'safe' ? '#3ECF8E' : c.color === 'moderate' ? '#E8A33D' : '#E85D5D' }}
              >
                {c.label}
              </span>
            </span>
          ))}
        </div>
      </CaseStudySection>

      {/* Features */}
      <CaseStudySection index="08" name="Feature set">
        <div className="grid sm:grid-cols-2 gap-3">
          {jacProject.features.map((f) => (
            <div key={f} className="flex items-start gap-3 rounded-lg border border-graphite-700 bg-graphite-900/40 px-4 py-3.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal-bright flex-none" />
              <span className="text-graphite-200 text-sm leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Screenshots */}
      <CaseStudySection index="09" name="Product" title="Live in production">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {jacScreenshots.map((s, i) => (
            <EvidenceImage
              key={s.id}
              src={screenshotFiles[s.file]}
              alt={s.caption}
              caption={s.caption}
              ratio={s.id === 'mobile' ? 'tall' : 'dashboard'}
              fit="contain"
              group={jacGallery}
              groupIndex={i}
              className="min-h-[280px]"
            />
          ))}
        </div>
      </CaseStudySection>

      {/* Challenges */}
      <CaseStudySection index="10" name="Engineering challenges">
        <div className="grid md:grid-cols-2 gap-5">
          {jacProject.challenges.map((c) => (
            <div key={c.title} className="rounded-lg border border-graphite-700 bg-graphite-900/50 p-5">
              <h3 className="font-display text-base font-semibold text-graphite-50 mb-2">{c.title}</h3>
              <p className="text-graphite-300 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Future scope */}
      <CaseStudySection index="11" name="Future scope" title="What's next">
        <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {jacProject.futureScope.map((f) => (
            <li key={f} className="flex items-start gap-3 text-graphite-300 text-sm leading-relaxed">
              <ArrowUpRight size={14} className="mt-1 text-signal-bright flex-none" />
              {f}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <Footer />
    </main>
  )
}
