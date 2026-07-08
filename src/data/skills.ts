export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'PHP', 'C'],
  },
  {
    category: 'Data Science / ML',
    items: [
      'pandas',
      'NumPy',
      'scikit-learn',
      'XGBoost',
      'Regression',
      'Classification',
      'Clustering',
      'NLP',
      'Recommender Systems',
    ],
  },
  {
    category: 'Data Visualization / Analytics',
    items: ['matplotlib', 'seaborn', 'Dashboards', 'EDA'],
  },
  {
    category: 'Web / Product',
    items: ['React', 'Vue', 'Tailwind', 'APIs', 'UX Thinking', 'Product Requirements'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'Jupyter', 'VS Code', 'Claude Code', 'Deployment Tools'],
  },
]
