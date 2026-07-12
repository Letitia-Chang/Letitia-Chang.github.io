export type ProjectDetail = {
  problem: string
  approach: string
  impact: string
}

export type Project = {
  slug: string
  title: string
  category: string
  tagline: string
  highlights: string[]
  detail: ProjectDetail
  tags: string[]
  demo?: string
  github?: string
  size: 'large' | 'small'
  accent: 'indigo' | 'teal' | 'coral' | 'amber' | 'slate' | 'rose'
  inProgress?: boolean
}

export const projects: Project[] = [
  {
    slug: 'omni-retail-ai',
    title: 'OmniRetail AI',
    category: 'Flagship · Applied ML product',
    tagline:
      'AI marketing copilot that turns raw retail data into ranked, inventory-aware campaigns with RAG-grounded ad copy.',
    highlights: ['ROC-AUC 0.93', 'RAG · FAISS · Claude', 'Deployed end to end'],
    detail: {
      problem:
        'Retail teams manage thousands of products across many segments, but campaign planning rarely scales — promotions are not tied to purchase likelihood or inventory.',
      approach:
        'KMeans segmentation, an XGBoost purchase-intent model per customer-product pair, inventory-aware ranking, and Claude ad copy grounded by FAISS retrieval over the catalog. FastAPI backend, React 19 frontend.',
      impact:
        'ROC-AUC 0.93 on held-out data, every metric reproducible from the repo, live on Cloudflare Workers + Railway.',
    },
    tags: ['Python', 'XGBoost', 'FastAPI', 'React', 'Claude API'],
    demo: 'https://tanstack-start-app.letitiachang0807-bb0.workers.dev/overview',
    github: 'https://github.com/Letitia-Chang/omni-retail-ai',
    size: 'large',
    accent: 'indigo',
  },
  {
    slug: 'cerm',
    title: 'CERM — Evacuation Resource Matcher',
    category: 'WiDS Datathon 2026',
    tagline:
      'Matches wildfire-evacuation helpers to the census tracts that need them most — validated with a 2018 Camp Fire backtest.',
    highlights: ['Camp Fire backtest', 'LLM-tagged requests'],
    detail: {
      problem:
        'Wildfire tools predict and monitor fires but do not coordinate help for elderly, disabled, and carless residents during evacuations.',
      approach:
        'Weighted matching engine over ACS vulnerability data, request signals, and proximity; LLM tagging with rule-based fallback; interactive Leaflet map; active fire zones excluded and redirected to 911.',
      impact:
        'Live prototype validated against official CAL FIRE Camp Fire perimeter data — decision support, not automated dispatch.',
    },
    tags: ['Python', 'Geospatial', 'Leaflet', 'LLM'],
    demo: 'https://letitia-chang.github.io/cerm-wildfire-evacuation-tool/',
    github: 'https://github.com/Letitia-Chang/cerm-wildfire-evacuation-tool',
    size: 'small',
    accent: 'teal',
  },
  {
    slug: 'substrate',
    title: 'Substrate — Grid-Relief Console',
    category: 'Cox Hackathon 2026 · Decarbonization',
    tagline:
      'Scores and ranks Atlanta commercial buildings by peak electrical capacity a retrofit frees per dollar invested.',
    highlights: ['Judged live demo', 'Metric design'],
    detail: {
      problem:
        'Retrofit investment for decarbonization is allocated by intuition — no way to compare thousands of buildings on grid impact per dollar.',
      approach:
        'A scoring model ranking buildings by capacity freed at peak hours per retrofit dollar, shaped into a judged product pitch within the hackathon window.',
      impact:
        'Completed, submitted, and demoed live to judges — an ambiguous brief turned into a defensible prioritization tool.',
    },
    tags: ['Analytics', 'Sustainability', 'Product'],
    demo: 'https://substrate.madewithremy.com/',
    size: 'small',
    accent: 'coral',
  },
  {
    slug: 'telco-churn',
    title: 'Customer Churn Prediction',
    category: 'End-to-end ML',
    tagline:
      'Churn pipeline on 7,000+ telco customers — EDA to tuned XGBoost with business-ready retention insights.',
    highlights: ['~80% accuracy', 'Interpretable drivers'],
    detail: {
      problem:
        'The business needs to know who will churn and which levers move the needle — not a black-box score.',
      approach:
        'Feature engineering from tenure, billing, and services; Logistic Regression vs Decision Tree vs XGBoost; RandomizedSearchCV tuning; feature-importance analysis.',
      impact:
        '~80% accuracy with clear precision/recall tradeoffs, translated into retention recommendations.',
    },
    tags: ['Python', 'scikit-learn', 'XGBoost', 'EDA'],
    github: 'https://github.com/Letitia-Chang/customer-churn-prediction',
    size: 'small',
    accent: 'slate',
  },
  {
    slug: 'bird-migration',
    title: 'Bird Migration × Light Pollution',
    category: 'Data & visual analytics',
    tagline:
      'Interactive stopover-network analysis of bird migration against artificial light at night, from eBird sightings across four species.',
    highlights: ['H3 hex grids', 'Network analysis'],
    detail: {
      problem:
        'Raw sighting records hide the structure of migration — how stopover routes connect regions and collide with light pollution.',
      approach:
        'Migration networks built from eBird density with an ALAN overlay, served from FastAPI + PostgreSQL with precomputed snapshots per species and year, rendered as an interactive map with tunable network parameters.',
      impact:
        'Core backend, network computation, and interactive frontend working; tuning network construction and visual design.',
    },
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    size: 'small',
    accent: 'amber',
    inProgress: true,
  },
  {
    slug: 'content-generation-agent',
    title: 'Content Generation Agent',
    category: 'Multi-step LLM pipeline',
    tagline:
      'Staged LLM pipeline taking raw intake to publish-ready, brand-voiced articles with a human review gate — the deployable twin of a production system at North Star AI Labs.',
    highlights: ['8-stage pipeline', 'Human-in-the-loop'],
    detail: {
      problem:
        'Ad-hoc LLM use produces inconsistent, off-brand content with no review workflow.',
      approach:
        'Intake → normalize → strategize → draft → brand-voice edit → human review → repurpose → export, each stage a separate testable Claude call with structured state in Supabase/Postgres.',
      impact:
        'Mirrors the production article-generation system shipped during my North Star AI Labs internship, rebuilt as a self-contained product.',
    },
    tags: ['Claude API', 'Agents', 'Supabase', 'TypeScript'],
    size: 'small',
    accent: 'rose',
    inProgress: true,
  },
]
