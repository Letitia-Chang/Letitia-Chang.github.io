import headshot from '../assets/headshot.jpg'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
          <div className="flex flex-col justify-between rounded-3xl bg-panel p-8 md:col-span-2 md:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 text-xs font-medium text-accent-hover">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Open to Data Scientist / AI-ML Engineer / Data Analyst roles
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Ting-Ya Chang
              </h1>
              <p className="mt-3 font-display text-lg font-medium text-accent sm:text-xl">
                {site.role}
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate">
                {site.positioning}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                View projects
              </a>
              <a
                href={site.resumeHref}
                download
                className="rounded-full border border-line-strong bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl md:row-span-2">
            <img
              src={headshot}
              alt="Portrait of Ting-Ya Chang"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-4 pt-14">
              <p className="text-sm font-medium text-white">Atlanta, GA</p>
              <p className="text-xs text-white/75">M.S. Analytics · Georgia Tech</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-4">
            <div className="rounded-3xl bg-indigo-50 p-5">
              <p className="font-display text-3xl font-semibold text-indigo-800">3</p>
              <p className="mt-1 text-xs font-medium leading-snug text-indigo-700">
                live demos you can click right now
              </p>
            </div>
            <div className="rounded-3xl bg-teal-50 p-5">
              <p className="font-display text-3xl font-semibold text-teal-800">5 yrs</p>
              <p className="mt-1 text-xs font-medium leading-snug text-teal-700">
                across data, ML, product, and engineering
              </p>
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-panel p-5 transition-colors hover:bg-ink"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-ink transition-colors group-hover:text-white">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
              </svg>
              <p className="mt-2 text-xs font-medium text-slate transition-colors group-hover:text-white/85">
                github.com/Letitia-Chang
              </p>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-panel p-5 transition-colors hover:bg-[#0A66C2]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-ink transition-colors group-hover:text-white">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
              <p className="mt-2 text-xs font-medium text-slate transition-colors group-hover:text-white/85">
                in/tingya-chang
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
