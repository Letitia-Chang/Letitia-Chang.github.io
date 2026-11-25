import { Brain, Terminal, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  title: string;
  body: string;
  icon: LucideIcon;
  soft: string;
  deep: string;
};

const pillars: Pillar[] = [
  {
    title: "Agents & RAG, evaluated",
    body: "RAG assistants and multi-agent systems with the evaluation built in: regression suites, labeled retrieval sets, and verifiers that trace every claim to its source.",
    icon: Brain,
    soft: "bg-periwinkle-soft",
    deep: "text-periwinkle-deep",
  },
  {
    title: "Shipped, not just modeled",
    body: "From discovery to deployment: an ERP scoped across 6 departments, a payment-tracking system on AWS, and a RAG assistant running in a team chat.",
    icon: Terminal,
    soft: "bg-green-soft",
    deep: "text-green-deep",
  },
  {
    title: "Product design",
    body: "Customer discovery, demos, and staff training: scoping what people actually need before building, then making sure they can use it.",
    icon: Layers,
    soft: "bg-yellow-soft",
    deep: "text-yellow-deep",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Start with the simplest thing that works, and earn the complex
            version.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate">
            I came into engineering through a side door: a degree in European
            languages, code I taught myself, and a first job at a small AI
            startup in Taipei, building custom AI for enterprise clients and
            running product demos for universities. At an edtech startup serving
            7,500+ college students, I was a software engineer, then a product
            manager, then a data scientist. Now I'm finishing an M.S. in
            Analytics at Georgia Tech and building AI agents at ATDC. I want to work close to the people using what I build, and
            stay until it works.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`rounded-3xl p-6 sm:p-7 ${pillar.soft}`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-paper/70">
                  <Icon
                    className="h-5 w-5 text-ink"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={`mt-4 font-display text-lg font-semibold ${pillar.deep}`}
                >
                  {pillar.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${pillar.deep}`}>
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
