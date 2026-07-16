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
    body: 'Designing, training, and validating predictive systems from end to end — including classic customer churn and purchase intent classification models alongside modern GenAI frameworks, custom RAG pipelines, and automated multi-step agent workflows.',
    icon: Brain,
    soft: 'bg-periwinkle-soft',
    deep: 'text-periwinkle-deep',
  },
  {
    title: 'Shipped, not just modeled',
    body: 'Engineering the full deployment lifecycle. Moving models out of isolation and into production environments by building FastAPI backends, containerizing with Docker, and orchestrating live architectures across Cloudflare and Railway.',
    icon: Terminal,
    soft: 'bg-green-soft',
    deep: 'text-green-deep',
  },
  {
    title: 'Product strategy',
    body: 'Years of technical product operation experience mean I map business goals to technical architectures. I treat engineering systems with strategic care — focusing on scalability, smooth workflows, and translating analytical outputs into high-leverage business outcomes.',
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
            I'm a second-year M.S. in Analytics student at Georgia Tech specializing in the
            computational data track. My background spans data science, software engineering,
            product development, business strategies, and operations. Over the last four
            years, I've specialized in taking ambiguous business ideas and turning them into
            real, deployed products, while transforming complex operational problems into
            scalable workflows. Having managed a 30+ employee education startup and built
            solutions across multiple fields — including healthcare, manufacturing, and
            education — I combine robust technical engineering with sharp product and
            business intuition to deliver measurable analytical impact.
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
