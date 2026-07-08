import type { Project } from '../data/projects'

const fields: { key: 'problem' | 'approach' | 'impact'; label: string }[] = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'impact', label: 'Impact' },
]

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-line-strong sm:p-7">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {project.subtitle}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{project.summary}</p>
      </div>

      <dl className="mt-5 space-y-3 border-t border-line pt-5">
        {fields.map(({ key, label }) => (
          <div key={key}>
            <dt className="text-xs font-medium uppercase tracking-wider text-accent">
              {label}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate">{project[key]}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-panel px-2.5 py-1 text-xs font-medium text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-ink"
              >
                {link.label}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-xs font-medium text-muted">Details available on request</p>
        )}
      </div>
    </article>
  )
}
