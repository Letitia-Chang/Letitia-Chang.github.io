const pillars = [
  {
    title: 'Machine learning & AI',
    body: 'Build and evaluate models end to end — segmentation, churn, purchase intent — plus modern LLM systems: RAG pipelines, multi-step agent workflows, and reproducible evaluation.',
  },
  {
    title: 'Shipped, not just modeled',
    body: 'My flagship projects are deployed with live demos — FastAPI backends, React frontends, Cloudflare and Railway deployments — because a model only matters once someone can use it.',
  },
  {
    title: 'Product thinking',
    body: 'Years of product management and operations experience mean I scope the business problem first, define what "good" looks like, and translate model output into decisions.',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A generalist who ships analytical products
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
            I'm a second-year M.S. Analytics student at Georgia Tech, working toward Data
            Scientist, AI/ML Engineer, and Data Analyst roles. My background spans data
            science, software engineering, product management, operations, and education
            technology — which means I don't stop at the notebook. I connect models to the
            business problem, wrap them in APIs and interfaces, deploy them, and make the
            output legible to the people who have to act on it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
