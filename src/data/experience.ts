export type Experience = {
  role: string
  org: string
  location: string
  period: string
  type?: string
  current?: boolean
  summary?: string
  bullets: string[]
}

// Titles, dates, and bullets mirror LinkedIn and the resumes.
export const experience: Experience[] = [
  {
    role: 'AI Engineering Intern',
    org: 'ATDC',
    location: 'Atlanta, GA',
    period: 'May 2026 — Present',
    current: true,
    bullets: [
      'Built and deployed City Bot, a RAG assistant in the Buzz team chat that answers Georgia founders’ licensing and registration questions from 234 government documents, citing an official source at every step (local Qwen3-14B, pgvector). Scored 38/38 on a regression suite and ~89% top-3 on a labeled retrieval set.',
      'Cut City Bot’s answer time from 40–180s to 6–13s by replacing a runaway LLM-driven tool loop (~48 calls) with a fixed pipeline. Chose Qwen3-14B over Qwen3.6-27B: 6.4s vs 12.2s per answer and 10.6 vs 19 GB of GPU memory, with the same test results.',
      'Built a multi-agent research system (LangGraph, SearXNG; Orchestrator → Searcher → Analyzer) with quota-guarded execution and a deterministic verifier that traces every claim to source text; 98.3% of claims matched exactly (226/230).',
      'Built a journalist outreach platform with the lab’s outreach team (React, TypeScript, Express, PostgreSQL): profiles 300+ journalists, drafts Claude-generated pitches and routes replies with an LLM classifier. Opened 15+ journalist conversations, and open-sourced a generic version as Press Dossier.',
    ],
  },
  {
    role: 'Agentic AI Research Intern',
    org: 'Madabhushi Lab, Dept. of Radiology, Emory University School of Medicine',
    location: 'Atlanta, GA',
    period: 'Jul 2026 — Present',
    current: true,
    summary:
      'Building the multimodal layer for SAGE, the lab’s LLM agent that generates and evaluates biomedical hypotheses.',
    bullets: [
      'Built a multimodal data pipeline for 411 TCGA bladder cancer patients across 9 data types, including 457 whole-slide images. Caught a legacy tiling tool silently reading slides at ~2.5x instead of 20x and removed it.',
      'Developed contrastive alignment (symmetric InfoNCE) linking slides, multi-omics and clinical text, reaching retrieval up to 16x better than random chance. 30 of 31 missing-modality combinations kept ≥70% of the full signal without retraining.',
    ],
  },
  {
    role: 'Contract Consultant & Instructor',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2024 — Aug 2025',
    bullets: [
      'Taught Python and full-stack web development to 150+ students, averaging a 4.95/5 rating.',
      'Advised on business strategy, helped develop and publish 2 language-learning book series (TOEIC, Japanese for beginners), and launched 15+ skill courses such as Python, web development, Photoshop and video editing.',
    ],
  },
  {
    role: 'Data Scientist & Operations Lead',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2023 — Jan 2024',
    bullets: [
      'Developed churn models (logistic regression, XGBoost) for 3 lifecycle stages and K-means segmentation of ~7,500 students. Validated an onboarding intervention in a randomized holdout, lifting 7-day retention by 8 percentage points.',
      'Built an in-house A/B testing pipeline (PostgreSQL, AWS Lambda/EC2) with hash-based bucketing and SRM checks. Outreach-message tests cut late payments by 5% (relative) and raised class registration by 6%.',
      'Designed a personalized quiz recommender (matrix factorization / collaborative filtering) with a guessing-floor correction and cold-start handling, securing NT$1M (about $31K USD) in government funding.',
      'Built ETL pipelines (Python, SQL) and Tableau dashboards on behavioral event data, used to decide which courses to keep or launch and when to send outreach.',
      'Managed 15+ people across marketing, UI/UX, engineering, support and curriculum; set annual goals and pricing.',
    ],
  },
  {
    role: 'Software Engineer & Technical Product Manager',
    org: 'OurScool Education Inc.',
    location: 'Taichung, Taiwan',
    period: 'Jan 2022 — Jan 2023',
    bullets: [
      'Led discovery across 6 departments to scope an internal ERP, then architected, deployed and trained staff on it (React, PHP, MySQL, integrated CRM), automating order processing, sales tracking and inventory forecasting and cutting admin time 15%.',
      'Designed and deployed (AWS, Docker) a bank-API-integrated payment-tracking system that matches incoming payments to individual students, with a live status dashboard and staged automated reminders.',
      'Built event tracking for 10+ learner behaviors (logins, session time, post engagement, attendance, quizzes) on a platform used by 7,500+ college students, creating the data behind later churn, segmentation and dashboard work.',
      'Maintained and extended the learning platform (Vue.js, PHP, MySQL), shipping features from course registration and material downloads to instructor messaging, progress tracking and daily quizzes.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    org: 'Walnutek Inc.',
    location: 'Taipei, Taiwan',
    period: 'Jun 2021 — Dec 2021',
    bullets: [
      'Designed a two-phase computer vision pipeline (ResNet-101 two-stage detector → YOLO-style single-stage detector) for ultrasound breast cancer screening, reaching 88% sensitivity on binary screening and 82–85% on 3-tier BI-RADS video.',
      'Led product demos of learning tools, including a speech-practice platform, MentorAI, and a vocabulary quiz system, to 20+ Taiwanese universities, managing client relationships and securing 5-year contracts with over half.',
      'Delivered custom AI solutions for enterprise clients end to end, from scoping through build, testing, onboarding and training: owned an insurer’s policy-cancellation and sales-performance models, delivered a scheduling/dispatch tool for a landscaping company, and contributed to a manufacturing anomaly-detection tool.',
      'Built a speech-practice platform (Azure Speech, MediaPipe) used by instructors and 300+ students per semester.',
    ],
  },
]
