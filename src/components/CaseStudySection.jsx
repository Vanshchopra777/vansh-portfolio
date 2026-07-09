import SectionLabel from './SectionLabel'

export default function CaseStudySection({ index, name, title, children, className = '' }) {
  return (
    <section className={`py-14 md:py-20 border-b border-graphite-700 ${className}`}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index={index} name={name} />
        {title && (
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-graphite-50 mb-8 text-balance">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
