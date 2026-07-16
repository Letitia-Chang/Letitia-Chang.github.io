import { Brain, Terminal, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Pillar = {
  title: string
  body: string
  icon: LucideIcon
  soft: string
  deep: string
}

const pillars: Pillar[] = [
  {
    title: 'Machine learning & AI',
    body: 'End-to-end predictive systems — churn and purchase-intent classification alongside GenAI: custom RAG pipelines and multi-step agent workflows.',
    icon: Brain,
    soft: 'bg-periwinkle-soft',
    deep: 'text-periwinkle-deep',
  },
  {
    title: 'Shipped, not just modeled',
    body: 'The full deployment lifecycle — FastAPI backends, Docker containers, and live architectures on Cloudflare and Railway.',
    icon: Terminal,
    soft: 'bg-green-soft',
    deep: 'text-green-deep',
  },
  {
    title: 'Product strategy',
    body: 'Mapping business goals to technical architecture — scalable systems and workflows that turn analytical output into business leverage.',
    icon: Layers,
    soft: 'bg-yellow-soft',
    deep: 'text-yellow-deep',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Turning complex business ideas and operational challenges into real, deployed
            solutions.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate">
            Second-year M.S. Analytics student at Georgia Tech (computational data track). Over
            the last four years I've turned ambiguous business ideas into deployed products and
            messy operations into scalable workflows — including managing a 30+ person
            education startup and building solutions across healthcare, manufacturing, and
            education. I pair technical depth with product and business intuition to ship
            measurable impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className={`rounded-3xl p-6 sm:p-7 ${pillar.soft}`}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-paper/70">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className={`mt-4 font-display text-lg font-semibold ${pillar.deep}`}>
                  {pillar.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${pillar.deep}`}>{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
