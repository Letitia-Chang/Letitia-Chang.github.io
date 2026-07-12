import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Education</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Academic background
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.school} className="rounded-3xl bg-paper p-6 shadow-sm ring-1 ring-line sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-ink">{edu.school}</h3>
                <span className="text-sm font-medium text-muted">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{edu.degree}</p>
              <p className="mt-0.5 text-sm text-muted">{edu.location}</p>

              {edu.coursework.length > 0 && (
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    Relevant coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-panel px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.note && (
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-slate">
                  {edu.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
