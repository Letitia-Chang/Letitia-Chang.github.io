import { skills } from '../data/skills'

// Keyed by category name in data/skills.ts — rename both together.
const categoryTints: Record<string, { chip: string; dot: string }> = {
  'Agents & LLMs': { chip: 'bg-periwinkle-soft text-periwinkle-deep', dot: 'bg-periwinkle' },
  'Retrieval & Inference': { chip: 'bg-teal-soft text-teal-deep', dot: 'bg-teal' },
  'Machine Learning': { chip: 'bg-sage-soft text-sage-deep', dot: 'bg-sage' },
  'Backend & Deployment': { chip: 'bg-peach-soft text-peach-deep', dot: 'bg-peach' },
  'Languages & Frontend': { chip: 'bg-mint-soft text-mint-deep', dot: 'bg-mint' },
  'Customer & Delivery': { chip: 'bg-pink-soft text-pink-deep', dot: 'bg-pink' },
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tools I reach for
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const tint = categoryTints[group.category] ?? categoryTints['Agents & LLMs']
            return (
              <div
                key={group.category}
                className="rounded-3xl bg-paper p-6 shadow-sm ring-1 ring-line"
              >
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <span className={`h-2 w-2 rounded-full ${tint.dot}`} />
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${tint.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
