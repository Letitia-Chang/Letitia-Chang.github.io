import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Product, engineering, and data roles
          </h2>
        </div>

        <div className="relative mt-12 space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((job) => (
            <div key={`${job.org}-${job.role}`} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-paper sm:-left-[49px]" />

              <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
