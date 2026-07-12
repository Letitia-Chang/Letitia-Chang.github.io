import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import omniImg from '../assets/projects/omni.jpg'
import cermImg from '../assets/projects/cerm.gif'
import substrateImg from '../assets/projects/substrate.jpg'
import churnImg from '../assets/projects/churn.png'
import birdImg from '../assets/projects/bird.jpg'
import agentImg from '../assets/projects/agent-pipeline.svg'

const images: Record<string, { src: string; alt: string }> = {
  'omni-retail-ai': {
    src: omniImg,
    alt: 'OmniRetail AI segment-first campaign explorer dashboard',
  },
  cerm: {
    src: cermImg,
    alt: 'Animated demo of CERM matching helpers to census tracts on a map',
  },
  substrate: {
    src: substrateImg,
    alt: 'Substrate grid-relief console showing a priority queue and Atlanta map',
  },
  'telco-churn': {
    src: churnImg,
    alt: 'Feature importance chart from the churn prediction model',
  },
  'bird-migration': {
    src: birdImg,
    alt: 'Bird migration stopover network over a map of the eastern United States',
  },
  'content-generation-agent': {
    src: agentImg,
    alt: 'Eight-stage content generation pipeline diagram',
  },
}

const accents: Record<
  Project['accent'],
  { panel: string; cat: string; chip: string; link: string }
> = {
  indigo: {
    panel: 'bg-indigo-50',
    cat: 'text-indigo-700',
    chip: 'bg-indigo-100 text-indigo-900',
    link: 'text-indigo-800 hover:text-indigo-950',
  },
  teal: {
    panel: 'bg-teal-50',
    cat: 'text-teal-700',
    chip: 'bg-teal-100 text-teal-900',
    link: 'text-teal-800 hover:text-teal-950',
  },
  coral: {
    panel: 'bg-orange-50',
    cat: 'text-orange-700',
    chip: 'bg-orange-100 text-orange-900',
    link: 'text-orange-800 hover:text-orange-950',
  },
  amber: {
    panel: 'bg-amber-50',
    cat: 'text-amber-700',
    chip: 'bg-amber-100 text-amber-900',
    link: 'text-amber-800 hover:text-amber-950',
  },
  slate: {
    panel: 'bg-slate-100',
    cat: 'text-slate-600',
    chip: 'bg-slate-200 text-slate-800',
    link: 'text-slate-700 hover:text-slate-950',
  },
  rose: {
    panel: 'bg-rose-50',
    cat: 'text-rose-700',
    chip: 'bg-rose-100 text-rose-900',
    link: 'text-rose-800 hover:text-rose-950',
  },
}

function Tile({ project }: { project: Project }) {
  const image = images[project.slug]
  const accent = accents[project.accent]
  const primaryHref = project.demo ?? project.github
  const large = project.size === 'large'

  const imageBlock = (
    <div
      className={`relative overflow-hidden ${large ? 'min-h-56 flex-1' : 'h-44'}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {project.demo && (
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
          Live demo ↗
        </span>
      )}
      {project.inProgress && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-amber-800 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          In progress
        </span>
      )}
    </div>
  )

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl ${accent.panel} ${
        large ? 'sm:col-span-2 lg:row-span-2' : ''
      }`}
    >
      {primaryHref ? (
        <a
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} ${project.demo ? 'live demo' : 'on GitHub'}`}
          className={large ? 'flex flex-1 flex-col' : 'block'}
        >
          {imageBlock}
        </a>
      ) : (
        imageBlock
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className={`text-xs font-semibold uppercase tracking-wider ${accent.cat}`}>
          {project.category}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
          {project.title}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed text-slate ${large ? '' : ''}`}>
          {project.tagline}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${accent.chip}`}
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-4 text-sm font-medium">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`${accent.link} underline-offset-4 hover:underline`}
            >
              Live demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`${accent.link} underline-offset-4 hover:underline`}
            >
              GitHub ↗
            </a>
          )}
          {!project.demo && !project.github && (
            <span className="text-xs font-medium text-muted">Demo and repo coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Featured projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Real problems, shipped answers
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Click any screenshot to open the live demo. Full case-study notes below the grid.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Tile key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold text-ink">
            The full story, project by project
          </h3>
          <div className="mt-4 divide-y divide-line rounded-3xl border border-line">
            {projects.map((project) => (
              <details key={project.slug} className="group/details px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {project.title}
                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform group-open/details:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <dl className="mt-3 space-y-2.5 pb-2">
                  {(['problem', 'approach', 'impact'] as const).map((key) => (
                    <div key={key} className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-4">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {key}
                      </dt>
                      <dd className="text-sm leading-relaxed text-slate">
                        {project.detail[key]}
                      </dd>
                    </div>
                  ))}
                  <div className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Tools
                    </dt>
                    <dd className="text-sm text-slate">{project.tags.join(' · ')}</dd>
                  </div>
                </dl>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
