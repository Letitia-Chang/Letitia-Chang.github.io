export type Education = {
  school: string
  degree: string
  location: string
  period: string
  coursework: string[]
  note?: string
}

export const education: Education[] = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. in Analytics (Computational Data Analytics track)',
    location: 'Atlanta, GA',
    period: 'Aug 2025 — Dec 2026',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Data and Visual Analytics',
      'High-Dimensional Data Analytics',
      'Operations Research (Optimization)',
      'Time Series Analysis',
    ],
  },
  {
    school: 'National Chengchi University',
    degree: 'B.A. in European Languages and Cultures',
    location: 'Taipei, Taiwan',
    period: 'Sep 2015 — Jun 2020',
    coursework: [],
    note: 'Foundation in cross-cultural communication and analytical writing — skills I now use to translate technical findings for non-technical stakeholders.',
  },
]
