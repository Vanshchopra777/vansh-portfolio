import SectionLabel from './SectionLabel'

const pillars = [
  {
    title: 'Systems over surface',
    body: 'I care more about how the schema, the API, and the data pipeline fit together than how a button hovers. The interface is the last 10%.',
  },
  {
    title: 'Explainable by default',
    body: 'Given the choice between a black-box model and a transparent rules-based system, I pick whichever one I can actually justify to the person relying on it.',
  },
  {
    title: 'Ship, then document',
    body: 'A project isn\u2019t finished when it works locally — it\u2019s finished when it\u2019s deployed, and I can explain every decision that got it there.',
  },
]

export default function About() {
  return (
    <section id="about" className="border-b border-graphite-700 py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <SectionLabel index="03" name="About" />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-semibold text-graphite-50 leading-tight text-balance">
              I like taking a system apart to see why it works — then building my own version, better.
            </h2>
            <div className="mt-8 space-y-5 text-graphite-300 text-[15px] leading-relaxed max-w-xl">
              <p>
                I'm a Computer Science undergrad at DTU, currently carrying a 9.345 CGPA with a
                10.0 in my most recent semester. I got into engineering through the part most
                people skip: figuring out why a slow query is slow, or why a "simple" prediction
                problem actually needs five filter dimensions before it means anything.
              </p>
              <p>
                That shows up in how I build. My projects tend to start from a real, specific
                friction — hundreds of scattered PDF cutoffs, proxy attendance, a placement
                process running on spreadsheets — and end as a deployed system with a schema,
                an API, and a reason for every architectural choice along the way.
              </p>
              <p>
                Outside of coursework, I lead as Class Representative and previously as Hostel
                President, competed at Smart India Hackathon 2025 and Bain's BrainWars, and
                spend a lot of time in DSA (450+ problems solved).
              </p>
            </div>
          </div>

          <div className="grid gap-4 content-start">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-graphite-700 bg-graphite-900/60 p-5 hover:border-graphite-500 transition-colors"
              >
                <div className="font-mono text-[12px] text-signal-bright mb-1.5">{p.title}</div>
                <div className="text-graphite-300 text-sm leading-relaxed">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
