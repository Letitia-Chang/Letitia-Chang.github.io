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
    slug: 'press-dossier',
    title: 'Press Dossier',
    subtitle: 'Open-source PR research tool • Live demo',
    pitch:
      'It helps a company find the right journalists, explains why each one fits, and drafts a pitch that a person always reviews and sends. Built as a public demo anyone can try safely: each visitor gets a private copy of the data, AI calls are rate-limited, and the server has 190+ tests.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Claude API', 'Gmail API'],
    detail: {
      problem:
        'PR pitches fail because they go to the wrong person with the wrong angle. Startups without a marketing specialist struggle to get news of a launch or a funding round to the people who should hear it.',
      approach:
        'One company profile feeds every AI step. Claude scores each journalist on configurable dimensions with a one-line reason, keeping only citations from that journalist’s recorded articles, then drafts a pitch into Gmail as a draft only: the app has no code that sends.',
      impact:
        'Made a public AI demo safe for anyone to use: each visitor gets a private copy of the data, live AI calls are rate-limited in Postgres, and inputs are capped. Over 190 server tests. A rate limit that passed its tests failed behind Cloudflare in production, which taught me to test through the real proxies. Scores are explainable, not yet validated.',
    },
    demo: 'https://press-dossier.vercel.app',
    github: 'https://github.com/Letitia-Chang/journalist-dossiers',
    tier: 'spotlight',
    accent: 'periwinkle',
  },
  {
    slug: 'knowing-doing-gap',
    title: 'Tool-Use Knowing-Doing Gap Study',
    subtitle: 'LLM evaluation • Behavioral test + hidden-state probes',
    pitch:
      'I adapted a recent paper’s setup (Cheng et al., arXiv:2605.14038) to study when an LLM calls tools it doesn’t need, first from its behavior and then from its hidden states. Qwen2.5-7B-Instruct.',
    tags: ['Python', 'PyTorch', 'Hugging Face', 'scikit-learn', 'LLM Evaluation'],
    detail: {
      problem:
        'Does an LLM call tools when it needs them, and only then? If not, is the need visible inside the model?',
      approach:
        'A 30-question behavioral test, then linear probes on hidden states over 982 questions with nested cross-validation and word-only baselines.',
      impact:
        'Heavy over-use (28 of 30). Tool need is decodable on factual questions (AUROC 0.84 vs 0.66 from words). Across all questions the signal carries over to a different prompt (0.91 to 0.90), and that prompt mostly removed calls the probe scored as low-need. It also raised missed calls from 13 to 134. What I learned: my first labels had errors. I fixed them, with AI assistance, with rules and decisions set before rerunning, and the findings held. Limits: one model, one seed, AI-assisted label review, no causal test.',
    },
    github: 'https://github.com/Letitia-Chang/knowing-doing-gap',
    tier: 'spotlight',
    accent: 'teal',
  },
  {
    slug: 'wifop',
    title: 'WiFOP — Wildfire Outbreak Prediction',
    subtitle: 'Georgia Tech ML team project • Solo rework',
    pitch:
      'Predicts next-day wildfire ignition on a 5 km California grid, 2020–2023. After finding a label-leakage bug that had inflated our class results, I rebuilt the 5-person team’s 26M-row pipeline, fixing 7 leakage and labeling bugs with regression tests in CI. Then I tested my best model against a simple baseline, and the baseline won.',
    tags: ['XGBoost', 'CatBoost', 'Leakage Audit', 'Spatial Validation', 'SHAP', 'Python'],
    detail: {
      problem:
        'Our team’s original results looked strong, but a label-leakage bug had inflated them. How much real skill is there in predicting where a wildfire starts tomorrow?',
      approach:
        'Rebuilt the pipeline (NASA POWER weather, Landsat NDVI, NLCD land cover, WFIGS/IRWIN fire labels) after a systematic leakage audit, with regression tests in CI. Held out 2023 as the test year with spatial-block validation, trained 5 models, and evaluated them the way a fire agency would use them: top-k recall, lift, calibration, and SHAP.',
      impact:
        'Weighted XGBoost reached ROC-AUC 0.93 and PR-AUC 0.087 on held-out 2023 (0.16% base rate), catching 76% of fires in its top 10% of cells. A per-cell historical fire-rate baseline still won on PR-AUC (0.104): most of the skill is location, not weather. The lesson I keep: check a trivial baseline before trusting a model.',
    },
    github: 'https://github.com/Letitia-Chang/WiFOP',
    tier: 'spotlight',
    accent: 'peach',
  },
  {
    slug: 'omni-retail-ai',
    title: 'OmniRetail AI',
    subtitle: 'GenAI + ML system • Live demo',
    pitch:
      'A retail marketing copilot on the H&M dataset that segments 300K+ customers, scores purchase intent, ranks promotions against inventory, and drafts catalog-grounded ad copy with Claude.',
    tags: ['ROC-AUC 0.93', 'RAG', 'XGBoost', 'FAISS', 'Claude API', 'FastAPI'],
    detail: {
      problem:
        'Retail teams manage thousands of products across many segments, but campaign planning rarely scales — promotions are not tied to purchase likelihood or inventory.',
      approach:
        'Enriched the catalog with rule-based attributes, segmented customers with K-Means into 5 segments, and trained an XGBoost classifier to predict purchase intent per customer-product pair. Campaigns are ranked by purchase probability, inventory, and segment fit, and ad copy is generated by Claude, grounded in the catalog through a FAISS RAG index.',
      impact:
        'ROC-AUC 0.93 on a held-out test set, measured against sampled non-purchases. Purchase-intent training pairs and inventory levels are synthetic, not real clickstream or inventory data, so the score validates the pipeline rather than live performance. Live demo deployed on Cloudflare Workers.',
    },
    demo: 'https://tanstack-start-app.letitiachang0807-bb0.workers.dev/overview',
    github: 'https://github.com/Letitia-Chang/omni-retail-ai',
    tier: 'spotlight',
    accent: 'periwinkle',
  },
  {
    slug: 'buzz-teammate-access',
    title: 'Buzz Teammate Access',
    subtitle: 'Buzz plugin • Shared AI agents',
    pitch:
      'Buzz agents normally answer only their owner. This plugin lets approved teammates @mention shared agents in chosen channels, with per-person and per-agent rate limits and standing refusals for secrets, deletions, and code pushes.',
    tags: ['JavaScript', 'AI Agents', 'Access Control'],
    github: 'https://github.com/Letitia-Chang/buzz-agent-access',
    tier: 'grid',
    accent: 'sage',
  },
  {
    slug: 'cerm',
    title: 'CERM — Evacuation Resource Matcher',
    subtitle: 'WiDS Datathon 2026 • 5-person Georgia Tech team',
    pitch:
      'Helps volunteers find the census tracts that most need evacuation help during a wildfire, ranking tracts by vulnerability, open requests, request match and proximity, and backtested against the 2018 Camp Fire perimeter.',
    tags: ['Python', 'Geospatial', 'Leaflet', 'ACS Data'],
    demo: 'https://letitia-chang.github.io/cerm-wildfire-evacuation-tool/',
    github: 'https://github.com/Letitia-Chang/cerm-wildfire-evacuation-tool',
    tier: 'grid',
    accent: 'peach',
  },
  {
    slug: 'bird-migration',
    title: 'Bird Migration × Light Pollution',
    subtitle: 'Data & visual analytics',
    pitch:
      'Models bird migration as a network from eBird observations and NASA nightlight data, then stress-tests whether removing light-polluted stopovers fragments it more than removing random ones. They seem to, but the effect disappears against random sites with the same bird activity: bright sites are simply busy ones.',
    tags: ['FastAPI', 'PostgreSQL', 'Network Analysis'],
    demo: 'https://bird-migration-tau.vercel.app/',
    github: 'https://github.com/Letitia-Chang/bird_migration',
    tier: 'grid',
    accent: 'mint',
  },
]
