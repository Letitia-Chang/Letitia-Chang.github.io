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
    note: 'Research assistant analyzing cross-strait translation style — comparing Traditional Chinese (Taiwan) and Simplified Chinese (China) renderings of Spanish literary works. Early training in structured comparative analysis I still rely on to make technical work legible across audiences.',
  },
]
