export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Agents & LLMs',
    items: [
      'LangGraph',
      'Claude SDK',
      'Tool Calling',
      'Multi-Agent Orchestration',
      'Prompt Design',
      'LLM Evaluation',
    ],
  },
  {
    category: 'Retrieval & Inference',
    items: ['RAG', 'pgvector', 'FAISS', 'Embeddings', 'Local LLMs (Qwen)', 'SearXNG'],
  },
  {
    category: 'Machine Learning',
    items: [
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'Contrastive Learning',
      'Computer Vision',
      'NLP',
      'Recommender Systems',
      'A/B Testing',
    ],
  },
  {
    category: 'Backend & Deployment',
    items: ['FastAPI', 'Express', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'CI/CD', 'Git'],
  },
  {
    category: 'Languages & Frontend',
    items: ['Python', 'TypeScript', 'SQL', 'JavaScript', 'PHP', 'React', 'Vue'],
  },
  {
    category: 'Customer & Delivery',
    items: [
      'Customer Discovery',
      'Stakeholder Management',
      'Technical Demos',
      'Staff Training',
      'Tableau',
      'UX Thinking',
      'Product Requirements',
    ],
  },
]
