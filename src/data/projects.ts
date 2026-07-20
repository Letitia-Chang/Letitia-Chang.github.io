export type ProjectDetail = {
  problem: string
  approach: string
  impact: string
}

export type Accent = 'periwinkle' | 'teal' | 'peach' | 'sage' | 'mint'

export type Project = {
  slug: string
  title: string
  subtitle: string
  pitch: string
  tags: string[]
  detail?: ProjectDetail
  demo?: string
  github?: string
  tier: 'spotlight' | 'grid'
  accent: Accent
  inProgress?: boolean
}

export const projects: Project[] = [
  {
    slug: 'omni-retail-ai',
    title: 'OmniRetail AI',
    subtitle: 'Flagship • Deployed AI system',
    pitch:
      'An end-to-end AI campaign copilot utilizing customer segmentation, predictive intent modeling, and brand-grounded ad generation.',
    tags: ['ROC-AUC 0.93', 'RAG', 'FastAPI', 'React', 'FAISS', 'Claude API'],
    detail: {
      problem:
        'Retail teams manage thousands of products across many segments, but campaign planning rarely scales — promotions are not tied to purchase likelihood or inventory.',
      approach:
        'Evaluated K-Means customer segmentation and optimized per-pair XGBoost classification models to predict purchase intent, integrating a vector-search RAG pipeline to generate brand-safe ad copy.',
      impact:
        'Achieved an ROC-AUC score of 0.93 on held-out validation data; deployed production-ready microservices using FastAPI, Cloudflare Workers, and Railway to ensure scalable, low-latency model inference.',
    },
    demo: 'https://tanstack-start-app.letitiachang0807-bb0.workers.dev/overview',
    github: 'https://github.com/Letitia-Chang/omni-retail-ai',
    tier: 'spotlight',
    accent: 'periwinkle',
  },
  {
    slug: 'cerm',
    title: 'CERM — Evacuation Resource Matcher',
    subtitle: 'WiDS Datathon university competition',
    pitch:
      'A weighted matching engine optimizing wildfire-evacuation logistical support for vulnerable, carless, and elderly populations.',
    tags: ['Python', 'Geospatial', 'Leaflet', 'LLM Tagging', 'ACS Data'],
    detail: {
      problem:
        'Wildfire tools predict and monitor fire boundaries but fail to coordinate targeted assistance for elderly, disabled, and carless residents during active evacuations.',
      approach:
        'Engineered a weighted matching engine utilizing ACS socio-demographic vulnerability indices, real-time request signals, and geospatial proximity calculations.',
      impact:
        'Developed an interactive Leaflet mapping prototype validated against historical CAL FIRE perimeter data, successfully routing critical resource allocation.',
    },
    demo: 'https://letitia-chang.github.io/cerm-wildfire-evacuation-tool/',
    github: 'https://github.com/Letitia-Chang/cerm-wildfire-evacuation-tool',
    tier: 'spotlight',
    accent: 'teal',
  },
  {
    slug: 'substrate',
    title: 'Substrate — Grid-Relief Console',
    subtitle: 'Cox Hackathon • Decarbonization',
    pitch:
      'Scoring and ranking model analyzing commercial building energy capacities to maximize decarbonization impact per retrofit dollar invested.',
    tags: ['Analytics', 'Ranking Model', 'Decision Support'],
    demo: 'https://substrate.madewithremy.com/',
    tier: 'grid',
    accent: 'peach',
  },
  {
    slug: 'telco-churn',
    title: 'Customer Churn Prediction',
    subtitle: 'Predictive analytics pipeline',
    pitch:
      'End-to-end churn prediction pipeline using hyperparameter tuning on optimized XGBoost ensembles for over 7,000 customers.',
    tags: ['scikit-learn', 'XGBoost', 'Feature Engineering'],
    github: 'https://github.com/Letitia-Chang/customer-churn-prediction',
    tier: 'grid',
    accent: 'sage',
  },
  {
    slug: 'bird-migration',
    title: 'Bird Migration × Light Pollution',
    subtitle: 'Data & visual analytics',
    pitch:
      'Interactive network analysis modeling migratory stopovers against artificial light pollution using eBird density data.',
    tags: ['FastAPI', 'PostgreSQL', 'Network Analysis'],
    demo: 'https://bird-migration-git-main-ting-ya.vercel.app/',
    github: 'https://github.com/Letitia-Chang/bird_migration',
    tier: 'grid',
    accent: 'mint',
  },
  {
    slug: 'content-generation-agent',
    title: 'Content Generation Agent',
    subtitle: 'Multi-step LLM pipeline',
    pitch:
      'Staged LLM pipeline taking raw intake to publish-ready, brand-voiced articles with a human review gate — the deployable twin of a production system at North Star AI Labs.',
    tags: ['Claude API', 'Agents', 'Supabase', 'TypeScript'],
    tier: 'grid',
    accent: 'peach',
    inProgress: true,
  },
]
