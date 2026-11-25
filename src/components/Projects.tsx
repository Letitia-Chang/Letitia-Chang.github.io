import { Users, Flame, Bird } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Project, Accent } from '../data/projects'
import { projects } from '../data/projects'
import omniImg from '../assets/projects/omni.jpg'

const spotlightImages: Record<string, { src: string; alt: string }> = {
  'omni-retail-ai': {
    src: omniImg,
    alt: 'OmniRetail AI segment-first campaign explorer dashboard',
  },
}

// Results from the knowing-doing-gap repo (results/summary_metrics.csv), rounded as on LinkedIn.
function MismatchChart() {
  const bars = [
    { label: 'Baseline', value: 50 },
    { label: 'With prompt intervention', value: 27 },
  ]
  return (
    <div className="flex aspect-[4/3] w-full flex-col justify-center bg-teal-soft p-8 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">
        Necessity–action mismatch
      </p>
      <p className="mt-1 text-sm text-teal-deep">Qwen2.5-7B-Instruct · 30 questions</p>
      <div className="mt-8 space-y-6">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm font-medium text-teal-deep">
              <span>{bar.label}</span>
              <span className="font-display text-2xl font-semibold">{bar.value}%</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-paper/70">
              <div className="h-3 rounded-full bg-teal" style={{ width: `${bar.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const spotlightVisuals: Record<string, ReactNode> = {
  'knowing-doing-gap': <MismatchChart />,
}

const gridSlugs = ['buzz-teammate-access', 'cerm', 'bird-migration']
const gridIcons: Record<string, LucideIcon> = {
  'buzz-teammate-access': Users,
  cerm: Flame,
  'bird-migration': Bird,
}

const accents: Record<Accent, { soft: string; deep: string }> = {
  periwinkle: { soft: 'bg-periwinkle-soft', deep: 'text-periwinkle-deep' },
  teal: { soft: 'bg-teal-soft', deep: 'text-teal-deep' },
  peach: { soft: 'bg-peach-soft', deep: 'text-peach-deep' },
  sage: { soft: 'bg-sage-soft', deep: 'text-sage-deep' },
  mint: { soft: 'bg-mint-soft', deep: 'text-mint-deep' },
}

function Spotlight({ project, index }: { project: Project; index: number }) {
  const image = spotlightImages[project.slug]
  const accent = accents[project.accent]
  const reversed = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')
  const primaryHref = project.demo ?? project.github
  const media = image ? (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={`aspect-[4/3] w-full object-cover object-left-top ${primaryHref ? 'transition-transform duration-500 group-hover:scale-[1.03]' : ''}`}
    />
  ) : (
    spotlightVisuals[project.slug]
  )

  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={reversed ? 'lg:order-2' : ''}>
        {primaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} ${project.demo ? 'live demo' : 'on GitHub'}`}
            className="group relative block overflow-hidden rounded-3xl"
          >
            {media}
            {project.demo && (
              <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
                Live demo ↗
              </span>
            )}
          </a>
        ) : (
          <div className="overflow-hidden rounded-3xl">{media}</div>
        )}
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="font-display text-6xl font-semibold leading-none text-taupe sm:text-7xl"
          >
            {number}
          </span>
          <div className="pt-1">
            <p className={`text-xs font-semibold uppercase tracking-wider ${accent.deep}`}>
              {project.subtitle}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate">{project.pitch}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${accent.soft} ${accent.deep}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`${accent.deep} underline-offset-4 hover:underline`}
            >
              Live demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`${accent.deep} underline-offset-4 hover:underline`}
            >
              GitHub ↗
            </a>
          )}
        </div>

        {project.detail && (
          <details className="group/details mt-5 rounded-2xl border border-line px-5 py-3.5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
              Read case study
              <span
                aria-hidden="true"
                className="text-muted transition-transform group-open/details:rotate-45"
              >
                +
              </span>
            </summary>
            <dl className="mt-3 space-y-2.5 pb-1">
              {(['problem', 'approach', 'impact'] as const).map((key) => (
                <div key={key} className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-4">
                  <dt className={`text-xs font-semibold uppercase tracking-wider ${accent.deep}`}>
                    {key}
                  </dt>
                  <dd className="text-sm leading-relaxed text-slate">
                    {project.detail![key]}
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        )}
      </div>
    </div>
  )
}

// City Bot is internal to ATDC: no code, demo, or case-study details until ATDC approves.
function CaseStudyPending() {
  return (
    <div className="rounded-3xl bg-paper p-7 shadow-sm ring-1 ring-line sm:p-9">
      <div className="flex flex-wrap items-center gap-2.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          ATDC • Internal project
        </p>
        <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-medium text-ink-soft">
          Case study coming soon
        </span>
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink">
        City Bot — RAG assistant for Georgia founders
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
        City Bot is internal to ATDC, so there is no code or demo to link. A code-free case
        study covering the architecture, evaluation method, and results is on the way.
      </p>
      <a
        href="#experience"
        className="mt-4 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        See City Bot’s results in Experience ↑
      </a>
    </div>
  )
}

function GridCard({ project }: { project: Project }) {
  const accent = accents[project.accent]
  const Icon = gridIcons[project.slug]

  return (
    <article className="flex flex-col rounded-3xl bg-paper p-6 shadow-sm ring-1 ring-line">
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${accent.soft}`}>
        <Icon className={`h-5 w-5 ${accent.deep}`} strokeWidth={1.75} aria-hidden="true" />
      </div>

      <p className={`mt-4 text-xs font-semibold uppercase tracking-wider ${accent.deep}`}>
        {project.subtitle}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{project.pitch}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-panel px-2.5 py-1 text-xs font-medium text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-medium">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`${accent.deep} underline-offset-4 hover:underline`}
          >
            Live demo ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`${accent.deep} underline-offset-4 hover:underline`}
          >
            GitHub ↗
          </a>
        )}
        {!project.demo && !project.github && (
          <span className="text-xs font-medium text-muted">Demo and repo coming soon</span>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const spotlightProjects = projects.filter((p) => p.tier === 'spotlight')
  const gridProjects = gridSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p))

  return (
    <section id="projects" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Featured projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Real problems, shipped answers
          </h2>
        </div>

        <div className="mt-12 space-y-16 md:space-y-20">
          {spotlightProjects.map((project, index) => (
            <Spotlight key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <CaseStudyPending />
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-lg font-semibold text-ink">Notable projects</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {gridProjects.map((project) => (
              <GridCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
