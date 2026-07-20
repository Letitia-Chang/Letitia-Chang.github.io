import { Microscope, Newspaper, Truck, LineChart, Code2, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { experience } from "../data/experience";

// Keyed by role so icons stay tied to job content regardless of list order.
const roleIcons: Record<string, LucideIcon> = {
  "Agentic AI Research Intern": Microscope,
  "AI & Data Student Assistant": Newspaper,
  "Data Science Practicum — UPS Surface Network Planning": Truck,
  "Data Scientist": LineChart,
  "Full-Stack Developer & Technical Project Manager": Code2,
  "Junior Software Engineer": Cpu,
};

const accentCycle: { soft: string; deep: string }[] = [
  { soft: "bg-periwinkle-soft", deep: "text-periwinkle-deep" },
  { soft: "bg-teal-soft", deep: "text-teal-deep" },
  { soft: "bg-peach-soft", deep: "text-peach-deep" },
  { soft: "bg-sage-soft", deep: "text-sage-deep" },
  { soft: "bg-mint-soft", deep: "text-mint-deep" },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Data, AI, product, and engineering roles
          </h2>
        </div>

        <div className="relative mt-10 space-y-6 border-l border-line pl-8 sm:pl-10">
          {experience.map((job, index) => {
            const Icon = roleIcons[job.role] ?? Cpu;
            const accent = accentCycle[index % accentCycle.length];
            return (
              <div key={`${job.org}-${job.role}`} className="relative">
                <div
                  className={`absolute -left-[47px] top-6 flex h-8 w-8 items-center justify-center rounded-full sm:-left-[55px] ${accent.soft}`}
                >
                  <Icon
                    className={`h-4 w-4 ${accent.deep}`}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                <div className="rounded-3xl bg-paper p-6 shadow-sm ring-1 ring-line sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {job.role}
                      </h3>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-available-soft px-2.5 py-0.5 text-xs font-semibold text-available-deep">
                          <span className="h-1.5 w-1.5 rounded-full bg-available" />
                          Now
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className={`mt-0.5 text-sm font-medium ${accent.deep}`}>
                    {job.org} · {job.location}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2.5 text-sm leading-relaxed text-slate"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
