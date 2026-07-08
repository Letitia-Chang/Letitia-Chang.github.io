import headshot from '../assets/headshot.jpg'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to Data Scientist / ML Engineer / Data Analyst roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Ting-Ya Chang
          </h1>
          <p className="mt-3 font-display text-xl font-medium text-accent sm:text-2xl">
            {site.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
            {site.positioning}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View projects
            </a>
            <a
              href={site.resumeHref}
              download
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Download resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
              </svg>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-accent-soft" />
          <div className="absolute -bottom-4 -left-4 h-10 w-10 rounded-full bg-ink/5" />
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-panel">
            <img
              src={headshot}
              alt="Portrait of Ting-Ya Chang"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -right-2 bottom-6 h-3 w-3 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
