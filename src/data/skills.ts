export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'R', 'PHP'],
  },
  {
    category: 'Machine Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'pandas',
      'NumPy',
      'scikit-learn',
      'XGBoost',
      'OpenCV',
      'YOLO',
      'Regression',
      'Classification',
      'Clustering',
      'NLP',
      'Recommender Systems',
    ],
  },
  {
    category: 'LLM & AI Engineering',
    items: [
      'RAG',
      'FAISS',
      'LangGraph',
      'Claude API',
      'Prompt Design',
      'Multi-step LLM Pipelines',
      'LLM Evaluation',
    ],
  },
  {
    category: 'Analytics & Visualization',
    items: ['matplotlib', 'seaborn', 'Tableau', 'Dashboards', 'EDA', 'Metric Design'],
  },
  {
    category: 'Web & Deployment',
    items: [
      'FastAPI',
      'React',
      'Vue',
      'Tailwind',
      'PostgreSQL',
      'Cloudflare Workers',
      'Docker',
      'AWS',
    ],
  },
  {
    category: 'Product & Tools',
    items: ['GitHub', 'Jupyter', 'Claude Code', 'UX Thinking', 'Product Requirements'],
  },
]
