import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Data, AI, product, and engineering roles
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {experience.map((job) => (
            <div
              key={`${job.org}-${job.role}`}
              className="rounded-3xl bg-paper p-6 shadow-sm ring-1 ring-line sm:p-7"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Now
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-muted">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {job.org} · {job.location}
              </p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-slate">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
