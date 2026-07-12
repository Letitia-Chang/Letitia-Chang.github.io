import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Featured projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Problems, approaches, and impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Deployed ML products, LLM pipelines, and decision-support tools — each framed
            around the problem it solves, with live demos where you can try the real thing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
