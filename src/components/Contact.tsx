import { site } from '../data/site'

const links = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <path
        d="M3 5h18v14H3V5Zm0 0 9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'in/tingya-chang',
    href: site.linkedin,
    icon: (
      <path
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'GitHub',
    value: 'Letitia-Chang',
    href: site.github,
    icon: (
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
        fill="currentColor"
      />
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-3xl bg-ink px-6 py-14 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
            Contact
          </p>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let's talk about how I can help your team
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Open to Data Scientist, AI/ML Engineer, and Data Analyst roles. The fastest way to
            reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {link.icon}
                </svg>
                {link.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
